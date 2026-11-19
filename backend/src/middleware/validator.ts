import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z
    .string()
    .trim()
    .email("Le format de l'adresse email est invalide"),
  subject: z
    .string()
    .trim()
    .min(3, "L'objet doit contenir au moins 3 caractères")
    .max(150, "L'objet ne peut pas dépasser 150 caractères"),
  message: z
    .string()
    .trim()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(3000, 'Le message ne peut pas dépasser 3000 caractères'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const validateContactInput = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = contactSchema.parse(req.body);
    next();
  } catch (error: any) {
    if (error instanceof ZodError || error?.issues) {
      const issues = error.issues || (error as any).errors || [];
      const formattedErrors = issues.map((err: any) => ({
        field: Array.isArray(err.path) ? err.path.join('.') : String(err.path || ''),
        message: err.message,
      }));
      return res.status(400).json({
        success: false,
        message: 'Erreur de validation des données fournies',
        errors: formattedErrors,
      });
    }
    next(error);
  }
};
