import type { Metadata } from "next";
import Link from "next/link";

const EMAIL = "chase@whited.consulting";
const RESUME_HREF = "/Chase_Whited_Resume_GTM_Engineering.docx";
const MANUAL_HREF = "/Chase_Whited_Career_Operating_Manual.docx";

const TITLE = "Why Chase — Whited Consulting";
const DESCRIPTION =
  "I build the systems behind revenue. Seven years of full-cycle K-12 SaaS sales at Snap! Mobile, a territory grown from roughly $300K to a $2.5M annualized pace, and the software, AI, and workflow systems built since.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/why-chase",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://whited.consulting/why-chase",
    siteName: "Whited Consulting",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function WhyChasePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-hero-glow pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70" />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-16 sm:pb-32 sm:pt-20">
        <TopBar />
        <Hero />
        <WhatIDo />
        <WhyBackground />
        <Timeline />
        <WhatIveBuilt />
        <BestAt />
        <Different />
        <Proof />
        <Documents />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <div className="mb-12 flex items-center justify-between text-sm">
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Whited Consulting
      </Link>
      <div className="flex items-center gap-5">
        <Link
          href="/about"
          className="hidden text-zinc-400 transition hover:text-white sm:inline"
        >
          About
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="text-accent transition hover:text-cyan-300"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Why Chase
      </p>
      <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
        I build the systems behind revenue.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        I spent seven years in full-cycle K–12 SaaS sales building a territory
        from roughly $300K to a $2.5M annualized pace. Today I help founders
        and growing companies turn customer insight into repeatable revenue
        systems through software, AI, automation, workflows, and operational
        design.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          href="/book"
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          Work With Whited Consulting
        </Link>
        <a
          href={RESUME_HREF}
          download
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}

const DO_CARDS: readonly { name: string; note: string }[] = [
  {
    name: "Diagnose",
    note: "Find where revenue actually breaks. Discovery calls, pipeline reviews, CRM audits, time with the people doing the work. Separate symptoms from root causes before anything gets built.",
  },
  {
    name: "Design",
    note: "Turn the diagnosis into a system: stages, ownership, rules, workflows, and the numbers that tell you whether it's working.",
  },
  {
    name: "Build",
    note: "Ship the software. Custom CRMs, automations, AI workflows, integrations, dashboards. Working systems in production, not recommendations in a slide.",
  },
  {
    name: "Operationalize",
    note: "Make it stick. Documentation, onboarding, playbooks, and the follow-through that turns a new system into how the business actually runs.",
  },
];

