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
    <section id="skills" className="section-padding bg-section-bg relative overflow-hidden">
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              What I <span className="text-gradient">Build</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Solving complex problems through engineering excellence and product-focused development.
            </motion.p>
          </div>
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="text-primary" size={20} />
            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Capabilities</span>
          </motion.div>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className={`premium-card group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {cap.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{cap.title}</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {cap.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {cap.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-medium text-text-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Horizontal Scroll/Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Technical Arsenal</h3>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div 
                key={stack.category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 glass border border-border/50 rounded-lg text-sm font-semibold hover:border-primary/50 transition-colors cursor-default"
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