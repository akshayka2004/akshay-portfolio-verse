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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-4xl">
            <motion.h2 
              className="text-[clamp(3rem,10vw,6rem)] font-black text-foreground mb-8 leading-[0.85] uppercase tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              Strategic <span className="text-gradient">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-medium tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              Bridging the gap between complex engineering requirements and production-grade product architecture.
            </motion.p>
          </div>
          <motion.div 
            className="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Zap className="text-primary animate-pulse" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Full-Stack Master</span>
          </motion.div>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-40">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="card-premium group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-8">
                  <div className="p-6 bg-primary/[0.04] rounded-3xl border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-1000 ease-[0.23,1,0.32,1]">
                    {React.cloneElement(cap.icon as React.ReactElement, { size: 36, className: "group-hover:text-white transition-colors duration-1000" })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter uppercase leading-none">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed tracking-tight">
                  {cap.description}
                </p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-black/[0.04]">
                  {cap.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 text-sm font-black text-foreground uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-700 ease-out">
                      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-700" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Arsenal Grid */}
        <div className="space-y-24">
          <div className="text-center space-y-6">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">The Architecture</span>
            <h3 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">Technical Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {techStack.map((stack, index) => (
              <motion.div 
                key={stack.category}
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/[0.04] px-6 py-2 rounded-full w-fit border border-primary/10">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {stack.items.map((item) => (
                    <span 
                      key={item}
                      className="px-6 py-3 bg-white border border-black/[0.06] rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 hover:-translate-y-2 hover:border-primary/30 hover:text-primary transition-all duration-700 ease-[0.23,1,0.32,1] shadow-sm cursor-default"
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