function WhatIDo() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>What I actually do</SectionLabel>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        Most consultants stop at strategy. Most engineers stop at software.
        Most salespeople stop at the close. The work I do connects all three,
        and it runs in four moves.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DO_CARDS.map((card, i) => (
          <div
            key={card.name}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-white">{card.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {card.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SNAP_FACTS: readonly { label: string; note: string }[] = [
  {
    label: "Territory growth",
    note: "First rep in a territory doing roughly $300K. $750K in year one. Then $1.3M, $1.8M, $2.0M, and a $2.5M annualized pace.",
  },
  {
    label: "Full-cycle sales",
    note: "Prospecting, discovery, demos, closing, launch support, renewal, expansion. Every stage of every deal, no handoffs.",
  },
  {
    label: "Stakeholder complexity",
    note: "Coaches, athletic directors, principals, bookkeepers, district leaders, parents, and competing vendors. Often inside the same deal, at a typical deal size of $8,500 to $10,000.",
  },
  {
    label: "Renewals",
    note: "I kept the accounts I sold, which means I lived with every promise I made at the close. That changes how you sell.",
  },
  {
    label: "Expansion",
    note: "One target program refused meetings for years. I won the schools around it, used their results as proof, earned the account after roughly three years, and kept it for roughly four.",
  },
];

function WhyBackground() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>Why my background matters</SectionLabel>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        Start with Snap! Mobile. Not the software, not the AI, not the
        companies I&apos;ve started. Seven years as a Senior Account Executive
        selling fundraising and engagement technology into K–12 schools is the
        proof underneath everything else on this page.
      </p>
      <div className="mt-8 space-y-3">
        {SNAP_FACTS.map((fact) => (
          <div
            key={fact.label}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-5 py-4 sm:flex sm:gap-6"
          >
            <p className="text-sm font-semibold text-white sm:w-48 sm:shrink-0">
              {fact.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400 sm:mt-0">
              {fact.note}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300">
        That period is why the technical work lands. When I build a CRM, I know
        what a rep will actually log at 7pm in a school parking lot. When I
        automate follow-up, I know which touches move a deal and which ones
        annoy a buyer. When I design a pipeline, the stages match how customers
        actually buy, because I spent seven years watching them buy.
      </p>
    </section>
  );
}

const TIMELINE: readonly { years: string; label: string; note: string }[] = [
  {
    years: "2009–2015",
    label: "Air Force",
    note: "Criminal investigator, Security Forces, Eglin AFB. Diagnostic questioning, evidence, documentation, and judgment under pressure.",
  },
  {
    years: "2016–2020",
    label: "Entrepreneur",
    note: "Acquired Chattanooga Functional Fitness roughly two weeks after an unexpected job loss. Owned sales, staffing, retention, and P&L. Sold the business in 2020.",
  },
  {
    years: "2018–2025",
    label: "SaaS sales",
    note: "Senior Account Executive at Snap! Mobile. Built one K–12 territory from roughly $300K to a $2.5M annualized pace, full cycle.",
  },
  {
    years: "2025",
    label: "Founder",
    note: "Started Whited Consulting. Consulting and software for founders and owner-led businesses, roughly $15K to $25K a month.",
  },
  {
    years: "2025–2026",
    label: "Systems builder",
    note: "Built custom CRMs, scheduling, roof measurement, and field-ops software for paying clients through Buildout Studios.",
  },
  {
    years: "Now",
    label: "AI + GTM",
    note: "Building AI-powered revenue systems: Pocket Agent, AI workflows, and go-to-market infrastructure that founders can actually run.",
  },
];

function Timeline() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>From sales to systems</SectionLabel>
      <ol className="relative mt-8 space-y-8 border-l border-white/10 pl-6">
        {TIMELINE.map((stop) => (
          <li key={stop.label} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-[#05070a]"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {stop.years}
            </p>
            <h3 className="mt-1 text-base font-semibold text-white">
              {stop.label}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {stop.note}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const BUILDS: readonly {
  name: string;
  href: string;
  display: string;
  what: string;
  why: string;
  proves: string;
}[] = [
  {
    name: "Pocket Agent",
    href: "https://aipocketagent.com",
    display: "aipocketagent.com",
    what: "An AI Agent Workspace for owner-led businesses. Business knowledge, role-based personas, workflow tools, and owner-approved actions in one chat.",
    why: "Generic AI starts from zero every conversation. An owner-led business needs AI that starts from the business itself and asks before it acts.",
    proves:
      "I can design and ship AI systems that do real work under real guardrails, not demos.",
  },
  {
    name: "AthleteOS",
    href: "https://athlete-os.com",
    display: "athlete-os.com",
    what: "The operating system for youth sports: organization management, parent engagement, coach tools, and scheduling.",
    why: "Seven years selling into athletic departments showed me exactly where coaches, parents, and program leaders lose time and money.",
    proves:
      "Customer insight earned through years of selling, turned directly into product.",
  },
  {
    name: "Buildout Studios",
    href: "https://buildoutstudios.com",
    display: "buildoutstudios.com",
    what: "My software studio. Custom CRMs, field-ops apps, documents, and automation for service businesses.",
    why: "Owner-led service businesses outgrow spreadsheets long before they can afford enterprise software. They need custom systems they actually own.",
    proves:
      "Full-cycle delivery for paying clients: discovery, build, deployment, adoption.",
  },
  {
    name: "Buildout Schedule",
    href: "https://buildoutschedule.com",
    display: "buildoutschedule.com",
    what: "AI-native scheduling: booking pages, calendar sync, availability logic, and reusable embeds.",
    why: "Every business I run needed scheduling, and renting it per seat forever made no sense. I built the availability engine first and layered the product on top.",
    proves:
      "Build-versus-buy judgment, and the discipline to ship a full product from primitives.",
  },
  {
    name: "Buildout Measure",
    href: "https://measure.buildoutstudios.com",
    display: "measure.buildoutstudios.com",
    what: "Roof measurement SaaS: structured building data, NOAA storm history, and supplier-ready PDFs in three taps.",
    why: "It comes straight from my contracting years. Measurement was slow, and reports were expensive.",
    proves:
      "Firsthand domain pain turned into focused vertical software with real pricing.",
  },
];

function WhatIveBuilt() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>What I&apos;ve built</SectionLabel>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        Production software, running today, with real users and real pricing.
        Each one exists because I hit the problem myself or watched a customer
        hit it.
      </p>
      <div className="mt-8 space-y-4">
        {BUILDS.map((build) => (
          <article
            key={build.name}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-white">{build.name}</h3>
              <a
                href={build.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-cyan-300"
              >
                {build.display}
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
              </a>
            </div>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  What it is
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {build.what}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Why it exists
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {build.why}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  What it demonstrates
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {build.proves}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

const BEST_AT: readonly string[] = [
  "Founder-led sales needs to become something a team can repeat.",
  "The CRM doesn't reflect how deals actually move.",
  "The team knows where the operational bottlenecks are, but nobody has time to fix them.",
  "AI needs to become a working part of operations, not an experiment on the side.",
  "The product team needs customer context it isn't getting.",
  "Outbound needs better systems, not more volume.",
  "Operations need automation that respects how the work actually happens.",
];

function BestAt() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>The type of work I&apos;m best at</SectionLabel>
      <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white">
        The closest label is a forward-deployed GTM builder.
      </p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
        Not a consultant who hands you a deck. Not a GTM engineer who only
        lives in the tooling. Someone who sits inside the business, works the
        actual pipeline, and builds the systems while using them. I&apos;m
        strongest when:
      </p>
      <ul className="mt-6 space-y-2.5">
        {BEST_AT.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-zinc-300"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const COMPARISON: readonly {
  facet: string;
  sales: string;
  eng: string;
  me: string;
}[] = [
  {
    facet: "Customers",
    sales: "Understand them deeply",
    eng: "Meet them secondhand",
    me: "Understand them, then build for them",
  },
  {
    facet: "Discovery",
    sales: "Runs it",
    eng: "Rarely sits in it",
    me: "Runs it, then turns it into software",
  },
  {
    facet: "Systems",
    sales: "Works around broken ones",
    eng: "Builds them to spec",
    me: "Builds them around how customers actually buy",
  },
  {
    facet: "The CRM",
    sales: "Complains about it",
    eng: "Configures it",
    me: "Makes it reflect how deals actually move",
  },
  {
    facet: "Automation",
    sales: "Requests it",
    eng: "Ships it",
    me: "Decides what deserves it, then ships it",
  },
  {
    facet: "Revenue",
    sales: "Owns the number",
    eng: "Owns the code",
    me: "Owns the number and the system behind it",
  },
];

function Different() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>What makes me different</SectionLabel>
      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03]">
              <th scope="col" className="px-5 py-3.5 font-semibold text-zinc-500">
                <span className="sr-only">Area</span>
              </th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-zinc-400">
                Most salespeople
              </th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-zinc-400">
                Most engineers
              </th>
              <th scope="col" className="px-5 py-3.5 font-semibold text-accent">
                Me
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row) => (
              <tr key={row.facet} className="border-b border-white/5 last:border-b-0">
                <th
                  scope="row"
                  className="whitespace-nowrap px-5 py-3.5 align-top font-semibold text-white"
                >
                  {row.facet}
                </th>
                <td className="px-5 py-3.5 align-top text-zinc-400">
                  {row.sales}
                </td>
                <td className="px-5 py-3.5 align-top text-zinc-400">{row.eng}</td>
                <td className="px-5 py-3.5 align-top font-medium text-zinc-200">
                  {row.me}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const STORIES: readonly { title: string; body: readonly string[] }[] = [
  {
    title: "The Snap! Mobile territory",
    body: [
      "I started as the first rep in a territory doing roughly $300K. The motion I built was field-led: reach coaches and program leaders before the school day started, back it with calls, texts, referrals, and district relationships.",
      "The territory hit $750K in year one. Then $1.3M, $1.8M, $2.0M, and a $2.5M annualized pace. Full cycle the whole way: I prospected the accounts, closed them, launched them, renewed them, and grew them.",
    ],
  },
  {
    title: "Contracting years into reusable software",
    body: [
      "I ran my own residential exteriors company: roofing, siding, gutters. I built the software that ran it, from lead capture through estimates, production, and collections, because nothing on the market matched how the work actually moved.",
      "Then I extracted that software into reusable contractor templates. Custom contractor builds at Buildout Studios now start from those templates instead of a blank repo, and Buildout Measure exists because I knew firsthand how slow roof measurement was.",
    ],
  },
  {
    title: "A customer implementation",
    body: [
      "A home-improvement contractor in Chicago hired Buildout Studios for a custom CRM. He walked me through how an insurance restoration job actually moves, from first inspection through final payment, roughly fifty steps.",
      "I built his workflow into software he owns: staged automations, e-signature, damage-report PDFs, photo documentation on every job, and an instant quote widget priced for his market. He paid $3,500 plus hosting, and he runs his business on it today.",
    ],
  },
];

function Proof() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>Proof</SectionLabel>
      <div className="mt-8 space-y-4">
        {STORIES.map((story) => (
          <article
            key={story.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="text-base font-semibold text-white">{story.title}</h3>
            {story.body.map((para) => (
              <p
                key={para}
                className="mt-3 text-sm leading-relaxed text-zinc-400"
              >
                {para}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

const DOCS: readonly {
  label: string;
  description: string;
  href?: string;
  status: "download" | "in-progress" | "queued";
}[] = [
  {
    label: "Career Operating Manual",
    description:
      "A structured record of how I think, sell, build, lead, and create repeatable business systems. The narrative behind the resume.",
    href: MANUAL_HREF,
    status: "download",
  },
  {
    label: "Resume",
    description:
      "Revenue leadership, K–12 SaaS full-cycle sales, entrepreneurship, AI workflow design, and GTM systems experience.",
    href: RESUME_HREF,
    status: "download",
  },
  {
    label: "Executive Bio",
    description:
      "The short-form version of this page for boards, event pages, and press. Not written yet; this page is the current source.",
    status: "in-progress",
  },
  {
    label: "Interview Playbook",
    description:
      "How I answer the hard questions, with the stories behind each answer. Queued behind the bio; it will appear here when it ships.",
    status: "queued",
  },
];

function Documents() {
  return (
    <section className="mt-20 sm:mt-24">
      <SectionLabel>Career documents</SectionLabel>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DOCS.map((doc) => {
          const inner = (
            <>
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-semibold text-white">{doc.label}</p>
                <span
                  className={
                    doc.status === "download"
                      ? "shrink-0 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent"
                      : "shrink-0 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                  }
                >
                  {doc.status === "download"
                    ? "DOCX"
                    : doc.status === "in-progress"
                      ? "In progress"
                      : "Queued"}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {doc.description}
              </p>
              {doc.status === "download" ? (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition group-hover:gap-2.5">
                  Download
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
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                </span>
              ) : null}
            </>
          );

          if (doc.href) {
            return (
              <a
                key={doc.label}
                href={doc.href}
                download
                className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-accent/40 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
              >
                {inner}
              </a>
            );
          }
          return (
            <div
              key={doc.label}
              className="flex flex-col rounded-xl border border-white/5 bg-white/[0.01] p-5"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mt-20 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:mt-24 sm:p-12">
      <h2 className="text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        If you&apos;re trying to build a better revenue system, I&apos;d love
        to help.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
        Whether that&apos;s through Whited Consulting or as part of your team.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
          {EMAIL}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-6 text-center text-xs text-zinc-500">
      <p>
        Chase Whited · Whited Consulting · Chattanooga, TN · 2026 ·{" "}
        <Link href="/" className="text-zinc-400 transition hover:text-zinc-200">
          Back to Whited Consulting
        </Link>
      </p>
    </footer>
  );
}
