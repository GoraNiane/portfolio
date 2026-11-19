import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config.js';
import contactRouter from './routes/contact.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Configuration de la sécurité avec Helmet
app.use(
  helmet({
    contentSecurityPolicy: false, // Permet les intégrations modernes en développement
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Configuration des CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Autorise les requêtes sans origine (comme Postman ou curl) et l'URL frontend configurée
      if (!origin || origin === config.frontendUrl || origin.startsWith('http://localhost:')) {
        callback(null, true);
      } else {
        callback(new Error('Origine non autorisée par la politique CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Parsing JSON avec limite de taille raisonnable contre les attaques par déni de service
app.use(express.json({ limit: '30kb' }));

// Route de vérification de santé (Health Check)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    service: 'Gora Niane Portfolio API',
  });
});

// Routes de l'API
app.use('/api/contact', contactRouter);

// Gestion des routes inexistantes (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `La ressource demandée (${req.method} ${req.originalUrl}) est introuvable.`,
  });
});

// Middleware central de gestion des erreurs
app.use(errorHandler);

const server = app.listen(config.port, () => {
  console.log(`====================================================`);
  console.log(`  Gora Niane Portfolio API - Server Running`);
  console.log(`  URL: http://localhost:${config.port}`);
  console.log(`  Environment: ${config.nodeEnv}`);
  console.log(`  Frontend: ${config.frontendUrl}`);
  console.log(`====================================================`);
});

// Arrêt gracieux du serveur
const shutdown = () => {
  console.log('Arrêt du serveur en cours...');
  server.close(() => {
    console.log('Serveur arrêté avec succès.');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
