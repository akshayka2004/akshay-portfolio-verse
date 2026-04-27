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
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl"
          >
            Selected Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-foreground mb-8 uppercase leading-[0.85] tracking-tighter"
          >
            Case <span className="text-gradient">Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto tracking-tight"
          >
            A selection of production-grade systems and research-driven applications built with architectural precision.
          </motion.p>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 lg:gap-32 items-center`}
            >
              {/* Image Side - Refined with depth */}
              <div className="w-full lg:w-[55%] group relative">
                <div className="absolute -inset-10 bg-primary/[0.03] rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
                <div className="relative overflow-hidden rounded-[3rem] border border-black/[0.04] premium-shadow group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000 ease-out">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </div>

              {/* Content Side - Hierarchy & Impact */}
              <div className="w-full lg:w-[45%] space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] bg-primary/[0.04] px-5 py-2 rounded-full border border-primary/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-7xl font-black text-foreground leading-[0.85] uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl tracking-tight">
                    {project.description}
                  </p>
                </div>

                {/* Impact Highlight - Premium Treatment */}
                <div className="p-10 bg-slate-50/50 rounded-[2.5rem] border border-black/[0.03] space-y-6 relative overflow-hidden group/impact">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Zap size={40} className="text-primary" />
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-primary/30" /> Business Impact
                  </span>
                  <p className="text-2xl md:text-3xl font-black text-foreground leading-none uppercase tracking-tighter">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-white text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-black/[0.06] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 ease-[0.23,1,0.32,1] shadow-2xl shadow-black/5 group"
                  >
                    Deep Dive Case Study
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-700 ease-out" />
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