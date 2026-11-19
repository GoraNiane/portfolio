# Portfolio Professionnel — Gora Niane

> **Software Developer | Backend & Full Stack Development**  
> Portfolio moderne, immersif et performant conçu pour valoriser les compétences logicielles, présenter des projets d'envergure et décrocher des opportunités professionnelles (stages, emplois, missions freelance).

---

## 🚀 Architecture du Projet

Le projet adopte une architecture Full Stack propre et découplée :

```text
portfolio/
├── frontend/                     # Application Frontend (React, Vite, TypeScript)
│   ├── public/                   # Fichiers statiques (favicon, cv.pdf)
│   ├── src/
│   │   ├── components/           # Composants UI modulaires (Navbar, Hero, About, etc.)
│   │   ├── data/                 # Fichiers de données centraux (projets, compétences, etc.)
│   │   ├── types/                # Interfaces & types TypeScript
│   │   ├── App.tsx               # Point d'assemblage principal
│   │   ├── main.tsx              # Point d'entrée React
│   │   └── index.css             # Directives Tailwind CSS & utilitaires visuels
│   ├── index.html                # Balisage sémantique, SEO & OpenGraph
│   ├── tailwind.config.js        # Thème visuel dark mode, couleurs et animations
│   └── vite.config.ts            # Configuration Vite & proxy d'API /api -> :5000
│
├── backend/                      # API Backend (Node.js, Express, TypeScript)
│   ├── src/
│   │   ├── middleware/           # Validation Zod & gestionnaire central d'erreurs
│   │   ├── routes/               # Routes Express (/api/contact, /api/health)
│   │   ├── services/             # Service Nodemailer & simulation dev
│   │   ├── config.ts             # Gestion des variables d'environnement
│   │   └── index.ts              # Serveur Express, Helmet, CORS & Rate Limiting
│   ├── .env.example              # Modèle des variables d'environnement
│   ├── .env                      # Configuration active locale
│   └── tsconfig.json             # Configuration TypeScript ES2022
│
├── scripts/                      # Scripts d'orchestration de développement
└── package.json                  # Scripts racine (dev, build, start)
```

---

## 🛠️ Stack Technique

### Frontend
- **React 18** avec **TypeScript**
- **Vite** pour un outillage et un rechargement à chaud ultra-rapide
- **Tailwind CSS** pour le design system, dark mode et glassmorphism
- **Framer Motion** pour des micro-interactions fluides et respectueuses de l'accessibilité
- **Lucide React** pour l'iconographie moderne

### Backend
- **Node.js** & **Express.js** avec **TypeScript**
- **Zod** pour la validation stricte des données entrantes
- **Helmet** pour la sécurisation des en-têtes HTTP
- **Express Rate Limit** pour la protection contre le spam et le brute force
- **Nodemailer** pour l'envoi d'e-mails professionnels par protocole SMTP
- **CORS** configurable par variable d'environnement

---

## 🎨 Identité Visuelle & Expérience Utilisateur

- **Dark Mode Dominant** : Palette profonde (`#07090E`, `#0B0F19`) avec accents violet électrique (`#8B5CF6`) et cyan lumineux (`#06B6D4`).
- **Glassmorphism Subtil** : Cartes translucides floutées (`backdrop-blur-md`) avec bordures fines à reflets.
- **Micro-interactions** : Animations Framer Motion fluides, indicateur de section active dans la navbar et aperçu de code interactif avec copie en un clic.
- **Zéro Template Générique** : Composants sur-mesure spécialement conçus pour un profil d'ingénieur logiciel.
- **100% Responsive** : Navigation mobile dédiée, grilles adaptatives et aucun débordement horizontal.

---

## 📦 Installation et Démarrage Rapide

### 1. Prérequis
- **Node.js** (v18 ou supérieur, testé et validé avec v26)
- **npm** (v9 ou supérieur)

### 2. Cloner et installer les dépendances

