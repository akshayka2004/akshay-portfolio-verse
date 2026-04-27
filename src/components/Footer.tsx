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
    <footer className="bg-black text-white py-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      
      <div className="container-portfolio">
        <div className="grid md:grid-cols-4 gap-20 lg:gap-32">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-black shadow-2xl">
                  <Rocket size={32} />
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">Akshay.Dev</h3>
              </div>
              <p className="text-white/50 text-2xl max-w-md leading-relaxed font-medium tracking-tight">
                Architecting high-performance backend systems and specialized SaaS solutions with tactical precision.
              </p>
            </div>
            
            <div className="flex gap-8">
              {[
                { icon: <Linkedin size={28} />, url: 'https://linkedin.com/in/akshay-k-a-254872253' },
                { icon: <Github size={28} />, url: 'https://github.com/akshayka2004' },
                { icon: <Mail size={28} />, url: 'mailto:akshayanoop2014@gmail.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white/[0.03] rounded-3xl border border-white/[0.05] hover:bg-white hover:text-black hover:-translate-y-3 transition-all duration-1000 ease-[0.23,1,0.32,1] shadow-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Sitemap</h4>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-fit text-white/50 hover:text-white transition-all duration-700 font-black uppercase text-xs tracking-[0.4em]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">System Status</h4>
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white/[0.03] w-fit px-6 py-3 rounded-full border border-white/[0.05]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Operational</span>
              </div>
              <p className="text-lg text-white/50 leading-relaxed font-medium tracking-tight">
                Currently open for strategic partnerships and technical consulting roles.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-48 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-white/30 text-[10px] font-black tracking-[0.5em] uppercase">
            DESIGNED & ENGINEERED BY <span className="text-white">AKSHAY K A</span>
          </p>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-16 bg-white/10 hidden md:block" />
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-black">
              © {currentYear} ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;