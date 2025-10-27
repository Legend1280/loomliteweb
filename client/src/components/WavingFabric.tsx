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
      const nodeCount = 18; // More nodes for longer streams
      const spacing = length / nodeCount;

      for (let i = 0; i < nodeCount; i++) {
        const x = startX + Math.cos(angle) * spacing * i + (Math.random() - 0.5) * 40;
        const y = startY + Math.sin(angle) * spacing * i + (Math.random() - 0.5) * 40;
        
        nodes.push({
          x,
          y,
          size: Math.random() * 3 + 2.5,
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
      
      // Only 2 streams positioned in negative space
      
      // Stream 1: Bottom-right area, 30% down from top, flowing diagonally off-screen
      // Positioned in the negative space on the right side
      streams.push(createDiagonalStream(
        w * 0.65,           // Start 65% from left (right side)
        h * 0.3,            // 30% down from top
        900,                // Longer stream
        Math.PI * 0.35      // Diagonal angle flowing down-right
      ));
      
      // Stream 2: Left-middle area, flowing diagonally across negative space
      // Positioned to flow through left side negative space
      streams.push(createDiagonalStream(
        w * 0.05,           // Start near left edge
        h * 0.55,           // Middle-lower area
        800,                // Long stream
        Math.PI * 0.15      // Gentle diagonal flowing right
      ));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.012;

      streams.forEach((stream) => {
        // Update node positions with subtle wave
        stream.forEach((node, i) => {
          const wave = Math.sin(i * 0.35 + time) * 18;
          node.x = node.baseX + wave;
          node.y = node.baseY + Math.cos(i * 0.25 + time) * 12;
        });

        // Draw connections between adjacent nodes
        for (let i = 0; i < stream.length - 1; i++) {
          const node = stream[i];
          const nextNode = stream[i + 1];

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nextNode.x, nextNode.y);
          ctx.strokeStyle = `rgba(252, 211, 77, 0.35)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Connect to nearby nodes for triangulation
          for (let j = i + 2; j < Math.min(i + 4, stream.length); j++) {
            const nearNode = stream[j];
            const dx = nearNode.x - node.x;
            const dy = nearNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 140) {
              const opacity = (1 - distance / 140) * 0.2;
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
          ctx.fillStyle = `rgba(252, 211, 77, 0.8)`;
          ctx.fill();

          // Larger nodes get rings
          if (node.size > 4) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(252, 211, 77, 0.35)`;
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
      className="fixed inset-0 pointer-events-none opacity-35"
      style={{ zIndex: 0 }}
    />
  );
}

