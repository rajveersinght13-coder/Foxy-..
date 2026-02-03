
import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const points = [
    {
      title: 'Innovation First',
      description: 'We use cutting-edge tools, AI-driven insights, and creative strategies to stay ahead of digital trends.',
      icon: '🚀',
      color: 'bg-[#FF7A20]'
    },
    {
      title: 'Strategic Growth',
      description: 'Our data-driven approach ensures consistent, scalable, and long-term growth for both creators and brands.',
      icon: '📈',
      color: 'bg-brand-gold'
    },
    {
      title: 'Proven Results',
      description: 'We focus on measurable outcomes, delivering high engagement, strong ROI, and real business impact.',
      icon: '🏆',
      color: 'bg-white'
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-gradient-to-b from-brand-black to-brand-dark overflow-hidden relative">
      {/* Decorative accent lines */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">The Advantage</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black mb-8 italic tracking-tighter">Why Foxy Network?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">We don't just manage; we accelerate. Our ecosystem is built on the pillars of visionary planning and data-backed execution.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {points.map((p, idx) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0], boxShadow: "0 0 40px rgba(255, 122, 32, 0.4)" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  y: { repeat: Infinity, duration: 4, delay: idx * 0.5, ease: "easeInOut" },
                  rotate: { duration: 0.5 }
                }}
                className={`w-24 h-24 ${p.color} text-black rounded-3xl mx-auto flex items-center justify-center text-4xl mb-10 transform transition-all duration-500 shadow-xl border border-white/10`}
              >
                {p.icon}
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-display font-black mb-5 uppercase tracking-tight">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Quote with special reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 p-16 lg:p-24 glass rounded-[4rem] text-center border-2 border-white/5 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
        >
          {/* Pulsing light effect */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF7A20] rounded-full blur-[120px] -z-10" 
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white italic mb-10 leading-[1.1] relative z-10 tracking-tighter"
          >
            "We aren't just an agency. We are the architects of your digital legacy."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, type: "spring" }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="w-12 h-1 bg-[#FF7A20] mb-6 rounded-full" />
            <span className="text-[#FF7A20] font-black uppercase tracking-[0.5em] text-xs">
              — Foxy Leadership Team
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
