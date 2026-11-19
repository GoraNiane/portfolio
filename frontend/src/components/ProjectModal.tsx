import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { Project } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop sombre avec flou */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Boîte Modale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-left max-h-[90vh] flex flex-col"
        >
          {/* En-tête Modale */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-50/70 via-slate-50 to-white border-b border-slate-200 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0 bg-blue-600"
              >
                <DynamicIcon name={project.iconName} className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    {project.type}
                  </span>
                  {project.status === 'completed' ? (
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      En ligne / Réalisé
                    </span>
                  ) : (
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      En cours de développement
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 border border-slate-200 transition-colors"
              aria-label="Fermer la fenêtre modale"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Corps de la modale scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
            {/* Présentation Générale */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Description détaillée</span>
              </h4>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                {project.fullDescription}
              </p>
            </div>

            {/* Fonctionnalités Clés */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Fonctionnalités Principales</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Technique & Choix */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-slate-50 to-white border border-blue-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-800 font-bold mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>Architecture & Choix Techniques</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {project.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-medium">{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack Technologique */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Technologies & Bibliothèques</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-800 font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pied de la modale avec boutons GitHub / Demo */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500 font-mono font-medium">
              Fiche technique • Gora Niane Portfolio
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Dépôt GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 active:scale-95"
                >
                  <span>Visiter le site en direct</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                  Projet en cours de développement
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