```bash
# Installation des dépendances du backend
cd backend
npm install

# Installation des dépendances du frontend
cd ../frontend
npm install
```

### 3. Configuration des variables d'environnement (Backend)

Dans le dossier `backend/`, un fichier `.env` est déjà prêt à l'emploi. Vous pouvez configurer vos accès SMTP pour l'envoi réel d'emails :

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Adresse qui recevra les messages de contact
CONTACT_RECEIVER_EMAIL=goraniane.dev@gmail.com

# Identifiants SMTP (Optionnel en développement, indispensable en production)
# Si non renseignés, le backend simule l'envoi dans la console sans bloquer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application

# Protection anti-spam (5 messages max par 15 min par IP)
RATE_LIMIT_MAX=5
```

### 4. Lancer le projet

Vous pouvez lancer les deux serveurs en parallèle depuis la racine :

```bash
# Lance le frontend (:5173) et le backend (:5000) simultanément
npm run dev
```

Ou les lancer séparément dans deux terminaux :

```bash
# Terminal 1 : Backend
npm run dev:backend

# Terminal 2 : Frontend
npm run dev:frontend
```

Le frontend est accessible sur [http://localhost:5173](http://localhost:5173) et communique automatiquement avec l'API sur [http://localhost:5000](http://localhost:5000).

---

## 🗂️ Gestion et Personnalisation des Données

Toutes les informations du portfolio sont centralisées dans des fichiers TypeScript dédiés, facilement modifiables :

1. **Profil & Coordonnées** : `frontend/src/data/profile.ts`
   - Modifiez vos liens GitHub, LinkedIn, WhatsApp et votre adresse email.
2. **Projets** : `frontend/src/data/projects.ts`
   - Ajoutez ou modifiez des projets, leurs fonctionnalités, leurs URLs de démo ou de code source.
3. **Compétences** : `frontend/src/data/skills.ts`
   - Classement par catégories (Backend, Frontend, Bases de données, DevOps).
4. **Parcours d'apprentissage** : `frontend/src/data/timeline.ts`
   - Historique des étapes de formation (ISEP Diamniadio, spécialisations, réalisations).
5. **Services Freelance** : `frontend/src/data/services.ts`
   - Prestations proposées et liste des livrables.
6. **Curriculum Vitae (PDF)** : `frontend/public/cv.pdf`
   - Remplacez simplement ce fichier par votre CV définitif au format PDF.

---

## 🔒 Sécurité et Robustesse Backend

- **Validation Zod** : Chaque champ du formulaire de contact (`name`, `email`, `subject`, `message`) est validé et assaini avant tout traitement.
- **Helmet HTTP Headers** : Protection contre le détournement de clics (clickjacking), le reniflage MIME et les vulnérabilités courantes.
- **Express Rate Limiting** : Protection contre le spam automatisé (limité à 5 requêtes par 15 minutes par adresse IP).
- **Graceful Error Handling** : Les erreurs système ne divulguent pas la stack trace en environnement de production.
- **Mode Résilient Nodemailer** : Si aucun serveur SMTP n'est configuré en local, le serveur journalise proprement le message reçu sans interrompre l'expérience utilisateur.

---

## 🏗️ Compilation et Déploiement en Production

Pour compiler l'ensemble du projet :

```bash
# Compile le backend (TypeScript -> dist) et le frontend (Vite -> dist)
npm run build
```

- **Frontend** : Le dossier `frontend/dist/` peut être déployé sur Vercel, Netlify, Cloudflare Pages ou Firebase Hosting.
- **Backend** : Le dossier `backend/dist/` s'exécute sur n'importe quel environnement Node.js (Render, Railway, VPS, Docker).

---

## 👤 Auteur

**Gora Niane**  
- GitHub : [@GoraNiane](https://github.com/GoraNiane)  
- Email : `goraniane.dev@gmail.com`  
- Formation : ISEP Diamniadio
