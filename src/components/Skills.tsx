import React from 'react';
import { Server, Database, Brain, ShieldCheck, Terminal, Layers, Cpu, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend & API Engineering',
    icon: <Server className="text-blue-600" size={24} />,
    description: 'Designing high-throughput microservices, RESTful interfaces, and event-driven worker queues.',
    skills: ['Python', 'Node.js', 'FastAPI', 'NestJS', 'Express.js', 'Django', 'REST APIs', 'BullMQ']
  },
  {
    title: 'Databases & Query Optimization',
    icon: <Database className="text-blue-600" size={24} />,
    description: 'Schema modeling, indexing, ACID transactions, and spatial queries for relational & NoSQL stores.',
    skills: ['MySQL', 'PostgreSQL', 'PostGIS', 'Prisma ORM', 'SQLAlchemy', 'Redis', 'SQLite']
  },
  {
    title: 'AI, ML & Vector Search',
    icon: <Brain className="text-blue-600" size={24} />,
    description: 'Applied machine learning, vector similarity search, computer vision models, and tabular analytics.',
    skills: ['FAISS Vector Search', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'YOLOv3', 'Prompt Engineering']
  },
  {
    title: 'DevOps, Cloud & Platforms',
    icon: <Cloud className="text-blue-600" size={24} />,
    description: 'Containerized deployments, automated CI/CD pipelines, and robust cloud configurations.',
    skills: ['Docker', 'AWS (EC2, S3)', 'Git & GitHub', 'Linux / Bash', 'Vercel', 'Postman API Testing']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Skills & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            A comprehensive overview of tools, frameworks, and architectural domains I leverage to build production software.
          </p>
        </div>

        {/* 4 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/60">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-medium rounded-lg border border-slate-200/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Metric Strip */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Full-Lifecycle Backend Competence</p>
              <p className="text-xs text-slate-500 font-normal">From conceptual API spec & schema design to production containerization.</p>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            Explore Projects in Action →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;