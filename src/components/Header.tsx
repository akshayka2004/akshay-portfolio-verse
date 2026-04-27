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
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container-portfolio">
        <div className={`mx-auto transition-all duration-700 rounded-[2rem] ${
          isScrolled ? 'glass px-8 py-3 shadow-xl max-w-5xl border-white/40' : 'bg-transparent px-0 py-0'
        }`}>
          <div className="flex items-center justify-between h-14">
            <div 
              className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-3 group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/20">
                <Rocket size={20} />
              </div>
              <span className="text-gradient uppercase">Akshay.Dev</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-500 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-1/2" />
                </button>
              ))}
              <div className="pl-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2.5 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-500 shadow-lg shadow-primary/10"
                >
                  Get Started
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl glass hover:bg-secondary transition-portfolio"
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 glass rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="flex flex-col p-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-6 py-4 text-lg font-bold text-foreground hover:bg-primary/5 hover:text-primary rounded-2xl transition-all"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="p-4 pt-8">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full btn-primary"
                  >
                    Get Started
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