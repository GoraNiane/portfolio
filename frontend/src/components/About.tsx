import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Server,
  Code2,
  Workflow,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  Cloud,
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Backend, Spring Cloud & REST',
      description:
        'Conception de microservices et APIs scalables en Java (Spring Boot & Spring Cloud) et Node.js. Maîtrise d’Eureka, API Gateway, architecture découplée et validation stricte.',
      icon: Server,
      accent: 'from-blue-500/15 to-blue-500/5',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Architectures Logicielles & Sécurité',
      description:
        'Séparation en couches découplées, principes SOLID, authentification robuste par jetons JWT et contrôle d’accès basé sur les rôles (Spring Security & RBAC).',
      icon: ShieldCheck,
      accent: 'from-indigo-500/15 to-indigo-500/5',
      borderColor: 'border-indigo-200',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Développement Full Stack',
      description:
        'Capacité à relier les APIs avec des interfaces utilisateurs ergonomiques et modernes en React et TypeScript, tout en maintenant une excellente expérience utilisateur.',
      icon: Layers,
      accent: 'from-sky-500/15 to-sky-500/5',
      borderColor: 'border-sky-200',
      iconColor: 'text-sky-600',
    },
    {
      title: 'DevOps & Intégration Continue (CI/CD)',
      description:
        'Automatisation des tests, conteneurisation avec Docker et configuration de pipelines GitHub Actions pour garantir la non-régression et la reproductibilité.',
      icon: Workflow,
      accent: 'from-cyan-500/15 to-cyan-500/5',
      borderColor: 'border-cyan-200',
      iconColor: 'text-cyan-600',
    },
  ];

  const highlights = [
    { label: 'Formation Académique', value: 'ISEP Diamniadio', sub: 'Développement Logiciel', icon: GraduationCap },
    { label: 'Cœur Backend', value: 'Java, Spring Boot & Cloud', sub: 'Microservices & REST', icon: Cpu },
    { label: 'Écosystème Full Stack', value: 'React & Node.js', sub: 'TypeScript & Tailwind', icon: Code2 },
    { label: 'Approche Qualité', value: 'CI/CD & Tests', sub: 'Automatisation Docker', icon: Sparkles },
  ];

  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section en Noir et Bleu */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Mon Profil & Démarche</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            À propos de{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              moi
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Passionné par l'art d'écrire un code propre, structuré et performant pour résoudre des problématiques concrètes.
          </p>
        </div>

        {/* Bloc Principal : Bio détaillée + Cartes synthétiques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Biographie & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200/90 shadow-sm"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg font-mono">
                GN
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">{profileData.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{profileData.about.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-950">
                {profileData.about.paragraph1}
              </p>
              <p>
                {profileData.about.paragraph2}
              </p>
              <p>
                {profileData.about.paragraph3}
              </p>
            </div>

            {/* Liste de points d'ancrage clés */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-medium">
              {[
                "Étudiant à l'ISEP Diamniadio",
                "Spécialisation Backend Java & Spring Boot",
                "Architecture Spring Cloud & Microservices",
                "Conception d'APIs RESTful sécurisées",
                "Développement Full Stack moderne",
                "Intégration continue & Docker",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grille de 4 repères clés */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-blue-300 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-600 uppercase tracking-wider block font-bold">
                      {item.label}
                    </span>
                    <h4 className="text-base font-bold text-slate-950 mt-0.5">{item.value}</h4>
                    <span className="text-xs text-slate-500 font-medium">{item.sub}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 4 Piliers techniques fondamentaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-5 border border-blue-100`}>
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h4 className="text-base font-bold text-slate-950 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
