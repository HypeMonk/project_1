# The Style Transplant — Complete Solution Guide

> **Pick a ML concept. Pick a real historical art style. Fuse them into one image.**

---

## Table of Contents

1. [What This Assignment Wants](#1-what-this-assignment-wants)
2. [Step 1 — Choose a ML/DS Concept](#2-step-1--choose-a-mlds-concept)
3. [Step 2 — Choose a Visual Tradition (30+ Options)](#3-step-2--choose-a-visual-tradition-30-options)
4. [Step 3 — Learn the Grammar (Not Just the Look)](#4-step-3--learn-the-grammar-not-just-the-look)
5. [Step 4 — Map Your Concept Into the Tradition](#5-step-4--map-your-concept-into-the-tradition)
6. [Step 5 — Write Your Prompt](#6-step-5--write-your-prompt)
7. [Step 6 — Generate the Image (DALL·E 3 + Banana)](#7-step-6--generate-the-image-dalle-3--banana)
8. [Step 7 — Self-Evaluate with Gemini 3 Pro](#8-step-7--self-evaluate-with-gemini-3-pro)
9. [Step 8 — Upload to GitHub](#9-step-8--upload-to-github)
10. [Step 9 — Create the JSON File](#10-step-9--create-the-json-file)
11. [Step 10 — Final Checklist](#11-step-10--final-checklist)
12. [Common Mistakes](#12-common-mistakes)

---

## 1. What This Assignment Wants

Two things must be true about your image:

| Requirement | What it means |
|---|---|
| **Tradition is identifiable** | A person who knows art history looks at it and names the movement — without you telling them |
| **Concept is discernible** | A data scientist looks at it and recognizes the ML concept — without a label |

The key word in the brief is **grammar** — not just look. A ukiyo-e *look* means flat colors and outlines. The *grammar* means specific compositional diagonals, specific color conventions, specific line weight rules. Grammar is what separates a strong submission from a generic "old-looking" image.

**The hardest part is the thinking before you prompt.** The model cannot translate your concept into a visual tradition — that's your job.

---

## 2. Step 1 — Choose a ML/DS Concept

Pick something with a clear visual structure — something that has a shape, a direction, a tension, or a pattern.

| Concept | Why it works visually |
|---|---|
| Gradient descent | A ball rolling downhill toward a valley — direction and momentum |
| Overfitting | A path that perfectly follows every rock and bump on rough terrain instead of taking the smooth road |
| Bias-variance tradeoff | Two opposing forces — an archer's arrows either clustered off-center (bias) or scattered wide (variance) |
| Attention mechanism | Multiple people in a crowd, one person's gaze drawn strongly to specific others |
| Dimensionality reduction | A 3D object casting a 2D shadow — information lost in projection |
| Vanishing gradients | A message passed down a long chain of people, each whispering quieter until the last person hears nothing |
| Regularization | A wild vine being trained/pruned to grow along a structured trellis |
| Class imbalance | A crowd of thousands with only three people of a different type |
| Loss landscape | A mountain range with peaks, valleys, and a climber searching for the lowest point |
| The cold start problem | An empty restaurant — no customers, no reviews, no way to attract either |
| Clustering | Groups of people or objects naturally gathering in distinct spaces |
| Dropout | A choir where random singers go silent each rehearsal — the remaining voices must carry the whole |
| Feature importance | A map with some roads highlighted as essential and others faded out as irrelevant |
| Simpson's paradox | Two groups each trending one direction, but combined they trend the opposite |
| Ensemble methods | Many different craftspeople each building a part; the assembled whole is stronger than any individual |
| Random forest | Hundreds of slightly different paths through the same forest, the majority vote determines direction |
| Transfer learning | A musician trained in classical piano sitting at a new instrument — skill transfers, context shifts |
| Underfitting | A ruler used to measure a coastline — too simple to capture the real complexity |
| Curse of dimensionality | A search party that must cover not a field, but a 10-dimensional space — the area explodes |
| Normalization | Raw ingredients being scaled and standardized before cooking |

---

## 3. Step 2 — Choose a Visual Tradition (30+ Options)

"Vintage" and "retro" are not valid. You need a **named tradition with a period**.

### Graphic Design Movements

| Tradition | Period | Key Visual Characteristics |
|---|---|---|
| Bauhaus | 1919–1933 | Primary colors only, geometric shapes, no decoration, function determines form |
| Soviet Constructivism | 1920s–1930s | Bold red/black, diagonal compositions, stark typography, photomontage |
| Swiss International Typographic Style | 1950s–1970s | Grid systems, Helvetica/Akzidenz-Grotesk, asymmetric layout, white space |
| WPA Federal Art Project posters | 1935–1943 | Flat color, simplified silhouettes, bold outlines, American landscape subjects |
| De Stijl | 1917–1931 | Only horizontal/vertical lines, primary colors + black/white, grid-based |
| Art Nouveau | 1890–1910 | Organic flowing lines, botanical motifs, decorative borders, muted pastels |
| Dada photomontage | 1916–1924 | Cut-and-paste collage, deliberately chaotic, mixed typefaces, absurdist |
| Psychedelic poster art | 1966–1972 | Saturated clashing colors, warped lettering, fluid organic forms |

### Fine Art Traditions

| Tradition | Period | Key Visual Characteristics |
|---|---|---|
| Japanese ukiyo-e woodblock | 1603–1868 | Flat unmodulated color, bold outlines, diagonal composition, muted indigo/ochre |
| Dutch Golden Age oil painting | 1600s | Dramatic chiaroscuro, photorealistic detail, dark backgrounds, single light source |
| Impressionism | 1860s–1880s | Visible brushstrokes, outdoor light, broken color, no sharp outlines |
| Pointillism | 1886–1910 | Every surface built from tiny color dots, no brushstroke blending |
| Medieval manuscript illumination | 9th–15th century | Gold leaf, flat figures, decorative borders, symbolic scale (important = bigger) |
| Islamic geometric art | 8th–17th century | Infinite repeating geometric patterns, no figurative elements, mathematical symmetry |
| Byzantine mosaic | 4th–15th century | Gold backgrounds, frontal flat figures, tessellated stone, rigid symbolic poses |
| Edo-period Rinpa school | 17th–19th century | Gold/silver leaf, bold botanical forms, flat decorative style, dramatic negative space |

### Scientific & Technical Illustration

| Tradition | Period | Key Visual Characteristics |
|---|---|---|
| Age of Exploration scientific engraving | 16th–18th century | Fine crosshatching, Latin annotations (but no text in image), precise botanical/anatomical detail |
| Victorian natural history illustration | 1830s–1880s | Detailed pen-and-ink with watercolor wash, specimen isolation on white, taxonomic precision |
| Audubon-style ornithological illustration | 1820s–1840s | Life-size birds in natural poses, painted backgrounds, dramatic posture |
| Soviet scientific propaganda posters | 1930s–1950s | Bold flat color, industrial subjects, heroic figures, dramatic upward angles |

### Regional & Cultural Traditions

| Tradition | Period | Key Visual Characteristics |
|---|---|---|
| Persian miniature painting | 12th–17th century | Flat perspective, saturated jewel colors, dense decorative borders, narrative scenes |
| Chinese ink wash painting (Shuimo) | Tang–Qing dynasty | Minimal brushwork, ink gradients, empty space as composition, mountain/mist subjects |
| Aboriginal Australian dot painting | 1970s–present | Concentric dot patterns, aerial map perspective, earth tones, symbolic shapes |
| Aztec/Mexica codex illustration | Pre-1521 | Flat profile figures, symbolic colors, sequential narrative panels, pictographic |
| Mughal miniature | 16th–18th century | Fine detail, layered landscape, court scenes, Persian-influenced flat perspective |
| Pre-Raphaelite painting | 1848–1860s | Jewel-bright colors, dense natural detail, medieval subjects, literary narrative |

---

## 4. Step 3 — Learn the Grammar (Not Just the Look)

**This step takes 20–30 minutes and makes everything else work.**

For your chosen tradition, find 5–10 actual examples online and answer these questions:

| Question | Why it matters |
|---|---|
| What colors are used? (exactly — not "warm tones", but "ochre, vermillion, prussian blue, and black only") | Color palette is the first thing an evaluator checks for anachronism |
| What is the line quality? (thin/thick, smooth/rough, present/absent) | Line style is one of the strongest tradition markers |
| How is depth/perspective handled? (flat, single-point, isometric, none) | Photographic depth in a flat tradition = automatic fail |
| What subjects appear? What never appears? | Each tradition has forbidden and required subjects |
| What is the compositional logic? (symmetrical, diagonal, grid-based, radial) | This is the grammar — the rule that governs where things go |
| What textures are visible? (woodgrain, brushstroke, dot pattern, engraved lines) | Texture authenticates the medium |

### Where to find real examples

- **Google Arts & Culture** — https://artsandculture.google.com — search your tradition name
- **The Met Collection** — https://www.metmuseum.org/art/collection — free high-res images
- **Wikimedia Commons** — search "[tradition name] art" — public domain
- **Museum of Modern Art** — https://www.moma.org/collection/ — for 20th century movements

### Example: Bauhaus grammar breakdown

| Element | Bauhaus rule |
|---|---|
| Colors | Red, yellow, blue, black, white ONLY — no mixed or secondary colors |
| Line | Geometric, clean, no hand-drawn variation |
| Depth | Flat — no shadows, no perspective shading |
| Composition | Based on underlying grid, asymmetric balance |
| Subjects | Abstract geometric shapes, not figurative |
| Typography | Sans-serif, if present — never ornamental |

If your image has a gradient, an organic shape, or decorative detail — it has failed the Bauhaus grammar check.

---

## 5. Step 4 — Map Your Concept Into the Tradition

This is the hardest step. You need to find a physical scene where:
1. The ML concept's structure is visible
2. The scene can be painted/drawn in your chosen tradition's style

### How to do this mapping

Ask yourself: **"What physical thing behaves the same way as my concept?"**

Then ask: **"Can that physical thing be depicted in my chosen tradition?"**

### Examples of good concept + tradition pairings

| Concept | Tradition | Scene | Why it works |
|---|---|---|---|
| Gradient descent | Japanese ukiyo-e | A lone figure descending a mountain path toward a valley, viewed from above with Hokusai-style diagonal composition | The path downhill = optimization path; the valley = minimum; the aerial view matches ukiyo-e's flattened perspective |
| Overfitting | Victorian natural history illustration | A specimen drawing of a plant with roots that have grown in perfect conformance with every crevice of its specific pot — roots that would fail in open soil | Over-adapted to training environment; precise scientific style amplifies the rigidity |
| Bias-variance tradeoff | Soviet Constructivist poster | Two groups of workers — left side marching in tight formation toward a wrong target, right side scattered wide but roughly near the correct target | Bias = systematic offset; variance = spread; Constructivist diagonal layout creates visual tension between the two |
| Attention mechanism | Persian miniature | A court scene where the king's gaze and the gazes of courtiers are directed with different intensities toward a single messenger | Selective attention weighted by relevance; Persian miniature's flat layered crowd allows all figures to be visible |
| Vanishing gradients | Chinese ink wash | A long mountain range where the nearest peak is rendered in full dark ink, each subsequent peak lighter, the farthest peaks barely visible — nearly merged with the sky | Signal fading with depth = gradient vanishing; ink wash's natural mist technique is structurally perfect |
| Regularization | Bauhaus | Geometric abstraction where wild organic shapes on the left panel are constrained and simplified into primary-color rectangles on the right | Constraint applied to complexity; Bauhaus primary-only geometry is literally the regularized form |
| Dropout | WPA Federal Art Project poster | A choir performing on stage — several singers illustrated as empty silhouettes, the rest in full color, performing together | Random silencing; flat WPA poster style makes the absences visually stark |
| Loss landscape | Edo Rinpa school | A gold-leaf landscape of peaks and valleys seen from above, a small figure at the base of the deepest valley, painted in Rinpa's dramatic flat style | The terrain IS the loss landscape; Rinpa's high viewpoint and gold ground make the topography the subject |

---

## 6. Step 5 — Write Your Prompt

### The Prompt Formula

```
[Medium and tradition name with period], depicting [your physical scene],
rendered with [list 3-4 specific grammar rules you researched],
[color palette — be specific],
[composition rule],
[medium/texture detail],
no diagrams, no text, no labels, no anachronistic elements,
no photographic shading, no [specific thing to avoid for this tradition].
```

### Example prompt (Gradient Descent + Ukiyo-e)

```
Japanese ukiyo-e woodblock print, Edo period (1800s), depicting a lone 
traveler descending a winding mountain path toward a misty valley below, 
viewed from a high diagonal vantage point in the style of Hokusai's 
landscape series. Flat areas of unmodulated color with no shading or 
gradients. Bold black outlines of even weight. Muted indigo, ochre, 
and pale grey palette with cream paper ground. Diagonal composition 
with the path leading the eye from upper-right to lower-left valley. 
Visible woodblock texture in the sky. No photographic depth or shadows. 
No text, no labels, no Western perspective techniques.
```

### Example prompt (Overfitting + Victorian natural history)

```
Victorian natural history illustration, 1860s style, pen-and-ink with 
watercolor wash, depicting a botanical specimen — a potted plant whose 
roots have grown in precise conformance with every crack and inner 
contour of its ceramic pot, forming a perfect mold of the container. 
The roots are rendered with taxonomic precision, fine crosshatching 
for shadow areas, isolated on a plain white ground. Detailed scientific 
illustration style with even line weight and careful observation. 
No annotations, no labels, no text, no decorative borders.
```

### Prompt writing rules

- **Name the specific artist or sub-movement** if you can ("in the manner of Hokusai's Thirty-six Views" beats "ukiyo-e style")
- **List grammar rules explicitly** — don't say "in this style", describe the rules
- **Name what to exclude** — "no photographic shading", "no gradients", "no sans-serif fonts"
- **Specify the physical medium** — "woodblock print", "oil on canvas", "gouache on board", "pen and ink"
- Generate at least **4–6 variations** and compare against your grammar checklist

---

## 7. Step 6 — Generate the Image (DALL·E 3 + Banana)

### Method A: DALL·E 3 via OpenAI (Paid)

Works well for graphic design traditions (Bauhaus, Constructivism, Swiss Style, WPA posters) because it follows compositional rules literally.

1. Go to **https://chat.openai.com** (ChatGPT Plus required)
2. Type: `Generate an image: [your full prompt]`
3. Download the result — right-click → Save image as `.png`
4. Check dimensions: must be at least **1024px on short side**

### Method B: Banana (Free — Gemini Imagen)

Works well for painterly and illustrative traditions (ukiyo-e, Victorian illustration, Persian miniature, ink wash).

1. Go to **https://banana.com**
2. Sign up free with Google
3. Paste your prompt → Generate
4. Download as `.png`
5. If output is under 1024px, upscale free at **https://www.iloveimg.com/upscale-image**

### After generating — check against your grammar list

Before evaluating with Gemini, manually check your image against the grammar rules you wrote in Step 3:

- [ ] Correct color palette only (no forbidden colors crept in?)
- [ ] Correct line quality (no photographic shading in a flat tradition?)
- [ ] Correct perspective (no 3D depth in a flat tradition?)
- [ ] Correct texture (does the medium show?)
- [ ] Concept still readable (not lost in the style?)
- [ ] Any anachronistic elements? (modern objects, wrong fonts, wrong technology)

If any box is unchecked — fix the prompt and regenerate.

---

## 8. Step 7 — Self-Evaluate with Gemini 3 Pro

### Setup

1. Go to **https://aistudio.google.com**
2. Select **Gemini 3 Pro** from the model dropdown
3. Click **System Instructions** and paste this entire block — replacing the `{PLACEHOLDERS}` with your own values:

```
You are an expert evaluator of AI-generated images for an academic data science course. You have deep knowledge of art history, visual traditions, and design movements. You will receive one student-submitted image along with the data science concept they chose and a description of the visual tradition they targeted. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to choose a data science or machine learning concept and render it authentically within a specific, historically real visual tradition — engaging the tradition's actual visual grammar, not merely imitating its surface appearance. The concept must remain discernible.

CONSTRAINTS:
1. A specific, named visual tradition with a definable period and vocabulary must be evident in the image.
2. The concept must be discernible to a viewer who knows it.
3. The image must engage the grammar of the tradition — its compositional rules, color logic, line quality, or spatial organization — not just its general era or surface texture.
4. Single frame only.

IMPORTANT: Before reading the student's stated tradition, first record your own independent identification of what visual tradition you think this image belongs to. Then evaluate how well the image inhabits the stated tradition.

The student's stated concept: {CONCEPT}
The student's stated tradition: {TRADITION_NAME} ({TRADITION_PERIOD})
The student's stated approach: {TRADITION_APPROACH}

SCORING RULES: Use the full 0.0–10.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely — they will rank a cohort of 1,000 students. Avoid clustering in the 5–8 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "tradition_identified_by_evaluator": "<string: what visual tradition do YOU think this image belongs to, based on the image alone>",
  "tradition_match": <boolean: does your identification match the student's stated tradition?>,
  "concept_identified_by_evaluator": "<string: what data science concept do you think is being depicted?>",
  "concept_match": <boolean: does your identification match the student's stated concept?>,
  "anachronisms_detected": "<string: list specific visual elements that violate the stated tradition's period or grammar — or 'none detected'>",
  "scores": {
    "tradition_authenticity": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image genuinely inhabit the stated tradition or merely imitate its surface?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "tradition_identifiability": {
      "score": <float 0.0–10.0>,
      "reason": "<would a knowledgeable viewer identify this tradition without being told?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "concept_discernibility": {
      "score": <float 0.0–10.0>,
      "reason": "<can the stated concept be recognized by someone who knows it?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "grammar_over_surface": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image apply the tradition's compositional rules and color logic — or only its general texture?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "integration": {
      "score": <float 0.0–10.0>,
      "reason": "<do the concept and tradition feel genuinely fused, or does the concept feel pasted in?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
```

### What to replace in the system prompt

| Placeholder | Replace with | Example |
|---|---|---|
| `{CONCEPT}` | Your ML concept | `gradient descent` |
| `{TRADITION_NAME}` | Your tradition name | `Japanese ukiyo-e woodblock print` |
| `{TRADITION_PERIOD}` | Your tradition period | `Edo period, 1600–1868` |
| `{TRADITION_APPROACH}` | Your 40-word approach description | `Targeted Hokusai's diagonal landscape composition, flat unmodulated color fields, bold even-weight outlines, and the muted indigo-ochre-cream palette of his Thirty-six Views series` |

### Send this user message (fill in your values)

```
Please evaluate the attached image as a submission for Exercise 03: The Style Transplant.

The student was asked to render a data science or machine learning concept authentically within a specific, historically real visual tradition — applying its actual grammar, not merely imitating its appearance.

Concept: [your concept]
Tradition: [tradition_name] ([tradition_period])
Approach: [tradition_approach]

First record your own independent identifications of the tradition and the concept. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
```

### What to act on in the results

| Field | What to do if it's wrong |
|---|---|
| `tradition_identified_by_evaluator` ≠ your tradition | The grammar is not landing — go back to Step 3, add more specific grammar rules to your prompt |
| `anachronisms_detected` lists something | Remove that element from your prompt explicitly: "no [element]" |
| `grammar_over_surface` < 6 | You described the look, not the rules — rewrite your prompt listing compositional and color rules explicitly |
| `concept_discernibility` < 6 | The concept is buried — make the structural scene element more prominent in your prompt |
| `integration` < 6 | Concept and style feel separate — the physical scene you chose doesn't naturally fit the tradition; try a different scene |

Iterate until `overall_score` > 7.0 and both `tradition_match` and `concept_match` are `true`.

---

## 9. Step 8 — Upload to GitHub

1. Go to **https://github.com** → sign in or create a free account
2. Create a new **public** repository (e.g. `style-transplant`)
3. Click **Add file** → **Upload files** → drag in your `image.png` and `submission.json`
4. Commit changes
5. Click on each file → click **Raw** → copy the URL

Your URLs will look like:
```
https://raw.githubusercontent.com/your-username/style-transplant/main/image.png
https://raw.githubusercontent.com/your-username/style-transplant/main/submission.json
```

**Test both URLs in an incognito/private browser window before submitting.**

---

## 10. Step 9 — Create the JSON File

```json
{
  "prompt": "your complete final prompt, word for word",
  "model": "DALL-E 3 via OpenAI (ChatGPT Plus) OR Banana (Gemini Imagen)",
  "concept": "gradient descent",
  "tradition_name": "Japanese ukiyo-e woodblock print",
  "tradition_period": "Edo period, 1600–1868",
  "tradition_approach": "Targeted Hokusai's diagonal landscape composition, flat unmodulated color fields, bold even-weight black outlines, and the muted indigo-ochre-cream palette of his Thirty-six Views series"
}
```

### Field-by-field guide

| Field | What to write | Rule |
|---|---|---|
| `prompt` | Your exact final prompt | Copy-paste — do not paraphrase |
| `model` | The tool you used | e.g. `DALL-E 3 via OpenAI` |
| `concept` | One word or short phrase | e.g. `overfitting`, `gradient descent` |
| `tradition_name` | Full proper name of the tradition | e.g. `Soviet Constructivism` not `old Russian style` |
| `tradition_period` | Specific dates | e.g. `1920s–1930s` not `early 1900s` |
| `tradition_approach` | Max 40 words — name specific visual grammar rules you targeted | This is what the evaluator reads — be precise |

Validate your JSON at **https://jsonlint.com** before uploading.

---

## 11. Step 10 — Final Checklist

- [ ] Tradition is a real, named movement with specific dates — not "vintage" or "retro"
- [ ] You researched actual examples of the tradition (not just read about it)
- [ ] Image engages grammar rules, not just surface appearance
- [ ] No anachronistic elements (modern objects, wrong fonts, wrong technology)
- [ ] No text, labels, diagrams, or floating annotations in the image
- [ ] ML concept is still recognizable in the image
- [ ] `tradition_match` = `true` in Gemini evaluation
- [ ] `concept_match` = `true` in Gemini evaluation
- [ ] `overall_score` > 7.0
- [ ] Image is at least 1024px on the short side
- [ ] Both URLs tested in incognito browser — load correctly
- [ ] JSON validated at jsonlint.com
- [ ] `tradition_approach` field is specific (names actual grammar rules, not just "it looks like the style")

---

## 12. Common Mistakes

| Mistake | Fix |
|---|---|
| Choosing "vintage" or "art deco" without specific dates or grammar rules | Name a real movement: "Bauhaus, 1919–1933" and list its actual rules |
| Describing the look ("warm colors, old feel") instead of the grammar ("flat primary colors, geometric shapes, no decoration") | Write grammar rules in your prompt: "only red, yellow, blue, black, white — no gradients, no organic shapes" |
| Concept disappears into the style | Make the structural scene element more prominent — the concept needs its own visual weight |
| Photographic shading in a flat tradition | Add to prompt: "no shading, no gradients, no cast shadows, completely flat color fills" |
| Wrong font style appears | Add: "no typography, no text, no lettering of any kind" |
| Anachronistic objects (camera, electricity, modern clothes) | Explicitly list forbidden objects: "no modern technology, no electric lights, no contemporary clothing" |
| `tradition_identified_by_evaluator` is wrong | Your grammar markers are too weak — add 2–3 more specific visual rules from your research |
| Concept and tradition feel like two separate things layered together | The physical scene you chose doesn't naturally fit the tradition — try a different scene from Step 4 |

---

*The conceptual work — mapping the ML concept to a physical scene that fits the tradition — is what earns the marks. Do this step on paper before you open any image tool.*
