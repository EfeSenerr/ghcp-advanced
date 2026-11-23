# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers, tech leads and architects who want to apply GitHub Copilot to more complex engineering scenarios. The workshop supports both self-paced individual learning and instructor-led delivery. Prior Copilot experience is helpful but not required.

## Product Purpose

Help participants confidently apply GitHub Copilot to complex engineering workflows through a capability tour and practical exercises.

## Positioning

A workflow-centered GitHub Copilot workshop that combines an introduction to Copilot surfaces and customization with hands-on practice in Spec-Driven Development, app modernization, context engineering and the Copilot SDK.

## Operating Context

- Readers access the workshop as MoaW-rendered Markdown.
- The material supports self-paced study and instructor-led sessions.
- Readers use GitHub Copilot with tools such as Visual Studio Code, the Copilot CLI, Node.js and GitHub CLI, depending on the exercise.
- Chapters are designed to be independently useful where possible; organization policy may restrict some features, so readers can skip unavailable sections.
- In the Chapter 2 Rubber Duck Emporium exercise, the reader builds the application with Copilot using the repository's `user-stories/` as input.

## Capabilities and Constraints

- The deliverable is workshop content in `docs/workshop.md`, using MoaW workshop frontmatter and `navigation_levels: 3`.
- The repository documents learning workflows; it does not ship a runnable application. The Rubber Duck Emporium is an exercise for readers to build with Copilot.
- Describe Copilot capabilities without depending on specific UI labels, which may change.
- Code examples use TypeScript, Node.js 20+, ES modules, Express, and `node:`-prefixed imports.
- Shell examples use POSIX syntax; include PowerShell only where behavior differs.
- Format callouts using MoaW's `info`, `tip` or `warning` blocks with a `data-title`.
- Do not include secrets, tokens or personal data in examples.

## Brand Commitments

- Use the workshop name “GitHub Copilot Advanced.”
- Write in a direct, second-person voice.
- Keep paragraphs short; prefer tables and callouts to walls of text.
- End each chapter with something the reader can do.

## Evidence on Hand

- `README.md` and `docs/workshop.md` describe the workshop's scope and learning outcomes.
- `user-stories/` provides the source material for the Chapter 2 application exercise.
- `docs/assets/` contains screenshots and diagrams used in the workshop.
- Do not fabricate testimonials, customer evidence, benchmarks or other proof not present in the repository.

## Product Principles

- Build practical confidence through hands-on engineering workflows.
- Make complex work reviewable and bounded, with human decision points.
- Explain prerequisites and tool or harness differences where they affect the exercise.
- Keep chapters useful to readers with different experience levels and organizational access.

