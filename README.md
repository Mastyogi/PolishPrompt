# PolishPrompt 🧠✨

> **AI Prompt Guide + Free Adaptive AI Diagnosis Test**
> 
> *"99% people use ChatGPT wrong. This is the fix."*

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-polishprompt.tech-6d28d9?style=for-the-badge)](https://polishprompt.tech)
[![Amazon](https://img.shields.io/badge/📘%20Buy%20Ebook-Amazon.in-FF9900?style=for-the-badge)](https://amzn.in/d/00vHMnM3)
[![Rating](https://img.shields.io/badge/⭐%20Rating-4.8%20%2F%201240%20reviews-yellow?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](#)

---

## 📌 Overview

**PolishPrompt** is a high-conversion landing page and interactive product platform for an AI prompt engineering guide — *"Smart Prompts = Smart Results"*. It combines a free adaptive AI diagnosis quiz with a premium ebook available on Amazon India.

The platform is built to educate users on **why** their AI prompts fail and **how** to fix them — backed by a 21-day structured system and 150+ field-tested prompts designed specifically for the Indian market (including Hindi/Hinglish context, WhatsApp templates, and local business use cases).

---

## 🚀 Key Features

### 🎯 Free Adaptive AI Prompt-Skill Test
- **10-question adaptive quiz** that dynamically adjusts difficulty based on user performance
- **6 skill categories** assessed: Clarity · Context · Structure · Audience · Reasoning · Refinement
- **Difficulty-weighted scoring** — tamper-proof, computed from sealed answer state
- **Configurable timer** — 10s / 20s / 30s per question
- **4 score levels**: Prompt Novice → Prompt Apprentice → Prompt Strategist → Prompt Architect
- **Personalized PDF scorecard** — downloadable via jsPDF with full breakdown
- **Share result** — native Web Share API with clipboard fallback
- **Session persistence** — quiz state saved to `localStorage` and restored on refresh

### 📚 Premium AI Prompt Ebook
- **150+ tested prompts** hand-curated across study, work, content, and business
- **150+ productivity bonus prompts** for daily life
- **Plug-and-play prompt formulas** and ready frameworks
- **Indian-context prompts** — local audiences, Hinglish, regional business scenarios
- **WhatsApp templates** — cold DMs, replies, scripts
- **AI debugging techniques** — fix any weak output in seconds
- **Advanced prompt chains** — multi-step, role-play, chained reasoning
- **Secret Arsenal** — short codewords that 10× AI output quality
- **21-day structured system** to go from zero to prompt mastery

### 🌐 Landing Page Sections
| Section | Purpose |
|---|---|
| `Hero` | Hook with free quiz CTA and stat badges |
| `BeforeAfter` | Side-by-side prompt comparison (weak vs. polished) |
| `Mistakes` | Top prompt mistakes most people make |
| `Quiz` | Embedded adaptive AI diagnosis test |
| `Vision` | Outcome-focused product story |
| `Audience` | Target user profiles |
| `Inside` | Full ebook table of contents |
| `Proof` | Social proof and ratings |
| `FAQ` | Accordion FAQ (schema.org `FAQPage` structured data) |
| `FinalCTA` | Purchase CTA with discount urgency |
| `Footer` | Links and brand footer |
| `StickyMobileCTA` | Persistent mobile purchase button |

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [TanStack Start](https://tanstack.com/start) (SSR/SSG React meta-framework) |
| **Routing** | [TanStack Router](https://tanstack.com/router) (file-based, type-safe) |
| **Server** | Nitro (via `@lovable.dev/vite-tanstack-config`) |
| **Data Fetching** | [TanStack Query](https://tanstack.com/query) v5 |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `tw-animate-css` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **PDF Generation** | [jsPDF](https://github.com/parallax/jsPDF) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + Zod |
| **Charts** | [Recharts](https://recharts.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) v7 |
| **Language** | TypeScript 5.8 |
| **Package Manager** | [Bun](https://bun.sh/) |
| **Linting** | ESLint 9 + Prettier |

---

## 📁 Project Structure

```
polishprompt-codebase/
├── src/
│   ├── components/
│   │   ├── landing/               # All landing page sections
│   │   │   ├── quiz/
│   │   │   │   ├── Quiz.tsx       # Adaptive quiz engine (state machine)
│   │   │   │   └── questions.ts   # Question bank with 6 categories
│   │   │   ├── Hero.tsx           # Above-the-fold section
│   │   │   ├── BeforeAfter.tsx    # Prompt comparison
│   │   │   ├── Mistakes.tsx       # Common prompt mistakes
│   │   │   ├── Vision.tsx         # Product story
│   │   │   ├── Audience.tsx       # Target audience section
│   │   │   ├── Inside.tsx         # Ebook contents
│   │   │   ├── Proof.tsx          # Social proof
│   │   │   ├── FAQ.tsx            # Accordion FAQ
│   │   │   ├── FinalCTA.tsx       # Purchase CTA
│   │   │   ├── Nav.tsx            # Top navigation bar
│   │   │   ├── Footer.tsx         # Page footer
│   │   │   ├── Background.tsx     # Decorative background
│   │   │   ├── StickyMobileCTA.tsx # Mobile sticky button
│   │   │   ├── ThemeToggle.tsx    # Dark/light mode toggle
│   │   │   └── VisitorCounter.tsx # Live visitor count badge
│   │   └── ui/                    # shadcn/ui component library
│   ├── hooks/
│   │   └── use-mobile.tsx         # Mobile breakpoint hook
│   ├── lib/
│   │   ├── api/
│   │   │   └── example.functions.ts
│   │   ├── config.server.ts       # Server-side configuration
│   │   ├── error-capture.ts       # Error capture utilities
│   │   ├── error-page.ts          # Error page generator
│   │   └── utils.ts               # Shared utilities (cn helper)
│   ├── routes/
│   │   ├── __root.tsx             # Root layout + theme init script
│   │   ├── index.tsx              # Home page (full SEO head, structured data)
│   │   ├── privacy.tsx            # Privacy policy page
│   │   └── sitemap[.]xml.ts       # Dynamic XML sitemap
│   ├── routeTree.gen.ts           # Auto-generated route tree
│   ├── router.tsx                 # Router + QueryClient setup
│   ├── server.ts                  # SSR server entry
│   ├── start.ts                   # App start entrypoint
│   └── styles.css                 # Global styles + Tailwind base
├── public/                        # Static assets
├── vite.config.ts                 # Vite + TanStack Start config
├── tsconfig.json                  # TypeScript config
├── bunfig.toml                    # Bun registry config
├── components.json                # shadcn/ui config
├── eslint.config.js               # ESLint flat config
└── .prettierrc                    # Prettier config
```

---

## ⚙️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) `>= 1.0` (recommended) or Node.js `>= 20`
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Mastyogi/PolishPrompt.git
cd PolishPrompt

# Install dependencies
bun install
```

### Development

```bash
bun run dev
```

The dev server starts at `http://localhost:3000` with HMR enabled.

### Production Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Lint & Format

```bash
bun run lint       # ESLint check
bun run format     # Prettier auto-format
```

---

## 🧩 Quiz Engine — How It Works

The adaptive quiz (`src/components/landing/quiz/Quiz.tsx`) is a self-contained state machine:

```
intro → playing → done
```

**Adaptive difficulty algorithm:**
- Starts at `easy`
- If user answers **correctly AND quickly** (< half the timer) → bumps to harder difficulty
- If user answers **incorrectly** → drops to easier difficulty
- Category rotation ensures diverse skill coverage each round

**Scoring:**
```
Difficulty weights: easy = 1pt · medium = 2pt · hard = 3pt
Score % = (earned weighted points / max weighted points) × 100
```

**Result levels:**
| Score % | Level | Tag |
|---|---|---|
| ≥ 85% | Prompt Architect | Advanced |
| ≥ 65% | Prompt Strategist | Intermediate |
| ≥ 40% | Prompt Apprentice | Beginner+ |
| < 40% | Prompt Novice | Beginner |

---

## 🔍 SEO & Structured Data

The landing page implements full production-grade SEO:

- **Schema.org `@graph`** with `Organization`, `WebSite`, `Product`, `Quiz`, and `FAQPage` types
- **Open Graph** and **Twitter Card** meta tags
- **Canonical URLs** and `inLanguage: "en-IN"`
- **Dynamic XML sitemap** at `/sitemap.xml`
- **Google Fonts** preconnect with `Inter` and `Space Grotesk`
- **Aggregate rating** — 4.8★ / 1,240 reviews from Amazon

---

## 🎨 Design System

- **Dark/light mode** — persisted in `localStorage` as `pp_theme`, initialized via a blocking inline script to prevent flash
- **Glassmorphism** — custom `glass` and `glass-strong` utility classes
- **Gradient palette** — primary (purple-blue), cyan, gold
- **Animations** — `animate-pulse-glow`, `animate-fade-in`, Framer Motion transitions
- **Typography** — `Inter` (body) + `Space Grotesk` (headings)

---

## 🌍 Target Audience

- Indian AI learners and content creators
- Students and freelancers using ChatGPT, Gemini, Claude
- Small business owners using AI for marketing
- Professionals wanting to cut research and writing time with AI

Works with **free versions** of ChatGPT, Gemini, Claude, and most major AI models — no paid subscription required.

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Main landing page with quiz and ebook CTA |
| `/privacy` | Privacy policy |
| `/sitemap.xml` | Dynamic XML sitemap |

---

## 🤝 Contributing

This is a private product codebase. For bugs or feature requests, open an issue or contact the maintainer directly.

---

## 👤 Author

**Rahul Rana**  
Founder , PolishPrompt  
🌐 [polishprompt.tech](https://polishprompt.tech)  
📘 [Amazon Author Page](https://amzn.in/d/00vHMnM3)

---

## 📜 License

Private — All rights reserved. © 2025 PolishPrompt. Unauthorized copying, distribution, or use of this codebase is prohibited.

---

<div align="center">
  <strong>Smart Prompts = Smart Results</strong><br/>
  <sub>Built with ❤️ for the Indian AI community</sub>
</div>
