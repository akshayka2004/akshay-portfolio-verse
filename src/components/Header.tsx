import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Journey' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-quintic ${
      isScrolled ? 'py-4' : 'py-10'
    }`}>
      <div className="container-portfolio">
        <div className={`mx-auto transition-all duration-1000 ease-quintic rounded-[2.5rem] ${
          isScrolled ? 'bg-white/70 backdrop-blur-2xl px-10 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-6xl border border-white/50' : 'bg-transparent px-0 py-0'
        }`}>
          <div className="flex items-center justify-between h-16">
            <div 
              className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-4 group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white group-hover:rotate-[15deg] transition-all duration-1000 ease-quintic shadow-2xl">
                <Rocket size={24} />
              </div>
              <span className="text-gradient uppercase text-xl font-black tracking-tighter leading-none">Akshay.Dev</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 hover:text-black transition-all duration-1000 ease-quintic relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-black transition-all duration-1000 ease-quintic group-hover:w-1/3" />
                </button>
              ))}
              <div className="pl-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-3.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl hover:bg-primary hover:-translate-y-2 transition-all duration-1000 ease-quintic shadow-2xl shadow-black/10"
                >
                  Launch Build
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-4 rounded-2xl bg-black/5 hover:bg-black/10 transition-all duration-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden mt-6 bg-white/90 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white/50"
            >
              <div className="flex flex-col p-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-8 py-6 text-xl font-black text-foreground hover:bg-black hover:text-white rounded-2xl transition-all duration-700 uppercase tracking-tighter"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="p-6 pt-10">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-8 bg-black text-white rounded-3xl font-black uppercase tracking-[0.4em] text-xs shadow-2xl"
                  >
                    Launch Build
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;