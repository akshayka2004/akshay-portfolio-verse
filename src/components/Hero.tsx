import React from 'react';
import { ChevronDown, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/akshay-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background elements for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-portfolio relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for New Projects
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Architecting <br />
                <span className="text-gradient">Scalable SaaS</span> Platforms
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                I build production-grade systems and data-driven solutions that bridge engineering excellence with product strategy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                <span>View Case Studies</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                <Mail size={18} />
                <span>Let's Talk</span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <a href="https://github.com/akshayka2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-portfolio">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/akshay-k-a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-portfolio">
                <Linkedin size={24} />
              </a>
              <div className="h-4 w-[1px] bg-border mx-2" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Expertise</span>
                <span className="text-sm font-medium">Backend • ML • DevOps</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image with premium frame */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-border">
                <img
                  src={profileImage}
                  alt="Akshay K A"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Floating tech badges */}
              <motion.div 
                className="absolute -top-4 -right-4 p-4 glass rounded-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-10 -left-8 p-4 glass rounded-2xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 group"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1 group-hover:border-primary transition-colors">
              <motion.div 
                className="w-1 h-2 bg-muted-foreground rounded-full group-hover:bg-primary transition-colors"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;