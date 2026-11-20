---
target: docs/workshop.md
total_score: 32
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
timestamp: 2026-11-20T17-55-53Z
slug: docs-workshop-md
---
Method: dual-agent (A: synchronous design assessment · B: synchronous detector/browser evidence; agent IDs not surfaced by the task tool)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3 | Exercises give local checks, but no consistent workshop-level progress cues. |
| 2 | Match System / Real World | 4 | Concrete labs connect concepts to recognizable files, commands and outcomes. |
| 3 | User Control and Freedom | 3 | Readers can choose entry points, skip restricted topics and pick modernization tracks; some labs still assume particular tools. |
| 4 | Consistency and Standards | 3 | Chapter hierarchy and callout patterns recur, with occasional editorial inconsistencies. |
| 5 | Error Prevention | 3 | Safety warnings and review gates are present; setup dependencies could be surfaced earlier. |
| 6 | Recognition Rather Than Recall | 3 | Tables, commands and cross-links help, but long labs require retaining setup details. |
| 7 | Flexibility and Efficiency | 4 | Readers can start at different levels and use CLI/IDE paths or alternate lab tracks. |
| 8 | Aesthetic and Minimalist Design | 2 | Broad coverage and long procedural blocks create high source-level density; rendering was not inspected. |
| 9 | Error Recovery | 3 | Some labs include troubleshooting cues, but recovery guidance is uneven. |
| 10 | Help and Documentation | 4 | The workshop provides substantial examples, links, warnings, exercises and a cheat sheet. |
| **Total** | | **32/40** | **Good (80%)** |

## Design Specificity Verdict

**LLM assessment:** The workshop is clearly authored around GitHub Copilot workflows: it links concepts to specific harnesses, artifacts, commands and hands-on projects. Its learning sequence and alternate entry points make it more than a generic AI tutorial. Long sections and distributed prerequisites are the main risks to clarity.

**Deterministic scan:** Impeccable detector exit code 0; JSON `[]`; zero findings and no rule locations. No false positives. A clean static scan does not evaluate the prose, factual accuracy or rendered MoaW layout.

**Visual evidence:** Browser check found no connected browser instance, so the live MoaW page, responsive behavior and sidebar were not inspected. No visual overlay is available. The score for aesthetic minimalism reflects source density, not a confirmed rendered defect.

## Overall Impression

A practical, distinctive workshop with strong hands-on scaffolding and useful safety framing. Its biggest opportunity is to make the large amount of material easier to navigate as a sequence of achievable sessions, while keeping the detail available as reference.

## What's Working

- The opening identifies the audience, prerequisites and alternative starting points before the technical content.
- Exercises name concrete commands, files and outcomes, especially in the SDD and SDK chapters.
- Warnings, optional stages and review gates reinforce user control and safer tool use.

## Priority Issues

1. **[P1] Dense multi-stage sections need clearer checkpoints.** Chapters 5.6 and 6 contain lengthy procedures and many decisions. Readers can lose track of the current task. Add short “you will do / produce / stop here” markers at major phase boundaries without removing reference detail. Suggested command: `/impeccable clarify`.
2. **[P1] No consistent workshop-wide progress model.** Local exercises provide outcomes, but the chapter overview does not define a minimum route or consistent completion cues. The five-hour estimate and coming-soon chapters may leave completion expectations unclear. Add an optional core path and chapter-level completion cues; verify duration and chapter status before changing those factual claims. Suggested command: `/impeccable onboard`.
3. **[P2] Lab prerequisites are scattered.** Harness choice, workspace roots, branch setup, and external repository access recur across chapters. Readers can discover a dependency only after beginning a lab. Add concise, local “before you start” checks to multi-step labs and link back to canonical prerequisites. Suggested command: `/impeccable clarify`.
4. **[P2] Routine tips and consequential warnings compete.** Frequent callouts and long examples may reduce the salience of important cautions. Reserve warnings for meaningful risk, use lighter inline tips for routine advice, then verify the rendered result. Suggested command: `/impeccable polish`.
5. **[P3] Editorial inconsistencies interrupt polish.** The source includes examples such as “familar,” “everthing,” and “The Model do bias tokens,” plus uneven heading punctuation. Proofread spelling, grammar and heading style without altering unverified technical claims. Suggested command: `/impeccable clarify`.

## Persona Red Flags

- **Jordan (first-timer):** Chapter 1 covers many concepts and surfaces. A newcomer may not know which details are essential before starting the SDD exercise; make the minimum starting path explicit.
- **Sam (accessibility-dependent reader):** Meaningful alt text exists for images in the recently edited areas, but keyboard navigation, heading behavior, rendered callout semantics, contrast and mobile reflow remain unverified without the rendered page.
- **Riley (deliberate stress tester / restricted-environment reader):** The workshop acknowledges organization policy limits and encourages skipping unavailable sections, but dependencies may become apparent inside a lab. Surface tool and access prerequisites at each lab entry.

## Minor Observations

- The opening chapter synopsis substantially overlaps the sidebar chapter map.
- The frontmatter description’s phrase “go deep advanced concepts” is awkward.
- Some raw markdown details, including image sizing, callout rendering, mobile navigation and live focus behavior, require MoaW browser inspection to assess.

## Questions to Consider

- What is the smallest coherent path a reader can complete and still leave with a useful skill?
- Where should readers stop and reflect rather than immediately invoke another tool?
- Which long sections should remain reference material, and which should be broken into shorter guided sessions?
- Are the “coming soon” labels and five-hour estimate still accurate for the intended version?
