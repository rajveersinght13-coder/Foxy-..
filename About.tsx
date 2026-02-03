
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    { name: 'Connection', icon: '🌐' },
    { name: 'Creativity', icon: '🎨' },
    { name: 'Innovation', icon: '🚀' },
    { name: 'Trust', icon: '🤝' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-dark/50 overflow-hidden relative">
      {/* Dynamic Background Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF7A20] rounded-full filter blur-[120px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass border border-white/10 group shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="https://i.ibb.co/zHFBjHzm/20260124-173128.png" 
                alt="Foxy Network Graphic" 
                className="w-full h-auto opacity-95 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
            </div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -right-16 w-80 h-80 border border-brand-orange/10 rounded-full hidden md:block pointer-events-none"
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <motion.span variants={itemVariants} className="text-[#FF7A20] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              About Us
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 leading-[1.1]">
              A Next-Generation <br />
              <span className="text-gradient">Digital Network</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              FOXY NETWORK is a next-generation digital network built for creators, communities, and brands who want to grow smarter and faster. We focus on connection, creativity, and innovation—bringing people together through powerful tools and seamless experiences.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants} className="p-6 glass rounded-2xl border-white/5 hover:border-brand-orange/20 transition-all">
                <h4 className="text-white font-black mb-3 flex items-center uppercase tracking-wider text-sm">
                  <span className="w-1.5 h-1.5 bg-[#FF7A20] rounded-full mr-3 shadow-[0_0_8px_#FF7A20]"></span>
                  Our Mission
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">To create a strong, reliable network where ideas turn into impact, focusing on speed, trust, and growth.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-6 glass rounded-2xl border-white/5 hover:border-brand-gold/20 transition-all">
                <h4 className="text-white font-black mb-3 flex items-center uppercase tracking-wider text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 shadow-[0_0_8px_#fbbf24]"></span>
                  Our Philosophy
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">At FOXY NETWORK, we help our community stay ahead in the digital world through excellence and vision.</p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-white font-display font-bold text-xl italic leading-relaxed border-l-4 border-[#FF7A20] pl-6 py-2">
                "Join FOXY NETWORK and be part of a future where connections create opportunities."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {values.map((v) => (
                <motion.div 
                  key={v.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-3 px-5 py-3 glass rounded-xl border border-white/5 hover:border-brand-orange/40 transition-all cursor-default"
                >
                  <span className="text-xl">{v.icon}</span>
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{v.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
