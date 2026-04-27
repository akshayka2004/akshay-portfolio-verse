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
    <section id="about" className="section-padding bg-section-bg relative overflow-hidden">
      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Bio Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">The Journey</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">Engineering with Purpose & Precision</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a final-year MCA student at Saintgits College of Engineering, specializing in backend architecture and data-driven systems. My approach combines academic rigor with a hands-on obsession for building production-grade software.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                Beyond the code, I focus on the "why" — ensuring every system I build serves a clear business goal and provides an exceptional user experience.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-border">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-foreground">MCA (Integrated)</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                   <MapPin size={14} /> Saintgits College of Engineering • Class of 2027
                </p>
              </div>
            </div>
          </motion.div>

          {/* How I Work Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {workflow.map((item, idx) => (
              <div key={item.title} className="premium-card group">
                <div className="p-3 bg-primary/5 rounded-xl w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personal Edge Section */}
        <div className="pt-20 border-t border-border/50">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground">Personal Edge</h3>
            <p className="text-muted-foreground mt-2">What keeps me inspired outside the IDE</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center p-8 glass rounded-3xl text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Music & Debate</h4>
              <p className="text-muted-foreground">Passionate about intellectual discussions and the rhythm of diverse soundscapes.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center p-8 glass rounded-3xl text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Camera size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Photography</h4>
              <p className="text-muted-foreground">Capturing moments and perspectives through a lens, finding beauty in the details.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center p-8 glass rounded-3xl text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <Plane size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Exploration</h4>
              <p className="text-muted-foreground">Traveler at heart, always seeking new cultures, terrains, and experiences.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;