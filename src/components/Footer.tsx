import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { AKLogo } from './Header';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <AKLogo className="w-8 h-8" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">Akshay K A</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-normal">
              MCA (Integrated) student at Saintgits College of Engineering. Focused on scalable backend architecture, REST APIs, and applied AI solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/akshayka2004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <Github size={17} />
              </a>
              <a
                href="https://linkedin.com/in/akshay-k-a-254872253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:akshayanoop2014@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-500 hover:text-blue-600 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Akshay K A. All rights reserved.</p>
          <p>Designed & built with precision • Saintgits College of Engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;