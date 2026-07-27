import type { Metadata } from "next";
import Link from "next/link";

const EMAIL = "chase@whited.consulting";
const EMBED_URL = "https://buildoutschedule.com/chase";

const TITLE = "Book a call — Whited Consulting";
const DESCRIPTION =
  "Book a Discovery Call, Strategy Session, or Half-Day Intensive with Chase Whited.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://whited.consulting/book",
    siteName: "Whited Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BookPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-hero-glow pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[360px] opacity-70" />

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-12 sm:pb-24 sm:pt-16">
        <TopBar />
        <Header />
        <BookingFrame />
        <Fallback />
        <Footer />
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <div className="mb-10 flex items-center justify-between text-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Whited Consulting
      </Link>
      <a
        href={`mailto:${EMAIL}`}
        className="text-accent transition hover:text-cyan-300"
      >
        {EMAIL}
      </a>
    </div>
  );
}

function Header() {
  return (
    <section className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Book
      </p>
      <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl">
        Book a call with Chase
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-zinc-300 sm:text-base">
        Discovery, strategy, or a half-day intensive — pick what fits.
      </p>
    </section>
  );
}

function BookingFrame() {
  return (
    <section className="mt-10">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl shadow-black/40">
        <iframe
          src={EMBED_URL}
          title="Book a call with Chase Whited"
          loading="lazy"
          className="h-[900px] w-full sm:h-[1000px]"
          allow="payment"
        />
      </div>
    </section>
  );
}

function Fallback() {
  return (
    <section className="mx-auto mt-8 max-w-xl text-center">
      <p className="text-xs leading-relaxed text-zinc-500">
        Booking not loading?{" "}
        <a
          href={EMBED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition hover:text-cyan-300"
        >
          Open in a new tab
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-accent transition hover:text-cyan-300"
        >
          {EMAIL}
        </a>
        .
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-6 text-center text-xs text-zinc-500">
      <p>
        Whited Consulting · Chattanooga, TN · 2026 ·{" "}
        <Link
          href="/"
          className="text-zinc-400 transition hover:text-zinc-200"
        >
          Back to Whited Consulting
        </Link>
      </p>
    </footer>
  );
}
