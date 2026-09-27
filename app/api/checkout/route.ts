import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!secretKey || !priceId) {
    return NextResponse.json(
      { error: "Configuration Stripe manquante côté serveur." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/annulation`,
      customer_creation: "always",
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Impossible de créer la session de paiement." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    console.error("Erreur création session Stripe:", err);
    return NextResponse.json(
      { error: "Le paiement n'a pas pu démarrer. Réessayez." },
      { status: 500 }
    );
  }
}
