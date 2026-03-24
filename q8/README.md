# The Paradox Portrait — Complete Solution Guide

> **Make a logical impossibility look inevitable — no text, no charts, no literal illustration.**

---

## Table of Contents

1. [What This Assignment Wants](#1-what-this-assignment-wants)
2. [Step 1 — Choose a Paradox + Visual Idea](#2-step-1--choose-a-paradox--visual-idea)
3. [Step 2 — Write Your Prompt](#3-step-2--write-your-prompt)
4. [Step 3 — Generate the Image (DALL·E 3 + Banana)](#4-step-3--generate-the-image-dalle-3--banana)
5. [Step 4 — Self-Evaluate with Gemini 3 Pro](#5-step-4--self-evaluate-with-gemini-3-pro)
6. [Step 5 — Upload to GitHub](#6-step-5--upload-to-github)
7. [Step 6 — Create the JSON File](#7-step-6--create-the-json-file)
8. [Step 7 — Final Checklist](#8-step-7--final-checklist)
9. [Common Mistakes](#9-common-mistakes)

---

## 1. What This Assignment Wants

Two things must be true about your image:

| For someone who **knows** the paradox | For someone who **doesn't** know it |
|---|---|
| They recognize it immediately | They feel something is wrong or unresolved |

The key rule: **no literal illustration.** A picture of a bus is not the Inspection Paradox. A room of people is not the Birthday Problem. You must find the paradox's *structural essence* — the thing that makes it feel impossible — and render that as a physical scene or composition.

> The image doesn't explain the paradox. It *is* the paradox.

---

## 2. Step 1 — Choose a Paradox + Visual Idea

The table below gives you the paradox, its core strangeness, the visual trap to avoid, and a strong visual direction to use instead.

| Paradox | Core strangeness | ❌ Literal trap | ✅ Strong visual direction |
|---|---|---|---|
| **Simpson's Paradox** | A trend appears in every subgroup but reverses when combined | Arrows on a chart | A hillside where every small path slopes upward, but the overall mountain clearly descends — both truths visible simultaneously in one landscape |
| **Goodhart's Law** | Optimizing a measure destroys its value as a measure | A speedometer or target | A craftsman whose hands have been replaced by measuring instruments — perfectly calibrated, unable to make anything |
| **Inspection Paradox** | You always arrive during a long gap — intervals look different depending on how you sample | A bus stop | A forest where every tree you stand near is enormous, yet most trees in the forest are small — the experience of arrival distorts the distribution |
| **Birthday Problem** | 23 people gives 50% chance of shared birthday — far higher than intuition says | Birthday candles or a calendar | A web of threads connecting people in a small room where the density of connections is shockingly high for so few people |
| **Benford's Law** | 1 appears as a leading digit far more often than any other — in all natural data | Bar charts of digits | A landscape where everything that grows starts from a single point — rivers, trees, cracks — and the convergence feels natural but statistically impossible |
| **Ecological Fallacy** | What is true of the group is not true of any individual in it | A group vs. one person | A crowd moving unanimously left while every single person in it is actually facing right |
| **Ellsberg Paradox** | People prefer known risk over unknown risk even when expected values are equal | Two boxes or urns | Two identical-looking doors — one with a faint warm glow around the edges, one completely neutral — and a figure choosing the warm one despite knowing nothing about either |
| **Friendship Paradox** | Your friends always have more friends than you, on average — as a mathematical fact | A social network diagram | A figure standing alone at the edge of a vast party, looking in — yet every person inside is also standing at an edge, looking inward at others |

### Diptych option
The assignment allows a **diptych** (two panels as one image) — but only if the contrast between panels is *structurally necessary*. Good use: Simpson's Paradox (subgroup view vs. combined view side by side). Bad use: a "before and after" that's just decorative.

---

## 3. Step 2 — Write Your Prompt

### The formula

```
[Photography/painting style and mood], depicting [your physical scene],
where [describe the structural element that carries the paradox],
composition: [how the image is arranged],
color palette: [specific colors],
no text, no numbers, no charts, no labels, no mathematical notation,
no literal [name the surface subject you are avoiding].
```

### Example prompt (Simpson's Paradox)

```
Cinematic wide-angle landscape photograph, golden hour light,
depicting a hillside covered in winding footpaths.
Every individual path, seen close up, clearly climbs upward —
the worn dirt trails each rise from left to right.
Yet the overall mountain slopes unmistakably downward
from left to right when viewed as a whole.
Both the local upward slope and the global downward slope
are simultaneously visible and unambiguous in the same frame.
The viewer's eye is pulled upward by the paths
and downward by the mountain in the same moment.
Mood: quiet wrongness, spatial impossibility that feels real.
Color palette: warm amber, deep green, hazy blue distance.
No text, no charts, no arrows, no annotations.
Photorealistic, not surreal or cartoonish.
```

### Example prompt (Friendship Paradox)

```
Dusk street photography style. A wide outdoor courtyard filled
with a warm, animated crowd of people — every person is turned
slightly inward, gesturing toward others deeper in the crowd.
At every edge of the crowd, individual figures stand slightly
apart, looking in at the denser center. Yet when you look at
the center, those people are also looking inward at an even
denser core. There is no true center — every person is at
a periphery relative to someone else.
The overall crowd is vast and connected; every individual
within it feels peripheral.
Mood: melancholy, mathematical inevitability.
Warm interior light spilling into a cool blue dusk exterior.
No text, no labels, no diagrams. Photorealistic.
```

### Prompt tips

- **Name the structural contradiction explicitly** — describe both truths that coexist
- **Describe mood** — "quiet wrongness", "uncanny stillness", "inevitable contradiction"
- **Specify what to avoid** — "no bus stop", "no birthday candles", "no chart elements"
- **Decide: surreal or photorealistic?** Photorealistic tends to score higher on `physical_plausibility`; surreal can score higher on `uncanny_quality` — pick one intentionally
- Generate **4–6 variations** minimum before choosing

---

## 4. Step 3 — Generate the Image (DALL·E 3 + Banana)

### Method A: DALL·E 3 via OpenAI (Paid)

Best for precise spatial compositions — when you need the structural contradiction to be exactly placed.

1. Go to **https://chat.openai.com** (ChatGPT Plus required)
2. Type: `Generate an image: [your full prompt]`
3. Download as `.png` — right-click → Save image as

### Method B: Banana (Free — Gemini Imagen)

Good for atmospheric, mood-heavy images — surreal or painterly styles work well.

1. Go to **https://banana.com** → sign in free
2. Paste prompt → Generate → Download
3. If under 1024px, upscale at **https://www.iloveimg.com/upscale-image**

### After generating — self-check before Gemini

Ask yourself honestly:

- Does the image show **both sides of the contradiction** simultaneously?
- Is there **no text, no chart, no number** anywhere?
- Would a stranger feel something is *off* or *unresolved* — without you explaining it?
- Does it avoid the literal surface subject? (no bus, no candles, no urns)

If any answer is no — fix the prompt and regenerate. Do not go to Gemini with an image you already know is wrong.

---

## 5. Step 4 — Self-Evaluate with Gemini 3 Pro

### Setup

1. Go to **https://aistudio.google.com** → select **Gemini 3 Pro**
2. Click **System Instructions** — paste this full block, replacing the `{PLACEHOLDERS}`:

```
You are an expert evaluator of AI-generated conceptual images for an academic data science course. You have knowledge of logic, statistics, and visual rhetoric. You will receive one student-submitted image, the name of the statistical or logical paradox they chose to depict, and a brief description of the visual logic they used. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to make a statistical or logical paradox visible in a single image (or composed diptych), without using any text, numbers, formulas, or literal representation of the paradox's mathematical structure. The image should make a viewer who knows the paradox recognize it, and make a viewer who does not feel something unresolved or uncanny.

CONSTRAINTS:
1. No text, numbers, formulas, chart elements, or mathematical notation within the image.
2. Must function as a standalone visual — producing recognition for an expert, or unease for a non-expert.
3. A diptych is permitted only if the two-panel contrast is structurally necessary to the paradox, not merely decorative.
4. Must embody the paradox's structural or perceptual essence — not illustrate it literally.

IMPORTANT: Before reading the student's stated paradox, first record your own independent identification of which paradox you think is being depicted. Then evaluate how well the image communicates the stated paradox.

The student's stated paradox: {PARADOX}
The student's stated visual logic: {VISUAL_LOGIC}

SCORING RULES: Use the full 0.0–10.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely — they will rank a cohort of 1,000 students. Avoid clustering in the 5–8 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "paradox_identified_by_evaluator": "<string: which paradox do YOU think is being depicted, based on the image alone>",
  "paradox_match": <boolean: does your identification match the student's stated paradox?>,
  "scores": {
    "paradox_embodiment": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image embody the structural or perceptual essence of the paradox — or does it illustrate it literally?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0–10.0>,
      "reason": "<state which constraints are met and which are violated>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "expert_recognition": {
      "score": <float 0.0–10.0>,
      "reason": "<would someone who knows this paradox recognize it? what tips them off — or prevents recognition?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "uncanny_quality": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image produce a sense of wrongness or unresolvability for a viewer who does not know the paradox?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "avoidance_of_literalism": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image find the paradox's abstract core, or does it illustrate the surface narrative?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "diptych": <boolean: is this a two-panel composed image?>,
  "diptych_justified": <boolean or null: if diptych, is the structure necessary rather than decorative? null if not a diptych>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
```

### What to replace

| Placeholder | Replace with | Example |
|---|---|---|
| `{PARADOX}` | Your paradox name | `Simpson's Paradox` |
| `{VISUAL_LOGIC}` | Your 40-word description | `A hillside where every individual path visibly climbs upward, but the overall mountain slopes downward — both local and global trends simultaneously visible and contradictory` |

### Send this user message

```
Please evaluate the attached image as a submission for Exercise 04: The Paradox Portrait.

The student was asked to make a statistical or logical paradox visible in a single image or composed diptych — without text, numbers, formulas, or literal illustration — using only visual structure and composition to convey the paradox's essence.

Paradox: [your paradox]
Visual logic: [your visual_logic]

First record your own independent identification of which paradox you think is depicted. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
```

### What to act on

| Signal | Action |
|---|---|
| `paradox_identified_by_evaluator` ≠ your paradox | The structural contradiction is not landing — make both sides of the paradox more visually distinct |
| `avoidance_of_literalism` < 6 | You illustrated the surface subject — go back to the ✅ column in Step 1 and use that direction instead |
| `uncanny_quality` < 6 | The wrongness isn't felt — add tension to the composition: make the contradiction more extreme or spatially confrontational |
| `expert_recognition` < 6 | The paradox's specific structure is missing — describe the key structural feature more explicitly in your prompt |

Iterate until `overall_score` > 7.0 and `paradox_match` is `true`.

---

## 6. Step 5 — Upload to GitHub

1. Go to **https://github.com** → sign in or create a free account
2. Create a new **public** repository (e.g. `paradox-portrait`)
3. **Add file → Upload files** → drag in `image.png` and `submission.json`
4. Commit changes
5. Click each file → **Raw** → copy the URL

```
https://raw.githubusercontent.com/your-username/paradox-portrait/main/image.png
https://raw.githubusercontent.com/your-username/paradox-portrait/main/submission.json
```

**Test both in incognito before submitting.**

---

## 7. Step 6 — Create the JSON File

```json
{
  "prompt": "your complete final prompt, word for word",
  "model": "DALL-E 3 via OpenAI (ChatGPT Plus) OR Banana (Gemini Imagen)",
  "paradox": "Simpson's Paradox",
  "visual_logic": "A hillside where every individual path visibly slopes upward, but the overall mountain descends from left to right — local and global trends simultaneously visible and contradictory in one frame"
}
```

### Field guide

| Field | Rule |
|---|---|
| `prompt` | Exact final prompt — copy-paste, do not summarize |
| `model` | Name the tool you used |
| `paradox` | Official name — e.g. `Goodhart's Law`, not `the measure thing` |
| `visual_logic` | Max 40 words — describe what the viewer sees AND how it maps to the paradox structure |

Validate at **https://jsonlint.com** before uploading.

---

## 8. Step 7 — Final Checklist

- [ ] No text, numbers, charts, or formulas anywhere in the image
- [ ] Image avoids the literal surface subject of the paradox
- [ ] Both sides of the contradiction are visible simultaneously
- [ ] A stranger would feel something is unresolved or wrong
- [ ] `paradox_match` = `true` in Gemini evaluation
- [ ] `overall_score` > 7.0
- [ ] If diptych: two panels composed into one single image file
- [ ] Image is at least 1024px on short side
- [ ] Both URLs load correctly in incognito browser
- [ ] JSON validated at jsonlint.com

---

## 9. Common Mistakes

| Mistake | Fix |
|---|---|
| Literal illustration (bus stop, birthday candles, urns) | Use the ✅ column from Step 1 — find the structural essence, not the surface subject |
| Abstract image that feels arbitrary, not wrong | The contradiction must be specific — describe *both* sides of it in your prompt |
| `paradox_match` is false | Your visual structure maps to a different concept — re-read the core strangeness and redesign the scene |
| Diptych that's just decorative | Either make it a single image, or ensure the two panels show directly contradictory structural states |
| Image is surreal but produces no unease | Surreal ≠ uncanny — the wrongness must come from the contradiction, not from dreamlike imagery |
| `visual_logic` field is vague ("shows the paradox visually") | Describe specifically: what does the viewer see, and which part maps to which side of the paradox |

---

*The hardest part is resisting the literal version. Whatever your first instinct is — a bus, candles, a chart — discard it. Then ask: what is the paradox actually doing structurally? Build from there.*
