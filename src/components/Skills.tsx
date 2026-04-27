import React from 'react';
import { Server, Database, Brain, Globe, Cpu, Zap, Layout, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Capabilities = () => {
  const capabilities = [
    {
      title: 'Scalable SaaS Platforms',
      description: 'Engineering production-ready web applications with a focus on scalability, maintainability, and exceptional user experience.',
      icon: <Layout className="text-primary" size={28} />,
      features: ['Multi-tenant Architecture', 'Responsive UI/UX', 'Performance Optimization', 'Cloud Integration'],
      color: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      title: 'High-Performance APIs',
      description: 'Designing robust backend systems and RESTful services that power complex workflows and handle high concurrent traffic.',
      icon: <Server className="text-primary" size={28} />,
      features: ['Microservices', 'Real-time Data', 'Secure Authentication', 'Database Modeling'],
      color: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      title: 'Data Intelligence',
      description: 'Leveraging machine learning and predictive analytics to transform raw data into actionable business insights.',
      icon: <Brain className="text-primary" size={28} />,
      features: ['Predictive Modeling', 'Data Visualization', 'Statistical Analysis', 'Pattern Recognition'],
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'Systems & DevOps',
      description: 'Ensuring 99.9% uptime through automated pipelines, containerization, and rigorous system architecture design.',
      icon: <ShieldCheck className="text-primary" size={28} />,
      features: ['CI/CD Pipelines', 'Dockerization', 'Linux Administration', 'Security Auditing'],
      color: 'from-amber-500/10 to-orange-500/10'
    }
  ];

  const techStack = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'NestJS', 'Express'] },
    { category: 'Infrastructure', items: ['Docker', 'Git', 'Linux', 'REST APIs', 'PostgreSQL'] },
    { category: 'AI/ML', items: ['Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis'] }
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              className="text-[ clamp(2rem,6vw,4.5rem)] font-black text-foreground mb-6 leading-tight uppercase tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Strategic <span className="text-gradient glow-accent">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Bridging the gap between complex engineering requirements and intuitive product outcomes.
            </motion.p>
          </div>
          <motion.div 
            className="flex items-center gap-3 px-6 py-3 bg-white border border-border/40 rounded-2xl shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="text-primary" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Core Competencies</span>
          </motion.div>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="card-premium group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-primary/5 rounded-3xl border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    {React.cloneElement(cap.icon as React.ReactElement, { size: 32, className: "group-hover:text-white transition-colors duration-700" })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight uppercase leading-none">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-border/40">
                  {cap.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Arsenal Grid */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Toolkit</span>
            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">Technical Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((stack, index) => (
              <motion.div 
                key={stack.category}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full w-fit">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item) => (
                    <span 
                      key={item}
                      className="px-5 py-2.5 bg-white border border-border/40 rounded-xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-500 shadow-sm cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;