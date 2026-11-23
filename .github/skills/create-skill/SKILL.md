---
name: create-skill
description: 'Package a workflow from the current conversation as a reusable Agent Skill (SKILL.md). Use when the user asks to create, generate, scaffold or turn a chat workflow into a skill.'
argument-hint: What should this skill produce?
disable-model-invocation: true
---

# Create a skill

Turn the workflow in this conversation into a reusable Agent Skill. Follow the [VS Code Agent Skills docs](https://code.visualstudio.com/docs/agent-customization/agent-skills) and the [Agent Skills standard](https://agentskills.io/).

## 1. Extract from the conversation

Review the conversation history first. If the user followed a multi-step workflow (for example, a debugging approach, a review checklist or a document format), generalize it. Extract:

- the required inputs;
- the ordered steps;
- decision points and rules, including what must **never** be invented or changed;
- the output contract (sections, format, order); and
- quality criteria or completion checks.

Do not copy one-off details (specific names, numbers or file contents) into the skill unless they are reusable rules.

## 2. Clarify only what is missing

If no clear workflow emerges, ask, one question at a time:

- What outcome should the skill produce?
- Workspace (`.github/skills/`) or personal (`~/.copilot/skills/`)?
- A quick checklist or a full multi-step workflow?
- Should the agent load it automatically, or only when the user types `/<name>`?

## 3. Draft and save

Create `.github/skills/<name>/SKILL.md` (or the personal location). Follow these rules:

| Field | Rule |
| --- | --- |
| `name` | Required. Lowercase letters, numbers and hyphens, max 64 chars. **Must match the folder name.** No slashes, colons, dots or namespace prefixes: invalid names make the skill fail silently |
| `description` | Required, max 1024 chars. State **what** it produces **and when** to use it, with the words a user would naturally type. Add an exclusion if a similar task must not trigger it |
| `argument-hint` | Optional. Hint shown after `/<name>` in the chat input |
| `disable-model-invocation` | Optional. `true` = only runs via `/<name>`. Leave it out when automatic discovery is wanted |
| `user-invocable` | Optional. `false` hides it from the `/` menu but keeps automatic loading |

Structure the body as:

```markdown
# <Title>

## When to use
## Inputs
## Procedure
1. ...
## Rules
## Output
## Completion checks
```

Keep `SKILL.md` under 500 lines. Put long references, templates or scripts next to it (`./references/`, `./assets/`, `./scripts/`) and link them with relative paths. Never include secrets, credentials or personal data.

## 4. Iterate

1. Point out the most ambiguous or weakest parts of the draft and ask about those.
2. Apply the answers and save again.

## 5. Hand over

Once the skill is final, summarize what it produces. Then give the user:

- one **explicit** prompt (`/<name> ...`);
- one **natural-language** prompt that should trigger it automatically; and
- one **related but out-of-scope** prompt that should **not** trigger it.

Tell the user to test each prompt in a **fresh** chat, because this conversation hides gaps in the skill. They can check the response's References or the Agent Debug Logs to confirm the skill was loaded. Finally, suggest one related customization (instructions, a prompt file or a custom agent) if it fits better for part of the workflow.
