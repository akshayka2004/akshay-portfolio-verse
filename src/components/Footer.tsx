import React from 'react';
import { Heart, Linkedin, Mail, Github, Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Journey' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <footer className="bg-[#050505] text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container-portfolio">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <Rocket size={20} />
                </div>
                <h3 className="text-2xl font-black tracking-tighter text-white uppercase">Akshay.Dev</h3>
              </div>
              <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                Architecting high-performance backend systems and data-driven solutions with a focus on SaaS scalability.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/akshay-k-a-254872253"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/akshayka2004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:akshayanoop2014@gmail.com"
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Sitemap</h4>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-fit text-muted-foreground hover:text-white transition-colors font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Available for hire</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently taking on new projects and architectural consultations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Akshay K A
          </p>
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold">
            © {currentYear} ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;