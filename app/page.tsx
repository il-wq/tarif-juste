import Link from "next/link";

function CheckoutButton() {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-mustard px-8 py-4 text-lg font-semibold text-ink shadow-sm transition active:scale-[0.98] hover:brightness-95"
      >
        Faire mon audit — 49 CHF
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="px-5 pt-10 pb-8 sm:px-8 sm:pt-16 max-w-2xl mx-auto w-full text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-mustard mb-3">
          Pour freelances &amp; artisans
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-ink mb-5">
          Vous facturez trop bas — et personne ne vous l&apos;a jamais montré.
        </h1>
        <p className="text-base sm:text-lg text-ink/70 mb-8 leading-relaxed">
          La plupart des indépendants fixent leur tarif au ressenti, oublient
          leurs charges, leurs congés et leur temps non facturable. Résultat :
          des milliers d&apos;euros perdus chaque année, sans le savoir.
        </p>
        <div className="flex justify-center">
          <CheckoutButton />
        </div>
        <p className="text-xs text-ink/50 mt-3">
          Paiement sécurisé par Stripe · Résultat immédiat
        </p>
      </section>

      {/* Douleur chiffrée */}
      <section className="px-5 py-10 sm:px-8 bg-ink text-offwhite">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            -6 400 € par an
          </p>
          <p className="text-offwhite/70">
            C&apos;est la perte moyenne estimée pour un indépendant qui n&apos;a
            jamais recalculé son tarif en tenant compte de ses charges réelles
            et de ses jours vraiment facturables.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="px-5 py-12 sm:px-8 max-w-2xl mx-auto w-full">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-bold mb-1">
              1. Votre tarif plancher, calculé devant vous
            </h2>
            <p className="text-ink/70">
              Revenu voulu, charges, jours facturables — le calcul se fait en
              direct, sans jargon.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold mb-1">
              2. Ce que ça vous coûte, en euros par an
            </h2>
            <p className="text-ink/70">
              Comparaison chiffrée entre ce que vous facturez aujourd&apos;hui
              et ce que vous devriez facturer.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold mb-1">
              3. L&apos;argumentaire prêt à envoyer
            </h2>
            <p className="text-ink/70">
              Un message clair pour annoncer votre nouvelle grille tarifaire à
              vos clients, sans trembler.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 py-10 sm:px-8 max-w-2xl mx-auto w-full text-center">
        <CheckoutButton />
      </section>

      <footer className="mt-auto px-5 py-8 sm:px-8 text-center text-xs text-ink/50 space-x-4">
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/cgv">CGV</Link>
        <Link href="/confidentialite">Confidentialité</Link>
      </footer>
    </main>
  );
}
