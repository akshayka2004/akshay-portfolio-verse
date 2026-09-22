import React from 'react';
import { Award, CheckCircle, ExternalLink, Shield } from 'lucide-react';

type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  skills: string[];
};

const certifications: CertificationItem[] = [
  {
    title: 'Python for Data Science & Machine Learning',
    issuer: 'Applied AI & Data Analytics Course',
    date: '2023',
    badge: 'Specialization',
    description: 'Comprehensive specialization covering exploratory data analysis, feature engineering, and training scikit-learn models.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Modeling']
  },
  {
    title: 'Backend Web Development with Node.js & Express',
    issuer: 'Full Stack Engineering Track',
    date: '2023',
    badge: 'Certified',
    description: 'RESTful API architecture, JWT authentication, MySQL transactional queries, and asynchronous event loops.',
    skills: ['Node.js', 'Express', 'MySQL', 'REST APIs', 'Security']
  },
  {
    title: 'Relational Database Design & SQL Optimization',
    issuer: 'Database Systems Mastery',
    date: '2022',
    badge: 'Distinction',
    description: 'Advanced normalization, index tuning, composite query execution plans, and ACID transaction isolation.',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Index Tuning', 'Schema Design']
  },
  {
    title: 'Docker & Container Fundamentals',
    issuer: 'Cloud & DevOps Academy',
    date: '2024',
    badge: 'Certified',
    description: 'Multi-stage Dockerfile builds, container network isolation, compose orchestrations, and volume persistence.',
    skills: ['Docker', 'Docker Compose', 'Linux', 'Containerization']
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Credentials & Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Certifications & Training
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            Continuous validation of technical skills through structured coursework and hands-on examinations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Award size={22} />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {cert.badge} • {cert.date}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
