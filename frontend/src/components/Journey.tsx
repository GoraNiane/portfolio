import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Building2,
} from 'lucide-react';
import { timelineData } from '../data/timeline';
import { DynamicIcon } from './DynamicIcon';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Évolution & Progression</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Parcours &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              apprentissage
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            De la formation académique rigoureuse à l'ISEP Diamniadio jusqu'à la maîtrise des architectures Backend (Spring Boot & Spring Cloud) et du DevOps.
          </p>
        </div>

        {/* Timeline verticale stylisée */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne médiane lumineuse bleue */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent sm:-translate-x-1/2 opacity-60" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Point central sur la ligne avec icône */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 shadow-md shadow-blue-500/20 z-10">
                    <DynamicIcon name={item.icon} className="w-4 h-4" />
                  </div>

                  {/* Carte d'étape */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group shadow-sm">
                      {/* Période & Institution */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-3">
                        <div className="flex items-center gap-1.5 text-xs text-blue-600 font-mono font-bold">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{item.institution}</span>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                        {item.description}
                      </p>

                      {/* Compétences acquises durant cette étape */}
                      <div className="flex flex-wrap gap-1.5 pt-4">
                        {item.skillsAcquired.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-[11px] font-mono text-blue-800 font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
