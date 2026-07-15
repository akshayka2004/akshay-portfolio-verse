import React from 'react';
import { ArrowRight, Github, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import whatzupImg from '../assets/whatzup.webp';
import airteachImg from '../assets/airteach.webp';
import facefinderImg from '../assets/facefinder.webp';
import legalCareImg from '../assets/legal-care.webp';
import tricultImg from '../assets/tricult.webp';

type CaseStudy = {
  title: string;
  category: string;
  image?: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  scope: string[];
  tags: string[];
  github?: string;
  link?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "whtzup.city",
    category: "Multi-Tenant SaaS Platform",
    image: whatzupImg,
    description:
      "A local business discovery and civic engagement platform serving four distinct roles — residents, business owners, moderators, and super admins — from a single Turborepo monorepo.",
    problem:
      "Local business data, civic notices, and promotional offers live in disconnected silos, leaving residents without a trusted source and business owners without reach.",
    solution:
      "Split the system into a Next.js front end, a NestJS REST API, and a dedicated queue worker, so that OCR bill verification and notification fan-out run off the request path.",
    impact: "Four role-based portals on one shared domain model",
    scope: [
      "69 Prisma models",
      "49 API modules",
      "77 app routes",
      "BullMQ + Redis worker",
    ],
    tags: ["Next.js 16", "NestJS", "PostgreSQL", "Prisma", "BullMQ", "Typesense"],
    github: "https://github.com/akshayka2004/whatzup.city",
  },
  {
    title: "TrailMate",
    category: "Campus Navigation System",
    image: undefined,
    description:
      "Smart campus navigation for Saintgits College — a routing backend over a real checkpoint graph, paired with an offline-first Flutter client and a React admin portal.",
    problem:
      "New students and visitors cannot navigate a multi-building campus, and network coverage indoors is too unreliable to depend on a live maps API.",
    solution:
      "Modelled the campus as a weighted graph in PostGIS and ran A* over it with a haversine heuristic that is admissible, so routes stay optimal while the mobile client caches snapshots for offline use.",
    impact: "Optimal indoor routing with zero network dependency",
    scope: [
      "A* over NetworkX graph",
      "PostGIS geometry",
      "QR checkpoint scanning",
      "Offline snapshot sync",
    ],
    tags: ["FastAPI", "PostgreSQL/PostGIS", "NetworkX", "Flutter", "SQLAlchemy 2.0"],
  },
  {
    title: "ShopCredit",
    category: "ML Credit Scoring",
    image: undefined,
    description:
      "A digital ledger that replaces the paper 'udhaar' book for neighbourhood shops, then layers machine learning on the repayment history to score risk.",
    problem:
      "Small shopkeepers extend informal credit from memory and paper, with no way to judge which customers are likely to default.",
    solution:
      "Engineered features from transaction history and trained three models — a Random Forest for default risk, a Linear Regression for credit limits, and K-Means to cluster customers into segments.",
    impact: "Three trained models scoring risk, limit, and segment",
    scope: [
      "Random Forest risk",
      "Linear Regression limits",
      "K-Means segmentation",
      "Heuristic cold-start fallback",
    ],
    tags: ["Django", "scikit-learn", "pandas", "NumPy", "MySQL"],
    github: "https://github.com/akshayka2004/ShopCredit",
  },
  {
    title: "Exam Proctoring",
    category: "Computer Vision",
    image: undefined,
    description:
      "A real-time proctoring system that watches a webcam feed for the behaviours that signal cheating, and locks the screen down when the candidate leaves the exam window.",
    problem:
      "Remote exams have no invigilator, and heavyweight proctoring stacks depend on dlib builds that fail on ordinary student hardware.",
    solution:
      "Combined OpenCV's LBF facemark model with YOLOv3-tiny object detection, dropping the dlib dependency entirely so the system runs on a plain webcam.",
    impact: "Six behavioural signals tracked per frame",
    scope: [
      "68-point landmarks",
      "Gaze + blink + head pose",
      "YOLOv3-tiny objects",
      "Focus-loss blackout",
    ],
    tags: ["Python", "OpenCV", "YOLOv3-tiny", "Flask", "NumPy"],
    github:
      "https://github.com/akshayka2004/Artificial-Intelligence-based-Online-Exam-Proctoring-System",
  },
];

