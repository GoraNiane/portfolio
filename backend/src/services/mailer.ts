import nodemailer from 'nodemailer';
import { config } from '../config.js';
import { ContactFormData } from '../middleware/validator.js';

type TransporterType = ReturnType<typeof nodemailer.createTransport>;

class MailerService {
  private transporter: TransporterType | null = null;
  private isConfigured: boolean = false;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    if (config.smtp.host && config.smtp.user && config.smtp.pass) {
      try {
        this.transporter = nodemailer.createTransport({
          host: config.smtp.host,
          port: config.smtp.port,
          secure: config.smtp.secure,
          auth: {
            user: config.smtp.user,
            pass: config.smtp.pass,
          },
        });
        this.isConfigured = true;
        console.log('[MailerService] Transporteur SMTP initialisé avec succès.');
      } catch (err) {
        console.error("[MailerService] Erreur lors de l'initialisation SMTP :", err);
        this.isConfigured = false;
      }
    } else {
      console.log(
        '[MailerService] Mode développement actif : Identifiants SMTP non configurés. Les messages seront affichés dans la console.'
      );
      this.isConfigured = false;
    }
  }

  public async sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
    const { name, email, subject, message } = data;
    const sanitizedSubject = `[Portfolio Gora Niane] ${subject}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #07090E; color: #F8FAFC; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #0B0F19; border: 1px solid #1F293D; border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #7C3AED, #3B82F6); padding: 24px; color: #ffffff; }
            .content { padding: 24px; color: #E2E8F0; line-height: 1.6; }
            .badge { display: inline-block; padding: 4px 10px; background: #141B2D; border: 1px solid #7C3AED; color: #C4B5FD; border-radius: 9999px; font-size: 12px; margin-bottom: 12px; }
            .info-box { background: #141B2D; border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid #1F293D; }
            .info-label { font-size: 12px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; }
            .info-value { font-size: 15px; color: #F8FAFC; font-weight: 500; margin-top: 2px; }
            .message-box { background: #07090E; border: 1px solid #1F293D; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; color: #F1F5F9; }
            .footer { padding: 16px 24px; font-size: 12px; color: #64748B; border-top: 1px solid #1F293D; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; font-size: 20px;">Nouveau message de contact</h2>
              <p style="margin: 4px 0 0; opacity: 0.85; font-size: 14px;">Reçu depuis votre portfolio professionnel</p>
            </div>
            <div class="content">
              <span class="badge">Nouveau prospect / Recruteur</span>
              <div class="info-box">
                <div class="info-label">Expéditeur :</div>
                <div class="info-value">${name} &lt;${email}&gt;</div>
                <div class="info-label" style="margin-top: 10px;">Sujet :</div>
                <div class="info-value">${subject}</div>
              </div>
              <div class="info-label">Message :</div>
              <div class="message-box">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </div>
            <div class="footer">
              Cet email a été envoyé automatiquement depuis l'API de contact de Gora Niane.
            </div>
          </div>
        </body>
      </html>
    `;

    if (this.isConfigured && this.transporter) {
      await this.transporter.sendMail({
        from: `"${name}" <${config.smtp.user}>`,
        replyTo: email,
        to: config.receiverEmail,
        subject: sanitizedSubject,
        text: `Nouveau message de : ${name} (${email})\nObjet : ${subject}\n\nMessage :\n${message}`,
        html: htmlContent,
      });
      return { success: true };
    } else {
      console.log('--------------------------------------------------');
      console.log('[PORTFOLIO CONTACT] Message reçu (Simulation SMTP) :');
      console.log(`De: ${name} <${email}>`);
      console.log(`Sujet: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log('--------------------------------------------------');
      return { success: true };
    }
  }
}

export const mailerService = new MailerService();
