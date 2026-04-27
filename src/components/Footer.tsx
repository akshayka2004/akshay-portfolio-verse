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
    <footer className="bg-[#050505] text-white py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-portfolio">
        <div className="grid md:grid-cols-4 gap-16 lg:gap-24">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Rocket size={24} />
                </div>
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase">Akshay.Dev</h3>
              </div>
              <p className="text-muted-foreground text-xl max-w-sm leading-relaxed font-medium">
                Architecting high-performance backend systems and data-driven solutions with a focus on SaaS scalability.
              </p>
            </div>
            
            <div className="flex gap-6">
              {[
                { icon: <Linkedin size={22} />, url: 'https://linkedin.com/in/akshay-k-a-254872253' },
                { icon: <Github size={22} />, url: 'https://github.com/akshayka2004' },
                { icon: <Mail size={22} />, url: 'mailto:akshayanoop2014@gmail.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-500 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Sitemap</h4>
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-fit text-muted-foreground hover:text-white transition-all duration-500 font-bold uppercase text-[10px] tracking-[0.2em]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">System Status</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Active & Available</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                Currently taking on new projects and architectural consultations for Q3 2024.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm font-bold flex items-center gap-2">
            DESIGNED & ENGINEERED BY <span className="text-white">AKSHAY K A</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-12 bg-white/10 hidden md:block" />
            <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-black">
              © {currentYear} ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;