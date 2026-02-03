
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const INSTAGRAM_URL = "https://www.instagram.com/foxy_networks?igsh=NjRjYzJsMHV1ZXE=";
  const LOGO_URL = "https://i.ibb.co/7dJFTwJ3/FOXY-Artboard-1.png";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'py-3 glass border-white/5 bg-black/80' : 'py-5 bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group relative z-50">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
              <img 
                src={LOGO_URL} 
                alt="Foxy Network" 
                className="w-full h-full object-contain filter brightness-0 invert" 
              />
            </div>
            <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white uppercase">
              Foxy <span className="text-[#FF7A20]">Network</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex items-center space-x-6 relative z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FF7A20] transition-colors focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-8 h-8 flex items-center justify-center relative">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                  className="absolute w-8 h-[2px] bg-white rounded-full block"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-8 h-[2px] bg-white rounded-full block"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                  className="absolute w-8 h-[2px] bg-white rounded-full block"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Matching Screenshot Design */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            {/* Logo in top left of menu */}
            <div className="absolute top-6 left-6 flex items-center space-x-3">
               <img src={LOGO_URL} alt="Logo" className="w-8 h-8 filter brightness-0 invert" />
               <span className="text-lg font-display font-black tracking-tighter text-white uppercase">
                Foxy <span className="text-[#FF7A20]">Network</span>
               </span>
            </div>

            {/* Close button in top right */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#FF7A20] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col space-y-6 text-center w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white hover:text-[#FF7A20] transition-all duration-300 block py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-12 flex justify-center"
              >
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#FF7A20] transition-all p-4 glass rounded-full border-white/10"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                   </svg>
                </a>
              </motion.div>
            </div>
            
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FF7A20]/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
