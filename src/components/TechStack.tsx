import React, { useState } from 'react';

type TechItem = {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Others';
  icon: React.ReactNode;
};

const techItems: TechItem[] = [
  {
    name: 'Python',
    category: 'Languages',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.922 1.25C6.31 1.25 6.643 3.684 6.643 3.684L6.65 6.2H12.1V6.99H4.37C2.083 6.99 1.25 8.91 1.25 11.236C1.25 13.978 2.76 15.358 4.37 15.358H6.01V13.067C6.01 10.428 8.163 10.457 8.163 10.457H13.62C15.82 10.457 15.918 8.448 15.918 8.448V3.684C15.918 1.492 13.82 1.25 11.922 1.25ZM9.307 2.637C9.882 2.637 10.347 3.102 10.347 3.676C10.347 4.251 9.882 4.717 9.307 4.717C8.733 4.717 8.267 4.251 8.267 3.676C8.267 3.102 8.733 2.637 9.307 2.637Z" fill="#387EB8" />
        <path d="M12.078 22.75C17.69 22.75 17.357 20.316 17.357 20.316L17.35 17.8H11.9V17.01H19.63C21.917 17.01 22.75 15.09 22.75 12.764C22.75 10.022 21.24 8.642 19.63 8.642H17.99V10.933C17.99 13.572 15.837 13.543 15.837 13.543H10.38C8.18 13.543 8.082 15.552 8.082 15.552V20.316C8.082 22.508 10.18 22.75 12.078 22.75ZM14.693 21.363C14.118 21.363 13.653 20.898 13.653 20.324C13.653 19.749 14.118 19.283 14.693 19.283C15.267 19.283 15.733 19.749 15.733 20.324C15.733 20.898 15.267 21.363 14.693 21.363Z" fill="#FFE052" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.77V19.33L12 25.1L22 19.33V7.77L12 2Z" fill="#539E43" />
        <path d="M12 4.2L4 8.82V18.06L12 22.68L20 18.06V8.82L12 4.2Z" fill="#333333" />
        <path d="M10.2 9H13.8V15H10.2V9Z" fill="#539E43" />
      </svg>
    ),
  },
  {
    name: 'Nest.js',
    category: 'Backend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 15.5C3.5 9 8.5 3.5 16 2.5C14.5 5 15 8.5 17.5 10.5C20 12.5 22.5 12 23 15C23.5 18 21 21 16.5 22C12 23 7.5 21.5 5 19L10 16L6 14L1.5 15.5Z" fill="#E0234E" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="black" />
        <path d="M15.5 8H17.5V16H15.5V8Z" fill="white" />
        <path d="M7 8H9L16.2 17.4L14.7 18.5L7 8.5V8Z" fill="white" />
        <path d="M7 8H9V16H7V8Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#05998B" />
        <path d="M13 3L6 13H11L9.5 21L18 10H13L14.5 3H13Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Django',
    category: 'Backend',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <text x="6" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">dj</text>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M2.5 14.5C4 10 9 6.5 15 7.5C18 8 20.5 10 21.5 12C20.5 13 18.5 12.5 16 12C12 11.2 8 13 6 16C5 17.5 3.5 18 2.5 17.5C1.8 17 2 15.5 2.5 14.5Z" fill="#00618A" />
        <path d="M15 7.5C16.5 5 19 3.5 21 4C21 5.5 19.5 7 18 8C17 8.5 16 8 15 7.5Z" fill="#E48E00" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 4 5.5 4 10C4 13.5 5.5 16 8 17.5V21L12 19L16 21V17.5C18.5 16 20 13.5 20 10C20 5.5 17.5 2 12 2Z" fill="#336791" />
        <circle cx="9" cy="9.5" r="1.5" fill="white" />
        <circle cx="15" cy="9.5" r="1.5" fill="white" />
        <path d="M10 13H14C14 15 13 16 12 16C11 16 10 15 10 13Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'Tools',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M3 13.5C4 18 8 20.5 13 20.5C18.5 20.5 22 17 22.5 13C21 13 19 13.5 18 14.5C17.5 12 15 11 13 11H3.5C3.2 11.8 3 12.6 3 13.5Z" fill="#2496ED" />
        <rect x="7" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="13" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="10" y="5" width="2" height="2" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M22.5 10.7L13.3 1.5C12.6 0.8 11.4 0.8 10.7 1.5L1.5 10.7C0.8 11.4 0.8 12.6 1.5 13.3L10.7 22.5C11.4 23.2 12.6 23.2 13.3 22.5L22.5 13.3C23.2 12.6 23.2 11.4 22.5 10.7Z" fill="#F05032" />
        <circle cx="8" cy="12" r="2" fill="white" />
        <circle cx="16" cy="12" r="2" fill="white" />
        <circle cx="12" cy="8" r="1.5" fill="white" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    category: 'Others',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <text x="2" y="14" fill="#232F3E" fontSize="9" fontWeight="900" fontFamily="sans-serif">aws</text>
        <path d="M4 17C9 20 15 20 20 17" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 16L21 17L18.5 18.5" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    category: 'Others',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13" rx="6" ry="8" fill="#333333" />
        <ellipse cx="12" cy="14" rx="4" ry="6" fill="#F4F4F4" />
        <circle cx="10" cy="8" r="1" fill="#333333" />
        <circle cx="14" cy="8" r="1" fill="#333333" />
        <polygon points="12,9 10.5,11 13.5,11" fill="#FFA500" />
        <polygon points="7,20 11,19 9,21" fill="#FFA500" />
        <polygon points="17,20 13,19 15,21" fill="#FFA500" />
      </svg>
    ),
  },
];

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'Others'] as const;
type Category = typeof categories[number];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filteredItems = activeTab === 'All'
    ? techItems
    : techItems.filter(item => item.category === activeTab);

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container-portfolio">
        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Tech Stack
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Badges Horizontal Strip */}
        <div className="pt-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max pb-2">
            {filteredItems.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="p-1 rounded-md group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-slate-950 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
