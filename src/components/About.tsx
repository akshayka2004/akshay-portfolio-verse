import React from 'react';
import { GraduationCap, MapPin, Calendar, Lightbulb, Code2, Rocket, BarChart, Heart, Camera, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const workflow = [
    { icon: <Lightbulb size={24} />, title: 'Conceptualize', desc: 'Distilling complex requirements into elegant technical architectures.' },
    { icon: <Code2 size={24} />, title: 'Engineer', desc: 'Building high-performance, maintainable systems with modern tech stacks.' },
    { icon: <Rocket size={24} />, title: 'Deploy', desc: 'Automating delivery pipelines for seamless, production-grade releases.' },
    { icon: <BarChart size={24} />, title: 'Scale', desc: 'Monitoring and optimizing performance to handle evolving business needs.' }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          {/* Bio Section */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Philosophy</span>
              <h3 className="text-4xl lg:text-6xl font-black text-foreground leading-[1.1] uppercase tracking-tighter">Engineering with <br /> <span className="text-gradient">Purpose & Precision</span></h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                I'm a final-year MCA student at Saintgits College of Engineering, specializing in backend architecture and data-driven systems. My approach combines academic rigor with a hands-on obsession for building production-grade software.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed font-medium">
                Beyond the code, I focus on the "why" — ensuring every system I build serves a clear business goal and provides an exceptional user experience.
              </p>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white border border-border/40 rounded-3xl shadow-sm">
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">MCA (Integrated)</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2 font-bold">
                   <MapPin size={14} className="text-primary" /> Saintgits College of Engineering • Class of 2027
                </p>
              </div>
            </div>
          </motion.div>

          {/* Workflow Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {workflow.map((item, idx) => (
              <div key={item.title} className="card-premium group p-8">
                <div className="p-4 bg-primary/5 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24, className: "group-hover:text-white transition-colors duration-700" })}
                </div>
                <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personal Edge Section */}
        <div className="pt-28 border-t border-border/40">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Beyond the Stack</span>
            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">The Personal Edge</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Heart size={32} />, color: 'bg-pink-500', title: 'Music & Debate', desc: 'Passionate about intellectual discussions and the rhythm of diverse soundscapes.' },
              { icon: <Camera size={32} />, color: 'bg-blue-500', title: 'Photography', desc: 'Capturing moments and perspectives through a lens, finding beauty in the details.' },
              { icon: <Plane size={32} />, color: 'bg-emerald-500', title: 'Exploration', desc: 'Traveler at heart, always seeking new cultures, terrains, and experiences.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                className="flex flex-col items-center p-10 bg-white border border-border/40 rounded-[2.5rem] text-center group premium-shadow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`w-20 h-20 rounded-[2rem] ${item.color}/10 flex items-center justify-center text-${item.color.split('-')[1]}-500 mb-8 group-hover:bg-${item.color.split('-')[1]}-500 group-hover:text-white transition-all duration-700`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-foreground mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;