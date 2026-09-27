import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error("Configuration webhook Stripe manquante.");
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Signature webhook invalide:", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    // Étape 0 : pas de base de données. On journalise le paiement confirmé
    // pour que vous puissiez livrer l'accès à la main, par email.
    console.log("✅ Paiement confirmé pour :", email, "| session:", session.id);

    // TODO (étape 1) : envoyer l'accès automatiquement par email ici,
    // ou enregistrer la vente dans Supabase une fois branché.
  }

  return NextResponse.json({ received: true });
}
