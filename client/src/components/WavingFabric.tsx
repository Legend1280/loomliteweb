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
      const nodeCount = 18;
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
      
      // Stream 1: Bottom-right area, flowing diagonally
      streams.push(createDiagonalStream(
        w * 0.65,
        h * 0.3,
        900,
        Math.PI * 0.35
      ));
      
      // Stream 2: Left-middle area, flowing diagonally
      streams.push(createDiagonalStream(
        w * 0.05,
        h * 0.55,
        800,
        Math.PI * 0.15
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

        // Draw lattice connections - each node connects to multiple nearby nodes
        for (let i = 0; i < stream.length; i++) {
          const node = stream[i];

          // Connect to all nodes within connection radius (creates lattice/fabric effect)
          for (let j = 0; j < stream.length; j++) {
            if (i === j) continue;

            const otherNode = stream[j];
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connect nodes within 180px radius for dense lattice
            if (distance < 180) {
              const opacity = (1 - distance / 180) * 0.25;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(252, 211, 77, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw nodes on top of connections
        stream.forEach((node) => {
          // Main node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 211, 77, 0.85)`;
          ctx.fill();

          // Larger nodes get rings
          if (node.size > 4) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(252, 211, 77, 0.4)`;
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

