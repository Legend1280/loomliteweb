export default function WavingFabric() {
  return (
    <>
      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Wave layer 1 */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(252, 211, 77, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(252, 211, 77, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(252, 211, 77, 0.25) 0%, transparent 50%)
            `,
            animation: 'wave1 15s ease-in-out infinite',
          }}
        />
        
        {/* Wave layer 2 */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(circle at 60% 30%, rgba(252, 211, 77, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(252, 211, 77, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(252, 211, 77, 0.2) 0%, transparent 50%)
            `,
            animation: 'wave2 20s ease-in-out infinite',
          }}
        />
        
        {/* Wave layer 3 - slower, more subtle */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(252, 211, 77, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 10% 40%, rgba(102, 102, 102, 0.3) 0%, transparent 50%)
            `,
            animation: 'wave3 25s ease-in-out infinite',
          }}
        />
        
        {/* Mesh grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(252, 211, 77, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(252, 211, 77, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'meshMove 30s linear infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(-10%, 10%) scale(1.1);
            opacity: 0.3;
          }
          66% {
            transform: translate(10%, -10%) scale(0.9);
            opacity: 0.15;
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translate(15%, -15%) scale(1.2) rotate(5deg);
            opacity: 0.25;
          }
        }

        @keyframes wave3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translate(5%, 5%) scale(1.05);
            opacity: 0.2;
          }
          50% {
            transform: translate(-5%, 10%) scale(0.95);
            opacity: 0.05;
          }
          75% {
            transform: translate(10%, -5%) scale(1.1);
            opacity: 0.15;
          }
        }

        @keyframes meshMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </>
  );
}

