import React from 'react';

// Option 1: Modern Precision Ribbon (Dynamic forward slant with gradient depth)
export const LogoPrecisionRibbon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ak-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ak-grad-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Left slant A */}
    <path d="M7 32L17.5 8H22.5L12 32H7Z" fill="url(#ak-grad-primary)" />
    {/* Crossbar & K connector */}
    <path d="M11 23H22L20 19H12.8L11 23Z" fill="url(#ak-grad-accent)" />
    {/* Upper K wing */}
    <path d="M19.5 19L29 7.5H35L24 20.5L19.5 19Z" fill="url(#ak-grad-accent)" />
    {/* Lower K leg */}
    <path d="M22 18L33 32H27L18 20.5L22 18Z" fill="url(#ak-grad-primary)" />
  </svg>
);

// Option 2: Code Bracket & Chevron Fusion (Software / Backend Engineer signature)
export const LogoCodeChevron = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="chevron-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
    {/* Stylized '<' bracket forming the left half of 'A' */}
    <path d="M18 6L6 20L18 34" stroke="url(#chevron-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Central A-bar slash */}
    <path d="M11 20H23" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
    {/* K arm & leg */}
    <path d="M24 8L34 20L24 32" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 20L34 8" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Option 3: Modern Tech Squircle Badge (SaaS App Icon Style)
export const LogoSquircleBadge = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="badge-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="badge-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    {/* Squircle base */}
    <rect width="40" height="40" rx="10" fill="url(#badge-bg)" />
    <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="9.25" stroke="white" strokeOpacity="0.1" />
    {/* Geometric AK inside */}
    <path d="M10 28L17 12H21L14 28H10Z" fill="url(#badge-glow)" />
    <path d="M20 20L27 12H31L23.5 21L20 20Z" fill="#60A5FA" />
    <path d="M21.5 19.5L29 28H25L19 21L21.5 19.5Z" fill="url(#badge-glow)" />
    <path d="M12.5 22.5H22V20H13.5L12.5 22.5Z" fill="#93C5FD" />
  </svg>
);

// Option 4: Minimalist Bauhaus Monogram (Clean, Ultra-Modern & Iconic)
export const LogoMinimalistMonogram = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left pillar of A */}
    <path d="M8 32V8H13V32H8Z" fill="#2563EB" />
    {/* Apex triangle */}
    <path d="M13 8H22L17.5 17H13V8Z" fill="#1D4ED8" />
    {/* Upper angled arm of K */}
    <path d="M21 17L31 8H36.5L25 18.5L21 17Z" fill="#2563EB" />
    {/* Lower angled leg of K */}
    <path d="M23 17.5L34 32H28L19.5 20.5L23 17.5Z" fill="#3B82F6" />
    {/* Subtle Dot accent */}
    <circle cx="34" cy="8" r="2.5" fill="#60A5FA" />
  </svg>
);
