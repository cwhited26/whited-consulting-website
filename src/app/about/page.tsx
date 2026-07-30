import type { Metadata } from "next";
import Link from "next/link";

const EMAIL = "chase@whited.consulting";

const TITLE = "About Chase Whited — Whited Consulting";
const DESCRIPTION =
  "I build revenue systems. Air Force investigator, entrepreneur, seven-year K-12 SaaS seller at Snap! Mobile, systems and product builder — Chase Whited's career narrative, proof points, and document library.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://whited.consulting/about",
    siteName: "Whited Consulting",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

interface CareerStop {
  title: string;
  org: string;
  years: string;
  location?: string;
  bullets: readonly string[];
}

const STOPS: readonly CareerStop[] = [
  {
    title: "Founder · GTM & AI Systems Consultant",
    org: "Whited Consulting",
    years: "Mar 2025 – Present",
    location: "Chattanooga, TN",
    bullets: [
      "Advise founders and owner-led businesses on ICP, offer, outbound, pipeline, discovery, CRM workflows, and repeatable go-to-market process.",
      "Build AI-assisted workflows for prospect research, meeting prep, follow-up, proposal drafting, task routing, knowledge retrieval, and sales reporting.",
      "Design and ship custom software and SaaS products across youth sports, field services, scheduling, and AI productivity — translating operator pain into working systems.",
      "Approximately $15K–$25K per month in consulting and software revenue, personally owning strategy, selling, solution design, delivery, and client communication.",
    ],
  },
  {
    title: "Senior Account Executive",
    org: "Snap! Mobile",
    years: "Sep 2018 – Mar 2025",
    location: "East Tennessee, North Georgia, and surrounding markets",
    bullets: [
      "Built a new territory from roughly $300K to $750K in year one, then to $1.3M, $1.8M, $2.0M, and a $2.5M annualized pace before departure.",
      "Owned the full customer lifecycle: territory planning, cold prospecting, school visits, discovery, demos, stakeholder alignment, closing, launch support, renewal, and expansion.",
      "Sold fundraising and engagement technology to K-12 schools, athletic departments, coaches, fine arts programs, booster organizations, community groups, and colleges. Typical deal size roughly $8,500 to $10,000.",
      "Ran a field-led outbound motion — reaching coaches and program leaders before the school day started, supported by calls, texts, email, conferences, referrals, and district-level relationships.",
      "Navigated complex buying environments involving coaches, athletic directors, principals, bookkeepers, district leaders, parents, and competing vendors.",
    ],
  },
  {
    title: "Founder · Managing Partner",
    org: "Chattanooga Functional Fitness",
    years: "May 2016 – Feb 2020",
    location: "Chattanooga, TN",
    bullets: [
      "Acquired and operated an independent fitness business within roughly two weeks of an unexpected job loss — owning sales, marketing, staffing, coaching, retention, operations, and P&L.",
      "Grew membership and revenue through paid acquisition, consultative sales, referrals, recurring-revenue offers, community events, and disciplined follow-up.",
      "Hired, trained, and led coaches and staff while maintaining a strong member community and consistent service standards.",
      "Sold the business in 2020 after roughly four years of ownership.",
    ],
  },
  {
    title: "Criminal Investigator · Security Forces",
    org: "United States Air Force",
    years: "Jun 2009 – Jun 2015",
    location: "Eglin Air Force Base, FL",
    bullets: [
      "Investigated criminal cases, interviewed witnesses and subjects, analyzed evidence, authored detailed reports, and maintained chain-of-custody discipline.",
      "Worked with military, local, and federal law-enforcement partners while prioritizing caseloads and communicating findings under pressure.",
      "Built the diagnostic questioning, pattern-recognition, documentation, and calm-under-pressure foundation that carried into every role after.",
    ],
  },
];

const PROOF_POINTS: readonly string[] = [
  "Grew a Snap! Mobile territory from roughly $300K to a $2.5M annualized pace over seven years.",
  "Owned full-cycle sales and renewals across K-12 schools, athletic departments, fine arts, boosters, community groups, and colleges.",
  "Typical Snap! Mobile deal size approximately $8,500 to $10,000.",
  "Founded and operated businesses across fitness, contracting, consulting, and software.",
  "Built and shipped multiple AI-enabled and workflow-focused software products used inside real operating businesses.",
  "Approximately $15K to $25K per month in consulting and software revenue as of July 2026.",
  "Operates effectively at the intersection of customer, revenue, process, product, and technology.",
];

const CAPABILITIES: readonly { area: string; note: string }[] = [
  {
    area: "Full-cycle SaaS sales",
    note: "Prospecting through renewal, K-12 buying environments, multi-stakeholder deals.",
  },
  {
    area: "Territory and outbound design",
    note: "Field-led prospecting, segmentation, sequences, CRM discipline, referrals.",
  },
  {
    area: "GTM systems and AI workflows",
    note: "ICP, offer, pipeline, follow-up, discovery, handoffs — codified so another person can run them.",
  },
  {
    area: "Product and systems building",
    note: "Custom CRMs, field-ops apps, scheduling, documents, dashboards, AI agent workspaces.",
  },
  {
    area: "Technical translation",
    note: "Business requirement to working system, and back into plain English for the customer.",
  },
  {
    area: "Operator judgment",
    note: "P&L, hiring, service delivery, boundaries, decisions made with incomplete information.",
  },
];

