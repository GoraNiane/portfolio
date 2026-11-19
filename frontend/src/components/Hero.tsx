import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Mail,
  FolderGit2,
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Award,
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

  // --- 3D Interactive Tilt Effect for the Photo Card ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['-100%', '200%']), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* COLONNE GAUCHE : ÉCRITURES DE DÉPART (TITRES, PITCH, CTAS) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
          >
            {/* Badge Disponibilité */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm">
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
            </div>

            {/* Titre Principal : GORA NIANE */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950">
                GORA{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  NIANE
                </span>
              </h1>

              {/* Rôle & Spécialité */}
              <div className="flex items-center gap-2 flex-wrap text-base sm:text-xl font-bold">
                <span className="text-slate-950">Software Developer</span>
                <span className="text-slate-300">|</span>
                <span className="text-blue-600 font-semibold">
                  Backend & Full Stack Development
                </span>
              </div>
            </div>

            {/* Texte d'introduction fort */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-4 py-1.5 font-medium bg-blue-50/40 rounded-r-xl">
              « {profileData.headline} »
            </p>

            {/* Badges d'expertise rapide */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: 'Java & Spring Boot', icon: Cpu },
                { label: 'Spring Cloud (Microservices)', icon: Cloud },
                { label: 'APIs REST & JWT', icon: ShieldCheck },
                { label: 'Node.js & TypeScript', icon: Layers },
                { label: 'CI/CD & Docker', icon: Sparkles },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 font-mono font-semibold shadow-sm hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                    {badge.label}
                  </span>
                );
              })}
            </div>

            {/* Boutons d'action (CTAs) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-600 transition-all duration-300 active:scale-95 shadow-sm"
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
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* COLONNE DROITE : PHOTO DE GORA NIANE (DESIGN ULTRA-DYNAMIQUE & MODERNE) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
            
            {/* Conteneur avec perspective 3D interactive au mouvement de la souris */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 35, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              style={{
                perspective: 1200,
              }}
              className="relative w-full max-w-[340px] sm:max-w-md select-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Halo d'ambiance lumineux bleu & cyan derrière la photo */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.65, 0.85, 0.65],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-6 bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-sky-400/35 rounded-3xl blur-3xl -z-10 pointer-events-none"
              />

              {/* Cadre inclinable 3D réactif */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative rounded-3xl p-[3px] bg-gradient-to-tr from-blue-600 via-indigo-500/70 to-sky-400 shadow-2xl transition-shadow duration-300 hover:shadow-blue-500/25"
              >
                {/* Carte intérieure blanche avec reflets subtils */}
                <div className="relative rounded-[22px] bg-white p-2 sm:p-2.5 overflow-hidden">
                  
                  {/* Photo de Gora Niane avec ratio 3:4 portrait parfait */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 group">
                    <img
                      src="/gora-niane.jpg"
                      alt="Gora Niane — Software Developer"
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Éclat lumineux dynamique (Sheen) interactif avec la souris */}
                    <motion.div
                      style={{ x: sheenX }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-10"
                    />

                    {/* Shimmer sweep automatique périodique pour donner vie */}
                    <motion.div
                      animate={{
                        x: ['-150%', '200%'],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 4.5,
                        duration: 1.8,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none z-10"
                    />

                    {/* Gradient doux en dégradé au bas pour sublimer le badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

                    {/* Coins décoratifs technologiques épurés */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none" />

                    {/* Carte flottante Glassmorphic d'identité au bas de la photo */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, type: 'spring', stiffness: 240, damping: 20 }}
                      className="absolute bottom-3 left-3 right-3 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl text-left z-20 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-extrabold text-sm sm:text-base text-slate-950 flex items-center gap-1.5">
                            <span>Gora Niane</span>
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-[11px] sm:text-xs text-blue-700 font-semibold font-mono">
                            Full Stack & Cloud Developer
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg shadow-inner">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                          <span>ISEP</span>
                        </div>
                      </div>

                      {/* Sous-rubrique métrique rapide */}
                      <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-500" />
                          <span>7 Projets Web & SaaS</span>
                        </span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Actif</span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Badge flottant supérieur gauche : Expertise Spring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 280, damping: 18 }}
                  className="absolute -top-3.5 -left-3 sm:-left-5 z-30 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <div className="w-5 h-5 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Zap className="w-3 h-3 text-blue-600" />
                  </div>
                  <span>Spring Boot & Cloud</span>
                </motion.div>

                {/* Badge flottant supérieur droit : Statut en veille */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.45, type: 'spring', stiffness: 280, damping: 18 }}
                  className="absolute -top-3.5 -right-2 sm:-right-4 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-800 shadow-xl"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  <span>En veille active</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Indicateur subtil de défilement vers le bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-16 pb-2 flex flex-col items-center justify-center gap-2 text-slate-500 text-xs font-mono cursor-pointer"
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
