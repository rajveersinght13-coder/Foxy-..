
import React, { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BackgroundDecor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movements for all interactive elements
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  // 3D Tilt transforms for the grid
  const rotateX = useTransform(smoothY, [0, 1080], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1920], [-8, 8]);

  // Pre-generate stable random data to prevent flickering on re-renders
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      x: `${(i % 5) * 20 + Math.random() * 10}%`,
      y: `${Math.floor(i / 5) * 25 + Math.random() * 10}%`,
      size: Math.random() * 2 + 1,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2,
      isAccent: i % 4 === 0
    }));
  }, []);

  const streams = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      duration: 12 + Math.random() * 10,
      delay: i * 2.5
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* 1. Ambient Follower Glow - Opacity reduced for performance */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform'
        }}
        className="absolute w-[800px] h-[800px] bg-[#FF7A20]/5 rounded-full blur-[100px] mix-blend-screen opacity-50"
      />

      {/* 2. 3D Interactive Grid - Use will-change for GPU acceleration */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            willChange: 'transform'
          }}
          className="w-[120%] h-[120%] absolute origin-center opacity-40"
        />
      </div>

      {/* 3. Floating Digital Data Streams */}
      <div className="absolute inset-0 opacity-10">
        {streams.map((s, i) => (
          <motion.div
            key={`stream-${i}`}
            initial={{ x: '-20%', y: s.top }}
            animate={{ x: '120%' }}
            transition={{ 
              duration: s.duration, 
              repeat: Infinity, 
              delay: s.delay,
              ease: "linear"
            }}
            className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-[#FF7A20] to-transparent"
          />
        ))}
      </div>

      {/* 4. Animated Constellation Nodes - No complex filters */}
      <div className="absolute inset-0 opacity-30">
        {nodes.map((n, i) => (
          <motion.div
            key={`node-${i}`}
            style={{ left: n.x, top: n.y }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: n.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: n.delay
            }}
            className={`absolute rounded-full ${n.isAccent ? 'bg-[#FF7A20] w-[3px] h-[3px] shadow-[0_0_8px_#FF7A20]' : 'bg-white w-[2px] h-[2px]'}`}
          />
        ))}
      </div>

      {/* 5. Pulsing Atmospheric Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform' }}
        className="absolute -top-1/4 -right-1/4 w-[70%] h-[70%] bg-[#FF7A20]/5 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform' }}
        className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-white/5 rounded-full blur-[120px]"
      />

      {/* 6. Static Vignette - Less expensive than radial-gradient dynamic update */}
      <div className="absolute inset-0 pointer-events-none bg-brand-black opacity-30" 
           style={{ background: 'radial-gradient(circle at center, transparent 30%, #050505 100%)' }} />
    </div>
  );
};

export default React.memo(BackgroundDecor);
