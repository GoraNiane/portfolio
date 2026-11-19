import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  Clock,
  Globe2,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project, ProjectStatusFilter } from '../types';
import { ProjectModal } from './ProjectModal';
import { DynamicIcon } from './DynamicIcon';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectStatusFilter>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Compteurs dynamiques
  const countAll = projectsData.length;
  const countCompleted = projectsData.filter((p) => p.status === 'completed').length;
  const countInProgress = projectsData.filter((p) => p.status === 'in_progress').length;

  const filterTabs: { id: ProjectStatusFilter; label: string; count: number; icon: any }[] = [
    { id: 'all', label: 'Tous les projets', count: countAll, icon: FolderGit2 },
    { id: 'completed', label: 'Projets réalisés (En ligne)', count: countCompleted, icon: Globe2 },
    { id: 'in_progress', label: 'Projets en cours', count: countInProgress, icon: Clock },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.status === selectedFilter);

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Portfolio & Réalisations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Projets réalisés &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              en cours
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Explorez mes applications déployées en production ainsi que mes projets d'architecture logicielle en cours de développement.
          </p>

          {/* Filtres par statut : Tous, Réalisés, En cours */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20'
                      : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-200 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des cartes de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLive = project.status === 'completed';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-blue-400 hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  <div>
                    {/* Mockup visuel d'en-tête de carte */}
                    <div className="relative p-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white border-b border-slate-100 overflow-hidden">
                      {/* Barre supérieure avec indicateur d'état */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                          <span className="ml-2 text-[11px] font-mono text-slate-500 font-semibold">
                            {project.id}.gn-architecture
                          </span>
                        </div>

                        {/* Badge de statut : En ligne vs En cours */}
                        {isLive ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>En ligne / Réalisé</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <span>En cours de dev</span>
                          </span>
                        )}
                      </div>

                      {/* Titre et icône */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md bg-blue-600">
                          <DynamicIcon name={project.iconName} className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                              {project.type}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Corps de la carte */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {project.description}
                      </p>

                      {/* Aperçu des fonctionnalités */}
                      <div className="space-y-1.5 pt-1">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Badges technologiques */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-blue-50/70 border border-blue-100 text-[11px] font-mono text-blue-800 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pied de carte avec actions directes */}
                  <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 mt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-blue-600 group/btn transition-colors focus:outline-none"
                    >
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span>Architecture & Détails</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-slate-400 group-hover/btn:text-blue-600" />
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Bouton direct vers le site en ligne pour les projets réalisés */}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 active:scale-95"
                          title="Ouvrir le site déployé en direct"
                        >
                          <span>Visiter le site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* GitHub icon */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors"
                          title="Voir le code source sur GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Fenêtre Modale de détails du projet */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
