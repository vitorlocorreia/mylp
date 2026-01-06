
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#capabilities' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer font-extrabold text-2xl tracking-tighter text-white flex items-center gap-2 group"
        >
          Vitor<span className="text-electric group-hover:shadow-[0_0_15px_rgba(0,175,255,0.5)] transition-shadow duration-300">Dev</span>.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="text-chrome hover:text-white font-medium transition-colors relative group text-sm tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all group-hover:w-full shadow-[0_0_8px_#00AFFF]" />
            </button>
          ))}
          <a
            href="https://wa.me/5581985742015"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-electric text-void font-bold hover:bg-white hover:text-void transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,175,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            Fale com o Vitor
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-anthracite/95 backdrop-blur-xl border-b border-steel md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="text-lg font-medium text-white hover:text-electric transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/5581985742015"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-electric text-void font-bold"
            >
              Fale com o Vitor
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
