# whited-consulting-website

Parent-brand one-pager for Whited Consulting — the holding entity behind Pocket Agent, PA·dev, Buildout Studios, Buildout Measure, AthleteOS, and Tennessee Valley Exteriors.

Live: <https://whited.consulting>

## Stack

- Next.js 14 App Router
- TypeScript (strict)
- Tailwind CSS (dark mode by default)
- Deployed on Vercel; DNS at Cloudflare

## Local dev

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## Build

```bash
pnpm build
```

## Domain + email

`whited.consulting` is registered through Cloudflare Registrar. DNS records (Vercel A/CNAME, Google Workspace MX/SPF/DMARC, DKIM CNAME) live in the Cloudflare zone. Mail is routed through Chase's TNVEX Google Workspace tenant as a secondary domain — `chase@whited.consulting` is a full user. Setup walkthrough: `~/whited-brain/handoffs/2026-05-09_WhitedConsulting_GoogleWorkspace_Setup.md`.

## Brand context

Source of truth for sub-brand positioning: `~/whited-brain/Whited_Consulting_Brand_Architecture.md`.
