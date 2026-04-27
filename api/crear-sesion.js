import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Mapa de productos: ciudad + neceser → Price ID
const PRECIOS = {
  'Madrid-si':       'price_1TMQeGBnuLPQK84LSxwVO4Qk',
  'Madrid-no':       'price_1TQlf9BnuLPQK84LpBPD2s1z',
  'Barcelona-si':    'price_1TQlpsBnuLPQK84Lh8JFnq8x',
  'Barcelona-no':    'price_1TQlrKBnuLPQK84LGPR07ZUq'
};

export default async function handler(req, res) {
  // CORS para que tu landing pueda llamar
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Solo POST' });
  }

  try {
    const { ciudad, neceser, plazas, turno, fecha } = req.body;

    // Buscar Price ID
    const priceKey = `${ciudad}-${neceser}`;
    const priceId = PRECIOS[priceKey];

    if (!priceId) {
      return res.status(400).json({ error: 'Combinación no válida' });
    }

    // Crear sesión de checkout EMBEBIDA
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [{
        price: priceId,
        quantity: plazas,
        adjustable_quantity: {
          enabled: false
        }
      }],
      mode: 'payment',
      // Datos extra que verás en tu panel de Stripe
      metadata: {
        ciudad,
        fecha,
        turno,
        plazas: String(plazas),
        neceser
      },
      // Permite recoger email
      customer_email: undefined,
      // Aplica cupón automático (si tienes el cupón configurado en Stripe se aplica solo)
      allow_promotion_codes: false,
      // Vuelve a tu landing tras pagar
      return_url: `${req.headers.origin || 'https://lorenarranz.com'}/curso/gracias.html?session_id={CHECKOUT_SESSION_ID}`
    });

    res.status(200).json({ clientSecret: session.client_secret });

  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}
