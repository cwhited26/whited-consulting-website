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
  "Whited Consulting is the parent agency behind Buildout Studios, AthleteOS, AI Pocket Agency, and Tennessee Valley Exteriors — operator-led consulting and four working product companies, built and run from one brain.";

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
