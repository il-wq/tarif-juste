import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">
          Page introuvable
        </h1>
        <p className="text-ink/70 mb-8">
          Cette page n&apos;existe pas ou plus.
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
