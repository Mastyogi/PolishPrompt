# PolishPrompt SEO & Growth Backlog

**Source**: `docs/seo-growth-baseline.md`
**Priority Definitions**:

- **P0**: Production correctness, security, broken conversion paths, materially misleading claims, serious indexability defects
- **P1**: High-confidence technical SEO, measurement, trust and conversion improvements
- **P2**: Useful content, internal linking, accessibility and UX improvements
- **P3**: Optional or low-confidence experiments

---

## Backlog Items

### P0 — Production Integrity & Misleading Claims

| ID   | Title                                       | Problem / Opportunity                                                                                                 | Evidence                                                     | Expected Impact                                      | Confidence | Effort                       | Dependencies                         | Acceptance Criteria                                               | Validation Method                           | Status |
| ---- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- | ---------- | ---------------------------- | ------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------- | ------ |
| B-01 | Fix "3,000+ prompts" homepage claim         | Homepage stats row claims "3,000+ Tested prompts" but only 69 prompts exist in `PROMPTS` array                        | Baseline T-01: `grep -c` shows 69 prompts                    | Prevents trust damage; aligns marketing with reality | HIGH       | LOW (1 file, 1 line)         | None                                 | Homepage stats show accurate prompt count (69) or qualified claim | Visual inspection + grep count match        | TODO   |
| B-02 | Fix "150+ prompts in ebook" claim           | Ebook CTA card claims "150+ tested, copy-paste ready prompts" — manuscript count unverified                           | Baseline T-02: Schema says 150+, content.ts has 69           | Prevents misleading ebook marketing                  | HIGH       | LOW (1 file, 1 line)         | Ebook manuscript verification        | Claim matches verified ebook content or is qualified              | Verify against manuscript or publisher data | TODO   |
| B-03 | Fix "15+ industries covered" claim          | Homepage stats row claims "15+ Industries covered" — no industry taxonomy exists                                      | Baseline T-03: Only 5 prompt categories defined              | Prevents unsupported marketing claim                 | HIGH       | LOW (1 file, 1 line)         | None                                 | Claim removed or replaced with "5 prompt categories"              | Visual inspection                           | TODO   |
| B-04 | Fix "60% limited launch discount" claim     | Ebook CTA footer claims "60% limited launch discount active" — no discount mechanism visible                          | Baseline T-04: No discount code/param in Amazon URL          | Prevents potentially deceptive urgency tactic        | HIGH       | LOW (1 file, 1 line)         | Amazon listing verification          | Claim removed or verified with Amazon listing                     | Check Amazon product page                   | TODO   |
| B-05 | Fix "Free adaptive AI diagnosis test" claim | Homepage meta + schema reference "AI Prompt-Skill Test" / "Free adaptive AI diagnosis test" — no `/quiz` route exists | Baseline T-05: No quiz route in `src/routes/`                | Prevents promising non-existent feature              | HIGH       | MEDIUM (remove or implement) | Decision: remove claim or build quiz | Claim removed or quiz route implemented and tested                | Route test + schema update                  | TODO   |
| B-06 | Fix ebook title inconsistency               | Schema: "Smart Prompts, Smart Results" — Ebook card: "Smart Prompts = Smart Results"                                  | Baseline T-08: Two different titles in structured data vs UI | Consistent branding; schema accuracy                 | HIGH       | LOW (2 files, 2 lines)       | Authoritative title decision         | Single canonical title used everywhere                            | Search all files for both variants          | TODO   |

---

### P1 — Analytics, Measurement & Conversion

| ID   | Title                           | Problem / Opportunity                                                                            | Evidence                                                     | Expected Impact                                    | Confidence | Effort               | Dependencies            | Acceptance Criteria                                                                       | Validation Method            | Status                 |
| ---- | ------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------- | ---------- | -------------------- | ----------------------- | ----------------------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| B-10 | Standardize ebook CTA tracking  | Current `trackCtaClick(label)` only sends label; no source, promptId, guideSlug, destination URL | Baseline: Analytics helper exists but events lack structure  | Reliable funnel measurement; attribution by source | HIGH       | MEDIUM               | Analytics helper update | `ebook_click` event with: `source`, `promptId?`, `guideSlug?`, `destination`, `timestamp` | Console test + GA4 DebugView | TODO                   |
| B-11 | Add structured event schemas    | Document all events with trigger, properties, deduplication, source-label rules                  | Baseline: No schema documentation                            | Maintainable analytics; team onboarding            | HIGH       | LOW                  | Analytics helper        | `docs/analytics-events.md` created with table                                             | File exists + review         | TODO                   |
| B-12 | Add Search Console verification | No GSC verification meta tag or DNS record found                                                 | Baseline T-09: No `google-site-verification` in `__root.tsx` | Enable Search Console data access                  | HIGH       | LOW (1 file, 1 line) | GSC property access     | Meta tag added to `__root.tsx` head                                                       | GSC verification succeeds    | BLOCKED (needs access) |
| B-13 | Verify GA4 deployment           | `VITE_GA_ID` conditional in `__root.tsx` — not confirmed deployed                                | Baseline T-10: Conditional loading, no live verification     | Ensure analytics actually fires in production      | HIGH       | LOW                  | Vercel env var          | GA4 DebugView shows events from production                                                | GA4 DebugView test           | TODO                   |
| B-14 | Add newsletter error handling   | Supabase client fails silently if env vars missing; form still renders                           | Baseline T-07: Console warns but UX unchanged                | Better UX; prevents silent failures                | MEDIUM     | LOW                  | Supabase env vars       | Form shows error state when Supabase unavailable                                          | Test with missing env vars   | TODO                   |

