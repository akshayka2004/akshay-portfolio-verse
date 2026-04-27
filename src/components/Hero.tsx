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
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-portfolio relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-border/50 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Engineering Excellence // Q3 2026
          </motion.div>

          {/* Headline Group */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter text-foreground leading-[0.9] uppercase"
            >
              Architecting <br />
              <span className="text-gradient glow-accent">High-Performance</span> <br />
              SaaS Ecosystems
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Building production-grade systems and automated infrastructure that bridge 
              engineering precision with high-velocity product strategy.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              <Mail size={18} />
              <span>Initialize Connection</span>
            </button>
          </motion.div>

          {/* Trust Bar / Socials */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8 pt-12 text-muted-foreground"
          >
            <a href="#" className="hover:text-primary transition-all duration-500 hover:-translate-y-1"><Github size={24} /></a>
            <a href="#" className="hover:text-primary transition-all duration-500 hover:-translate-y-1"><Linkedin size={24} /></a>
            <div className="h-6 w-[1px] bg-border/60" />
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Primary Stack</span>
              <span className="text-xs font-bold text-foreground">NEXT.JS // NODE.JS // AWS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;