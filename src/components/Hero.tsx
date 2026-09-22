import React from 'react';
import { ArrowRight, Send, GraduationCap, BarChart2, Star, MapPin, Coffee } from 'lucide-react';
import profileImage from '../assets/akshay-profile.webp';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 hero-ambient overflow-hidden">
      <div className="container-portfolio relative">
        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Education Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>MCA (Integrated)</span>
              <span className="text-slate-400">•</span>
              <span>Saintgits College of Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Building digital solutions <br className="hidden sm:inline" />
              that <span className="text-blue-600">create real impact.</span>
            </h1>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal mt-6 mb-8">
              I'm <strong className="font-semibold text-slate-900">Akshay K A</strong>, an MCA (Integrated) student and backend developer, passionate about building scalable web applications, working with modern technologies and exploring AI-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:shadow group"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-blue-50/40 text-slate-800 border border-blue-600 rounded-lg font-medium text-sm transition-all group"
              >
                <span>Let's Connect</span>
                <Send size={15} className="text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Open to Opportunities & Signature Row */}
            <div className="w-full mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Currently open to</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Internships <span className="text-slate-300">•</span> Full-time Opportunities <span className="text-slate-300">•</span> Collaborative Projects
                  </p>
                </div>
              </div>

              {/* Blue Signature */}
              <div className="sm:self-end pr-4">
                <span className="font-signature font-bold text-3xl sm:text-4xl text-blue-600 -rotate-6 inline-block select-none transform hover:scale-105 transition-transform">
                  Akshay K A
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols - Profile Photo + Floating Quote */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
              {/* Photo Card with rounded corners */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-[4/5]">
                <img
                  src={profileImage}
                  alt="Akshay K A"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -top-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-slate-100 max-w-[170px] z-20 text-left">
                <span className="text-2xl text-slate-400 font-serif leading-none block select-none">“</span>
                <p className="font-semibold text-slate-800 text-sm leading-snug mt-1">
                  Curiosity<br />
                  Builds<br />
                  Better<br />
                  Tomorrows.
                </p>
                <div className="w-5 h-0.5 bg-blue-600 mt-2.5 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Vertical Scroll Indicator (XL screens) */}
        <div className="hidden xl:flex flex-col items-center absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[10px] tracking-widest text-slate-400 uppercase -rotate-90 origin-center mb-6 font-medium">
            SCROLL
          </span>
          <div className="w-[1px] h-12 bg-slate-300" />
        </div>

        {/* Metrics / Highlights Bar */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 mt-14 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-slate-100">
            {/* Stat 1: Current Semester */}
            <div className="flex items-center gap-4 lg:px-6 first:pl-0">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 leading-none">9</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Current Semester</div>
                <div className="text-[11px] text-slate-400">MCA (Integrated)</div>
              </div>
            </div>

            {/* Stat 2: Latest SGPA */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BarChart2 size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 leading-none">8.45</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Latest SGPA</div>
                <div className="text-[11px] text-slate-400">(Sem 9)</div>
              </div>
            </div>

            {/* Stat 3: Current CGPA */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Star size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 leading-none">8.45</div>
                <div className="text-xs text-slate-600 font-medium mt-1">Current CGPA</div>
                <div className="text-[11px] text-slate-400">Overall Academic</div>
              </div>
            </div>

            {/* Stat 4: Location */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight">Kottayam, Kerala</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Based in India</div>
              </div>
            </div>

            {/* Stat 5: Always Learning */}
            <div className="flex items-center gap-4 lg:px-6 last:pr-0">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Coffee size={22} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight">Always learning</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Building. Exploring. Growing.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;