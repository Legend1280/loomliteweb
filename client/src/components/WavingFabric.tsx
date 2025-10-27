import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
}

export default function WavingFabric() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStreams();
    };

    let streams: Node[][] = [];

    const createDiagonalStream = (startX: number, startY: number, length: number, angle: number) => {
      const nodes: Node[] = [];
      const nodeCount = 12;
      const spacing = length / nodeCount;

      for (let i = 0; i < nodeCount; i++) {
        const x = startX + Math.cos(angle) * spacing * i + (Math.random() - 0.5) * 50;
        const y = startY + Math.sin(angle) * spacing * i + (Math.random() - 0.5) * 50;
        
        nodes.push({
          x,
          y,
          size: Math.random() * 4 + 3,
          baseX: x,
          baseY: y,
        });
      }
      return nodes;
    };

    const initStreams = () => {
      streams = [];
      const w = canvas.width;
      const h = canvas.height;
      
      // Create 3 visible diagonal streams
      // Stream 1: Upper right to lower left
      streams.push(createDiagonalStream(w * 0.7, h * 0.2, 600, Math.PI * 0.75));
      
      // Stream 2: Left to right middle
      streams.push(createDiagonalStream(w * 0.15, h * 0.5, 700, Math.PI * 0.2));
      
      // Stream 3: Upper left to lower right
      streams.push(createDiagonalStream(w * 0.3, h * 0.3, 500, Math.PI * 0.4));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      streams.forEach((stream) => {
        // Update node positions with wave
        stream.forEach((node, i) => {
          const wave = Math.sin(i * 0.4 + time) * 20;
          node.x = node.baseX + wave;
          node.y = node.baseY + Math.cos(i * 0.3 + time) * 15;
        });

        // Draw connections between adjacent nodes
        for (let i = 0; i < stream.length - 1; i++) {
          const node = stream[i];
          const nextNode = stream[i + 1];

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          ctx.strokeStyle = `rgba(252, 211, 77, 0.4)`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Connect to nearby nodes for triangulation
          for (let j = i + 2; j < Math.min(i + 4, stream.length); j++) {
            const nearNode = stream[j];
            const dx = nearNode.x - node.x;
            const dy = nearNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (1 - distance / 150) * 0.25;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(nearNode.x, nearNode.y);
              ctx.strokeStyle = `rgba(252, 211, 77, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        stream.forEach((node) => {
          // Main node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 211, 77, 0.9)`;
          ctx.fill();

          // Larger nodes get rings
          if (node.size > 5) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size + 5, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(252, 211, 77, 0.4)`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
}

