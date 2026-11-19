import { Request, Response, NextFunction } from 'express';
import { config } from '../config.js';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('[ErrorHandler] Erreur capturée :', err);

  const statusCode = err.status || err.statusCode || 500;
  const message =
    statusCode === 500
      ? 'Une erreur interne est survenue sur le serveur. Veuillez réessayer ultérieurement.'
      : err.message || 'Requête invalide';

  res.status(statusCode).json({
    success: false,
    message,
    ...(config.nodeEnv === 'development' && { stack: err.stack }),
  });
};
