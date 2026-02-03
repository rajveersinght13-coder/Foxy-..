
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/foxy_networks?igsh=NjRjYzJsMHV1ZXE=";
  const PHONE_NUMBER = "+91 681444441";
  const PHONE_URL = "tel:+91681444441";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark overflow-hidden relative border-t border-white/5">
      {/* Abstract bg element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl -mr-64 -mt-64"
      />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-12">
            Let's Create <br /> <span className="text-gradient">Something Iconic</span>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        >
          {/* Phone Card */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-white/10 hover:border-brand-orange/30 transition-all group">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 mx-auto group-hover:bg-brand-orange group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-white font-bold text-xl mb-2 italic">Call us</h4>
            <a href={PHONE_URL} className="text-gray-400 hover:text-brand-orange transition-colors text-lg font-display font-black tracking-tight">
              {PHONE_NUMBER}
            </a>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Available for direct inquiries</p>
          </motion.div>

          {/* Email Card */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-white/10 hover:border-brand-orange/30 transition-all group">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 mx-auto group-hover:bg-brand-orange group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Email Us</h4>
            <a href="mailto:works@foxynetwork.support" className="text-gray-400 hover:text-brand-orange transition-colors text-lg break-all font-medium">
              works@foxynetwork.support
            </a>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Typical response within 24h</p>
          </motion.div>

          {/* Instagram Card */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-white/10 hover:border-brand-orange/30 transition-all group md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 mx-auto group-hover:bg-brand-orange group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Social Hub</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors text-lg font-medium">
              @foxy_networks
            </a>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">DM us for collaborations</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
