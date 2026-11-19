import { Router, Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { validateContactInput } from '../middleware/validator.js';
import { mailerService } from '../services/mailer.js';
import { config } from '../config.js';

const router = Router();

// Limiteur de requêtes strict pour éviter le spam sur le formulaire de contact
const contactLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Trop de requêtes envoyées depuis cette adresse IP. Veuillez patienter 15 minutes avant de réessayer.',
  },
});

router.post(
  '/',
  contactLimiter,
  validateContactInput,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, subject, message } = req.body;

      await mailerService.sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      return res.status(200).json({
        success: true,
        message: 'Votre message a bien été envoyé ! Gora Niane vous répondra dans les plus brefs délais.',
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