const moreWork = [
  {
    title: "Face Finder",
    category: "Facial Recognition Search",
    image: facefinderImg,
    description:
      "Take a selfie and find every photo of yourself in an event gallery. Imports straight from a Google Drive folder; recognition runs in the browser, so no face data leaves the device.",
    tags: ["Next.js 14", "face-api.js", "Google Drive API", "Vercel Blob"],
    link: "https://face-finder-lilac.vercel.app",
  },
  {
    title: "AirTeach",
    category: "Gesture Interaction",
    image: airteachImg,
    description:
      "A whiteboard you draw on with mid-air hand gestures — index finger draws, two fingers erase, four-finger hold clears. Hand tracking runs entirely in the browser.",
    tags: ["Next.js", "MediaPipe Tasks Vision", "TypeScript"],
    link: "https://air-writing-app-wine.vercel.app",
  },
  {
    title: "Tricult",
    category: "Token & Gaming Hub",
    image: tricultImg,
    description:
      "Token system built for a gaming convention. Three portals — player, volunteer, admin — handle QR-scanned transactions, recharges, and live session monitoring.",
    tags: ["React 19", "Vite", "Supabase", "QR"],
    link: "https://tricult-project.vercel.app",
  },
  {
    title: "Legal Care",
    category: "Legal Document Assistant",
    image: legalCareImg,
    description:
      "Three tools for people facing legal paperwork without a lawyer: a document drafter, an analyser for dense contracts, and a chatbot for quick questions.",
    tags: ["React", "Tailwind", "Node.js"],
    link: "https://legal-care-kappa.vercel.app/home",
  },
];

const Fallback = ({ title, tags }: { title: string; tags: string[] }) => (
  <div className="relative w-full aspect-[16/10] rounded-[3rem] border border-black/[0.04] premium-shadow bg-slate-900 overflow-hidden flex flex-col items-center justify-center gap-6">
    <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
    <span className="text-white/90 text-4xl md:text-5xl font-black uppercase tracking-tighter text-center px-10 leading-none">
      {title}
    </span>
    <div className="flex flex-wrap gap-2 justify-center px-12">
      {tags.slice(0, 3).map((t) => (
        <span
          key={t}
          className="px-4 py-1.5 rounded-full border border-white/15 text-white/60 text-[9px] font-black uppercase tracking-[0.2em]"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background relative">
      <div className="container-portfolio">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl"
          >
            Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-foreground mb-8 uppercase leading-[0.85] tracking-tighter"
          >
            Case <span className="text-gradient">Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto tracking-tight"
          >
            A selection of production-grade systems and research-driven applications built with architectural precision.
          </motion.p>
        </div>

        <div className="space-y-48">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 lg:gap-32 items-center`}
            >
              {/* Image Side - Refined with depth */}
              <div className="w-full lg:w-[55%] group relative">
                <div className="absolute -inset-10 bg-primary/[0.03] rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
                {project.image ? (
                  <div className="relative overflow-hidden rounded-[3rem] border border-black/[0.04] premium-shadow group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-1000 ease-out">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  </div>
                ) : (
                  <Fallback title={project.title} tags={project.tags} />
                )}
              </div>

              {/* Content Side - Hierarchy & Impact */}
              <div className="w-full lg:w-[45%] space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] bg-primary/[0.04] px-5 py-2 rounded-full border border-primary/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-7xl font-black text-foreground leading-[0.85] uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl tracking-tight">
                    {project.description}
                  </p>
                </div>

                {/* Impact Highlight - Premium Treatment */}
                <div className="p-10 bg-slate-50/50 rounded-[2.5rem] border border-black/[0.03] space-y-6 relative overflow-hidden group/impact">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Zap size={40} className="text-primary" />
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-primary/30" /> What I Built
                  </span>
                  <p className="text-2xl md:text-3xl font-black text-foreground leading-none uppercase tracking-tighter">
                    {project.impact}
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2 relative">
                    {project.scope.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-white text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-black/[0.06] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 ease-[0.23,1,0.32,1] shadow-2xl shadow-black/5 group"
                    >
                      Try it out
                      <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-700 ease-out" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-black/[0.08] text-foreground font-black text-[11px] uppercase tracking-[0.2em] hover:-translate-y-2 hover:border-black/20 transition-all duration-700 ease-[0.23,1,0.32,1]"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary work - compact grid */}
        <div className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
              Also Shipped
            </span>
            <h3 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter mt-6 leading-none">
              More Work
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {moreWork.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }}
                className="group block rounded-[2.5rem] border border-black/[0.04] p-4 hover:-translate-y-2 transition-all duration-700 ease-[0.23,1,0.32,1] premium-shadow hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
              >
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div className="p-8 space-y-5">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                    {project.category}
                  </span>
                  <h4 className="text-3xl font-black text-foreground uppercase tracking-tighter leading-none flex items-center gap-3">
                    {project.title}
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    />
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed tracking-tight">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white text-muted-foreground text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-black/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
