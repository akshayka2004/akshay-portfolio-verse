import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Users, ExternalLink } from 'lucide-react';

type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  projectLink?: {
    name: string;
    url: string;
  };
  description: string;
  points: string[];
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Full Stack Developer & Tech Team Lead',
    organization: 'Life Art Business Services PVT LTD',
    location: 'Kerala, India',
    period: 'May 18, 2024 – Present',
    type: 'Professional Experience',
    isCurrent: true,
    projectLink: {
      name: 'platform.whtzup.city',
      url: 'https://platform.whtzup.city'
    },
    description: 'Working as a Full Stack Developer, managing and guiding the tech team within the organization while driving core product engineering.',
    points: [
      'Architected and developed platform.whtzup.city, a high-throughput multi-role business listing, discovery, and civic engagement platform.',
      'Managing and guiding the engineering team within the organization, conducting code reviews, structuring sprints, and mentoring developers.',
      'Designed a resilient architecture splitting Next.js frontend, NestJS REST API, and dedicated BullMQ worker queues over a PostgreSQL database.'
    ],
    skills: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'BullMQ', 'Team Leadership', 'System Design']
  },
  {
    role: 'Backend Engineering & Applied Developer',
    organization: 'Independent Engineering & Solutions',
    location: 'Kerala, India',
    period: '2023 – 2024',
    type: 'Project Engineering',
    isCurrent: false,
    description: 'Designed and deployed data-intensive web applications, POS systems, and predictive machine learning models.',
    points: [
      'Built MarketSync POS & inventory management system, optimizing MySQL database queries for fast sub-50ms barcode transactions.',
      'Constructed ShopCredit, training Random Forest classifiers to predict micro-credit risk for neighbourhood retailers.',
      'Integrated vector similarity search pipelines with FAISS and FastAPI for autonomous marketing intelligence tools.'
    ],
    skills: ['Python', 'Node.js', 'FastAPI', 'Django', 'MySQL', 'FAISS', 'Docker']
  },
  {
    role: 'Lead Systems Architect & Project Researcher',
    organization: 'Saintgits College of Engineering',
    location: 'Kottayam, Kerala',
    period: '2022 – 2024',
    type: 'Academic & Institutional Research',
    isCurrent: false,
    description: 'Spearheaded technical research initiatives, institutional routing algorithms, and computer vision systems.',
    points: [
      'Engineered TrailMate campus spatial navigation engine utilizing PostGIS weighted graphs and A* pathfinding heuristics.',
      'Constructed a real-time exam proctoring system using OpenCV and YOLOv3-tiny for multi-signal behavioral anomaly detection.',
      'Consistent academic excellence in Integrated MCA, securing an 8.45 SGPA (Sem 9) and 8.45 cumulative CGPA.'
    ],
    skills: ['A* Algorithm', 'PostGIS', 'Computer Vision', 'YOLOv3', 'OpenCV', 'NetworkX']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Work & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            Track record of shipping production applications, leading engineering teams, and architectural research.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                exp.isCurrent ? 'border-blue-200 ring-1 ring-blue-500/10' : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {exp.type}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active Role
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-500 space-y-1">
                  <span className="inline-flex items-center gap-1.5 font-medium bg-slate-50 px-3 py-1 rounded-lg border border-slate-100 text-slate-700">
                    <Calendar size={13} className="text-blue-600" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} className="text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="pt-5 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Project callout if present */}
                {exp.projectLink && (
                  <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-900">Featured Platform:</span>
                      <span className="text-xs font-semibold text-blue-700">{exp.projectLink.name}</span>
                    </div>
                    <a
                      href={exp.projectLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      <span>Visit</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}

                <div className="space-y-2">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-blue-50/80 text-blue-700 border border-blue-100/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
