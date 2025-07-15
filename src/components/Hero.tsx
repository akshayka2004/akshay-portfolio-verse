import React from 'react';
import { ChevronDown, FileDown, Mail } from 'lucide-react';
import profileImage from '../assets/akshay-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center">
      <div className="container-portfolio">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Hi, I'm{' '}
                <span className="text-gradient">Akshay K A</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                A tech-savvy MCA student who loves coding, learning, and taking on new challenges.
              </p>
              <p className="text-lg text-text-light">
                Backend Developer • Data Science Enthusiast • Problem Solver
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
              >
                <span>View My Work</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-portfolio-lg">
                <img
                  src={profileImage}
                  alt="Akshay K A"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-portfolio"
          >
            <ChevronDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;