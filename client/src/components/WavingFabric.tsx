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
      canvas.height = document.documentElement.scrollHeight;
      initStreams();
    };

    let streams: Node[][] = [];

    const createDiagonalStream = (startX: number, startY: number, length: number, angle: number) => {
      const nodes: Node[] = [];
      const nodeCount = 15;
      const spacing = length / nodeCount;

      for (let i = 0; i < nodeCount; i++) {
        const progress = i / nodeCount;
        const x = startX + Math.cos(angle) * spacing * i + (Math.random() - 0.5) * 40;
        const y = startY + Math.sin(angle) * spacing * i + (Math.random() - 0.5) * 40;
        
        nodes.push({
          x,
          y,
          size: Math.random() * 3 + 2,
          baseX: x,
          baseY: y,
        });
      }
      return nodes;
    };

    const initStreams = () => {
      streams = [];
      const height = canvas.height;
      
      // Create 3 diagonal streams at different positions
      // Stream 1: Top right to middle left
      streams.push(createDiagonalStream(canvas.width * 0.8, height * 0.15, 800, Math.PI * 0.75));
      
      // Stream 2: Middle left to bottom right
      streams.push(createDiagonalStream(canvas.width * 0.1, height * 0.4, 900, Math.PI * 0.25));
      
      // Stream 3: Top left to middle right
      streams.push(createDiagonalStream(canvas.width * 0.2, height * 0.65, 700, Math.PI * 0.15));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      streams.forEach((stream) => {
        // Update node positions with wave
        stream.forEach((node, i) => {
          const wave = Math.sin(i * 0.3 + time) * 15;
          node.x = node.baseX + wave;
          node.y = node.baseY + Math.cos(i * 0.2 + time) * 10;
        });

        // Draw connections
        for (let i = 0; i < stream.length - 1; i++) {
          const node = stream[i];
          const nextNode = stream[i + 1];

          // Connect to next node in stream
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          ctx.strokeStyle = `rgba(252, 211, 77, 0.3)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Connect to nearby nodes in same stream
          for (let j = i + 2; j < Math.min(i + 4, stream.length); j++) {
            const nearNode = stream[j];
            const dx = nearNode.x - node.x;
            const dy = nearNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.2;
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
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 211, 77, 0.7)`;
          ctx.fill();

          // Larger nodes get rings
          if (node.size > 4) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(252, 211, 77, 0.3)`;
            ctx.lineWidth = 1.5;
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
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}

