import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  FolderGit2,
  ExternalLink,
  Server,
  ShieldCheck,
  Layers,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './SocialIcons';

export const Hero: React.FC = () => {
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

  const featurePillars = [
    {
      title: 'Backend & Microservices',
      description: 'Architectures robustes et distribuées avec Java, Spring Boot & Spring Cloud.',
      icon: Server,
      badge: 'Spécialisation',
    },
    {
      title: 'APIs REST & Sécurité',
      description: 'Gestion sécurisée des flux, authentification JWT et contrôle d’accès RBAC.',
      icon: ShieldCheck,
      badge: 'Sécurité',
    },
    {
      title: 'Applications Full Stack',
      description: 'Interfaces web fluides et modernes conçues avec React, TypeScript & Tailwind.',
      icon: Layers,
      badge: 'Web Moderne',
    },
    {
      title: 'DevOps & Automatisation',
      description: 'Pipelines CI/CD, conteneurisation Docker et tests automatisés reproductibles.',
      icon: Workflow,
      badge: 'Qualité & CI/CD',
    },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        {/* Badge Disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
          </span>
          <span className="text-xs font-bold text-slate-800">
            {profileData.availability.label}
          </span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-extrabold border border-blue-200">
            Ouvert
          </span>
        </motion.div>

        {/* Titre Principal : GORA NIANE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="space-y-3 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950">
            GORA{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              NIANE
            </span>
          </h1>

          {/* Rôle & Spécialité */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap text-lg sm:text-2xl font-bold">
            <span className="text-slate-950">Software Developer</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-600 font-bold">
              Backend & Full Stack Development
            </span>
          </div>
        </motion.div>

        {/* Pitch / Message clé */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          « {profileData.headline} »
        </motion.p>

        {/* Boutons d'action principaux (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
          >
            <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Découvrir mes projets</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-600 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <Mail className="w-4 h-4 text-blue-600" />
            <span>Me contacter</span>
          </button>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-950 hover:bg-black transition-all duration-300 shadow-sm"
            title="Consulter le profil GitHub de Gora Niane"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>

        {/* 4 Piliers d'expertise visuelle (Cartes claires sans code) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left"
        >
          {featurePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Indicateur subtil de défilement vers le bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center gap-2 text-slate-500 text-xs font-mono cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="font-semibold text-slate-600">Défiler pour explorer</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-2 rounded-full bg-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
