"use client";

import { useMemo, useState } from "react";

function formatCHF(n: number) {
  return new Intl.NumberFormat("fr-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function AuditPage() {
  const [revenuVoulu, setRevenuVoulu] = useState(70000);
  const [charges, setCharges] = useState(15000);
  const [joursFacturables, setJoursFacturables] = useState(180);
  const [tarifActuel, setTarifActuel] = useState(350);
  const [copie, setCopie] = useState(false);

  const tarifPlancher = useMemo(() => {
    if (joursFacturables <= 0) return 0;
    return (revenuVoulu + charges) / joursFacturables;
  }, [revenuVoulu, charges, joursFacturables]);

  const tarifConseille = useMemo(() => tarifPlancher * 1.15, [tarifPlancher]);

  const ecartAnnuel = useMemo(() => {
    return (tarifConseille - tarifActuel) * joursFacturables;
  }, [tarifConseille, tarifActuel, joursFacturables]);

  const enDessousDuPlancher = tarifActuel < tarifPlancher;

  const argumentaire = useMemo(() => {
    return `Bonjour,

Je vous écris pour vous informer d'une mise à jour de mes tarifs, effective à partir du [DATE].

Après avoir revu en détail mes coûts de fonctionnement et le temps réellement consacré à chaque mission, mon nouveau tarif journalier sera de ${formatCHF(
      Math.round(tarifConseille)
    )}, contre ${formatCHF(tarifActuel)} actuellement.

Cette évolution me permet de continuer à vous garantir la même qualité de travail et la même disponibilité sur le long terme.

Je reste à votre disposition pour en discuter si vous avez des questions.

Cordialement,
[VOTRE NOM]`;
  }, [tarifConseille, tarifActuel]);

  function copierArgumentaire() {
    navigator.clipboard.writeText(argumentaire).then(() => {
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    });
  }

  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 max-w-2xl mx-auto">
      <h1 className="font-serif text-3xl font-bold mb-2">Votre audit tarifaire</h1>
      <p className="text-ink/70 mb-8">
        Remplissez les champs ci-dessous, le calcul se met à jour en direct.
      </p>

      <div className="space-y-6 bg-white border border-ink/10 rounded-lg p-5 sm:p-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Revenu annuel net que vous voulez atteindre (CHF)
          </label>
          <input
            type="number"
            value={revenuVoulu}
            onChange={(e) => setRevenuVoulu(Number(e.target.value))}
            className="w-full rounded-md border border-ink/20 px-3 py-2 text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Charges professionnelles annuelles (CHF)
          </label>
          <p className="text-xs text-ink/50 mb-1">
            Assurances, cotisations, matériel, logiciels, local, etc.
          </p>
          <input
            type="number"
            value={charges}
            onChange={(e) => setCharges(Number(e.target.value))}
            className="w-full rounded-md border border-ink/20 px-3 py-2 text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Jours réellement facturables par an
          </label>
          <p className="text-xs text-ink/50 mb-1">
            Total de jours travaillés, moins congés, maladie, prospection,
            administratif, formation.
          </p>
          <input
            type="number"
            value={joursFacturables}
            onChange={(e) => setJoursFacturables(Number(e.target.value))}
            className="w-full rounded-md border border-ink/20 px-3 py-2 text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Votre tarif journalier actuel (CHF)
          </label>
          <input
            type="number"
            value={tarifActuel}
            onChange={(e) => setTarifActuel(Number(e.target.value))}
            className="w-full rounded-md border border-ink/20 px-3 py-2 text-lg"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-ink text-offwhite rounded-lg p-5 sm:p-6">
          <p className="text-sm uppercase tracking-wide text-offwhite/60 mb-1">
            Votre tarif plancher
          </p>
          <p className="font-serif text-3xl font-bold">
            {formatCHF(Math.round(tarifPlancher))}
            <span className="text-base font-normal text-offwhite/60"> / jour</span>
          </p>
          <p className="text-sm text-offwhite/60 mt-1">
            En dessous, vous travaillez à perte une fois vos charges couvertes.
          </p>
        </div>

        <div className="bg-mustard text-ink rounded-lg p-5 sm:p-6">
          <p className="text-sm uppercase tracking-wide text-ink/60 mb-1">
            Votre tarif conseillé
          </p>
          <p className="font-serif text-3xl font-bold">
            {formatCHF(Math.round(tarifConseille))}
            <span className="text-base font-normal text-ink/60"> / jour</span>
          </p>
          <p className="text-sm text-ink/70 mt-1">
            Inclut une marge de sécurité de 15% pour les imprévus.
          </p>
        </div>

        <div className="border border-ink/10 rounded-lg p-5 sm:p-6">
          <p className="text-sm uppercase tracking-wide text-ink/50 mb-1">
            Écart avec votre tarif actuel
          </p>
          <p
            className={`font-serif text-2xl font-bold ${
              ecartAnnuel > 0 ? "text-red-700" : "text-green-700"
            }`}
          >
            {ecartAnnuel > 0 ? "-" : "+"}
            {formatCHF(Math.round(Math.abs(ecartAnnuel)))} / an
          </p>
          {enDessousDuPlancher && (
            <p className="text-sm text-red-700 mt-2">
              ⚠️ Votre tarif actuel est en dessous de votre plancher. Chaque
              jour facturé vous fait perdre de l&apos;argent une fois vos
              charges couvertes.
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-serif text-xl font-bold mb-3">
          Argumentaire prêt à envoyer
        </h2>
        <div className="bg-white border border-ink/10 rounded-lg p-5 sm:p-6">
          <pre className="whitespace-pre-wrap font-sans text-sm text-ink/80 leading-relaxed">
            {argumentaire}
          </pre>
          <button
            onClick={copierArgumentaire}
            className="mt-4 rounded-md bg-ink text-offwhite px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition"
          >
            {copie ? "Copié ✓" : "Copier le message"}
          </button>
        </div>
      </div>
    </main>
  );
}
