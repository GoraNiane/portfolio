import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { ContactFormInput } from '../types';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const validateFrontend = (): boolean => {
    const errors: Partial<Record<keyof ContactFormInput, string>> = {};

    if (!formData.name.trim()) {
      errors.name = 'Veuillez renseigner votre nom.';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Le nom doit comporter au moins 2 caractères.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Format d’adresse email invalide.';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Veuillez préciser le sujet de votre message.';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Le sujet doit comporter au moins 3 caractères.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Veuillez rédiger votre message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit comporter au moins 10 caractères.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof ContactFormInput]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFrontend()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message ||
            'Votre message a bien été envoyé ! Gora Niane vous répondra dans les plus brefs délais.'
        );
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        if (data.errors && Array.isArray(data.errors)) {
          const backendFieldErrors: Partial<Record<keyof ContactFormInput, string>> = {};
          data.errors.forEach((err: any) => {
            if (err.field && err.message) {
              backendFieldErrors[err.field as keyof ContactFormInput] = err.message;
            }
          });
          setFormErrors(backendFieldErrors);
          setStatusMessage(data.message || 'Veuillez corriger les erreurs ci-dessous.');
        } else {
          setStatusMessage(
            data.message ||
              "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
          );
        }
      }
    } catch (err) {
      console.error("Erreur d'envoi contact :", err);
      setSubmitStatus('error');
      setStatusMessage(
        "Impossible d'atteindre le serveur pour le moment. Veuillez m'envoyer un email direct à " +
          profileData.contact.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Échange & Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Me{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              contacter
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Vous avez une opportunité d'emploi, une proposition de stage, ou un projet applicatif à concrétiser ? Échangeons dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne gauche : Coordonnées directes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  Construisons quelque chose ensemble
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Je réponds généralement en moins de 24 heures pour toute proposition de mission, stage ou recrutement.
                </p>
              </div>

              {/* Cartes d'informations directes */}
              <div className="space-y-4">
                {/* Email direct */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block font-bold">Email direct</span>
                      <a
                        href={`mailto:${profileData.contact.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {profileData.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-200/60 transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Profil GitHub */}
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-900 flex items-center justify-center text-white flex-shrink-0">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block font-bold">Dépôts & Code</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        github.com/GoraNiane
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>

                {/* Profil LinkedIn */}
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 border border-blue-500 flex items-center justify-center text-white flex-shrink-0">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block font-bold">Réseau Professionnel</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        LinkedIn (Gora Niane)
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={(profileData.contact as any).whatsappLink || `https://wa.me/221774888464`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-emerald-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block font-bold">WhatsApp / Tél</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {profileData.contact.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                      Direct
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                </a>

                {/* Localisation */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 block font-bold">Disponibilité Géographique</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {profileData.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite : Formulaire interactif sécurisé */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-md relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Envoyez-moi un message</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Tous les champs sont vérifiés avec Zod et protégés contre le spam.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Notification d'état (Succès / Erreur) */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 mb-6"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Message transmis avec succès !</span>
                      <span className="font-medium">{statusMessage}</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3 mb-6"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Erreur de transmission</span>
                      <span className="font-medium">{statusMessage}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Champ Nom */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-800 flex items-center justify-between">
                      <span>Nom complet <span className="text-blue-600">*</span></span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Sarah Diop ou Jean Dupont"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                        formErrors.name
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 mt-1 font-semibold">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Champ Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-800 flex items-center justify-between">
                      <span>Adresse email <span className="text-blue-600">*</span></span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: sarah@entreprise.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                        formErrors.email
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 mt-1 font-semibold">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Champ Sujet */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Objet de votre message <span className="text-blue-600">*</span></span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Opportunité stage Développeur Backend / Projet Web"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors ${
                      formErrors.subject
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-blue-600'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-rose-600 mt-1 font-semibold">{formErrors.subject}</p>
                  )}
                </div>

                {/* Champ Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Votre message <span className="text-blue-600">*</span></span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} / 3000
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Détaillez votre projet, les délais envisagés ou la nature de l'opportunité..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-colors resize-none ${
                      formErrors.message
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-blue-600'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-600 mt-1 font-semibold">{formErrors.message}</p>
                  )}
                </div>

                {/* Bouton de soumission */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer mon message à Gora Niane</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
