export default function WavingFabric() {
  return (
    <>
      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Wave layer 1 - Large yellow blobs */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 20% 50%, rgba(252, 211, 77, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 700px 500px at 80% 20%, rgba(252, 211, 77, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 600px 700px at 40% 80%, rgba(252, 211, 77, 0.18) 0%, transparent 50%)
            `,
            animation: 'wave1 15s ease-in-out infinite',
          }}
        />
        
        {/* Wave layer 2 - Medium yellow blobs */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 500px at 60% 30%, rgba(252, 211, 77, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 500px 600px at 30% 70%, rgba(252, 211, 77, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 700px 400px at 70% 60%, rgba(252, 211, 77, 0.12) 0%, transparent 50%)
            `,
            animation: 'wave2 20s ease-in-out infinite',
          }}
        />
        
        {/* Wave layer 3 - Slower, large blobs */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 900px 700px at 50% 50%, rgba(252, 211, 77, 0.1) 0%, transparent 60%),
              radial-gradient(ellipse 500px 500px at 10% 40%, rgba(102, 102, 102, 0.08) 0%, transparent 50%)
            `,
            animation: 'wave3 25s ease-in-out infinite',
          }}
        />
        
        {/* Mesh grid overlay - more visible */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 211, 77, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 211, 77, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'meshMove 30s linear infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          33% {
            transform: translate(-20%, 15%) scale(1.3);
            opacity: 0.8;
          }
          66% {
            transform: translate(20%, -15%) scale(0.8);
            opacity: 0.6;
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(25%, -20%) scale(1.4) rotate(10deg);
            opacity: 0.7;
          }
        }

        @keyframes wave3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translate(15%, 15%) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translate(-15%, 20%) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(20%, -15%) scale(1.3);
            opacity: 0.9;
          }
        }

        @keyframes meshMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </>
  );
}

