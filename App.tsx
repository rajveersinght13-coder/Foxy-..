
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BulkOutreach from './components/BulkOutreach';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundDecor from './components/BackgroundDecor';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black text-white selection:bg-brand-orange selection:text-white relative">
      <BackgroundDecor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BulkOutreach />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
