
import React from 'react';

const Footer: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/foxy_networks?igsh=NjRjYzJsMHV1ZXE=";
  const LOGO_URL = "https://i.ibb.co/7dJFTwJ3/FOXY-Artboard-1.png";

  return (
    <footer className="py-12 border-t border-white/5 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={LOGO_URL} alt="Foxy" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
            <span className="text-xl font-display font-bold uppercase tracking-tight">
              Foxy <span className="text-brand-orange">Network</span>
            </span>
          </div>

          <div className="text-gray-500 text-sm font-medium">
            &copy; 2026 Foxy Network. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
