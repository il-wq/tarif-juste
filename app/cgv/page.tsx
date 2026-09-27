import Link from "next/link";

export default function CGV() {
  return (
    <main className="min-h-screen px-5 py-12 sm:px-8 max-w-2xl mx-auto">
      <h1 className="font-serif text-2xl font-bold mb-6">
        Conditions générales de vente
      </h1>
      <div className="prose prose-sm max-w-none space-y-4 text-ink/80">
        <p>
          <strong>Vendeur :</strong> [VOTRE RAISON SOCIALE], SIRET [VOTRE
          SIRET].
        </p>
        <p>
          <strong>Produit :</strong> Audit tarifaire personnalisé "Tarif
          Juste", vendu au prix de 49 CHF en paiement unique.
        </p>
        <p>
          <strong>Livraison :</strong> L&apos;accès à l&apos;audit est envoyé
          par email dans un délai de 24h ouvrées après confirmation du
          paiement.
        </p>
        <p>
          <strong>Droit de rétractation :</strong> Conformément à l&apos;article
          L221-28 du Code de la consommation, le droit de rétractation ne
          s&apos;applique pas aux contenus numériques fournis immédiatement
          après accord exprès du consommateur et renoncement à son droit de
          rétractation. [À ADAPTER SELON VOTRE MODE DE LIVRAISON EXACT]
        </p>
        <p>
          <strong>Paiement :</strong> Le paiement est sécurisé et traité par
          Stripe. Aucune donnée bancaire n&apos;est conservée par [VOTRE
          RAISON SOCIALE].
        </p>
        <p>
          <strong>Contact / réclamations :</strong> [VOTRE EMAIL]
        </p>
      </div>
      <Link href="/" className="inline-block mt-8 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
