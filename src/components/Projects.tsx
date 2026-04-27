import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import marketsyncImg from '../assets/marketsync.png';
import diseaseImg from '../assets/disease-prediction.png';
import airteachImg from '../assets/airteach.png';
import facefinderImg from '../assets/facefinder.png';
import aiAssistantImg from '../assets/ai-assistant.png';

const Projects = () => {
  const projects = [
    {
      title: "MarketSync",
      category: "Hypermarket Management System",
      image: marketsyncImg,
      description: "A comprehensive backend ecosystem designed to streamline hypermarket operations, from inventory tracking to real-time transaction processing.",
      problem: "Manual inventory tracking and disjointed transaction systems led to data inconsistency and operational delays.",
      solution: "Engineered a centralized multi-module architecture with automated stock reconciliation and real-time sales reporting.",
      impact: "Reduced inventory processing time by 40% and improved data accuracy to 99.9% across multiple branches.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      github: "https://github.com/akshayka2004",
      link: "#"
    },
    {
      title: "AirTeach",
      category: "AI Gesture Design Tool",
      image: airteachImg,
      description: "A futuristic interaction tool that allows users to create digital art and designs using mid-air hand gestures tracked via AI.",
      problem: "Traditional mouse/touch interactions limit creative freedom in 3D design and digital whiteboarding.",
      solution: "Implemented real-time hand-tracking models to translate complex physical gestures into precise digital strokes and commands.",
      impact: "Achieved sub-50ms latency for real-time interaction, significantly lowering the barrier for accessible design tools.",
      tags: ["Python", "OpenCV", "MediaPipe", "React"],
      github: "https://github.com/akshayka2004",
      link: "#"
    },
    {
      title: "Face Finder",
      category: "Cloud Recognition Platform",
      image: facefinderImg,
      description: "A high-performance photo management platform that utilizes facial recognition to organize and retrieve images from cloud storage.",
      problem: "Users struggled to find specific photos in large, unorganized cloud directories across different platforms.",
      solution: "Integrated Vercel Blob and Google Drive APIs with custom facial embedding models for fast, cross-platform searching.",
      impact: "Enabled sub-second retrieval of photos from libraries exceeding 10,000+ items with high precision.",
      tags: ["Next.js", "Vercel Blob", "Face-API.js", "Tailwind"],
      github: "https://github.com/akshayka2004",
      link: "#"
    },
    {
      title: "AI Entrepreneur Assistant",
      category: "Full-Stack Orchestration",
      image: aiAssistantImg,
      description: "An intelligent platform that uses orchestrated AI agents to help entrepreneurs build business strategies and manage project lifecycles.",
      problem: "Founders often lack a unified view of strategy, task management, and market intelligence.",
      solution: "Built a backend orchestration layer that coordinates specialized AI agents to generate roadmaps and track KPIs.",
      impact: "Streamlined the project initialization phase for startups by providing automated, data-driven strategic insights.",
      tags: ["React", "Python", "LangChain", "OpenAI"],
      github: "https://github.com/akshayka2004",
      link: "#"
    },
    {
      title: "Disease Prediction",
      category: "Machine Learning / Health-Tech",
      image: diseaseImg,
      description: "A research-driven ML application that analyzes user symptoms to predict potential health conditions with high accuracy.",
      problem: "Early diagnosis is often delayed due to lack of immediate access to medical screening tools.",
      solution: "Developed and trained classification models on clinical datasets to identify symptom patterns for various diseases.",
      impact: "Achieved 95%+ prediction accuracy across 40+ different conditions, serving as a powerful preliminary screening tool.",
      tags: ["Python", "Scikit-Learn", "Flask", "Pandas"],
      github: "https://github.com/akshayka2004",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background relative">
      <div className="container-portfolio">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6"
          >
            Featured <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of production-grade systems and research-driven applications built with precision.
          </motion.p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group cursor-pointer relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.link} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{project.category}</span>
                  <h3 className="text-3xl lg:text-5xl font-black text-foreground tracking-tight">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-muted-foreground" /> The Problem
                    </span>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-muted-foreground" /> The Impact
                    </span>
                    <p className="text-sm text-primary font-bold leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-bold rounded-full border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group"
                  >
                    View Project Case Study
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;