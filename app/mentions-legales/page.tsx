import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen px-5 py-12 sm:px-8 max-w-2xl mx-auto">
      <h1 className="font-serif text-2xl font-bold mb-6">Mentions légales</h1>
      <div className="prose prose-sm max-w-none space-y-4 text-ink/80">
        <p>
          <strong>Éditeur du site :</strong> [VOTRE RAISON SOCIALE ou NOM ET
          PRÉNOM SI AUTO-ENTREPRENEUR]
        </p>
        <p>
          <strong>SIRET :</strong> [VOTRE NUMÉRO SIRET]
        </p>
        <p>
          <strong>Adresse :</strong> [VOTRE ADRESSE]
        </p>
        <p>
          <strong>Email de contact :</strong> [VOTRE EMAIL]
        </p>
        <p>
          <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>
      </div>
      <Link href="/" className="inline-block mt-8 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
