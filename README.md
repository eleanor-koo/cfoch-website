# Care for our Common Home

CFOCH's environmental education website, maintained in Eleanor's repository. This copy originates from snek152/cfoch-website; the original Git history, logo, team credits, research articles, and community photographs are retained.

## Preview and development

Use Node.js 22 or later and pnpm 10.28.2. Run `pnpm install --frozen-lockfile`, then `pnpm dev`. Open http://localhost:3000. For a production preview, run `pnpm build` then `pnpm start`.

The website uses Next.js's Pages Router. All content pages are statically generated. No application secrets or environment variables are required to build the site.

## Content

- Homepage: `pages/index.tsx`
- Original homepage mission, beliefs, values, and goals: `components/pages/home/Organization.tsx`, displayed on the homepage and at `/about`
- Research articles: `lib/research/*.md`
- Article listing: `lib/data/research.ts`
- Team archive: `lib/data/team.ts`
- Events: `lib/data/events.tsx`
- Donation destinations: `components/pages/donate/DonationGrid.tsx`
- Visual system: `styles/globals.css`
- Image provenance and unavailable original illustrations: `IMAGE-SOURCES.json`

Nature photos and available research illustrations are served locally. Six unavailable external article illustrations were removed; no scientific chart was replaced with a stock photograph. External research citations retain their original destinations and have not undergone a full editorial fact-check.

Only original website photographs and the owner-supplied transparent CFOCH logo are displayed. About-section photo slots are placeholders for images Eleanor will provide. See `/photo-credits`.

## Owner review before launch

This redesign is a preview. **Do not connect cfoch.org or replace its production deployment until Eleanor approves the design.**

- This fork belongs to `eleanor-koo`. The original site is served by Vercel, but its project ownership has not been verified.
- To publish independently, create a hosting project in Eleanor's own account and import this repository. First deploy to a preview address. Only after approval should the domain be connected and any required DNS verification completed.
- Confirm current team roles, volunteer form monitoring, volunteer recognition availability, and donation processor access. Team roles are labeled as an archive rather than represented as a current roster.
- The footer no longer makes an unverified current 501(c)(3) claim. The donation page does not represent gifts as deductible while the foundation's status is unresolved. Review this wording after reinstatement.
- The old $500 button pointed to the $100 checkout. It was removed; a correct new link is needed before adding a $500 option.
- The $2 and $10 Stripe destinations were visually checked and showed CFOCH and their expected amounts. No payment was made. Other checkout destinations and payout routing require owner verification; browser instability prevented completing all checkout checks.
- The volunteer form remains an external Google Form, with an Instagram fallback. No application was submitted.

## Verification

- Production build: all 18 generated routes (including framework/error output).
- Browser review of all 16 content routes at phone width: no horizontal page overflow or completed broken image loads observed.
- Mobile menu opening and navigation/closing, gallery next button, desktop homepage, and tablet team layout checked. The team grid was corrected after a tablet overlap was found.
- Production dependency audit: zero known advisories at verification on November 14, 2026.
- No changes have been made to the original repository, domain records, payment settings, or cfoch.org hosting.

## Deployment settings

Framework: Next.js. Build command: `pnpm build`. Install command: `pnpm install --frozen-lockfile`. Use Node.js 22 or 24. Keep `pnpm-lock.yaml` and `pnpm-workspace.yaml` committed; the workspace file pins the patched PostCSS dependency.

## November 15 owner revision

Restored the original homepage summary and all six About sections on the homepage. Removed newly written marketing sections and article teasers. Preserved the numbered Field Notes artwork, which consists of CSS, text, and symbols, not generated images. Installed the supplied logo with its original transparency, trimming only empty margins. Applied the six Nature Is Yours colors with complementary logo greens. Public deployment still requires owner approval.
