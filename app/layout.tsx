import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tarif-juste.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tarif Juste — Combien vous perdez à facturer trop bas",
  description:
    "En 2 minutes, découvrez votre tarif plancher et votre tarif conseillé, calculés selon vos charges réelles et vos jours facturables.",
  openGraph: {
    title: "Tarif Juste — Combien vous perdez à facturer trop bas",
    description:
      "En 2 minutes, découvrez votre tarif plancher et votre tarif conseillé, calculés selon vos charges réelles.",
    url: siteUrl,
    siteName: "Tarif Juste",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarif Juste — Combien vous perdez à facturer trop bas",
    description:
      "En 2 minutes, découvrez votre tarif plancher et votre tarif conseillé.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
