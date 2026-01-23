import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PremiumCapabilities from './components/PremiumCapabilities';
import MarketReality from './components/MarketReality';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ServicePlans from './components/ServicePlans';
import Testimonials from './components/Testimonials';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-void min-h-screen text-chrome selection:bg-electric selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <PremiumCapabilities />
          <MarketReality />
          <About />
          <Portfolio />
          <ServicePlans />
          <Testimonials />
          <WhatsAppSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default App;
