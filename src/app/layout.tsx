import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const TITLE = "Whited Consulting — Built by an operator. Used by operators.";
const DESCRIPTION =
  "Whited Consulting builds revenue systems, custom software, AI workflows, and focused SaaS products for owner-led businesses. Home of Pocket Agent, Buildout Studios, Buildout Schedule, Buildout Measure, AthleteOS, Layoutbook, Field Book, and Tennessee Valley Exteriors.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://whited.consulting"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://whited.consulting",
    siteName: "Whited Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
