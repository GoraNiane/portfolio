import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { DynamicIcon } from './DynamicIcon';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleContactService = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const element = document.getElementById('contact');
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
    <section id="services" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Prestations & Freelance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Services{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              proposés
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Un accompagnement sur-mesure pour donner vie à vos projets numériques avec une exigence technique irréprochable.
          </p>
        </div>

        {/* Grille de 6 cartes de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 flex flex-col justify-between group hover:border-blue-400 hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Icône & Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={service.icon} className="w-6 h-6" />
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
                  {service.shortDesc}
                </p>

                {/* Livrables & Avantages */}
                <div className="pt-4 space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de contact contextuel */}
              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => handleContactService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 transition-all duration-200 active:scale-95 group/btn shadow-sm"
                >
                  <span>Demander un devis pour ce service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
