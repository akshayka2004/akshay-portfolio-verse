import React from 'react';
import { Server, Database, Smartphone, BarChart3, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="text-primary" size={32} />,
      title: 'Backend Development',
      description: 'Building robust and scalable backend systems with modern technologies. API development, server logic implementation, and system architecture design.',
      features: ['RESTful API Development', 'Server-side Logic', 'System Architecture', 'Performance Optimization'],
      technologies: ['Node.js', 'Express', 'NestJS', 'Python']
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: 'SQL Database Management',
      description: 'Comprehensive database design, optimization, and management services. From schema design to query optimization and performance tuning.',
      features: ['Database Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning'],
      technologies: ['MySQL', 'PostgreSQL', 'SQL Server', 'Database Design']
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: 'VB.NET App Development',
      description: 'Desktop application development using VB.NET with focus on user-friendly interfaces and efficient functionality.',
      features: ['Desktop Applications', 'User Interface Design', 'Windows Forms', 'Application Logic'],
      technologies: ['VB.NET', 'Windows Forms', '.NET Framework', 'Visual Studio']
    },
    {
      icon: <BarChart3 className="text-primary" size={32} />,
      title: 'Data Science & Predictive Modeling',
      description: 'Machine learning model development, data analysis, and predictive analytics to derive meaningful insights from data.',
      features: ['Machine Learning Models', 'Data Analysis', 'Predictive Analytics', 'Data Visualization'],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    }
  ];

  const workingProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and planning the technical approach'
    },
    {
      step: '02',
      title: 'Development & Testing',
      description: 'Building robust solutions with thorough testing and quality assurance'
    },
    {
      step: '03',
      title: 'Deployment & Support',
      description: 'Deploying solutions and providing ongoing support and maintenance'
    }
  ];

  return (
    <section id="services" className="section-padding hero-gradient">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="skill-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>

              <p className="text-text-light mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-4">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-text-light">
                      <Zap size={16} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Working Process */}
        <div className="bg-white rounded-xl p-8 shadow-portfolio">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            My Working Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workingProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-text-light">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;