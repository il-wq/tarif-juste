import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">
          Merci, votre paiement est confirmé.
        </h1>
        <p className="text-ink/70 mb-8">
          Votre audit personnalisé arrive par email sous 24h. Vérifiez aussi
          vos spams au cas où.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-ink px-6 py-3 text-offwhite font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
