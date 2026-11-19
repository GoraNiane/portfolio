import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'backend-api',
    title: 'Backend & API REST Robuste',
    shortDesc: 'Conception d’architectures backend modulaires, sécurisées et performantes avec Java (Spring Boot) ou Node.js / Express.',
    deliverables: [
      'Conception et implémentation d’APIs RESTful évolutives',
      'Authentification sécurisée (JWT, Sessions, OAuth2, RBAC)',
      'Modélisation et optimisation de bases de données relationnelles',
      'Documentation complète des endpoints (Swagger / OpenAPI / Postman)',
    ],
    icon: 'Server',
    badge: 'Spécialité Principale',
  },
  {
    id: 'web-apps',
    title: 'Applications Web & SaaS',
    shortDesc: 'Développement d’applications web interactives de bout en bout, combinant logique backend puissante et frontend fluide.',
    deliverables: [
      'Architecture Full Stack réactive (React / TypeScript)',
      'Tableaux de bord dynamiques et visualisations de données',
      'Gestion d’états applicatifs complexes et formulaires avancés',
      'Connexion temps réel et expérience utilisateur fluide',
    ],
    icon: 'Layers',
    badge: 'Full Stack',
  },
  {
    id: 'management-apps',
    title: 'Applications de Gestion Métier',
    shortDesc: 'Outils sur-mesure pour automatiser la gestion d’activités, le suivi des stocks, des factures, du personnel ou des dossiers clients.',
    deliverables: [
      'Systèmes de gestion de stocks, commandes et facturation',
      'Portails administratifs avec droits d’accès hiérarchisés',
      'Exportation de rapports et génération d’états récapitulatifs',
      'Fiabilité des données et mécanismes d’audit',
    ],
    icon: 'Briefcase',
  },
  {
    id: 'ecommerce',
    title: 'Solutions E-commerce & Vente en Ligne',
    shortDesc: 'Boutiques en ligne optimisées pour la conversion, catalogues dynamiques et parcours d’achat sans friction.',
    deliverables: [
      'Catalogue de produits avec filtres et recherche intuitive',
      'Gestion du panier, tunnel de commande et suivi',
      'Espace d’administration pour le suivi des ventes en direct',
      'Design pensé mobile-first pour maximiser les conversions',
    ],
    icon: 'ShoppingBag',
  },
  {
    id: 'showcase-sites',
    title: 'Sites Vitrines & Landing Pages',
    shortDesc: 'Création de sites internet modernes, percutants et à fort impact visuel pour valoriser votre entreprise ou votre marque.',
    deliverables: [
      'Design sur-mesure moderne, élégant et premium',
      'Adaptation responsive parfaite sur mobile, tablette et PC',
      'Optimisation pour le référencement naturel (SEO)',
      'Temps de chargement ultra-rapide et code propre',
    ],
    icon: 'Globe',
  },
  {
    id: 'maintenance-evolution',
    title: 'Maintenance & Optimisation de Projets',
    shortDesc: 'Audit, correction de bugs, refactorisation de code et ajout de nouvelles fonctionnalités sur vos applications existantes.',
    deliverables: [
      'Audit de code, diagnostic de bugs et résolution rapide',
      'Refactorisation pour améliorer la maintenabilité',
      'Migration vers des technologies modernes (TypeScript, React, etc.)',
      'Renforcement de la sécurité et mise en place de tests automatisés',
    ],
    icon: 'Wrench',
  },
];
