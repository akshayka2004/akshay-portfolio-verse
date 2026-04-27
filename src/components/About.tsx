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
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          {/* Bio Section */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="space-y-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Philosophy</span>
              <h3 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-foreground leading-[0.85] uppercase tracking-tighter">Engineering with <br /> <span className="text-gradient">Purpose & Precision</span></h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                I'm a final-year MCA student at Saintgits College of Engineering, specializing in backend architecture and high-throughput systems. My approach combines academic rigor with a hands-on obsession for building production-grade software.
              </p>
              <p className="text-xl text-muted-foreground/70 leading-relaxed font-medium tracking-tight">
                Beyond the stack, I focus on systems that solve real business bottlenecks — ensuring every line of code serves a strategic outcome.
              </p>
            </div>

            <div className="flex items-center gap-8 p-8 bg-white border border-black/[0.03] rounded-[2.5rem] premium-shadow">
              <div className="p-5 bg-primary/[0.04] rounded-2xl border border-primary/10">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black text-foreground uppercase tracking-tight">MCA (Integrated)</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-3 font-black uppercase tracking-[0.1em]">
                   <MapPin size={16} className="text-primary" /> Saintgits College • 2027
                </p>
              </div>
            </div>
          </motion.div>

          {/* Workflow Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {workflow.map((item, idx) => (
              <div key={item.title} className="card-premium group p-10 relative overflow-hidden">
                <div className="p-5 bg-primary/[0.04] rounded-2xl w-fit mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-1000 ease-[0.23,1,0.32,1]">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28, className: "group-hover:text-white transition-colors duration-1000" })}
                </div>
                <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="text-[15px] text-muted-foreground leading-relaxed font-medium tracking-tight">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personal Edge Section */}
        <div className="pt-40 border-t border-black/[0.04]">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Personal Edge</span>
            <h3 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">Beyond the Stack</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart size={36} />, color: 'bg-pink-500', title: 'Music & Debate', desc: 'Passionate about intellectual discussions and the rhythm of diverse soundscapes.' },
              { icon: <Camera size={36} />, color: 'bg-blue-500', title: 'Photography', desc: 'Capturing moments and perspectives through a lens, finding beauty in the details.' },
              { icon: <Plane size={36} />, color: 'bg-emerald-500', title: 'Exploration', desc: 'Traveler at heart, always seeking new cultures, terrains, and experiences.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                className="card-premium flex flex-col items-center p-12 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className={`w-24 h-24 rounded-[2.5rem] ${item.color}/[0.05] flex items-center justify-center text-${item.color.split('-')[1]}-500 mb-10 group-hover:scale-110 transition-transform duration-1000 ease-[0.23,1,0.32,1]`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{item.title}</h4>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;