import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, X, Sparkles, Database, Layers, CheckCircle2 } from 'lucide-react';
import { AKLogo } from './Header';

import whatzupImg from '../assets/whatzup.webp';
import airteachImg from '../assets/airteach.webp';
import facefinderImg from '../assets/facefinder.webp';
import legalCareImg from '../assets/legal-care.webp';
import tricultImg from '../assets/tricult.webp';

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  github?: string;
  live?: string;
  highlights?: string[];
  theme: {
    bg: string;
    accent: string;
    border: string;
  };
  featuredBadge?: boolean;
  iconType: 'marketsync' | 'agentic' | 'shopcredit' | 'default';
};

const featuredProjects: ProjectItem[] = [
  {
    id: 'marketsync',
    title: 'MarketSync',
    subtitle: 'HyperMarket Management System',
    category: 'Enterprise SaaS',
    description: 'HyperMarket management system with inventory, billing, analytics and a robust backend API.',
    detailedDescription: 'A production-grade enterprise hypermarket system engineered for high-concurrency store operations. Features role-based access, inventory tracking across multiple warehouses, rapid barcode point-of-sale checkout, financial reporting, and RESTful APIs.',
    tags: ['Node.js', 'MySQL', 'Express', 'REST APIs'],
    github: 'https://github.com/akshayka2004',
    highlights: [
      'Multi-warehouse real-time inventory synchronization',
      'Sub-50ms barcode lookup and POS billing flow',
      'Automated low-stock threshold alerts and purchase order generation',
      'Role-based permissions for Cashiers, Managers, and Admins'
    ],
    theme: {
      bg: 'bg-[#0B132B]',
      accent: 'text-blue-500',
      border: 'border-blue-900/30'
    },
    featuredBadge: true,
    iconType: 'marketsync'
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Marketing Platform',
    subtitle: 'AI-Powered Business Growth',
    category: 'AI & Intelligence',
    description: 'AI-powered marketing platform using FastAPI, React and vector search (FAISS) for intelligent business insights.',
    detailedDescription: 'An autonomous marketing intelligence engine combining generative AI with semantic vector search. Ingests business campaign data, identifies high-affinity customer segments via FAISS embeddings, and autonomously generates tailored multi-channel campaigns.',
    tags: ['FastAPI', 'React', 'FAISS', 'SQLite'],
    github: 'https://github.com/akshayka2004',
    highlights: [
      'High-dimensional vector embeddings with Facebook AI Similarity Search',
      'Asynchronous FastAPI microservice architecture',
      'Autonomous agent workflow for market trend distillation',
      'Interactive React visualization dashboard'
    ],
    theme: {
      bg: 'bg-[#0F172A]',
      accent: 'text-indigo-400',
      border: 'border-indigo-950'
    },
    featuredBadge: false,
    iconType: 'agentic'
  },
  {
    id: 'shopcredit',
    title: 'ShopCredit',
    subtitle: 'Local Business Credit Platform',
    category: 'Fintech & ML',
    description: 'Django-based platform for local businesses with credit management, customer tracking and reports.',
    detailedDescription: 'A modern digital ledger replacing paper udhaar record books for neighbourhood retailers. Layers predictive machine learning on transaction histories to score customer creditworthiness, estimate loan recovery likelihood, and flag high-risk default patterns.',
    tags: ['Django', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/akshayka2004/ShopCredit',
    highlights: [
      'Random Forest classifier scoring borrower default risk',
      'Automated ledger balances with transactional audit logging',
      'Linear regression for recommended credit ceiling calculation',
      'Exportable monthly financial balance sheets'
    ],
    theme: {
      bg: 'bg-[#042F2E]',
      accent: 'text-emerald-400',
      border: 'border-emerald-900/40'
    },
    featuredBadge: false,
    iconType: 'shopcredit'
  }
];

const allProjects: ProjectItem[] = [
  ...featuredProjects,
  {
    id: 'whatzup',
    title: 'whtzup.city',
    subtitle: 'Multi-Tenant SaaS Platform',
    category: 'Multi-Tenant SaaS',
    description: 'A local business discovery and civic engagement platform serving 4 distinct user roles from a Turborepo monorepo.',
    tags: ['Next.js 16', 'NestJS', 'PostgreSQL', 'Prisma', 'BullMQ'],
    github: 'https://github.com/akshayka2004/whatzup.city',
    theme: { bg: 'bg-slate-900', accent: 'text-blue-400', border: 'border-slate-800' },
    iconType: 'default'
  },
  {
    id: 'trailmate',
    title: 'TrailMate',
    subtitle: 'Campus Navigation System',
    category: 'Spatial Backend',
    description: 'Smart campus navigation for Saintgits College with A* graph routing over PostGIS checkpoints and offline-first mobile sync.',
    tags: ['FastAPI', 'PostgreSQL/PostGIS', 'NetworkX', 'Flutter'],
    theme: { bg: 'bg-slate-900', accent: 'text-emerald-400', border: 'border-slate-800' },
    iconType: 'default'
  },
  {
    id: 'facefinder',
    title: 'Face Finder',
    subtitle: 'Client-side Facial Recognition',
    category: 'Computer Vision',
    description: 'Selfie-based face matching across event albums using face-api.js with zero server data retention.',
    tags: ['Next.js 14', 'face-api.js', 'Google Drive API'],
    live: 'https://face-finder-lilac.vercel.app',
    theme: { bg: 'bg-slate-900', accent: 'text-purple-400', border: 'border-slate-800' },
    iconType: 'default'
  },
  {
    id: 'airteach',
    title: 'AirTeach',
    subtitle: 'Hand-gesture Whiteboard',
    category: 'Human-Computer Interaction',
    description: 'In-air interactive whiteboard powered by MediaPipe vision tracking right in the browser.',
    tags: ['Next.js', 'MediaPipe Tasks', 'TypeScript'],
    live: 'https://air-writing-app-wine.vercel.app',
    theme: { bg: 'bg-slate-900', accent: 'text-amber-400', border: 'border-slate-800' },
    iconType: 'default'
  },
  {
    id: 'tricult',
    title: 'Tricult',
    subtitle: 'Convention Token System',
    category: 'Full-Stack Platform',
    description: 'QR-code token economy platform with attendee, volunteer, and organizer management portals.',
    tags: ['React 19', 'Vite', 'Supabase', 'QR'],
    live: 'https://tricult-project.vercel.app',
    theme: { bg: 'bg-slate-900', accent: 'text-cyan-400', border: 'border-slate-800' },
    iconType: 'default'
  },
  {
    id: 'legalcare',
    title: 'Legal Care',
    subtitle: 'Legal Document Assistant',
    category: 'LegalTech',
    description: 'AI document assistant analyzing dense contractual terms with automated plain-English explanations.',
    tags: ['React', 'Tailwind', 'Node.js'],
    live: 'https://legal-care-kappa.vercel.app/home',
    theme: { bg: 'bg-slate-900', accent: 'text-rose-400', border: 'border-slate-800' },
    iconType: 'default'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="container-portfolio">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-normal">
              A few things I've built, learned from, and am proud of.
            </p>
          </div>

          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col group"
            >
              {/* Split Card Layout: Top Left Graphic Preview */}
              <div
                className={`relative w-full aspect-[16/11] rounded-xl ${project.theme.bg} p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]`}
              >
                {/* Featured Badge if present */}
                {project.featuredBadge && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-white/10 text-slate-200 border border-white/10 backdrop-blur-sm">
                    Featured
                  </span>
                )}

                {/* Card Icon Graphics */}
                {project.iconType === 'marketsync' && (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <AKLogo className="w-10 h-10 text-blue-500" />
                    </div>
                    <span className="font-bold text-white text-base tracking-tight">MarketSync</span>
                    <span className="text-[10px] text-slate-400 font-normal">HyperMarket Management System</span>
                  </div>
                )}

                {project.iconType === 'agentic' && (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                      <Sparkles size={22} className="animate-pulse" />
                    </div>
                    <span className="font-bold text-white text-sm tracking-tight px-4 leading-tight">
                      Agentic AI Marketing Platform
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">AI-Powered Business Growth</span>
                  </div>
                )}

                {project.iconType === 'shopcredit' && (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="5" width="20" height="14" rx="3" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <span className="font-bold text-white text-base tracking-tight">ShopCredit</span>
                    <span className="text-[10px] text-emerald-200/70 font-normal">Local Business Credit Platform</span>
                  </div>
                )}
              </div>

              {/* Bottom Card Content */}
              <div className="pt-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Action Link */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-5">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3">{selectedProject.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{selectedProject.subtitle}</p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>{selectedProject.detailedDescription || selectedProject.description}</p>

              {/* Highlights */}
              {selectedProject.highlights && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 mt-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Architectural Capabilities</h4>
                  <ul className="space-y-1.5 pt-1">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
                  >
                    <Github size={14} />
                    <span>View Source</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 px-3 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All Projects Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAllModal(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">All Projects</h3>
              <p className="text-sm text-slate-500 mt-1">Complete collection of engineering systems, applications, and research prototypes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {p.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700">
                            <Github size={15} />
                          </a>
                        )}
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600">
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{p.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{p.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
