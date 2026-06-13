interface Brand {
  name: string;
  oneLiner: string;
  href: string;
  display: string;
}

const BRANDS: readonly Brand[] = [
  {
    name: "Pocket Agent",
    oneLiner:
      "One chat you tell what needs doing. It runs the work you're tired of running, plugs into the tools you already use, and waits for your approval before anything goes out.",
    href: "https://aipocketagent.com",
    display: "aipocketagent.com",
  },
  {
    name: "PA·dev",
    oneLiner:
      "Pocket Agent for developers. REST + MCP, bring your own model, hosted brain plus personas and privacy zones.",
    href: "https://getpa-dev.vercel.app",
    display: "getpa.dev",
  },
  {
    name: "Buildout Studios",
    oneLiner:
      "My software studio. Custom builds and white-label contractor-OS templates — Pocket Agent ships pre-installed in every BOS Custom build.",
    href: "https://buildoutstudios.com",
    display: "buildoutstudios.com",
  },
  {
    name: "Buildout Measure",
    oneLiner:
      "Roof measurement SaaS. Aerial measurement, NOAA storm history, and supplier-ready PDFs in three taps. Pay per report or $79/mo Pro.",
    href: "https://measure.buildoutstudios.com",
    display: "measure.buildoutstudios.com",
  },
  {
    name: "AthleteOS",
    oneLiner:
      "Sports SaaS for parents, coaches, and youth-team operators. Career timelines, schedules, scoreboards, fundraising.",
    href: "https://athlete-os.com",
    display: "athlete-os.com",
  },
  {
    name: "Layoutbook",
    oneLiner:
      "The little black book of landing-page prompts that don't look vibe-coded. For designers, devs, and agencies building aspirational pages. $249 once, yours for life.",
    href: "https://layoutpromptstore.com",
    display: "layoutpromptstore.com",
  },
  {
    name: "Field Book",
    oneLiner:
      "The little black book of conversion-first website prompts. For designers, freelancers, agencies, and owners building local-business sites. $149 once, yours for life.",
    href: "https://fieldbooksites.com",
    display: "fieldbooksites.com",
  },
  {
    name: "Tennessee Valley Exteriors",
    oneLiner:
      "My roofing company in north Alabama. A working contracting business — and the proof I run the same brain I sell.",
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
        A software studio, a roofing company, and the products I build and run from one brain.
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
        Whited Consulting is the holding entity behind everything I build. Most of it is software you can buy or use today. One of them — Tennessee Valley Exteriors — is a roofing company I actually run, which is where the rest of it gets proven before I sell it. No fluff, no hype, just the operator-built infrastructure that runs them.
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
        Building next: Buildout Loyalty and Buildout Scout. Specs locked, not live yet.
      </p>
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
        I&apos;m Chase Whited. I run all of it. Solo. From a phone, mostly. The shape of my path so far lives at{" "}
        <a
          href="https://chase.whited.consulting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition hover:text-cyan-300"
        >
          chase.whited.consulting
        </a>
        . Here&apos;s how to get in touch.
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
