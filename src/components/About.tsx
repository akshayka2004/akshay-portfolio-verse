import React from 'react';
import { GraduationCap, MapPin, Lightbulb, Code2, Rocket, BarChart, Heart, Camera, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/akshay-profile.jpg';

const About = () => {
  const workflow = [
    { icon: <Lightbulb size={28} />, title: 'Conceptualize', desc: 'Distilling complex requirements into elegant technical architectures.' },
    { icon: <Code2 size={28} />, title: 'Engineer', desc: 'Building high-performance, maintainable systems with modern tech stacks.' },
    { icon: <Rocket size={28} />, title: 'Deploy', desc: 'Automating delivery pipelines for seamless, production-grade releases.' },
    { icon: <BarChart size={28} />, title: 'Scale', desc: 'Monitoring and optimizing performance to handle evolving business needs.' }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-portfolio">
        {/* Profile & Bio Section */}
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-48">
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="card-premium p-4 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 relative group">
                <img 
                  src={profileImage} 
                  alt="Akshay K A" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.23,1,0.32,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center gap-2 border border-white/10 hidden md:flex">
                <span className="text-3xl font-black tracking-tighter uppercase">50+</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 text-center">Modules Built</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-12 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="space-y-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Philosophy</span>
              <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-black text-foreground leading-[0.85] uppercase tracking-tighter">Engineering with <br /> <span className="text-gradient">Purpose & Precision</span></h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                I'm a final-year MCA student at Saintgits College of Engineering, specializing in backend architecture and high-throughput systems. 
              </p>
              <p className="text-xl text-muted-foreground/70 leading-relaxed font-medium tracking-tight">
                My approach combines academic rigor with a hands-on obsession for building production-grade software that solves real business bottlenecks.
              </p>
            </div>

            <div className="flex items-center gap-8 p-10 bg-white border border-black/[0.04] rounded-[2.5rem] premium-shadow">
              <div className="p-6 bg-black rounded-2xl text-white shadow-xl shadow-black/10">
                <GraduationCap size={36} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-foreground uppercase tracking-tight leading-none mb-2">MCA (Integrated)</h4>
                <p className="text-[11px] text-muted-foreground flex items-center gap-3 font-black uppercase tracking-[0.2em]">
                   <MapPin size={16} className="text-primary" /> Saintgits College • 2027
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
          {workflow.map((item, idx) => (
            <motion.div 
              key={item.title}
              className="card-premium group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="p-6 bg-black rounded-2xl w-fit mb-10 text-white group-hover:scale-110 transition-all duration-1000 ease-[0.23,1,0.32,1] shadow-xl">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{item.title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed font-medium tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Edge Section */}
        <div className="pt-40 border-t border-black/[0.04]">
          <div className="text-center mb-32 space-y-6">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Personal Edge</span>
            <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-none">Beyond the Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Heart size={48} />, title: 'Music & Debate', desc: 'Passionate about intellectual discussions and the rhythm of diverse soundscapes.' },
              { icon: <Camera size={48} />, title: 'Photography', desc: 'Capturing moments and perspectives through a lens, finding beauty in the details.' },
              { icon: <Plane size={48} />, title: 'Exploration', desc: 'Traveler at heart, always seeking new cultures, terrains, and experiences.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="w-32 h-32 bg-black rounded-[3rem] flex items-center justify-center text-white mb-12 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-1000 ease-[0.23,1,0.32,1] shadow-2xl">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
