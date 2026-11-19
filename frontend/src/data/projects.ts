import { Project } from '../types';

export const projectsData: Project[] = [
  // ==========================================
  // PROJETS EN COURS DE DÉVELOPPEMENT
  // ==========================================
  {
    id: 'salitrans',
    title: 'Salitrans',
    subtitle: 'Plateforme de transport, logistique & gestion de flotte',
    type: 'Transport & Logistique',
    status: 'in_progress',
    statusLabel: 'En cours de développement',
    category: 'fullstack',
    featured: true,
    iconName: 'Truck',
    accentColor: '#2563EB',
    description:
      'Solution numérique complète dédiée au transport de voyageurs et de marchandises, à la traçabilité des expéditions et à la gestion centralisée des flottes de véhicules.',
    fullDescription:
      'Salitrans est une plateforme d’ingénierie logicielle conçue pour relever les défis de mobilité et de logistique. Elle permet aux compagnies de transport de planifier les trajets, gérer la billetterie en ligne, suivre en temps réel la position des véhicules et piloter les coûts opérationnels.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'React', 'Docker', 'JWT'],
    features: [
      'Réservation en ligne de billets de voyage et gestion des passagers',
      'Suivi et traçabilité des expéditions de colis et fret logistique',
      'Tableau de bord de gestion de la flotte (maintenance, affectation, kilométrage)',
      'Portails dédiés pour les conducteurs, les régulateurs et les clients',
      'Architecture microservices distribuée pour absorber les pics de charge',
      'Génération automatique de bordereaux de route et facturation numérique',
    ],
    architectureHighlights: [
      'Architecture microservices structurée avec Spring Cloud (Service Discovery Eureka, Gateway)',
      'Base de données relationnelle PostgreSQL modélisée pour l’historique des trajets',
      'Sécurisation des accès et gestion des permissions basée sur les rôles (RBAC)',
      'Conteneurisation des services applicatifs via Docker pour faciliter le déploiement',
    ],
    githubUrl: 'https://github.com/GoraNiane/Salitrans',
    demoUrl: undefined,
  },
  {
    id: 'medigest',
    title: 'MediGest',
    subtitle: 'Plateforme SaaS de gestion hospitalière & clinique',
    type: 'SaaS / Santé & Architecture',
    status: 'in_progress',
    statusLabel: 'En cours de développement',
    category: 'fullstack',
    featured: true,
    iconName: 'Activity',
    accentColor: '#2563EB',
    description:
      'Plateforme logicielle robuste conçue pour digitaliser et orchestrer les processus cliniques, la gestion des praticiens et le suivi des patients dans les structures de santé.',
    fullDescription:
      'MediGest est une solution SaaS avancée répondant aux exigences strictes de gestion médicale. Elle unifie la gestion administrative et le parcours de soin des patients à travers une architecture sécurisée, modulaire et hautement évolutive.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'React', 'PostgreSQL', 'JWT', 'Spring Security'],
    features: [
      'Gestion centralisée des dossiers patients et historique médical confidentiel',
      'Ordonnancement et gestion des créneaux de disponibilité des médecins',
      'Système de consultations médicales, comptes rendus et prescriptions',
      'Prise en charge multi-établissements (cliniques, centres de diagnostic)',
      'Authentification sécurisée avec JWT et contrôle d’accès granulaire (RBAC)',
      'Architecture en couches découplées garantissant la maintenabilité',
    ],
    architectureHighlights: [
      'Backend développé avec Java et Spring Boot 3 suivant les principes SOLID',
      'Gestion des microservices interdépendants facilitée par Spring Cloud',
      'Persistance et requêtage optimisés avec Spring Data JPA / Hibernate sur PostgreSQL',
      'Sécurisation méthodologique avec @PreAuthorize et filtres JWT stricts',
    ],
    githubUrl: 'https://github.com/GoraNiane/MediGest',
    demoUrl: undefined,
  },

  // ==========================================
  // PROJETS DÉJÀ RÉALISÉS & DÉPLOYÉS EN LIGNE
  // ==========================================
  {
    id: 'terangua-food',
    title: 'Teranga Food',
    subtitle: 'Menu Digital & Restaurant Gastronomique',
    type: 'FoodTech & Restauration',
    status: 'completed',
    statusLabel: 'En ligne / Déployé',
    category: 'fullstack',
    featured: true,
    iconName: 'Utensils',
    accentColor: '#2563EB',
    description:
      'Application web moderne de présentation culinaire et menu digital interactif, offrant une consultation fluide de la carte et un parcours de commande intuitif.',
    fullDescription:
      'Teranga Food modernise l’expérience de restauration. La plateforme permet aux clients de parcourir les spécialités culinaires avec des visuels soignés, de sélectionner leurs formules et d’interagir directement avec le restaurant.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Node.js'],
    features: [
      'Catalogue dynamique des plats, spécialités et formules gastronomiques',
      'Expérience mobile responsive ultra-fluide pensée pour les smartphones',
      'Parcours de sélection et commande ergonomique sans friction',
      'Mise en avant des créations culinaires et événements du restaurant',
    ],
    architectureHighlights: [
      'Développement frontend moderne avec React et TypeScript',
      'Styling utilitaire avec Tailwind CSS garantissant des temps de chargement records',
      'Déploiement et intégration continue sur Vercel avec certificats SSL et CDN mondial',
    ],
    githubUrl: 'https://github.com/GoraNiane/Terangua-Food',
    demoUrl: 'https://terangua-food.vercel.app',
  },
  {
    id: 'senegal-top-tour',
    title: 'Senegal Top Tour',
    subtitle: 'Portail de Voyages, Excursions & Tourisme d’Exception',
    type: 'Tourisme & Voyages',
    status: 'completed',
    statusLabel: 'En ligne / Déployé',
    category: 'fullstack',
    featured: true,
    iconName: 'Compass',
    accentColor: '#2563EB',
    description:
      'Plateforme immersive de valorisation du patrimoine touristique sénégalais : découverte de destinations, réservation d’excursions et circuits sur-mesure.',
    fullDescription:
      'Senegal Top Tour invite les voyageurs à explorer le Sénégal autrement. Le site présente des circuits touristiques complets (Île de Gorée, Sine Saloum, Saint-Louis, Casamance) avec fiches détaillées, galeries photos et formulaires de réservation.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    features: [
      'Catalogue interactif des circuits, randonnées et excursions au Sénégal',
      'Présentation immersive des étapes de voyage avec photographies haute définition',
      'Formulaire de demande de devis et réservation d’excursions guidées',
      'Navigation optimisée pour les touristes locaux et internationaux',
    ],
    architectureHighlights: [
      'Architecture React avec typage TypeScript rigoureux',
      'Animations de découverte fluides orchestrées avec Framer Motion',
      'Optimisation SEO et temps de réponse ultra-rapide sur Vercel',
    ],
    githubUrl: 'https://github.com/GoraNiane',
    demoUrl: 'https://senegaltoptour.vercel.app',
  },
  {
    id: 'naja-rose-store',
    title: 'Naja Rose Store',
    subtitle: 'Boutique E-commerce Mode & Élégance Féminine',
    type: 'E-Commerce & Mode',
    status: 'completed',
    statusLabel: 'En ligne / Déployé',
    category: 'fullstack',
    featured: true,
    iconName: 'ShoppingBag',
    accentColor: '#2563EB',
    description:
      'Boutique en ligne moderne dédiée au prêt-à-porter et à l’élégance féminine, avec catalogue dynamique, panier d’achat réactif et commande rapide.',
    fullDescription:
      'Naja Rose Store propose une expérience d’achat en ligne raffinée. Les clients peuvent explorer les collections de vêtements et accessoires, filtrer les modèles disponibles et passer commande en toute simplicité.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'E-Commerce', 'Vercel'],
    features: [
      'Catalogue visuel des articles avec filtres par catégories et collections',
      'Gestion dynamique du panier d’achat et calcul automatique du montant',
      'Tunnel de validation de commande simplifié adapté au marché local',
      'Design chic et moderne valorisant les produits de mode',
    ],
    architectureHighlights: [
      'Interface construite en composants React réutilisables',
      'State management réactif pour une mise à jour instantanée du panier',
      'Déploiement haute performance et disponibilité garantie sur Vercel',
    ],
    githubUrl: 'https://github.com/GoraNiane',
    demoUrl: 'https://naja-rose-store.vercel.app',
  },
  {
    id: 'bby-by-salma',
    title: 'BBS by Salma',
    subtitle: 'Cosmétiques d’Exception, Soins & Savons Naturels',
    type: 'E-Commerce & Beauté',
    status: 'completed',
    statusLabel: 'En ligne / Déployé',
    category: 'fullstack',
    featured: true,
    iconName: 'Sparkles',
    accentColor: '#2563EB',
    description:
      'Site e-commerce dédié à la beauté naturelle : présentation et vente de laits de corps, savons artisanaux et soins cosmétiques haut de gamme.',
    fullDescription:
      'BBS by Salma sublime les rituels de beauté avec une gamme de soins naturels. La plateforme offre une vitrine élégante des produits avec descriptions détaillées des bienfaits, avis clients et prise de commande fluide.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'E-Commerce'],
    features: [
      'Présentation valorisante des laits de corps, savons et soins bio',
      'Fiches produits détaillées avec composition et conseils d’application',
      'Système de panier fluide et commande directe en quelques clics',
      'Adaptation mobile parfaite pour les achats depuis smartphone',
    ],
    architectureHighlights: [
      'Code propre et modulaire en TypeScript',
      'Mise en page épurée et moderne avec Tailwind CSS',
      'Hébergement optimisé et sécurisé sur Vercel',
    ],
    githubUrl: 'https://github.com/GoraNiane',
    demoUrl: 'https://bby-by-salma.vercel.app',
  },
  {
    id: 'automag-ebon',
    title: 'AutoElite Sénégal (Automag)',
    subtitle: 'Plateforme Automobile & Vente de Véhicules Certifiés',
    type: 'Automobile & Concession',
    status: 'completed',
    statusLabel: 'En ligne / Déployé',
    category: 'fullstack',
    featured: true,
    iconName: 'Car',
    accentColor: '#2563EB',
    description:
      'Showroom digital et catalogue interactif de véhicules premium et garantis au Sénégal, avec fiches techniques détaillées et mise en relation directe.',
    fullDescription:
      'AutoElite Sénégal (Automag) réinvente la recherche automobile. Les acheteurs accèdent à un parc de véhicules récents (berlines, SUV, 4x4) avec spécifications techniques, options, kilométrage certifié et demande de rendez-vous.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Automobile'],
    features: [
      'Catalogue interactif des véhicules disponibles avec filtres avancés',
      'Fiches techniques complètes (motorisation, transmission, options, année)',
      'Galerie photos haute résolution sous tous les angles du véhicule',
      'Bouton de contact et réservation d’essai en concession',
    ],
    architectureHighlights: [
      'Composants React optimisés pour l’affichage rapide de galeries médias',
      'Structure de données claire facilitant l’ajout régulier de nouveaux véhicules',
      'Performances de chargement de pointe grâce au CDN mondial Vercel',
    ],
    githubUrl: 'https://github.com/GoraNiane',
    demoUrl: 'https://automag-ebon.vercel.app',
  },
];
