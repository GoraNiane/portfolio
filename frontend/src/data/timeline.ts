import { TimelineMilestone } from '../types';

export const timelineData: TimelineMilestone[] = [
  {
    id: 'isep',
    title: 'Formation en Développement Logiciel',
    institution: 'ISEP Diamniadio',
    period: 'Cursus en cours',
    description:
      'Formation intensive en ingénierie logicielle, algorithmique, structures de données, programmation orientée objet, conception de bases de données et architectures applicatives.',
    skillsAcquired: ['Java', 'Algorithmique', 'POO', 'SQL', 'Génie Logiciel', 'Modélisation UML'],
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    id: 'backend-rest',
    title: 'Spécialisation Backend & Architecture REST',
    institution: 'Apprentissage continu & Projets',
    period: 'Approfondissement',
    description:
      'Immersion approfondie dans l’écosystème Java (Spring Boot & Spring Cloud) et TypeScript (Node.js/Express). Conception d’architectures microservices, APIs RESTful performantes et communication inter-services.',
    skillsAcquired: ['Spring Boot', 'Spring Cloud', 'Node.js', 'Express.js', 'TypeScript', 'API REST', 'PostgreSQL'],
    type: 'specialization',
    icon: 'Server',
  },
  {
    id: 'security-auth',
    title: 'Sécurité Applicative & Gestion des Accès',
    institution: 'Projets personnels & Projets d’études',
    period: 'Pratique continue',
    description:
      'Mise en œuvre des standards de sécurité modernes : authentification sans état par jetons JWT, contrôle d’accès basé sur les rôles (RBAC) avec Spring Security, hachage des mots de passe et protection contre les vulnérabilités courantes (XSS, CSRF, injections).',
    skillsAcquired: ['Spring Security', 'JWT', 'RBAC', 'Sécurité Web', 'Zod / Bean Validation'],
    type: 'specialization',
    icon: 'Shield',
  },
  {
    id: 'saas-apps',
    title: 'Développement de Solutions SaaS & Applicatives',
    institution: 'Projets d’envergure',
    period: 'Réalisations concrètes',
    description:
      'Conception de projets applicatifs complets tels que MediGest (plateforme de gestion hospitalière multi-établissements) et Terangua Food (gestion de commandes et restauration), alliant logique métier backend et interfaces React réactives.',
    skillsAcquired: ['Full Stack', 'React', 'Tailwind CSS', 'Architecture en Couches', 'Gestion Multi-tenant'],
    type: 'project',
    icon: 'Layers',
  },
  {
    id: 'devops-cicd',
    title: 'Automatisation, Tests & Pipelines CI/CD',
    institution: 'Ingénierie & Intégration Continue',
    period: 'Pratique active',
    description:
      'Mise en place de tests automatisés (pytest, JUnit), conteneurisation des services avec Docker et orchestration de pipelines d’intégration continue avec GitHub Actions pour garantir la fiabilité du code.',
    skillsAcquired: ['GitHub Actions', 'Docker', 'pytest', 'CI/CD', 'Git', 'Linux'],
    type: 'specialization',
    icon: 'Workflow',
  },
];
