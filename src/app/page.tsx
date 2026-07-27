import Link from "next/link";

interface Brand {
  name: string;
  oneLiner: string;
  href: string;
  display: string;
  kind: "product" | "studio" | "operating";
}

const BRANDS: readonly Brand[] = [
  {
    name: "Pocket Agent",
    oneLiner:
      "An AI Agent Workspace for owner-led businesses. Your business knowledge, role-based personas, workflow tools, and owner-approved actions in one chat.",
    href: "https://aipocketagent.com",
    display: "aipocketagent.com",
    kind: "product",
  },
  {
    name: "Buildout Studios",
    oneLiner:
      "My software studio. Custom CRMs, field-ops apps, scheduling, documents, and automation for service businesses. Every custom build ships with Pocket Agent installed.",
    href: "https://buildoutstudios.com",
    display: "buildoutstudios.com",
    kind: "studio",
  },
  {
    name: "Buildout Schedule",
    oneLiner:
      "AI-native scheduling. Booking pages, calendar sync, availability logic, and reusable embeds — under the Buildout Studios brand and inside every Custom build.",
    href: "https://buildoutschedule.com",
    display: "buildoutschedule.com",
    kind: "product",
  },
  {
    name: "Buildout Measure",
    oneLiner:
      "Roof measurement SaaS. Structured building data, NOAA storm history, and supplier-ready PDFs in three taps. Pay per report or $79/mo Pro.",
    href: "https://measure.buildoutstudios.com",
    display: "measure.buildoutstudios.com",
    kind: "product",
  },
  {
    name: "AthleteOS",
    oneLiner:
      "The operating system for youth sports. Organization management, parent engagement, coach tools, scheduling, and AI-assisted workflows.",
    href: "https://athlete-os.com",
    display: "athlete-os.com",
    kind: "product",
  },
  {
    name: "Layoutbook",
    oneLiner:
      "The designer's little black book of landing-page prompts that don't look vibe-coded. For designers, devs, and agencies building aspirational pages. $249 once.",
    href: "https://layoutpromptstore.com",
    display: "layoutpromptstore.com",
    kind: "product",
  },
  {
    name: "Field Book",
    oneLiner:
      "The little black book of conversion-first website prompts. For freelancers, agencies, and owners building local-business sites. $149 once.",
    href: "https://fieldbooksites.com",
    display: "fieldbooksites.com",
    kind: "product",
  },
  {
    name: "Tennessee Valley Exteriors",
    oneLiner:
      "My roofing company in north Alabama. A working contracting business — and the ground where the rest of the stack gets proven before it gets sold.",
    href: "https://tnvex.com",
    display: "tnvex.com",
    kind: "operating",
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
        Revenue systems, custom software, AI workflows, and focused SaaS
        products for owner-led businesses.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <Link
          href="/book"
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          Book a call
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          Email Chase
        </a>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          About Chase
        </Link>
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
        Whited Consulting is the holding entity behind the work. A software
        studio, a set of focused SaaS products, and a roofing company I actually
        run — where the rest of the stack gets proven before I sell it. Every
        piece traces back to a real operating problem, a practical system, and
        the customer or business outcome that came from it.
      </p>
    </section>
  );
}

function Brands() {
  return (
    <section className="mt-20 sm:mt-24">
      <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        The work
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {BRANDS.map((brand) => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-500">
        In progress: PA·dev (developer edition of Pocket Agent), Buildout
        Loyalty, and Buildout Scout. Specs locked; not shipped yet.
      </p>
    </section>
  );
}

function kindLabel(kind: Brand["kind"]): string {
  switch (kind) {
    case "product":
      return "Live product";
    case "studio":
      return "Studio · templates + custom builds";
    case "operating":
      return "Operating business";
  }
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/40 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
        <span className="mt-1 shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          {kindLabel(brand.kind)}
        </span>
      </div>
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
        I&apos;m Chase Whited. Air Force investigator turned entrepreneur turned
        K-12 SaaS seller turned systems and product builder. Seven years at
        Snap! Mobile growing one territory from roughly $300K to a $2.5M
        annualized pace. Now I build revenue systems, custom software, and AI
        workflows for owner-led businesses — and run all of the above.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
        <Link
          href="/book"
          className="text-accent transition hover:text-cyan-300"
        >
          Book a call
        </Link>
        <Link
          href="/about"
          className="text-accent transition hover:text-cyan-300"
        >
          About Chase
        </Link>
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
