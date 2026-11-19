import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceSubject, setSelectedServiceSubject] = useState<string>('');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'services', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceSubject(`Demande de devis / échange : ${serviceTitle}`);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900">
      {/* Arrière-plan dynamique et immersif */}
      <BackgroundEffects />

      {/* Barre de navigation fixe */}
      <Navbar activeSection={activeSection} />

      {/* Contenu principal */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services onSelectService={handleSelectService} />
        <Contact initialSubject={selectedServiceSubject} />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default App;