---

### P1 — Technical SEO & Schema

| ID   | Title                                             | Problem / Opportunity                                                            | Evidence                                                                               | Expected Impact                  | Confidence | Effort | Dependencies               | Acceptance Criteria                              | Validation Method                     | Status                        |
| ---- | ------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------- | ---------- | ------ | -------------------------- | ------------------------------------------------ | ------------------------------------- | ----------------------------- |
| B-20 | Verify/fix author & publisher schema              | Schema uses "Rahul Rana" / "JSS CORE LAB" — not independently verified           | Baseline T-08: Author/publisher in TechArticle, Article, Organization, Product schemas | Schema accuracy; E-E-A-T signals | MEDIUM     | LOW    | Authoritative confirmation | Schema uses verified identity or qualified claim | Cross-reference with publisher/author | BLOCKED (needs verification)  |
| B-21 | Add missing Product schema fields                 | Product schema missing `price`, `review`, `aggregateRating` — only has offer URL | Schema.org Product best practices                                                      | Rich result eligibility          | MEDIUM     | LOW    | Verified price/review data | Valid priceCurrency + price + availability       | Schema.org validator                  | BLOCKED (needs verified data) |
| B-22 | Validate all structured data                      | No automated validation in CI                                                    | Manual validation only                                                                 | Catch regressions                | MEDIUM     | MEDIUM | CI pipeline                | `npm run validate:schema` script added           | CI passes                             | TODO                          |
| B-23 | Ensure all detail pages have canonical + og:image | Verified for tested routes; untested routes unknown                              | 69 prompts + 3 guides                                                                  | Consistent social sharing + SEO  | HIGH       | LOW    | Build verification         | Spot-check 10 random routes                      | Manual curl + regex                   | TODO                          |

---

### P2 — Content Quality & Internal Linking

| ID   | Title                           | Problem / Opportunity                                               | Evidence                                        | Expected Impact                      | Confidence | Effort | Dependencies           | Acceptance Criteria                                | Validation Method   | Status              |
| ---- | ------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------ | ---------- | ------ | ---------------------- | -------------------------------------------------- | ------------------- | ------------------- |
| B-30 | Audit prompt content quality    | 69 prompts — assess clarity, examples, usability, limitations       | Baseline: Not yet audited                       | Better user engagement; stronger SEO | MEDIUM     | HIGH   | Content review process | `docs/content-audit.md` with scores per prompt     | Audit complete      | TODO                |
| B-31 | Audit guide content quality     | 3 guides — assess structure, examples, practicality                 | Baseline: Not yet audited                       | Better engagement; authority         | MEDIUM     | MEDIUM | Content review process | `docs/content-audit.md` updated                    | Audit complete      | TODO                |
| B-32 | Add contextual internal links   | Prompts and guides lack cross-references to related content         | Baseline: No programmatic linking               | Improved crawlability; user journey  | MEDIUM     | MEDIUM | Content audit          | Related prompts/guides linked in each detail page  | Spot-check 10 pages | TODO                |
| B-33 | Research search opportunities   | Use GSC (when available) + external tools for keyword research      | Baseline: GSC not accessible                    | Evidence-backed content calendar     | MEDIUM     | HIGH   | GSC access             | `docs/keyword-research.md` with prioritized topics | Document created    | BLOCKED (needs GSC) |
| B-34 | Build 8-week content calendar   | Plan up to 16 guide articles based on evidence                      | Baseline: No calendar                           | Sustainable publishing pipeline      | MEDIUM     | MEDIUM | Keyword research       | `docs/content-calendar.md` with ranked candidates  | Calendar exists     | TODO                |
| B-34 | Improve library discoverability | All 69 prompts only discoverable via `/library` index or direct URL | Baseline: No pagination, category listing pages | Better crawlability for deep content | MEDIUM     | MEDIUM | Architecture decision  | Category pages or paginated index implemented      | Crawl test          | TODO                |

