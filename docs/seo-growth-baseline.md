# PolishPrompt SEO & Growth Baseline Report

**Date**: 2026-10-12
**Repository**: `/opt/data/polishprompt-source-work`
**Production**: https://polishprompt.tech/
**Git Branch**: `main` (commit `0f4318a4be28480ae884702a2a4a195e6e546c28`)
**GitHub**: https://github.com/Mastyogi/PolishPrompt

---

## 1. Environment & Tools Available

| Tool / Integration        | Status          | Notes                                                                           |
| ------------------------- | --------------- | ------------------------------------------------------------------------------- |
| Local repository          | ✅ OBSERVED     | `/opt/data/polishprompt-source-work`                                            |
| Git / GitHub CLI          | ✅ OBSERVED     | `gh-bin` v2.62.0 authenticated as `Mastyogi`                                    |
| GitHub Actions            | ✅ OBSERVED     | "Deploy to Vercel" workflow active                                              |
| Vercel deployment         | ✅ OBSERVED     | Project `prj_5OjBhe766K0mTAkToC34ar8dgHQD`, org `team_8rldvREM9d9sp1QAoGZOEgbi` |
| Browser / HTTP inspection | ✅ OBSERVED     | Manual curl + regex validation                                                  |
| Search Console            | ❌ NOT VERIFIED | No GSC verification found in code                                               |
| GA4 / Analytics           | ✅ OBSERVED     | GA4 gtag in `__root.tsx` conditional on `VITE_GA_ID`                            |
| Bing Webmaster Tools      | ❌ NOT VERIFIED | No evidence                                                                     |
| Amazon sales data         | ❌ NOT VERIFIED | No access; destination URL only                                                 |
| Newsletter / Supabase     | ⚠️ PARTIAL      | Code exists, requires `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`            |

---

## 2. Verified Production State (Tested 2026-10-12)

| Route                                    | HTTP Status | Expected | H1 / Title                                 | Canonical          | Parent Leakage |
| ---------------------------------------- | ----------- | -------- | ------------------------------------------ | ------------------ | -------------- |
| `/`                                      | 200         | ✅       | "Most people do not have an AI problem..." | 1 (`/`)            | N/A            |
| `/library`                               | 200         | ✅       | "Prompt discovery made useful."            | 1 (`/library`)     | N/A            |
| `/library/p1`                            | 200         | ✅       | "The RACI Matrix Creator"                  | 1 (`/library/p1`)  | ✅ OK          |
| `/library/p2`                            | 200         | ✅       | "The 80/20 Rule Business Optimizer"        | 1 (`/library/p2`)  | ✅ OK          |
| `/library/p50`                           | 200         | ✅       | "The Weekly Self-Reflection Coach"         | 1 (`/library/p50`) | ✅ OK          |
| `/guides`                                | 200         | ✅       | "Guides and learning posts"                | 1 (`/guides`)      | N/A            |
| `/guides/how-to-write-better-prompts`    | 200         | ✅       | "How to Write Better Prompts"              | 1 (`/guides/...`)  | ✅ OK          |
| `/guides/prompt-mistakes-beginners-make` | 200         | ✅       | "Prompt Mistakes Beginners Make"           | 1 (`/guides/...`)  | ✅ OK          |
| `/library/p999`                          | **404**     | ✅       | N/A                                        | N/A                | N/A            |
| `/library/not-a-real-prompt`             | **404**     | ✅       | N/A                                        | N/A                | N/A            |
| `/guides/not-a-real-guide`               | **404**     | ✅       | N/A                                        | N/A                | N/A            |

**Sitemap**: 61 URLs (1 homepage + 7 static + 50 prompts + 3 guides) — ✅ VALID  
**Robots.txt**: Allows all, AI-crawler friendly, sitemap declared — ✅ VALID  
**Structured Data**: TechArticle (prompts), Article (guides), Organization/WebSite/Product/Quiz/FAQPage (homepage) — ✅ PRESENT  
**OG Image**: `/og-image.svg` (1224 bytes) — ✅ EXISTS  
**Favicon**: `/favicon.svg` — ✅ EXISTS

**Build/Lint/Format**: All PASS (0 errors, 7 pre-existing warnings)

---

## 3. Technical Architecture

- **Framework**: TanStack Start (React 19) with SSR + file-based routing
- **Router**: `@tanstack/react-router` with `beforeLoad` + `notFound()` for 404s
- **Rendering**: Server-rendered detail pages; Layout + Index split (SSR fixed)
- **Content Model**:
  - `PROMPTS[]` (69 records): id, title, category, template, variables[], featured
  - `GUIDE_POSTS[]` (3 records): slug, title, description, category, readTime, updatedAt, excerpt, content[]
  - `CATEGORIES[]` (5): business, marketing, reasoning, indian, productivity
  - `TESTIMONIALS[]`, `FAQ_ITEMS[]`
