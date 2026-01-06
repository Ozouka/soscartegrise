import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    // Validation des données
    if (!nom || !email || !telephone || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'SOS Carte Grise <onboarding@resend.dev>',
      to: ['karim.zouli@iwillcodeit.io'],
      replyTo: email,
      subject: `[SOS Carte Grise] ${sujet}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0284c7; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .info-row { margin: 15px 0; padding: 10px; background-color: white; border-radius: 6px; }
              .label { font-weight: bold; color: #0284c7; }
              .message-box { background-color: white; padding: 20px; border-radius: 6px; margin-top: 20px; border-left: 4px solid #0284c7; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nouveau message du formulaire de contact</h1>
              </div>
              <div class="content">
                <div class="info-row">
                  <span class="label">Nom :</span> ${nom}
                </div>
                <div class="info-row">
                  <span class="label">Email :</span> ${email}
                </div>
                <div class="info-row">
                  <span class="label">Téléphone :</span> ${telephone}
                </div>
                <div class="info-row">
                  <span class="label">Sujet :</span> ${sujet}
                </div>
                <div class="message-box">
                  <p class="label">Message :</p>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}

