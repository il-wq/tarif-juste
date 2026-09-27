import Link from "next/link";

export default function Confidentialite() {
  return (
    <main className="min-h-screen px-5 py-12 sm:px-8 max-w-2xl mx-auto">
      <h1 className="font-serif text-2xl font-bold mb-6">
        Politique de confidentialité
      </h1>
      <div className="prose prose-sm max-w-none space-y-4 text-ink/80">
        <p>
          <strong>Responsable du traitement :</strong> [VOTRE RAISON SOCIALE
          / NOM]
        </p>
        <p>
          <strong>Données collectées :</strong> lors d&apos;un paiement, nous
          collectons votre adresse email et les informations nécessaires au
          traitement du paiement, gérées directement par Stripe.
        </p>
        <p>
          <strong>Finalité :</strong> ces données servent uniquement à vous
          livrer l&apos;accès au produit acheté et à assurer le suivi client.
        </p>
        <p>
          <strong>Conservation :</strong> les données sont conservées le temps
          nécessaire à la relation commerciale et aux obligations légales
          (comptabilité).
        </p>
        <p>
          <strong>Vos droits :</strong> conformément au RGPD, vous disposez
          d&apos;un droit d&apos;accès, de rectification et de suppression de
          vos données. Contactez-nous à [VOTRE EMAIL].
        </p>
        <p>
          <strong>Mesure d&apos;audience :</strong> ce site utilise un outil de
          mesure d&apos;audience respectueux de la vie privée, sans cookie de
          suivi publicitaire.
        </p>
      </div>
      <Link href="/" className="inline-block mt-8 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