- **Sitemap**: Generated at build from `content.ts` via `scripts/generate-sitemap.mjs`
- **Deployment**: Vercel via GitHub Actions (pinned action SHAs)
- **Vercel Config**: Rewrites to `/api/ssr` for SPA/SSR

---

## 4. Analytics & Conversion Measurement

**Existing System**: GA4 via gtag (conditional on `VITE_GA_ID`)

| Event                                 | Trigger           | Properties                                                  | Status         |
| ------------------------------------- | ----------------- | ----------------------------------------------------------- | -------------- |
| `trackCtaClick(label)`                | CTA click         | `event_category: "CTA", event_label`                        | ✅ IMPLEMENTED |
| `trackCtaHover(label)`                | CTA hover         | `event_category: "CTA", event_label, non_interaction: true` | ✅ IMPLEMENTED |
| `trackPageView(path)`                 | Route change      | `page_path, page_title`                                     | ✅ IMPLEMENTED |
| `trackScrollDepth(depth)`             | Scroll milestones | `event_category: "Engagement", value: depth`                | ✅ IMPLEMENTED |
| `trackTimeOnPage(seconds)`            | Time milestones   | `event_category: "Engagement", value: seconds`              | ✅ IMPLEMENTED |
| `trackEvent(action, category, label)` | Custom            | `event_category, event_label`                               | ✅ IMPLEMENTED |

**Ebook CTA Source Labels** (observed in code):

- `Main ebook CTA` (homepage ebook section)
- `Compact ebook CTA` (homepage secondary)
- `Hero - Explore Library` (hero primary)
- `Hero - Free Learning Path` (hero secondary)
- `Featured - See all prompts` (featured section)
- `Categories - Open full library` (categories)
- `Trending - See all prompts` (trending)
- `FAQ - Contact us` (FAQ)

**Newsletter**: Supabase insert to `newsletter_subscribers` table (source="homepage"), tracks `newsletter_subscribe` event on success

**Critical Gap**: No `ebook_click` event with structured properties (source, promptId, guideSlug, destination URL). Current `trackCtaClick` only sends label.

---

## 5. Content Inventory & Visible Claims

| Content Type      | Count | Source                          |
| ----------------- | ----- | ------------------------------- |
| Website Prompts   | 69    | `PROMPTS` array in `content.ts` |
| Prompt Categories | 5     | `CATEGORIES` array              |
| Published Guides  | 3     | `GUIDE_POSTS` array             |
| Testimonials      | 7     | `TESTIMONIALS` array            |
| FAQ Items         | 8     | `FAQ_ITEMS` array               |

**Material Claims on Homepage** (require verification):

| Claim                                                                         | Location                           | Status                                   |
| ----------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------- |
| "3,000+ Tested prompts"                                                       | Homepage stats row                 | ❌ NEEDS EVIDENCE (only 69 on site)      |
| "15+ Industries covered"                                                      | Homepage stats row                 | ❌ NEEDS EVIDENCE                        |
| "21 Days to master"                                                           | Homepage stats row + ebook section | ⚠️ INFERRED (ebook claim)                |
| "150+ tested, copy-paste ready prompts"                                       | Ebook CTA card                     | ❌ NEEDS EVIDENCE (only 69 on site)      |
| "Lifetime access · Instant delivery · 60% limited launch discount"            | Ebook CTA footer                   | ❌ NEEDS EVIDENCE                        |
| "Free adaptive AI diagnosis test"                                             | Homepage meta + schema             | ⚠️ INFERRED (quiz not found in routes)   |
| "99% people use ChatGPT wrong"                                                | Homepage meta description          | ❌ NEEDS EVIDENCE                        |
| Author: "Rahul Rana" / Publisher: "JSS CORE LAB"                              | Schema, footer, ebook card         | ⚠️ INFERRED (not independently verified) |
| Ebook title: "Smart Prompts, Smart Results" / "Smart Prompts = Smart Results" | Schema + ebook card                | ⚠️ INCONSISTENT                          |

---

## 6. Existing SEO Strengths

