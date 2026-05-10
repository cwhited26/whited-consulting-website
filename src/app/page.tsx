interface Brand {
  name: string;
  oneLiner: string;
  href: string;
  display: string;
}

const BRANDS: readonly Brand[] = [
  {
    name: "Buildout Studios",
    oneLiner:
      "Done-for-you operations systems for service businesses. Custom-built, shipped on your domain, handed off.",
    href: "https://buildoutstudios.com",
    display: "buildoutstudios.com",
  },
  {
    name: "AthleteOS",
    oneLiner:
      "A community + platform for the next generation of athletes, parents, coaches, and sports organizations.",
    href: "https://athlete-os.com",
    display: "athlete-os.com",
  },
  {
    name: "AI Pocket Agency",
    oneLiner:
      "A community of builders learning to run AI-powered software businesses from a phone.",
    href: "https://aipocketagency.com",
    display: "aipocketagency.com",
  },
  {
    name: "Tennessee Valley Exteriors",
    oneLiner:
      "Working contracting business and proof-of-concept for the BOS playbook. Run on the same brain we sell.",
    href: "https://tnvex.com",
    display: "tnvex.com",
  },
];

const EMAIL = "chase@whited.consulting";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-hero-glow pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-70" />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Hero />
        <WhatThisIs />
        <Brands />
        <Founder />
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Whited Consulting
      </p>
      <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
        Built by an operator. Used by operators.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-300 sm:text-lg">
        Operator-led consulting and four working product companies, built and run from one brain.
      </p>
      <div className="mt-9 flex justify-center">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          Email Chase
        </a>
      </div>
    </section>
  );
}

function WhatThisIs() {
  return (
    <section className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        What this is
      </h2>
      <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
        Whited Consulting is the holding entity for four working businesses. Three are products you can buy or join. One is an operating contracting company that proves the system works. No fluff, no hype — just the operator-built infrastructure that runs them.
      </p>
    </section>
  );
}

function Brands() {
  return (
    <section className="mt-20 sm:mt-24">
      <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        The four brands
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {BRANDS.map((brand) => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </div>
    </section>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/40 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
    >
      <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {brand.oneLiner}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition group-hover:gap-2.5">
        {brand.display}
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6h4.5v4.5M18 6l-9 9"
          />
        </svg>
      </span>
    </a>
  );
}

function Founder() {
  return (
    <section className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Founder
      </h2>
      <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
        I&apos;m Chase Whited. I run all four. Solo. From a phone, mostly. Here&apos;s how to get in touch.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
        <a
          href={`mailto:${EMAIL}`}
          className="text-accent transition hover:text-cyan-300"
        >
          {EMAIL}
        </a>
        <a
          href="https://www.linkedin.com/in/chasewhited"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-zinc-200"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-zinc-500 sm:mt-24">
      <p>
        Whited Consulting · Chattanooga, TN · 2026 ·{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-zinc-400 transition hover:text-zinc-200"
        >
          {EMAIL}
        </a>
      </p>
    </footer>
  );
}
