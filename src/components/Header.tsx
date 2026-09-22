import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Send, Github, Linkedin } from 'lucide-react';

export const AKLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Modern stylized A & K ribbon monogram */}
    <path d="M8 32L17.5 8H22.5L13 32H8Z" fill="#2563EB" />
    <path d="M21 21L29.5 8H35L25 22.5L21 21Z" fill="#1D4ED8" />
    <path d="M23 19.5L33 32H27.5L19 21.5L23 19.5Z" fill="#2563EB" />
    <path d="M11.5 24.5H23.5V21.5H12.8L11.5 24.5Z" fill="#3B82F6" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
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
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5' : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container-portfolio flex items-center justify-between">
        {/* Left: Brand Logo & Name */}
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <AKLogo className="w-9 h-9 transition-transform group-hover:scale-105 duration-200" />
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Akshay K A
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Socials & Connect CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/akshayka2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Github size={19} />
          </a>
          <a
            href="https://linkedin.com/in/akshay-k-a-254872253"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center justify-center w-7 h-7 shadow-sm"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm ml-1 group"
          >
            <Send size={13} className="text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Let's Connect</span>
            <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 text-base font-medium transition-colors ${
                  activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/akshayka2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-700 hover:text-slate-950 bg-slate-50 rounded-lg"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/akshay-k-a-254872253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white bg-blue-600 rounded-lg"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-semibold"
              >
                <Send size={13} />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;