interface DocItem {
  href: string;
  label: string;
  description: string;
  size: string;
}

const DOCS: readonly DocItem[] = [
  {
    href: "/Chase_Whited_Career_Operating_Manual.docx",
    label: "Career Operating Manual",
    description:
      "A structured record of how Chase thinks, sells, builds, leads, and creates repeatable business systems. The narrative behind the resume.",
    size: "DOCX",
  },
  {
    href: "/Chase_Whited_Resume_GTM_Engineering.docx",
    label: "GTM Engineering Resume",
    description:
      "Revenue leadership, K-12 SaaS full-cycle sales, entrepreneurship, AI workflow design, and GTM systems experience.",
    size: "DOCX",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-hero-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70" />

      <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-16 sm:pb-32 sm:pt-20">
        <TopBar />
        <Hero />
        <Positioning />
        <Arc />
        <Proof />
        <Capabilities />
        <Documents />
        <Experience />
        <Contact />
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
      <div className="flex items-center gap-5">
        <Link
          href="/why-chase"
          className="hidden text-zinc-400 transition hover:text-white sm:inline"
        >
          Why Chase
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

function Hero() {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        About
      </p>
      <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
        Chase Whited
      </h1>
      <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
        Investigator, operator, entrepreneur, revenue leader, systems and
        product builder. Chattanooga, TN. Solo. From a phone, mostly.
      </p>
    </section>
  );
}

function Positioning() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Positioning
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-white">
        I build revenue systems. I understand the customer, diagnose where
        growth or execution is breaking, and combine sales, process, technology,
        and automation to make the business more repeatable.
      </p>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">
        The career looks broad on paper, but the pattern is consistent: enter
        an unclear environment, figure out how people, information, and money
        move through it, find the bottleneck, build a practical system, and
        make that system repeatable.
      </p>
    </section>
  );
}

function Arc() {
  const arc: readonly { label: string; note: string }[] = [
    {
      label: "Investigator",
      note: "Diagnostic questioning, evidence, documentation, judgment under pressure.",
    },
    {
      label: "Operator",
      note: "A solution only matters when people can use it consistently.",
    },
    {
      label: "Entrepreneur",
      note: "Sales, cash flow, hiring, retention, service delivery, personal accountability.",
    },
    {
      label: "Revenue leader",
      note: "Territory creation, multi-stakeholder selling, closing, renewal, expansion.",
    },
    {
      label: "Product and systems builder",
      note: "Turned repeated operational pain into workflows, software, and reusable infrastructure.",
    },
    {
      label: "GTM systems builder",
      note: "A repeatable path from market insight to pipeline, sale, adoption, and growth.",
    },
  ];

  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        The arc
      </h2>
      <ol className="mt-5 space-y-3">
        {arc.map((step, i) => (
          <li
            key={step.label}
            className="flex gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <span className="mt-0.5 shrink-0 rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {step.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Proof() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Proof points
      </h2>
      <ul className="mt-5 space-y-2.5">
        {PROOF_POINTS.map((p) => (
          <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        What I&apos;m good at
      </h2>
      <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CAPABILITIES.map((c) => (
          <div
            key={c.area}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <dt className="text-sm font-semibold text-white">{c.area}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-zinc-400">
              {c.note}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Documents() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Documents
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        The two source documents behind this page. Take either one with you.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4">
        {DOCS.map((doc) => (
          <a
            key={doc.href}
            href={doc.href}
            className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-accent/40 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
            download
          >
            <span className="mt-1 shrink-0 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {doc.size}
            </span>
            <div className="flex-1">
              <p className="text-base font-semibold text-white">{doc.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {doc.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition group-hover:gap-2.5">
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Experience
      </h2>
      <div className="mt-5 space-y-6">
        {STOPS.map((stop) => (
          <article
            key={`${stop.org}-${stop.years}`}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-white">
                {stop.title}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {stop.years}
              </p>
            </div>
            <p className="mt-1 text-sm text-accent">{stop.org}</p>
            {stop.location ? (
              <p className="mt-0.5 text-xs text-zinc-500">{stop.location}</p>
            ) : null}
            <ul className="mt-3 space-y-2">
              {stop.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-zinc-500">
        A longer biographical arc lives at{" "}
        <a
          href="https://chase.whited.consulting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 underline decoration-zinc-700 transition hover:text-zinc-200"
        >
          chase.whited.consulting
        </a>
        .
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-14 rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Contact
      </h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">
        If you&apos;re a founder, operator, revenue leader, or hiring team
        looking at Founding GTM, GTM Engineering, Outbound Growth, Solutions
        Consulting, or strategic AE fits — email is the fastest way.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link
          href="/book"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          Book a call with Chase
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#05070a]"
        >
          {EMAIL}
        </a>
        <Link
          href="/why-chase"
          className="text-zinc-400 transition hover:text-zinc-200"
        >
          Why Chase
        </Link>
        <a
          href="https://www.linkedin.com/in/chasewhited"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-zinc-200"
        >
          LinkedIn
        </a>
        <span className="text-zinc-500">(423) 364-5752</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-6 text-center text-xs text-zinc-500">
      <p>
        Chase Whited · Whited Consulting · Chattanooga, TN · 2026 ·{" "}
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
