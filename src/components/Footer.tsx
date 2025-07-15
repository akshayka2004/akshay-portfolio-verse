import React from 'react';
import { Heart, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container-portfolio">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Akshay K A</h3>
            <p className="text-gray-300">
              MCA Student & Backend Developer passionate about creating innovative solutions
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/akshay-k-a-254872253"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-portfolio"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:akshayanoop2014@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-portfolio"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-portfolio"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-portfolio"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 akshayanoop2014@gmail.com</p>
              <p>📍 Kottayam, Kerala, India</p>
              <p>🎓 MCA Student at Saintgits College</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Akshay K A
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {currentYear} Akshay K A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;