---

### P2 — Technical Improvements

| ID   | Title                       | Problem / Opportunity                                    | Evidence                         | Expected Impact                        | Confidence | Effort | Dependencies | Acceptance Criteria                | Validation Method  | Status |
| ---- | --------------------------- | -------------------------------------------------------- | -------------------------------- | -------------------------------------- | ---------- | ------ | ------------ | ---------------------------------- | ------------------ | ------ |
| B-40 | Add category listing pages  | `/library/category/:name` pages for each of 5 categories | Baseline: No category pages      | Better crawlability; topical authority | MEDIUM     | MEDIUM | Architecture | 5 category pages rendering prompts | Route test + crawl | TODO   |
| B-41 | Add paginated library index | `/library?page=2` for performance & crawlability         | Baseline: All 69 on single index | Performance; crawl depth               | MEDIUM     | MEDIUM | Architecture | Pagination works; rel=next/prev    | Lighthouse + crawl | TODO   |
| B-42 | Add RSS feed for guides     | Chronological feed for guide publications                | Baseline: No RSS                 | Distribution; potential indexing       | LOW        | LOW    | Decision     | `/rss.xml` valid XML               | Feed validator     | TODO   |
| B-43 | Add `llms.txt`              | AI crawler guidance file                                 | Baseline: Not present            | AI search readiness                    | LOW        | LOW    | Decision     | `/llms.txt` accessible             | Fetch test         | TODO   |

---

### P3 — Experiments & Optional

| ID   | Title                              | Problem / Opportunity                                       | Evidence                            | Expected Impact         | Confidence | Effort | Dependencies         | Acceptance Criteria               | Validation Method | Status                           |
| ---- | ---------------------------------- | ----------------------------------------------------------- | ----------------------------------- | ----------------------- | ---------- | ------ | -------------------- | --------------------------------- | ----------------- | -------------------------------- |
| B-50 | FAQ structured data on guide pages | Add FAQPage schema where guides have Q&A sections           | Baseline: Only homepage has FAQPage | Potential rich results  | LOW        | LOW    | Guide content audit  | FAQPage schema on eligible pages  | Schema validator  | TODO                             |
| B-51 | Add Review/AggregateRating schema  | If legitimate reviews exist for ebook                       | Baseline: No review data            | Rich result stars       | LOW        | LOW    | Verified review data | AggregateRating on Product schema | Schema validator  | BLOCKED (needs verified reviews) |
| B-52 | Implement scroll-depth milestones  | Track 25%, 50%, 75%, 100% scroll events                     | Baseline: Helper exists, not wired  | Engagement insights     | LOW        | LOW    | Page components      | Events fire at milestones         | GA4 DebugView     | TODO                             |
| B-53 | A/B test ebook CTA copy            | Test "See the ebook on Amazon" vs "Get the complete system" | Baseline: Single CTA copy           | Conversion optimization | LOW        | MEDIUM | Analytics + traffic  | Test runs 2+ weeks                | GA4 experiment    | TODO                             |

---

## Dependency Graph

```
B-12 (GSC) → B-33 (Keyword Research) → B-34 (Content Calendar)
B-20 (Author verify) → B-21 (Product schema) → B-51 (Review schema)
B-10 (CTA tracking) → B-53 (A/B test)
B-13 (GA4 verify) → B-10 (CTA tracking validation)
B-30/31 (Content audit) → B-32 (Internal links) → B-40 (Category pages)
```

---

## Status Legend

- **TODO**: Ready to implement
- **IN_PROGRESS**: Currently being worked on
- **BLOCKED**: Waiting on external access, decision, or dependency
- **DONE**: Implemented and validated
- **DEFERRED**: Consciously postponed with reason

---

## Implementation Order (Next 5 Items)

1. **B-01** Fix "3,000+ prompts" claim (P0, LOW effort)
2. **B-02** Fix "150+ prompts in ebook" claim (P0, LOW effort)
3. **B-03** Fix "15+ industries" claim (P0, LOW effort)
4. **B-04** Fix "60% discount" claim (P0, LOW effort)
5. **B-10** Standardize ebook CTA tracking (P1, MEDIUM effort)

---

## Validation Checklist per Item

Before marking **DONE**:

- [ ] Code change implemented
- [ ] `npm run lint` passes (0 errors)
- [ ] `npm run build` passes (exit 0)
- [ ] `npm run format -- --check` passes
- [ ] Affected routes tested (curl + content validation)
- [ ] No regression in existing routes
- [ ] Evidence recorded in baseline/backlog
- [ ] Commit with conventional message