1. **Correct SSR architecture** — Layout + Index split prevents parent leakage
2. **Genuine 404s** — `beforeLoad` + `notFound()` for invalid slugs
3. **Unique canonicals** — One per page, self-referencing
4. **Structured data** — TechArticle, Article, Organization, WebSite, Product, Quiz, FAQPage
5. **Sitemap accuracy** — Auto-generated from source of truth
6. **Robots.txt** — AI-crawler friendly, sitemap declared
7. **OG metadata** — Complete on all pages
8. **Internal linking** — Category pages, featured prompts, related CTAs
9. **Clean URLs** — `/library/:slug`, `/guides/:slug`

---

## 7. Demonstrated Defects (P0/P1)

| ID   | Defect                                                                                      | Severity | Evidence                                        |
| ---- | ------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------- |
| T-01 | Homepage claims "3,000+ prompts" but only 69 on site                                        | P0       | Content.ts count vs homepage stats              |
| T-02 | Homepage claims "150+ prompts in ebook" but unverified                                      | P0       | Ebook card vs manuscript unknown                |
| T-03 | Homepage claims "15+ industries" — unsupported                                              | P1       | No industry taxonomy in content                 |
| T-04 | "60% limited launch discount" — potentially misleading                                      | P1       | No evidence of discount mechanism               |
| T-05 | "Free adaptive AI diagnosis test" — quiz route not found                                    | P1       | No `/quiz` or diagnosis route in routes         |
| T-06 | Ebook CTA tracking lacks structured event schema                                            | P1       | Only `label` sent, no source/promptId/guideSlug |
| T-07 | Newsletter Supabase client fails silently if env missing                                    | P1       | Console warns but form still renders            |
| T-08 | Author "Rahul Rana" / Publisher "JSS CORE LAB" in schema — not verified                     | P1       | No independent confirmation                     |
| T-08 | Ebook title inconsistent: "Smart Prompts, Smart Results" vs "Smart Prompts = Smart Results" | P1       | Schema vs ebook card differ                     |
| T-09 | No Search Console verification found                                                        | P1       | No meta tag or DNS verification in code         |
| T-10 | No GA4 Measurement ID in production (VITE_GA_ID not confirmed)                              | P1       | Conditional loading, not verified live          |

---

## 8. Missing Evidence & Access

| Item                        | Status       | Blocker                            |
| --------------------------- | ------------ | ---------------------------------- |
| Search Console access       | NOT VERIFIED | Need GSC property access           |
| GA4 property access         | NOT VERIFIED | Need GA4 admin access              |
| Amazon KDP / sales data     | NOT VERIFIED | Need publisher account             |
| Supabase project access     | NOT VERIFIED | Need Supabase project URL + keys   |
| Ebook manuscript / metadata | NOT VERIFIED | Need publisher/author confirmation |
| Bing Webmaster Tools        | NOT VERIFIED | Need BWT access                    |

---

## 9. Test Methods & Exact URLs

**Route Testing**: `curl -I https://polishprompt.tech/<path>` + body fetch for content validation  
**Canonical Check**: Regex `<link[^>]*rel=["']canonical["']` count + href  
**Parent Leakage**: Search for index-page phrases on detail pages  
**Sitemap**: Fetch `https://polishprompt.tech/sitemap.xml` parse `<loc>`  
**Robots**: Fetch `https://polishprompt.tech/robots.txt`  
**Structured Data**: Regex `application/ld+json` extraction  
**Build**: `npm run build` (exit 0)  
**Lint**: `npm run lint` (0 errors)  
**Format**: `npm run format -- --check` (pass)

---

## 10. Highest-Priority Risks

| Risk                               | Impact | Likelihood | Mitigation                                      |
| ---------------------------------- | ------ | ---------- | ----------------------------------------------- |
| Misleading claims damage trust/SEO | High   | High       | Document & fix claims (T-01..T-05)              |
| No purchase attribution            | Medium | High       | Document limitation; don't infer purchases      |
| Analytics not firing in prod       | Medium | Medium     | Verify VITE_GA_ID deployed; test events         |
| Newsletter form broken silently    | Low    | Medium     | Add user-facing error when Supabase unavailable |
| Schema author/publisher unverified | Low    | Low        | Verify or qualify claims                        |

---

## 10. Next Steps

1. **Create backlog** (`docs/seo-growth-backlog.md`) with prioritized items
2. **Fix P0 claim issues** (T-01..T-05) — update homepage stats to match actual content
3. **Standardize ebook CTA tracking** — add `ebook_click` event with source labels
4. **Verify/fix schema inconsistencies** — ebook title, author, publisher
5. **Add Search Console verification** (when access available)
6. **Content audit & calendar** — assess 69 prompts + 3 guides for quality/opportunities
