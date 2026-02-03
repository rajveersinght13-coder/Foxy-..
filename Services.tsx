
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'smm-management',
      title: 'SMM Excellence',
      description: 'Complete management of Instagram, Facebook, and YouTube. We optimize your presence for maximum growth and high-level community engagement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF7A20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'mass-outreach',
      title: 'Mass Reach Solutions',
      description: 'Advanced bulk messaging and automated call systems. We enable promotional SMS and call campaigns that reach your audience effectively.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.297A1.705 1.705 0 019.333 21H3.667A1.705 1.705 0 012 19.297V5.882c0-1.04.836-1.882 1.667-1.882H9.333c.831 0 1.667.842 1.667 1.882zM15 5h5a2 2 0 012 2v10a2 2 0 01-2 2h-5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9l3 3m0 0l-3 3m3-3H9" />
        </svg>
      )
    },
    {
      id: 'creator-mgmt',
      title: 'Creator Management',
      description: 'Helping influencers grow, monetize, and expand their digital presence through personalized strategies and sponsorships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'economy',
      title: 'Economy & Branding',
      description: 'Crafting unique brand identities and economic strategies to ensure long-term market success and financial stability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF7A20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'strategy',
      title: 'Content Strategy',
      description: 'Creating viral-ready content plans, platform optimization, and audience retention systems built for scale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'campaign',
      title: 'Campaign Analytics',
      description: 'Managing end-to-end influencer and brand campaigns with advanced analytics and performance reporting.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 12,
        duration: 0.8
      } 
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-black">
      {/* Moving Background Glow */}
      <motion.div 
        animate={{ 
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-[#FF7A20] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">Strategic Solutions</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="h-1.5 bg-[#FF7A20] mx-auto rounded-full shadow-[0_0_15px_#FF7A20]"
          />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              whileHover={{ 
                y: -15, 
                rotateX: 2, 
                rotateY: 2,
                borderColor: "rgba(255, 122, 32, 0.4)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              style={{ perspective: 1500 }}
              className="group glass p-8 lg:p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 cursor-pointer flex flex-col h-full bg-brand-black/60 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A20]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:bg-[#FF7A20]/10 group-hover:scale-110 transition-all duration-500 relative z-10 border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black mb-5 group-hover:text-[#FF7A20] transition-colors relative z-10 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow relative z-10 font-medium">
                {service.description}
              </p>
              
              <div className="mt-8 relative z-10 flex items-center text-[#FF7A20] font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Contact for Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
