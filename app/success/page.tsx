import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">
          Merci, votre paiement est confirmé.
        </h1>
        <p className="text-ink/70 mb-8">
          Votre audit personnalisé vous attend juste en dessous.
        </p>
        <Link
          href="/audit"
          className="inline-block rounded-md bg-mustard px-6 py-3 text-ink font-semibold"
        >
          Accéder à mon audit →
        </Link>
      </div>
    </main>
  );
}
