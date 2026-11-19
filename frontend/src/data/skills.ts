import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: 'Server',
    description: 'Conception de microservices, APIs RESTful scalables, gestion sécurisée des accès et logique métier robuste.',
    skills: [
      { name: 'Java', icon: 'Code', highlight: true, description: 'POO avancée, multithreading, robustesse' },
      { name: 'Spring Boot', icon: 'Zap', highlight: true, description: 'Microservices, injection de dépendances, API REST' },
      { name: 'Spring Cloud', icon: 'Cloud', highlight: true, description: 'Microservices distribués, Service Discovery (Eureka), API Gateway, Config Server' },
      { name: 'Node.js', icon: 'Terminal', highlight: true, description: 'Environnement asynchrone, microservices légers' },
      { name: 'Express.js', icon: 'Cpu', highlight: false, description: 'Routage performant, middlewares, validation' },
      { name: 'TypeScript', icon: 'FileCode', highlight: true, description: 'Typage strict, sécurité à la compilation' },
      { name: 'API REST', icon: 'Network', highlight: true, description: 'Standards RESTful, pagination, documentation Swagger' },
      { name: 'Spring Security', icon: 'ShieldCheck', highlight: true, description: 'Authentification JWT, rôles, filtres de sécurité' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: 'Layout',
    description: 'Interfaces réactives, dynamiques, ergonomiques et respectueuses des standards d’accessibilité et de performance.',
    skills: [
      { name: 'React', icon: 'Layers', highlight: true, description: 'Hooks, State Management, Composants modulaires' },
      { name: 'Angular', icon: 'Component', highlight: false, description: 'Architecture modulaire, TypeScript, Reactive Forms' },
      { name: 'TypeScript', icon: 'FileCode', highlight: true, description: 'Développement frontend prédictif et typé' },
      { name: 'JavaScript (ES6+)', icon: 'Code', highlight: false, description: 'Async/Await, DOM manipulation, closures' },
      { name: 'Tailwind CSS', icon: 'Palette', highlight: true, description: 'Styling utilitaire, designs réactifs & dark mode' },
      { name: 'HTML5', icon: 'FileCode2', highlight: false, description: 'Sémantique web structurée, SEO friendly' },
      { name: 'CSS3', icon: 'Brush', highlight: false, description: 'Flexbox, Grid, animations modernes' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de Données & ORM',
    icon: 'Database',
    description: 'Modélisation relationnelle, intégrité des données, optimisation des requêtes et persistence par ORM.',
    skills: [
      { name: 'PostgreSQL', icon: 'Database', highlight: true, description: 'SGBD relationnel avancé, indexation, contraintes' },
      { name: 'MySQL', icon: 'Database', highlight: false, description: 'Gestion relationnelle, requêtes complexes' },
      { name: 'MariaDB', icon: 'Database', highlight: false, description: 'Serveur de bases de données relationnelles' },
      { name: 'SQL', icon: 'FileText', highlight: true, description: 'Jointures complexes, agrégations, DDL & DML' },
      { name: 'Hibernate / JPA', icon: 'Link', highlight: true, description: 'Mapping objet-relationnel, entity lifecycle, JPQL' },
      { name: 'Prisma', icon: 'Layers', highlight: false, description: 'ORM TypeScript moderne, migrations de schéma' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps, CI/CD & Outils',
    icon: 'Workflow',
    description: 'Automatisation des tests, conteneurisation, pipelines de déploiement continu et environnements Linux.',
    skills: [
      { name: 'Docker', icon: 'Box', highlight: true, description: 'Conteneurisation d’applications, Dockerfile, Compose' },
      { name: 'GitHub Actions', icon: 'PlayCircle', highlight: true, description: 'Pipelines CI/CD, tests automatisés' },
      { name: 'CI/CD', icon: 'GitMerge', highlight: true, description: 'Intégration et déploiement continus fiabilisés' },
      { name: 'Git', icon: 'GitBranch', highlight: true, description: 'Gestion de versions distribuée, Git Flow' },
      { name: 'GitHub', icon: 'Github', highlight: true, description: 'Collaboration, pull requests, issue tracking' },
      { name: 'Linux', icon: 'TerminalSquare', highlight: false, description: 'Scripting Bash, administration système de base' },
      { name: 'Postman', icon: 'Send', highlight: false, description: 'Tests d’API REST, collections, validation de réponses' },
    ],
  },
];
