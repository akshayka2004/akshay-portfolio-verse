import React from 'react';
import { GraduationCap, MapPin, Lightbulb, Code2, Rocket, BarChart3, Award, Camera, Compass, MessageSquare } from 'lucide-react';
import profileImage from '../assets/akshay-profile.webp';

const About = () => {
  const workflow = [
    {
      icon: <Lightbulb className="text-blue-600" size={24} />,
      title: 'Conceptualize',
      desc: 'Deconstructing complex operational problems into modular backend system designs.'
    },
    {
      icon: <Code2 className="text-blue-600" size={24} />,
      title: 'Engineer',
      desc: 'Developing resilient RESTful APIs, relational schemas, and asynchronous job workers.'
    },
    {
      icon: <Rocket className="text-blue-600" size={24} />,
      title: 'Deploy',
      desc: 'Containerizing services with Docker and configuring reliable continuous delivery.'
    },
    {
      icon: <BarChart3 className="text-blue-600" size={24} />,
      title: 'Scale & Monitor',
      desc: 'Profiling database query bottlenecks, caching strategies, and telemetry logs.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-t border-b border-slate-100">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Engineering with Purpose & Precision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            Bridging academic rigor in computer applications with practical expertise in building scalable, production-grade systems.
          </p>
        </div>

        {/* Bio & Academic Highlights */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Hi, I'm Akshay K A — Backend Engineer & Innovator
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Currently pursuing an integrated Master of Computer Applications (MCA) at Saintgits College of Engineering, Kottayam. My journey revolves around architecting robust backend APIs, modeling relational databases, and integrating intelligent vector-search & AI workflows into practical products.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether creating a hypermarket management portal handling high transaction volumes or training credit scoring models on transactional histories, I strive for clean architecture, low latency, and measurable business utility.
              </p>

              {/* Education Highlight Box */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Integrated MCA (5-Year Course)</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5 flex items-center gap-1.5">
                    <MapPin size={13} className="text-blue-600" /> Saintgits College of Engineering • 2022 – 2027
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2.5">
                    <span className="text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                      Current Semester: 9
                    </span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                      Latest SGPA: 8.45
                    </span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                      Current CGPA: 8.45
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm">
              <div className="aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={profileImage}
                  alt="Akshay K A"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Core Stack</p>
                  <p className="text-sm font-bold text-slate-900">Python • Node.js • MySQL</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-medium">Location</p>
                  <p className="text-sm font-bold text-slate-900">Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Methodology / Workflow */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
            How I Approach Engineering Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflow.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">0{idx + 1}</span>
                  <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond the Stack / Interests */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Beyond the Code</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Debate & Public Speaking</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Engaging in structured intellectual discussions, hackathon pitching, and tech community symposiums.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Camera size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Visual Photography</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Capturing moments, natural lighting, and perspectives through portrait and landscape lenses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                <Compass size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Travel & Exploration</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Exploring diverse cultures, regional communities, and outdoor trails across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;