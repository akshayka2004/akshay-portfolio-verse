import React from 'react';
import { Code, Database, Globe, Cpu, BarChart, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary" size={24} />,
      skills: ['Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'SQL', 'VB.NET']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe className="text-primary" size={24} />,
      skills: ['React', 'Bootstrap', 'Node.js', 'Next.js', 'NestJS']
    },
    {
      title: 'Technologies & Tools',
      icon: <Server className="text-primary" size={24} />,
      skills: ['REST APIs', 'SQL Databases', 'Git', 'Linux', 'Docker']
    },
    {
      title: 'Domains',
      icon: <BarChart className="text-primary" size={24} />,
      skills: ['Backend Development', 'Data Science', 'App Development', 'ML/AI']
    }
  ];

  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'Data Science', level: 75 },
    { name: 'Machine Learning', level: 70 },
    { name: 'REST APIs', level: 85 }
  ];

  return (
    <section id="skills" className="section-padding hero-gradient">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="bg-white rounded-xl p-8 shadow-portfolio">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;