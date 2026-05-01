import Stripe from 'stripe';
import { Resend } from 'resend';
import { emailCliente, emailLorena } from '../lib/plantillas-email.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// Necesario para que Vercel no parsee el body antes de validar la firma
export const config = {
  api: {
    bodyParser: false
  }
};

// Helper para leer el body en raw
async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Solo POST' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const rawBody = await readRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Solo nos interesa el evento de pago completado
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Recuperar sesión completa con line items y customer
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items', 'customer_details']
      });

      const datos = {
        nombre: fullSession.customer_details?.name || 'Cliente',
        email: fullSession.customer_details?.email || '',
        telefono: fullSession.customer_details?.phone || 'No facilitado',
        ciudad: fullSession.metadata?.ciudad || '',
        fecha: fullSession.metadata?.fecha || '',
        turno: fullSession.metadata?.turno || '',
        plazas: fullSession.metadata?.plazas || '1',
        neceser: fullSession.metadata?.neceser === 'si' ? 'Sí' : 'No',
        total: (fullSession.amount_total / 100).toFixed(2)
      };

      // Email a la cliente
      if (datos.email) {
        await resend.emails.send({
          from: 'Lorena Arranz <info@lorenarranz.com>',
          to: datos.email,
          subject: `¡Tu plaza está reservada! · Curso de Maquillaje ${datos.ciudad}`,
          html: emailCliente(datos)
        });
      }

      // Email a Lorena
      await resend.emails.send({
        from: 'Reservas Lorena Arranz <info@lorenarranz.com>',
        to: 'info@lorenarranz.com',
        subject: `🎉 Nueva reserva · ${datos.ciudad} · ${datos.plazas} plaza${datos.plazas > 1 ? 's' : ''}`,
        html: emailLorena(datos)
      });

      console.log('Emails enviados para sesión', session.id);

    } catch (err) {
      console.error('Error enviando emails:', err);
      // No fallamos al webhook por error de email — Stripe no debe reintentar el pago
    }
  }

  res.status(200).json({ received: true });
}
