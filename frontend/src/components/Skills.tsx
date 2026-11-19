import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  Workflow,
  Code2,
  Zap,
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { DynamicIcon } from './DynamicIcon';

export const Skills: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const categoryIcons: Record<string, any> = {
    backend: Server,
    frontend: Layout,
    database: Database,
    devops: Workflow,
  };

  const filteredCategories =
    selectedCategoryId === 'all'
      ? skillsData
      : skillsData.filter((c) => c.id === selectedCategoryId);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Technologies & Outils Maîtrisés</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Compétences{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              techniques
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Un écosystème centré sur la robustesse du Backend (Spring Boot & Spring Cloud), la fluidité des interfaces modernes et les pratiques DevOps.
          </p>

          {/* Sélecteur de filtres de catégories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategoryId === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}
            >
              Toutes les compétences
            </button>
            {skillsData.map((category) => {
              const Icon = categoryIcons[category.id] || Code2;
              const isSelected = selectedCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-200 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{category.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des catégories */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => {
              const CategoryIcon = categoryIcons[category.id] || Server;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden"
                >
                  {/* En-tête de la catégorie */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-950 tracking-wide">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                      {category.skills.length} technologies
                    </span>
                  </div>

                  {/* Grille des compétences de cette catégorie */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -3, scale: 1.01 }}
                        className={`p-4 rounded-xl border transition-all duration-200 relative group ${
                          skill.highlight
                            ? 'bg-gradient-to-br from-blue-50/50 via-white to-slate-50 border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-md'
                            : 'bg-white border-slate-200/80 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <DynamicIcon name={skill.icon} className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-sm text-slate-950 group-hover:text-blue-600 transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          {skill.highlight && (
                            <span className="w-2 h-2 rounded-full bg-blue-600 shadow-sm shadow-blue-500" title="Compétence centrale" />
                          )}
                        </div>

                        {skill.description && (
                          <p className="text-xs text-slate-600 group-hover:text-slate-800 leading-relaxed pl-1 font-medium">
                            {skill.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
