
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  const INSTAGRAM_URL = "https://www.instagram.com/foxy_networks?igsh=NjRjYzJsMHV1ZXE=";

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Large Central Wireframe Globe with Rotation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ 
          opacity: 0.25, 
          scale: 1,
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          opacity: { duration: 2.5 },
          scale: { duration: 2.5 },
          rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ y: useTransform(scrollY, [0, 1000], [0, 200]) }}
        className="absolute top-[-10%] md:top-[-5%] w-[120%] md:w-[90%] lg:w-[70%] max-w-none left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
      >
        <img 
          src="https://i.ibb.co/mVC7YLCn/image.png" 
          alt="Network Globe" 
          className="w-full h-auto filter invert opacity-100"
        />
      </motion.div>

      {/* Accent Rings */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* BIG TITLE AT TOP: FOXY NETWORK */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 md:mb-4 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter leading-none text-white uppercase select-none">
            FOXY <span className="text-[#FF7A20] drop-shadow-[0_0_40px_rgba(255,122,32,0.6)]">NETWORK</span>
          </h1>
        </motion.div>

        {/* Main Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ opacity: opacityFade }}
          className="w-full max-w-5xl border border-white/5 px-6 py-8 md:py-12 flex flex-col items-center text-center relative rounded-3xl bg-black/10 backdrop-blur-[2px]"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center px-5 py-2 rounded-full bg-black/80 border border-white/10 mb-8 md:mb-10"
          >
            <span className="w-2 h-2 bg-[#FF7A20] rounded-full mr-3 shadow-[0_0_8px_#FF7A20]"></span>
            <span className="text-[10px] md:text-xs font-bold text-[#FF7A20] uppercase tracking-[0.25em]">
              Elevating Creators & Brands
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.div 
            style={{ y: yParallax }}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] text-white tracking-tight flex flex-col items-center">
              <span className="flex items-center flex-wrap justify-center gap-x-4">
                Turning 
                <span className="bg-[#FF7A20] text-white px-4 md:px-6 py-1 transform -rotate-1 shadow-lg shadow-[#FF7A20]/20">
                  Ideas
                </span>
              </span>
              <span className="flex items-center flex-wrap justify-center gap-x-4">
                Into 
                <span className="italic font-light text-gradient brightness-125">
                  Impact
                </span>
              </span>
            </h2>
          </motion.div>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="max-w-2xl text-sm md:text-base lg:text-lg text-gray-300 mb-10 md:mb-12 leading-relaxed font-normal"
          >
            Bridging creators and brands worldwide with data-driven strategies, 
            innovation, and digital excellence.
          </motion.p>
          
          {/* Interaction area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated Arrow */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-[#FF7A20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>

            {/* CTA Button */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 md:py-5 bg-[#FF7A20] text-black font-black uppercase tracking-[0.15em] rounded-full transition-all duration-300 text-sm md:text-base flex items-center gap-3 shadow-[0_0_30px_rgba(255,122,32,0.3)]"
            >
              <span>Work with Us</span>
              <span className="text-xl leading-none"> - </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
