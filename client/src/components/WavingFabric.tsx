export default function WavingFabric() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 0 }}
    >
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(252, 211, 77, 0.4) 2px, transparent 2px),
            linear-gradient(90deg, rgba(252, 211, 77, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridFlow 20s linear infinite',
        }}
      />
      
      {/* Animated dots at intersections */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(252, 211, 77, 1) 4px, transparent 4px)`,
          backgroundSize: '80px 80px',
          animation: 'dotPulse 3s ease-in-out infinite, gridFlow 20s linear infinite',
        }}
      />

      {/* Flowing yellow waves */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 700px 500px at 20% 50%, rgba(252, 211, 77, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 600px 600px at 80% 30%, rgba(252, 211, 77, 0.25) 0%, transparent 50%)
          `,
          animation: 'waveFlow 15s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes gridFlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(80px, 80px);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes waveFlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-10%, 5%) scale(1.1);
          }
          66% {
            transform: translate(10%, -5%) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}

