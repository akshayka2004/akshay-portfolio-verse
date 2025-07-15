import React from 'react';
import { ExternalLink, Github, Database, BarChart3, Ship, AlertCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MarketSync',
      subtitle: 'Hypermarket Management System',
      description: 'A comprehensive web service for managing hypermarket operations. I developed the backend functionalities including inventory management, user authentication, and transaction processing.',
      technologies: ['Node.js', 'Express', 'SQL', 'REST APIs', 'JavaScript'],
      icon: <Database className="text-primary" size={24} />,
      type: 'Web Application',
      status: 'Completed'
    },
    {
      title: 'Disease Prediction System',
      subtitle: 'ML-powered Health Analysis',
      description: 'A data science project that uses machine learning models to predict potential diseases based on symptoms and patient data. Features include data preprocessing, model training, and prediction interfaces.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
      icon: <BarChart3 className="text-primary" size={24} />,
      type: 'Data Science',
      status: 'Completed'
    },
    {
      title: 'Titanic Survival Prediction',
      subtitle: 'Classical ML Dataset Analysis',
      description: 'An ML-based predictive model using the famous Titanic dataset. Implemented various algorithms to predict passenger survival rates with feature engineering and model optimization.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      icon: <Ship className="text-primary" size={24} />,
      type: 'Machine Learning',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in backend development, data science, and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">{project.type}</span>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>

              <h4 className="text-lg font-medium text-foreground mb-3">{project.subtitle}</h4>
              
              <p className="text-text-light mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Status: <span className="text-primary font-medium">{project.status}</span>
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-portfolio">
                    <ExternalLink size={16} className="text-primary" />
                  </button>
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-portfolio">
                    <Github size={16} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about collaborative work */}
        <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-primary mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Note on Collaborative Work</h4>
              <p className="text-text-light">
                Some of my backend work is part of collaborative efforts and currently not publicly showcased. 
                However, I'm always happy to discuss these projects in detail during interviews or consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;