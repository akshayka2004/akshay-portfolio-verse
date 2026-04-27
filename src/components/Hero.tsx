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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen hero-glow flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background elements for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="container-portfolio relative z-10 pt-32 px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-16">
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-black/[0.04] text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Engineering Excellence // v2.0
          </motion.div>

          {/* Headline Group */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(3rem,11vw,7.5rem)] font-black tracking-tighter text-foreground leading-[0.85] uppercase"
            >
              Architecting <br />
              <span className="text-gradient">High-Performance</span> <br />
              SaaS Ecosystems
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
            >
              Senior Architect specializing in high-throughput backend systems, 
              automated DevOps, and production-grade product architecture.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-8 justify-center pt-6"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-700 ease-out" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform duration-700" />
              <span>Initialize Build</span>
            </button>
          </motion.div>

          {/* Trust Bar / Socials */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-10 pt-20 text-muted-foreground"
          >
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-all duration-700 hover:-translate-y-2"><Github size={24} /></a>
              <a href="#" className="hover:text-primary transition-all duration-700 hover:-translate-y-2"><Linkedin size={24} /></a>
            </div>
            <div className="h-10 w-[1px] bg-black/[0.08]" />
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Primary Arsenal</span>
              <span className="text-sm font-bold text-foreground tracking-tighter uppercase">NEXT.JS // NODE.JS // AWS // DOCKER</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;