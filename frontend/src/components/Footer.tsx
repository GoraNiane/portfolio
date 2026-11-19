import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white pt-16 pb-12 overflow-hidden z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Colonne 1 : Brand & Présentation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-extrabold text-xs text-blue-700">
                  GN
                </div>
              </div>
              <span className="text-lg font-extrabold text-slate-950">
                {profileData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-medium">
              Software Developer passionné par le développement Backend (Spring Boot & Spring Cloud), les architectures logicielles et les solutions Full Stack.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-950 transition-colors shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 hover:text-white hover:bg-blue-600 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 transition-colors shadow-sm"
                title="Email direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              {['hero', 'about', 'skills', 'projects', 'journey', 'services', 'contact'].map(
                (sectionId) => {
                  const labels: Record<string, string> = {
                    hero: 'Accueil',
                    about: 'À propos',
                    skills: 'Compétences',
                    projects: 'Projets',
                    journey: 'Parcours',
                    services: 'Services freelance',
                    contact: 'Me contacter',
                  };
                  return (
                    <li key={sectionId}>
                      <button
                        onClick={() => scrollTo(sectionId)}
                        className="hover:text-blue-600 transition-colors text-left"
                      >
                        {labels[sectionId]}
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Colonne 3 : Compétences phares & contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">
              Stack & Disponibilité
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-slate-700">
              {['Java', 'Spring Boot', 'Spring Cloud', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD'].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[11px]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-1 font-medium">
              <div>ISEP Diamniadio • Sénégal</div>
              <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                Disponible pour stage, CDI & missions
              </div>
            </div>
          </div>
        </div>

        {/* Barre inférieure de copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} Gora Niane. Tous droits réservés.
          </div>

          <div className="flex items-center gap-1 text-slate-600 font-semibold">
            <span>Conçu & développé par Gora Niane</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors shadow-sm font-semibold"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
