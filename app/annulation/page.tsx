import Link from "next/link";

export default function AnnulationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">
          Paiement annulé
        </h1>
        <p className="text-ink/70 mb-8">
          Aucun montant n&apos;a été débité. Vous pouvez réessayer quand vous
          voulez.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-mustard px-6 py-3 text-ink font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
