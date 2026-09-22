import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/15 selection:text-blue-700">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
