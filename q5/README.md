# The Affective Chart — Complete Solution Guide

---

## Table of Contents

1. [What This Assignment Actually Wants](#1-what-this-assignment-actually-wants)
2. [Step 1 — Choose a Dataset (30+ Topics with Links)](#2-step-1--choose-a-dataset-30-topics-with-direct-links)
3. [Step 2 — Find Your Insight](#3-step-2--find-your-insight)
4. [Step 3 — Design a Visual Metaphor](#4-step-3--design-a-visual-metaphor)
5. [Step 4 — Write a Strong DALL·E 3 Prompt](#5-step-4--write-a-strong-dalle-3-prompt)
6. [Step 5 — Generate the Image](#6-step-5--generate-the-image)
7. [Step 6 — Self-Evaluate with Gemini 3 Pro](#7-step-6--self-evaluate-with-gemini-3-pro)
8. [Step 7 — Upload to GitHub and Get a Public URL](#8-step-7--upload-to-github-and-get-a-public-url)
9. [Step 8 — Create and Host the Submission JSON](#9-step-8--create-and-host-the-submission-json)
10. [Step 9 — Final Submission Checklist](#10-step-9--final-submission-checklist)
11. [Common Mistakes and How to Avoid Them](#11-common-mistakes-and-how-to-avoid-them)

---

## 1. What This Assignment Actually Wants

Before anything else, understand what you are being graded on:

| What the evaluator checks | What this means for you |
|---|---|
| **Emotional impact** | Does the image make someone *feel* something, not just read a number? |
| **No standard chart types** | No bar chart, no pie chart, no line graph — even a stylish one |
| **Readable without labels** | If you covered all text in your image and showed it to a stranger, would they still understand the message? |
| **Visual originality** | Did you escape the AI default (globe, thermometer, melting ice)? |
| **Compositional intent** | Does it look deliberately designed, or like you accepted the first output? |

**The single most important rule:** Your image must communicate both a *fact* and a *feeling* — without any legend, axis, or label doing the work.

---

## 2. Step 1 — Choose a Dataset (30+ Topics with Direct Links)

Pick a topic that genuinely matters to you. Passion shows in the final image.

### 🌍 Climate & Environment

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 1 | Global temperature rise since 1880 | NASA GISS Surface Temperature | https://data.giss.nasa.gov/gistemp/ |
| 2 | CO₂ levels over 800,000 years | NOAA Mauna Loa + Ice Core Data | https://gml.noaa.gov/ccgg/trends/ |
| 3 | Deforestation in the Amazon | PRODES / Brazil INPE | https://terrabrasilis.dpi.inpe.br/downloads/ |
| 4 | Ocean plastic pollution | Our World in Data — Plastic | https://ourworldindata.org/plastic-pollution |
| 5 | Arctic sea ice loss | NSIDC Sea Ice Index | https://nsidc.org/data/seaice_index |
| 6 | Coral reef bleaching events | NOAA Coral Reef Watch | https://coralreefwatch.noaa.gov/product/vs/data.php |
| 7 | Global wildfire frequency | NASA FIRMS Fire Data | https://firms.modaps.eosdis.nasa.gov/country/ |

### 👥 Health & Disease

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 8 | Child mortality decline 1800–today | Our World in Data | https://ourworldindata.org/child-mortality |
| 9 | Global smoking rates by country | WHO Tobacco Data | https://www.who.int/data/gho/data/themes/tobacco |
| 10 | Mental health disorders worldwide | IHME Global Burden of Disease | https://vizhub.healthdata.org/gbd-results/ |
| 11 | Antibiotic resistance deaths | IHME AMR Data | https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02724-0/fulltext |
| 12 | Malaria deaths over time | Our World in Data — Malaria | https://ourworldindata.org/malaria |
| 13 | Life expectancy by country vs income | Gapminder | https://www.gapminder.org/data/ |

### 💰 Economic Inequality

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 14 | Top 1% wealth share globally | World Inequality Database | https://wid.world/data/ |
| 15 | Extreme poverty headcount 1820–now | Our World in Data | https://ourworldindata.org/extreme-poverty |
| 16 | Gender pay gap by country | OECD Gender Wage Gap | https://stats.oecd.org/index.aspx?queryid=54751 |
| 17 | Billionaire wealth vs global poor | Forbes + World Bank | https://data.worldbank.org/indicator/SI.POV.DDAY |
| 18 | Food insecurity worldwide | FAO FAOSTAT | https://www.fao.org/faostat/en/#data |

### 🌐 Migration & Displacement

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 19 | Refugees and displaced people | UNHCR Global Trends | https://www.unhcr.org/refugee-statistics/download/ |
| 20 | Mediterranean crossing deaths | IOM Missing Migrants | https://missingmigrants.iom.int/downloads |
| 21 | Internal displacement from disasters | IDMC Global Report | https://www.internal-displacement.org/database/displacement-data |

### 🗣️ Language & Culture

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 22 | Endangered languages by continent | UNESCO Atlas of Endangered Languages | https://www.endangeredlanguages.com/ |
| 23 | Languages dying per decade | Endangered Language Project | https://www.endangeredlanguages.com/language/search/ |
| 24 | Internet language distribution | W3Techs | https://w3techs.com/technologies/overview/content_language |

### ⚔️ Conflict & Violence

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 25 | Battle deaths in conflicts 1946–now | UCDP Conflict Data | https://ucdp.uu.se/downloads/ |
| 26 | Nuclear weapons stockpiles over time | Our World in Data | https://ourworldindata.org/nuclear-weapons |
| 27 | Civilian casualties in modern war | Airwaves / ACLED | https://acleddata.com/data-export-tool/ |

### 🐾 Biodiversity & Wildlife

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 28 | Wildlife population decline (Living Planet) | WWF Living Planet Index | https://www.livingplanetindex.org/data_portal |
| 29 | Species extinction rate | IUCN Red List | https://www.iucnredlist.org/resources/summary-statistics |
| 30 | Insect population collapse | Meta-analysis data (Hallmann et al.) | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0185809 |

### 💻 Technology & Society

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 31 | Global internet access inequality | ITU ICT Statistics | https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx |
| 32 | Screen time vs sleep in children | CDC Youth Risk Behavior Survey | https://www.cdc.gov/healthyyouth/data/yrbs/index.htm |
| 33 | AI job displacement projections | McKinsey / OECD | https://www.oecd.org/employment/automation-policy-brief-2018.pdf |

### 🌊 Water & Food

| # | Topic | Dataset | Direct Link |
|---|---|---|---|
| 34 | Freshwater scarcity by region | Aqueduct Water Risk Atlas | https://www.wri.org/data/aqueduct-water-risk-atlas |
| 35 | Food waste per capita by country | FAO Food Loss and Waste | https://www.fao.org/platform-food-loss-waste/flw-data/en |

---

## 3. Step 2 — Find Your Insight

Once you pick a dataset, **do not visualize the whole dataset.** Find the single most emotionally striking number or trend inside it.

### How to extract a strong insight

1. Open the dataset (CSV, spreadsheet, or website)
2. Look for the **biggest change**, the **widest gap**, or the **most unexpected fact**
3. Write it as one sentence with a specific number

### Examples of weak vs strong insights

| ❌ Weak (too vague) | ✅ Strong (specific + emotional) |
|---|---|
| "Deforestation is bad" | "Brazil lost an area of Amazon forest the size of Belgium between 2000 and 2020" |
| "Mental health is a problem" | "Depression is now the world's leading cause of disability, affecting 280 million people — more than the population of the US" |
| "Refugees exist" | "By 2023, 1 in 74 people on Earth had been forcibly displaced — the highest ratio ever recorded" |
| "Languages are disappearing" | "A language dies every 2 weeks — and with it, an irreplaceable way of seeing the world" |
| "Ice is melting" | "The Arctic lost 13% of its sea ice per decade between 1979 and 2023 — a loss visible from space" |

Write your insight down before you write a single prompt. It is the seed of everything.

---

## 4. Step 3 — Design a Visual Metaphor

**This is the hardest part.** Do not skip it and go straight to prompting.

A visual metaphor is a physical shape or arrangement that *embodies* the data's truth — not illustrates it literally.

### Framework: Ask yourself these questions

1. **What does the data feel like?** Loss? Growth? Imbalance? Silence? Suffocation?
2. **What physical thing produces that same feeling?** An empty chair. A crumbling wall. A drowning figure. A single candle.
3. **Can I encode the actual numbers into the physical elements?** Size, density, color, space, texture.

### The "avoid" list — AI image model clichés for data topics

These are the first outputs every model produces. If your image has any of these, your `visual_originality` score will be low:

- 🌐 A globe / Earth from space
- 🌡️ A thermometer
- 🧊 A melting icecap or polar bear
- 📊 A bar chart with a gradient
- 💸 Stacks of coins for inequality
- 🌲 A single dead tree for deforestation
- 💊 Pills for healthcare data
- 🔗 Network nodes for connectivity data

### Good metaphor examples by topic

| Topic | Cliché (avoid) | Strong metaphor |
|---|---|---|
| Amazon deforestation | Dead tree on dry land | Aerial view of forest as a shrinking green island drowning in brown earth, with one tiny green patch remaining |
| Refugee crisis | Crowd of silhouettes | A single pair of worn children's shoes at the edge of vast dark water |
| Wealth inequality | Coin stacks | A dining table where 99 people share one small plate and one person sits surrounded by mountains of food |
| Language extinction | Text fading out | A library where most shelves are empty and crumbling, with a single lit candle illuminating one remaining open book |
| Child mortality decline | Line graph | Two photographs side by side — one of an overcrowded 19th century graveyard with tiny headstones, one of a modern empty one |
| Species extinction | Dead animals | Hundreds of animal silhouettes gradually fading into white space from left to right, with only a few remaining on the right |
| Mental health | Brain with cracks | A crowded city street where most figures cast grey shadows and one in ten has no shadow at all |

---

## 5. Step 4 — Write a Strong DALL·E 3 Prompt

DALL·E 3 follows prompts literally. Use this to your advantage.

### The Prompt Formula

Write your prompt in this structure:

```
[Visual style and medium] of [your metaphor described physically], 
showing [how the data is encoded visually], 
mood: [the emotional tone you want], 
color palette: [specific colors], 
composition: [where things are placed, what dominates], 
no text, no labels, no legends, no axes, no numbers visible in image, 
[any specific things to exclude].
```

### Annotated example prompt (Amazon deforestation)

```
Aerial photograph style illustration of a vast jungle canopy 
viewed from directly above, with three-quarters of the frame 
filled with rich dark green forest and one quarter consumed 
by dry brown cracked earth that cuts in from the right edge 
like a slow tide. The boundary between green and brown is 
jagged and organic, not a straight line. A single thin river 
winds through the remaining green. The remaining forest sits 
like a shrinking island. Deep shadows in the canopy. 
Mood: quiet, irreversible loss. 
Color palette: deep forest greens, warm ochre-brown, pale sky at horizon. 
Shot from 2000 metres altitude. Photorealistic. 
No text, no labels, no legends, no numbers, no chart elements.
```

### Annotated example prompt (Refugee displacement)

```
Documentary photography style. A single pair of small worn 
children's shoes sitting at the very edge of a vast dark 
grey ocean. The shoes are too small. The water extends to 
every horizon. The shore behind the shoes is barren grey 
gravel. Overcast sky. No people visible. 
Mood: profound absence, the weight of what is not shown. 
Color palette: deep slate grey water, pale grey gravel, 
one small patch of faded blue on the shoes.
No text, no labels, no chart elements, no statistics visible.
```

### Annotated example prompt (Wealth inequality)

```
Wide-angle editorial illustration, cinematic lighting. 
A long wooden banquet table stretches across the image. 
On the far left, ninety-nine people crowd together sharing 
one small plate of food, their faces drawn and tired. 
On the far right, one well-dressed person sits alone 
surrounded by an overflowing feast that covers half the table. 
The left side of the image is in shadow, the right side 
bathed in warm golden light. 
Mood: moral weight, imbalance made visceral. 
Color palette: warm amber on the right, cold desaturated blue-grey on the left.
No text, no labels, no numbers visible.
```

### Prompt writing tips

- **Be specific about perspective.** "Aerial view", "close-up macro", "wide angle", "eye level" — tell the model exactly how to frame the shot.
- **Describe what is *not* there.** Empty space, absence, and silence are powerful. Tell the model to leave space empty.
- **Name the mood explicitly.** DALL·E 3 responds to mood words: "melancholy", "urgent", "serene", "suffocating", "hopeful", "irreversible".
- **Specify a medium/style.** "Documentary photography", "editorial illustration", "woodblock print", "scientific diagram rendered as oil painting", "satellite image aesthetic".
- **Always end with** `No text, no labels, no legends, no axes, no numbers visible in image.` — DALL·E 3 sometimes adds text even when you do not ask.
- **Iterate.** After your first image, identify the single most predictable or generic thing about it, then rewrite the prompt to change just that one element.

---

## 6. Step 5 — Generate the Image

You have two recommended options: DALL·E 3 via OpenAI (paid, best quality) and Banana (free, powered by Gemini).

---

### Method A: DALL·E 3 via OpenAI (Recommended — Paid)

DALL·E 3 is OpenAI's image generation model. It follows prompts very literally, which makes it ideal for this assignment — you can describe exactly what you want and it will try to produce it.

**Cost:** You need a ChatGPT Plus subscription ($20/month) or pay-as-you-go API credits. If you already have ChatGPT Plus, this is included.

**Steps using ChatGPT Plus:**

1. Go to **https://chat.openai.com**
2. Log in to your account (must be Plus or higher)
3. Start a new chat
4. In the message box, type:
   ```
   Generate an image: [paste your full prompt here]
   ```
5. ChatGPT will generate the image inline in the chat
6. Click on the image to open it full size
7. Click the **download** icon (↓) or right-click → **Save image as**
8. Save as `.png`

**Steps using the OpenAI API directly:**

If you have API credits, you can generate images programmatically:

1. Go to **https://platform.openai.com** → API Keys → Create a new key
2. Install the OpenAI Python library: `pip install openai`
3. Run this script (save as `generate.py`):

```python
from openai import OpenAI
import urllib.request

client = OpenAI(api_key="YOUR_API_KEY_HERE")  # ← replace with your key

prompt = """
YOUR FULL PROMPT HERE
"""  # ← paste your prompt between the triple quotes

response = client.images.generate(
    model="dall-e-3",
    prompt=prompt,
    size="1024x1024",   # minimum required size
    quality="hd",       # "hd" gives more detail than "standard"
    n=1
)

image_url = response.data[0].url
print(f"Image URL: {image_url}")

# Download and save the image
urllib.request.urlretrieve(image_url, "my_image.png")
print("Saved as my_image.png")
```

4. Run: `python generate.py`
5. Your image is saved as `my_image.png`

**Note on DALL·E 3 content filtering:** If your prompt is rejected, rephrase it to focus on the *visual description* rather than the emotional label. Instead of "a dying child", write "a small empty pair of worn shoes beside a large dark ocean". The visual result is the same or stronger, and it passes the filter.

---

### Method B: Banana (Free — Powered by Gemini Imagen)

Banana is a free AI image generation tool. It uses Google's Gemini Imagen model under the hood, making it a strong free alternative.

**Steps:**

1. Go to **https://banana.com** (or search "Banana AI image generator")
2. Sign up for a free account with your Google or email
3. Click **Create** or **New Image**
4. Paste your full prompt into the prompt box
5. Select the highest resolution option available
6. Click **Generate**
7. Download the image (download icon or right-click → Save)
8. Save as `.png`

**Tips for Banana:**

- If Banana generates a lower-resolution image (under 1024px), look for a **Upscale** button in the interface — most free tools include one
- Generate at least 3–4 variations by clicking Generate multiple times with the same prompt — results vary
- If the output looks generic, add more specific visual language to your prompt (see the iteration table below)
- Banana's Gemini Imagen model handles abstract and metaphorical prompts very well — lean into unusual visual ideas

**Checking your image size after download:**

- **Windows:** Right-click the file → Properties → Details tab → look for "Image dimensions"
- **Mac:** Right-click → Get Info → More Info → Dimensions
- You need at least **1024px on the short side**. If the image is smaller, use a free upscaler: https://www.upscayl.org (desktop) or https://www.iloveimg.com/upscale-image (browser)

---

### Iteration Strategy (applies to both tools)

After your first image, do not submit it. Identify the weakest element and fix it:

| What you see in the output | What to change in your prompt |
|---|---|
| Looks like a generic infographic | Add a specific medium: `"rendered as a woodblock print"`, `"satellite photograph aesthetic"`, `"editorial oil painting"` |
| Too literal / looks like clip art | Add: `"no icons, no symbols, photorealistic"` or shift to `"painterly, abstract, dreamlike"` |
| Text appeared in the image | Add: `"absolutely no text, no words, no letters, no numbers anywhere in the image"` |
| Composition is too centered and flat | Add: `"rule of thirds composition"`, `"subject occupies lower-left quadrant only"`, `"vast empty space dominates the frame"` |
| Colors are bland or generic | Specify exact palette: `"warm ochre and burnt sienna with deep prussian blue shadows"`, `"desaturated grey-green with a single point of amber light"` |
| Mood is wrong or too cheerful | Add: `"shot in flat overcast light, melancholy, still, heavy"` and remove any positive descriptors |
| Model added a chart or graph element | Add: `"no chart elements, no data visualization, no graphs, no axes, purely metaphorical and painterly"` |
| Output is too busy / cluttered | Add: `"minimal composition, large areas of negative space, only one focal subject"` |

Generate at least **4–8 variations** before settling on one. The assignment estimates 2–4 hours. Most of that time should be here.

### Iteration Strategy

After your first image:

| What you see | What to change in your prompt |
|---|---|
| Looks like a generic infographic | Add a specific medium: "oil painting", "satellite photograph", "woodblock print" |
| Too literal / looks like clip art | Add: "no icons, no symbols, photorealistic" or "painterly, abstract" |
| Text appeared in the image | Add: "absolutely no text, no words, no letters anywhere in the image" |
| Composition is boring (centered subject) | Add: "rule of thirds composition, subject occupies lower left quarter only" |
| Colors are generic | Specify exact palette: "warm ochre and burnt sienna with deep prussian blue shadows" |
| Mood is wrong | Add mood explicitly and remove anything cheerful: "shot in overcast flat light, desaturated, melancholy" |
| Model added a legend or chart | Add: "no chart elements, no data visualization, no graphs, purely metaphorical" |

Generate at least **4–8 variations** before you settle on one. The assignment says 2–4 hours. Budget real time for this.

---

## 7. Step 6 — Self-Evaluate with Gemini 3 Pro

Before submitting, evaluate your image exactly the way the auto-grader will. This takes 5 minutes and tells you precisely what to fix.

### Step-by-step instructions

**1. Go to Google AI Studio**

Open **https://aistudio.google.com** — sign in with a free Google account.

**2. Select the correct model**

In the top-left dropdown, select **Gemini 3 Pro**. This is the same model the assignment uses for grading. If you use a different model, your self-evaluation scores will not match what the grader sees.

**3. Paste the System Prompt**

Click the **System Instructions** field (it appears above the chat area). Paste this entire block exactly as written — do not change anything:

```
You are an expert evaluator of AI-generated data visualizations for an academic course. You will receive one student-submitted image. Evaluate it strictly against the brief and constraints below. Do not evaluate it as generic art — evaluate it as a response to a specific assignment.

BRIEF: The student selected a publicly available dataset on a topic with real stakes and generated a single image that communicates the dataset's most important insight in a way that produces an emotional response, not just an informational one. The image should be visually compelling enough to open a long-form magazine story. A viewer who has never seen the dataset should walk away with both a fact and a feeling.

CONSTRAINTS:
1. No standard chart types (bar, line, pie, scatter) used in isolation or without significant visual transformation.
2. The image must be interpretable without a legend or axis labels — the visual grammar must carry the meaning.
3. Single frame only — no sequences or multi-panel layouts.

SCORING RULES: Use the full 0.0–10.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely — they will be used to rank a cohort of 1,000 students and must differentiate them. Avoid clustering in the 5–8 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "scores": {
    "emotional_impact": {
      "score": <float 0.0–10.0>,
      "reason": "<1–3 sentences specific to this image — name what you see>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0–10.0>,
      "reason": "<state which constraints are met and which are violated, and how seriously>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "visual_originality": {
      "score": <float 0.0–10.0>,
      "reason": "<does this escape model defaults and clichés for data topics? name the cliché if present>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "legibility_without_labels": {
      "score": <float 0.0–10.0>,
      "reason": "<can the core insight be read from the image alone, without any legend, axis, or key?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "compositional_intent": {
      "score": <float 0.0–10.0>,
      "reason": "<does the image show deliberate compositional decisions, or does it look like a first-pass default output?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "brief_met": <boolean: does the image function as a genuine response to this brief?>,
  "model_default_escaped": <boolean: does the image appear to have escaped generic AI visualization aesthetics?>,
  "exhibition_worthy": <boolean: would you select this for a curated public exhibition?>,
  "one_line_verdict": "<a single evaluative sentence suitable for a gallery card, max 20 words>"
}
```

**4. Upload your image and send the user message**

In the chat area, click the **+** or paperclip icon and attach your image file directly. Then type (or paste) this message exactly:

```
Please evaluate the attached image as a submission for Exercise 01: The Affective Chart.

The student was asked to choose a publicly available dataset and generate a single image that makes its most important insight emotionally felt — without using standard chart types in isolation, without relying on labels or legends, as a single frame.

Evaluate the image against the brief and constraints above. Do not speculate about how the image was produced.
```

Click **Send**. Gemini returns a JSON object with your scores.

---

### How to read your score output

The response will look like this (with your actual scores filled in):

```json
{
  "scores": {
    "emotional_impact":          { "score": 7.2, "reason": "...", "improvement": "..." },
    "constraint_adherence":      { "score": 9.0, "reason": "...", "improvement": "..." },
    "visual_originality":        { "score": 5.5, "reason": "...", "improvement": "..." },
    "legibility_without_labels": { "score": 6.0, "reason": "...", "improvement": "..." },
    "compositional_intent":      { "score": 7.0, "reason": "...", "improvement": "..." }
  },
  "overall_score": 6.94,
  "brief_met": true,
  "model_default_escaped": false,
  "exhibition_worthy": false,
  "one_line_verdict": "..."
}
```

### What each field means and what to do about it

| Field | What it measures | Score < 6 means | What to fix |
|---|---|---|---|
| `emotional_impact` | Does the image make you *feel* something — not just understand something? | The image is informational but cold | Choose a more intimate perspective; make the color palette more extreme; focus on one human-scale detail instead of a wide view |
| `constraint_adherence` | Does it break any of the three rules? (no standard charts, no labels, single frame) | You used a bar/line/pie chart, or labels are visible, or it is multi-panel | Remove any chart elements; add "no text, no labels" to your prompt and regenerate |
| `visual_originality` | Does it escape the default AI outputs for this data topic? | It looks like the first thing any model produces | Identify the most predictable element (globe, thermometer, etc.) and replace it with something unexpected |
| `legibility_without_labels` | Can a stranger read the core message with zero labels? | The visual grammar is unclear without explanation | Make the contrast more extreme; simplify to one dominant visual element; increase the size difference between key shapes |
| `compositional_intent` | Does it look deliberately designed? | It looks like a first-pass default output | Specify composition explicitly in your prompt (rule of thirds, asymmetry, dominant negative space) and regenerate |

### The three boolean flags — most important signals

| Flag | Value | What it means | Action |
|---|---|---|---|
| `model_default_escaped` | `false` | **Your biggest red flag.** The image looks generic. | Go back to Step 3. Rethink the metaphor completely. |
| `brief_met` | `false` | The image does not function as a response to this assignment at all | Start over with a different metaphor and stronger insight |
| `exhibition_worthy` | `false` | Image would not be selected for a public display | Read each `improvement` field and apply all of them before regenerating |

### The `improvement` field — read this carefully

Every score block contains an `improvement` field with one specific, actionable suggestion. **Read all five.** These are the most useful outputs. Example:

```json
"visual_originality": {
  "score": 5.5,
  "reason": "The image uses a globe with temperature overlay — a near-universal cliché for climate data.",
  "improvement": "Replace the globe with a close-up of cracked earth and a single dried river bed — the absence of water is more visceral than a heat map."
}
```

Act on every `improvement` suggestion, then regenerate your image and re-evaluate. Repeat until `overall_score` > 7.0 and `model_default_escaped` is `true`.

---

## 8. Step 7 — Upload to GitHub and Get a Public URL

GitHub gives you free, permanent, CORS-enabled public file hosting. This is the recommended method.

### If you have never used GitHub before — complete setup

**1. Create a free GitHub account**
- Go to https://github.com
- Click **Sign up**
- Use your email, choose a username, verify

**2. Create a new repository**
- Click the **+** icon in the top right → **New repository**
- Repository name: `affective-chart` (or anything you like)
- Set to **Public** (important — private repos cannot serve public URLs)
- Check **Add a README file**
- Click **Create repository**

**3. Upload your files**
- On your new repository page, click **Add file** → **Upload files**
- Drag and drop your `image.png` and `submission.json` files
- Scroll down, add a commit message like `Add submission files`
- Click **Commit changes**

**4. Get the raw URL**
- Click on your uploaded file (e.g., `image.png`)
- Click the **Raw** button (top right of the file viewer)
- Copy the URL from your browser's address bar

It will look like:
```
https://raw.githubusercontent.com/your-username/affective-chart/main/image.png
```

This is your submission URL. It is CORS-enabled and publicly accessible.

Do the same for `submission.json`.

### Test your URLs in incognito/private mode

**This step is mandatory.** Your instructor will access these URLs from outside your account.

- Chrome: `Ctrl+Shift+N` (Windows) / `Cmd+Shift+N` (Mac)
- Firefox: `Ctrl+Shift+P` / `Cmd+Shift+P`
- Paste each URL and confirm the file loads

If the image URL opens the image directly and the JSON URL shows raw JSON text — you are good.

### Troubleshooting GitHub URLs

| Problem | Fix |
|---|---|
| URL says 404 | Your repository is private, or the filename is different — check spelling exactly |
| URL shows GitHub webpage, not raw file | You copied the normal file URL, not the **Raw** URL |
| Image does not display | File may be corrupted — re-upload |
| JSON shows an error | Your JSON has a syntax error — validate locally first |

---

## 9. Step 8 — Create and Host the Submission JSON

Your JSON file must contain exactly these fields:

```json
{
  "prompt": "your complete final prompt, verbatim — include any negative prompts, style weights, or model parameters",
  "model": "DALL-E 3 via OpenAI (ChatGPT Plus) OR Banana (Gemini Imagen)",
  "dataset_name": "name of the dataset you used",
  "dataset_url": "direct URL to the dataset",
  "insight": "one sentence: the specific insight you were trying to make visible"
}
```

### Example filled JSON

```json
{
  "prompt": "Aerial photograph style illustration of a vast jungle canopy viewed from directly above, with three-quarters of the frame filled with rich dark green forest and one quarter consumed by dry brown cracked earth that cuts in from the right edge like a slow tide. The boundary between green and brown is jagged and organic. A single thin river winds through the remaining green. Deep shadows in the canopy. Mood: quiet, irreversible loss. Color palette: deep forest greens, warm ochre-brown, pale sky at horizon. Photorealistic. No text, no labels, no legends, no numbers, no chart elements.",
  "model": "DALL-E 3 via OpenAI / Banana (Gemini Imagen)",
  "dataset_name": "PRODES Amazon Deforestation Monitoring",
  "dataset_url": "https://terrabrasilis.dpi.inpe.br/downloads/",
  "insight": "Brazil lost approximately 400,000 km² of Amazon rainforest between 2000 and 2020 — an area larger than Germany."
}
```

### JSON rules

- Use a JSON validator before uploading: https://jsonlint.com
- No trailing commas (common mistake)
- All values must be in double quotes `"` not single `'`
- The `insight` field must be **one sentence** — not a paragraph
- The `prompt` field is your actual final prompt, word for word

### Optional: Add publish_email

If you want your email attributed in the public exhibition:

```json
{
  "prompt": "...",
  "model": "...",
  "dataset_name": "...",
  "dataset_url": "...",
  "insight": "...",
  "publish_email": true
}
```

---

## 10. Step 9 — Final Submission Checklist

Go through every item before you submit.

### Image checks

- [ ] Image is at least 1024px on the short side
- [ ] Image is `.png`, `.jpg`, `.webp`, or `.avif`
- [ ] No standard chart types (bar, line, pie, scatter) used in isolation
- [ ] No visible text, labels, legend, or axis in the image
- [ ] A stranger who has never seen your dataset can still feel what the image is about
- [ ] You ran the Gemini 3 Pro evaluation and `overall_score` > 6.0
- [ ] `model_default_escaped` is `true`

### URL checks

- [ ] Image URL ends in an accepted extension
- [ ] Image URL tested in incognito browser — loads correctly
- [ ] JSON URL tested in incognito browser — shows raw JSON
- [ ] Both URLs start with `https://`
- [ ] You ran `python validate.py <image_url> <json_url>` and got no errors

### JSON checks

- [ ] `prompt` field contains your complete, verbatim final prompt
- [ ] `model` field names the model you used
- [ ] `dataset_name` matches a real, publicly available dataset
- [ ] `dataset_url` is a working link to the actual dataset
- [ ] `insight` is exactly one sentence with a specific, verifiable claim

### Submission format

Submit exactly this format (image URL first, then JSON URL, separated by a space):

```
https://raw.githubusercontent.com/YOUR_USERNAME/affective-chart/main/image.png  https://raw.githubusercontent.com/YOUR_USERNAME/affective-chart/main/submission.json
```

---

## 11. Common Mistakes and How to Avoid Them

| Mistake | Why it matters | Fix |
|---|---|---|
| Choosing a vague insight ("climate change is bad") | The evaluator scores specificity and emotional precision | Rewrite your insight with a specific number and a specific time/place |
| Accepting the first image output | AI defaults are generic and score low on `visual_originality` | Always generate 4–8 variants; iterate on the prompt |
| Using a stylised bar chart | Constraint violation — explicit in the brief | Replace with a spatial metaphor where size, texture, or density encodes the data |
| Text appearing in the image | Breaks the "no labels" constraint | Add "absolutely no text, no words, no letters" explicitly to your prompt |
| Image too small | Auto-checker rejects it | Bing outputs 1024×1024 by default — this is fine. Do not downscale before uploading. |
| Private GitHub repository | URL returns 404 | Go to repository Settings → scroll to Danger Zone → Change visibility → Public |
| Copying the GitHub page URL instead of Raw URL | The page URL is HTML, not a direct file link | Always click the **Raw** button and copy that URL |
| JSON with syntax errors | Automatic check fails | Paste your JSON into https://jsonlint.com before uploading |
| Not testing in incognito | You can see your own files while logged in, but the evaluator cannot | Always test in private/incognito mode before submitting |
| Prompt that is too short | DALL·E 3 fills in gaps with its own defaults (which are generic) | Write at least 100 words in your prompt. Be specific about every visual element. |

---

*Good luck. Pick a topic you actually care about — that is the single best predictor of a strong final image.*
