
import React from 'react';
import { motion } from 'framer-motion';

const BulkOutreach: React.FC = () => {
  const benefits = [
    "Send promotional messages to many customers at once",
    "Alert customers about offers, updates, and events",
    "Use SMS campaigns to grow engagement and interaction",
    "Reach your audience fast and effectively"
  ];

  return (
    <section id="outreach" className="py-24 relative overflow-hidden bg-brand-black">
      {/* Decorative radial gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Visual Side */}
            <div className="lg:w-2/5 bg-gradient-to-br from-[#FF7A20] to-brand-gold p-12 flex flex-col justify-center items-center relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                className="relative z-10 text-black text-center"
              >
                <div className="text-8xl mb-6">📢</div>
                <h3 className="text-4xl font-display font-black leading-tight uppercase tracking-tighter">
                  Massive <br /> Impact
                </h3>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-8 md:p-16 bg-brand-dark/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6 flex items-center gap-4">
                   Bulk Messages <span className="text-[#FF7A20]">&</span> Call Service
                </h2>
                <p className="text-gray-400 text-lg mb-10 font-medium">
                  We provide premium bulk messaging and calling solutions designed to scale your business outreach instantly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7A20]/10 flex items-center justify-center text-[#FF7A20] group-hover:bg-[#FF7A20] group-hover:text-black transition-all duration-300">
                        ✔
                      </span>
                      <p className="text-gray-300 text-sm md:text-base font-semibold leading-snug group-hover:text-white transition-colors">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#FF7A20] font-black text-xs uppercase tracking-widest px-2 py-1 bg-[#FF7A20]/10 rounded">Important Note</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed">
                    "When using bulk messaging, it’s important to only send messages to people who want them so they don’t feel spammed. Quality outreach leads to quality conversions."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOutreach;
