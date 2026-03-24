# The Concept Incarnation — Complete Solution Guide

---

## Table of Contents

1. [What This Assignment Actually Wants](#1-what-this-assignment-actually-wants)
2. [Step 1 — Choose a Concept (35+ Concepts with Metaphors, Prompts & Clichés)](#2-step-1--choose-a-concept-35-concepts-with-metaphors-prompts--clichés)
3. [Step 2 — Extract the Structural Logic of Your Concept](#3-step-2--extract-the-structural-logic-of-your-concept)
4. [Step 3 — Find and Refine Your Physical Scene](#4-step-3--find-and-refine-your-physical-scene)
5. [Step 4 — Write a Strong DALL·E 3 Prompt](#5-step-4--write-a-strong-dalle-3-prompt)
6. [Step 5 — Generate the Image](#6-step-5--generate-the-image)
7. [Step 6 — Self-Evaluate with Gemini 3 Pro](#7-step-6--self-evaluate-with-gemini-3-pro)
8. [Step 7 — Upload to GitHub and Get a Public URL](#8-step-7--upload-to-github-and-get-a-public-url)
9. [Step 8 — Create and Host the Submission JSON](#9-step-8--create-and-host-the-submission-json)
10. [Step 9 — Final Submission Checklist](#10-step-9--final-submission-checklist)
11. [Common Mistakes and How to Avoid Them](#11-common-mistakes-and-how-to-avoid-them)

---

## 1. What This Assignment Actually Wants

This question is harder than the previous one. The challenge is not artistic — it is **conceptual**. You must first deeply understand a technical concept, then find a real-world physical scene where the *same internal logic* is visible.

| What the evaluator checks | What this means for you |
|---|---|
| **Concept recognition** | A domain expert should look at the image and immediately name the concept — without you telling them |
| **No diagrams or labels** | No charts, no text, no floating annotations — nothing that would not exist in a real physical scene |
| **Physical plausibility** | The scene must look like a photographer could have taken it or a painter could have observed it |
| **Structural fidelity** | The scene must map to the *deep logic* of the concept, not just its surface name or a loose association |
| **Visual execution** | It should look deliberately composed, not like a default AI output |

**The single most important field in your evaluation:** `concept_identified_by_evaluator`. The grader tries to name your concept before reading your answer. If it guesses wrong, your structural metaphor is not working — this is your primary signal to act on.

**The critical mistake to avoid:** Picking a scene that just *reminds* you of the concept, rather than one where the concept's *mechanism* is physically present. "Gradient descent" is not a ball rolling downhill because balls roll — it is a ball rolling downhill because the direction at each point is determined entirely by the local slope, and global knowledge of the landscape is unavailable.

---

## 2. Step 1 — Choose a Concept (35+ Concepts with Metaphors, Prompts & Clichés)

Each entry below includes: the concept, a physical metaphor with structural justification, an example image prompt, and the cliché to avoid.

---

### 🧠 Model Behaviour Concepts

---

**1. Overfitting**

- **Metaphor:** A tailor who has made a suit so precisely fitted to one specific person's exact posture on one specific day that it fits no one else — not even that same person the next morning. The suit has elaborate darts and seams tracking every individual curve, but is unwearable as clothing.
- **Why it works structurally:** Overfitting = a model that has memorised the training data so precisely it cannot generalise. The suit = the model. The one person = training data. Anyone else = test data.
- **Example prompt:** `Close-up photograph of an extraordinarily bespoke suit jacket hanging on a tailor's dummy. The jacket is covered in an excessive number of hand-stitched darts, tucks, and custom seams tracking every individual contour. The craftsmanship is obsessive and precise. Hanging beside it, the suit is clearly impossible to wear by anyone else — its shape is too specific to one body. Warm atelier lighting. No text, no labels, no diagrams.`
- **Cliché to avoid:** A neural network diagram with too many connections. Anything showing "memorising" text books.

---

**2. Underfitting**

- **Metaphor:** A blunt, cheap key that has been barely cut — so crude that it fits none of the locks it was meant for. The key exists and looks like a key, but has not been shaped to the structure it needs to work with.
- **Why it works structurally:** Underfitting = a model too simple to capture the pattern. The under-cut key = the model. The lock = the data structure.
- **Example prompt:** `Macro photograph of a crudely cut blank key beside a row of complex lock cylinders. The key is barely shaped — almost flat, with only the most minimal, rounded cuts. It is visibly too simple to match any of the intricate pin configurations visible in the lock cross-sections beside it. Cool clinical lighting on a grey metal surface. No text, no labels.`
- **Cliché to avoid:** A simple line through scattered dots. A blurry or "dumb" looking robot.

---

**3. Gradient Descent**

- **Metaphor:** A blindfolded hiker on a foggy mountain who can only feel the slope directly underfoot. They always step in whichever direction feels most downhill — and eventually reach a valley, though not necessarily the deepest one.
- **Why it works structurally:** Gradient descent = optimise by following the local gradient. The blindfold = no global knowledge of the landscape. The fog = no visibility beyond the immediate gradient. A valley = a local or global minimum.
- **Example prompt:** `Cinematic photograph of a lone hiker descending a dramatic, fog-covered mountain. The hiker is blindfolded, hands slightly extended, feeling the slope through their feet. The mountain has multiple valleys and ridges visible in the far background through breaks in the fog. The hiker is heading toward a nearby valley, unaware of a deeper one visible in the distance. Golden hour light. No text, no labels, no diagrams.`
- **Cliché to avoid:** A 3D loss surface diagram. A marble rolling on a curved surface shown as a graph.

---

**4. Local Minima**

- **Metaphor:** A ball that has rolled into a shallow depression in the ground and come to rest — while a much deeper valley is visible just over a low ridge nearby. The ball is settled and has no energy to escape.
- **Why it works structurally:** Local minimum = an optimum that is not the global optimum; the algorithm is stuck because all small moves increase the loss.
- **Example prompt:** `Wide landscape photograph at dusk. A stone valley with a small hollow in the foreground where a round boulder rests. Clearly visible over a gentle ridge in the mid-ground is a much deeper, wider valley. The boulder sits completely still in its shallow depression. Warm amber and shadow tones. No text, no labels.`
- **Cliché to avoid:** A literal labeled loss curve diagram. A glowing dot on a 3D mesh surface.

---

**5. Vanishing Gradients**

- **Metaphor:** A whispered message passed through a long chain of people in a crowded room. By the time it reaches the last person, the message has become so faint and distorted it is nearly inaudible — the person at the end hears almost nothing of what the first person said.
- **Why it works structurally:** Vanishing gradients = error signal multiplied through many layers becomes exponentially small; early layers receive almost no learning signal.
- **Example prompt:** `Long corridor photograph, dimly lit. A line of people stretching from a bright open doorway into deep shadow. The first person near the light is speaking clearly and loudly. Each subsequent person is quieter, leaning closer to hear. The last person, barely visible in the shadow at the far end, has their hand cupped to their ear straining to hear anything. No text, no labels.`
- **Cliché to avoid:** Arrows getting smaller in a neural network diagram. Fading text.

---

**6. Exploding Gradients**

- **Metaphor:** A single rumour passed down a chain of people, each of whom exaggerates it slightly. By the last person, the original small piece of news has become a catastrophic story completely unrelated to what began.
- **Why it works structurally:** Exploding gradients = the opposite problem; gradient values multiply to become enormous, destabilising training.
- **Example prompt:** `Editorial photograph of a long outdoor queue of people. The first person at the front is whispering something small and quiet. Moving along the queue, each person is increasingly animated, gesturing wildly. The last person at the back is shouting with arms raised, face alarmed. Candid documentary photography style. No text, no labels.`
- **Cliché to avoid:** Large arrows or exploding symbols in a network diagram. Literal explosions.

---

**7. Regularisation (L1/L2)**

- **Metaphor:** A sculptor who, every time they add detail to a figure, must also remove an equal weight of clay elsewhere — keeping the total mass constant. The result is a figure where only the most essential features survive; excessive detail is automatically eliminated.
- **Why it works structurally:** Regularisation = a penalty on complexity that forces the model to keep only features that are worth their cost.
- **Example prompt:** `Close-up photograph in a sculptor's studio. An artist is adding fine detail to one part of a clay figure while simultaneously smoothing and removing detail from another section with their other hand. The figure has areas of crisp definition and areas of deliberate simplicity. Clay tools and offcuts on a wooden bench. Natural north-facing studio light. No text, no labels.`
- **Cliché to avoid:** Weights being set to zero shown as a matrix. A shrinking network diagram.

---

**8. Dropout**

- **Metaphor:** A sports team that practises every session with a random selection of players absent. No player can rely on any other specific teammate always being there — each must be capable of covering multiple roles. The full team on match day is stronger for it.
- **Why it works structurally:** Dropout = randomly deactivating neurons during training so no neuron relies on specific others; forces redundant, robust representations.
- **Example prompt:** `Wide-angle photograph of a sports training session on a grass pitch at golden hour. A team of players is drilling, but several positions are visibly empty — no players there, just cones marking where someone should be. The present players are working harder, covering more ground, filling gaps. Cinematic documentary style. No text, no labels.`
- **Cliché to avoid:** Nodes in a neural network being crossed out. A literal "on/off" switch.

---

### 📉 Bias, Variance & Generalisation

---

**9. Bias-Variance Tradeoff**

- **Metaphor:** An archery target where one archer's arrows are tightly clustered but far from the bullseye (high bias, low variance), and another archer's arrows are scattered all over the target but centred roughly around the bullseye (low bias, high variance). A third archer's arrows are both clustered and centred — but achieving this is the hard part.
- **Why it works structurally:** Bias = systematic error (consistently off). Variance = random error (inconsistently off). The tradeoff = you cannot easily reduce both simultaneously.
- **Example prompt:** `Overhead photograph of three archery targets side by side. Left target: arrows tightly grouped in the top-left quadrant, far from the bullseye. Centre target: arrows scattered widely across all zones, roughly centred on the bullseye. Right target: arrows tightly grouped around the bullseye. Worn canvas targets, natural daylight. No text, no labels.`
- **Cliché to avoid:** A labeled U-shaped error curve. A literal "sweet spot" diagram.

---

**10. Class Imbalance**

- **Metaphor:** A courtroom where 999 cases are heard every year for minor traffic offences, and only 1 case involves a serious crime. A judge who simply rules "minor offence" on every case is correct 99.9% of the time — but has catastrophically failed at the one case that matters.
- **Why it works structurally:** Class imbalance = a classifier that defaults to the majority class achieves high accuracy while completely failing on the minority class.
- **Example prompt:** `Wide-angle interior photograph of a courtroom. Rows of benches are packed densely with people waiting for minor cases. At the back, alone in the last row, sits a single figure clearly in distress, surrounded by empty benches. The judge's attention is focused entirely on the crowd at the front. Documentary photography, natural courthouse light. No text, no labels.`
- **Cliché to avoid:** A pie chart with a tiny slice. Bar charts showing unequal class counts.

---

**11. Simpson's Paradox**

- **Metaphor:** A hospital hill town where every individual street is steeper going toward the centre, yet the overall route from the outskirts to the centre is downhill. A traveller who only looks at the overall journey concludes it is easy; a traveller who walks each street concludes it is exhausting — both are correct.
- **Why it works structurally:** Simpson's paradox = a trend appears in several groups of data but disappears or reverses when the groups are combined.
- **Example prompt:** `Aerial photograph of a hillside town. Three distinct terraced streets are each visibly sloping upward toward the town centre. But the overall landscape from the town's outskirts to its centre is clearly downhill — the terraces are built into a hillside that descends toward the sea. Warm Mediterranean light. No text, no labels, no arrows.`
- **Cliché to avoid:** A scatter plot with group lines shown. Any chart or graph with labeled sub-groups.

---

**12. The Curse of Dimensionality**

- **Metaphor:** A large warehouse where items are stored in a single long aisle is easy to search — everything is close to everything else. But a warehouse structured as a 20-dimensional grid means that even if you halve the distance in every dimension, you are still impossibly far from most items. The space between things grows catastrophically with each added dimension.
- **Why it works structurally:** Curse of dimensionality = in high-dimensional spaces, data becomes sparse and distances lose meaning; the volume grows so fast that any fixed amount of data is always sparse.
- **Example prompt:** `Interior photograph of an enormous, seemingly infinite warehouse viewed from a low angle. Towering rows of shelving extend in every direction — left, right, up, forward — into darkness. A single worker with a torch is visible, dwarfed, looking in all directions, clearly overwhelmed by the space. The shelves are largely empty despite their immensity. Industrial photography, cool fluorescent light. No text, no labels.`
- **Cliché to avoid:** A literal high-dimensional cube or hypercube diagram. Axes being added one by one.

---

**13. Dimensionality Reduction**

- **Metaphor:** A shadow. A complex three-dimensional sculpture, when lit from the right angle, casts a two-dimensional shadow that preserves the sculpture's most essential shape and structure. Information is lost, but the meaningful structure survives.
- **Why it works structurally:** Dimensionality reduction = projecting high-dimensional data into fewer dimensions while preserving structure (variance, distance relationships).
- **Example prompt:** `Dramatic studio photograph. A complex, angular, abstract metal sculpture is lit by a single strong directional light. On the wall behind it, the shadow it casts is simpler but clearly recognisable as the sculpture's essential form — capturing its overall silhouette and major features while losing the fine detail. High contrast black and white. No text, no labels.`
- **Cliché to avoid:** PCA arrows on a scatter plot. A labeled axis reduction diagram.

---

**14. Feature Importance**

- **Metaphor:** A master diagnostician examining a patient who is able to immediately identify the three or four physical signs that matter — skin colour, eye clarity, gait — while completely ignoring dozens of irrelevant details in the room. The expert's attention is a map of what predicts the outcome.
- **Why it works structurally:** Feature importance = identifying which input variables most strongly influence the model's output.
- **Example prompt:** `Documentary photograph of a physician examining a patient in a clinic. The doctor's gaze and hands are focused intensely on two or three specific areas — the patient's hands, face, eyes. Other elements of the room — furniture, equipment, windows — are completely out of focus and ignored. Clinical natural light. No text, no labels.`
- **Cliché to avoid:** A bar chart of feature weights. Highlighted columns in a data table.

---

### 🔍 Training & Learning

---

**15. Loss Landscape**

- **Metaphor:** An aerial photograph of a rugged mountain range with peaks, valleys, ridges, and basins. The terrain itself is the loss landscape — finding the lowest point in this terrain is the optimisation problem.
- **Why it works structurally:** Loss landscape = the surface defined by the loss function over all possible parameter settings; optimisation is navigation of this terrain.
- **Example prompt:** `Aerial photography of a dramatic mountain range at dawn. The terrain is complex — multiple deep valleys, sharp ridges, broad basins, and jagged peaks. Low mist fills some valleys. The light reveals the full texture of the landscape's variation. No human figures. Shot from directly above at an oblique angle. No text, no labels.`
- **Cliché to avoid:** A 3D mesh surface rendered as a diagram. A labeled contour plot.

---

**16. Learning Rate**

- **Metaphor:** Two people descending a rocky slope in fog. One takes tiny, careful steps — barely making progress, but never falling. The other takes enormous leaps — covering ground fast, but frequently overshooting ledges and having to backtrack or tumbling dangerously.
- **Why it works structurally:** Learning rate = the step size in gradient descent. Too small = slow convergence. Too large = overshooting minima, divergence.
- **Example prompt:** `Split scene on a rocky fog-covered hillside. On the left, a hiker descends with cautious tiny steps, testing each foothold, barely moving. On the right, a second hiker is mid-air in a reckless giant leap, body pitched forward, clearly about to land badly on uncertain ground below. Documentary style. No text, no labels.`
- **Cliché to avoid:** A learning curve graph. Step size shown on a diagram.

---

**17. Batch Gradient Descent vs Stochastic**

- **Metaphor:** Two survey teams mapping a river. One team waits until they have measured every single point on the entire river before moving their map pin once — slow but accurate. The other team moves their pin after every single measurement — fast and reactive but wildly erratic.
- **Why it works structurally:** Batch GD = use all data to compute one gradient step (stable but slow). SGD = use one sample per step (noisy but fast).
- **Example prompt:** `Aerial photograph of a wide river with two survey teams visible. Left bank: a large team of surveyors with many instruments, all conferring over a single large map before making one deliberate mark. Right bank: a single surveyor frantically moving a marker repeatedly in small jerky adjustments, papers flying. Natural wide daylight. No text, no labels.`
- **Cliché to avoid:** A comparison of smooth vs jagged convergence curves.

---

**18. Epoch**

- **Metaphor:** A language student who reads the same novel again and again — each complete reading is one pass through all the material. After each reading, their understanding deepens slightly, but the same material is covered every time.
- **Why it works structurally:** An epoch = one complete pass through the entire training dataset.
- **Example prompt:** `Photograph of a wooden desk with a single worn novel. The book's spine is cracked from repeated reading. Beside it, a row of identical bookmark ribbons, each placed slightly further into the book — showing multiple complete readings in progress. Warm reading lamp light. No text, no labels.`
- **Cliché to avoid:** A labeled training loop diagram. Cyclic arrows around a dataset icon.

---

**19. Cross-Validation**

- **Metaphor:** A chef who tests a new recipe by dividing their ingredients into five portions. They train on four portions and taste-test on the fifth — then rotate which portion is the test portion, five times total, until every portion has been the test once.
- **Why it works structurally:** Cross-validation = partition data into k folds; train on k-1, evaluate on 1; rotate until every fold has been the test fold.
- **Example prompt:** `Overhead photograph of a kitchen counter with five equal portions of raw ingredients arranged in a row. A chef is working with four of the portions actively, while one portion on the right sits untouched under a clean cloth. The arrangement suggests a deliberate rotation system — other cloth markers are visible showing previous test portions. Warm kitchen light. No text, no labels.`
- **Cliché to avoid:** A diagram with fold labels and train/test rectangles.

---

**20. Early Stopping**

- **Metaphor:** A bread baker who monitors the loaf through the oven window and removes it the moment it reaches peak colour — rather than baking for a fixed time. Baking longer would not improve the bread; it would burn it.
- **Why it works structurally:** Early stopping = halt training when validation performance stops improving, before the model overfits.
- **Example prompt:** `Close-up photograph through an oven window. A golden-brown loaf of bread at perfect peak colour. A baker's hand is already gripping the oven door handle, about to open it. The loaf looks exactly done — not a moment too soon or too late. Warm amber oven glow. No text, no labels.`
- **Cliché to avoid:** A training curve graph with a vertical line marking the stopping point.

---

### 🗂️ Data Concepts

---

**21. Data Augmentation**

- **Metaphor:** A language school that has only ten original short stories, but teaches from them in every possible way — read forwards, backwards, translated, told aloud, acted out, read in different accents — creating effectively hundreds of learning experiences from ten originals.
- **Why it works structurally:** Data augmentation = artificially expanding training data by applying transformations (flips, rotations, crops, noise) to existing examples.
- **Example prompt:** `Photograph of a classroom wall covered in many versions of what is clearly the same short story — printed large, printed small, illustrated, handwritten, shown as a storyboard, shown in multiple languages, shown as a dramatic timeline. At the centre, a single typed original document. The variety is rich but the source is clearly one. Natural classroom light. No text content legible. No labels.`
- **Cliché to avoid:** An image being flipped and rotated shown as a diagram. A dataset icon with arrows.

---

**22. Cold Start Problem**

- **Metaphor:** A new restaurant on its first day of business. There are no reviews, no regulars, no history of what customers like. The chef cannot know what to cook in what quantities, cannot predict demand, cannot personalise anything — despite being a skilled cook.
- **Why it works structurally:** Cold start = a recommendation or learning system has no historical data on a new user or item, so it cannot make good predictions.
- **Example prompt:** `Exterior photograph of a restaurant on its opening day. The interior is beautifully set up, the chef is visible through the window, fully prepared — but the street outside is empty. No queue, no reviews on the door, no wear on the entrance mat. The chef looks out, waiting. Morning light. No text, no labels.`
- **Cliché to avoid:** An empty database icon. A new user silhouette.

---

**23. Data Leakage**

- **Metaphor:** An exam where the students were accidentally given the answer sheet two days before the test. Their scores are perfect — but they have learned nothing, and the exam results are meaningless for predicting future performance.
- **Why it works structurally:** Data leakage = information from the test set accidentally influences model training, causing inflated performance that does not generalise.
- **Example prompt:** `Photograph of an examination hall. Students are sitting an exam, but one student in the foreground has a folded answer sheet half-visible under their paper, glancing at it. Their paper is filled with confident, correct-looking answers. The invigilator in the background is oblivious. Documentary style, harsh exam-hall fluorescent light. No text, no labels.`
- **Cliché to avoid:** Arrows crossing a train/test boundary diagram. Data flowing in the wrong direction.

---

**24. Missing Data (Imputation)**

- **Metaphor:** An archaeologist reconstructing a broken ancient mosaic. Many tiles are missing — but based on the pattern of the surviving tiles, the archaeologist carefully fills in plausible replacements, reconstructing what was likely there. The restored mosaic is complete but not entirely original.
- **Why it works structurally:** Imputation = filling in missing values based on patterns in the observed data. The result is a complete but partially estimated dataset.
- **Example prompt:** `Close-up photograph of an archaeologist's table. An ancient mosaic partially reconstructed — many original coloured stone tiles are in place, but gaps are filled with new tiles of slightly different texture, carefully chosen to match the surrounding pattern. The restorer's tweezers and reference photographs are visible at the edge. Warm conservation studio light. No text, no labels.`
- **Cliché to avoid:** A data table with NaN values highlighted. Blank cells being filled in.

---

**25. Outliers**

- **Metaphor:** A formal group photograph of an orchestra in full concert dress. Every musician is seated, uniformed, facing forward — except one figure at the far edge who is standing, dressed in casual clothing, facing sideways.
- **Why it works structurally:** An outlier = a data point that lies far from the distribution of the rest of the data; it may be an error, or it may be genuinely unusual.
- **Example prompt:** `Formal group photograph of a large orchestra in a concert hall. All musicians are seated in rows in black concert dress, instruments held identically, facing the camera. At the far right edge, one figure stands, wearing casual clothes, turned sideways. The contrast is stark and immediate. Grand concert hall. No text, no labels.`
- **Cliché to avoid:** A scatter plot with a single point far from the cluster. A labeled anomaly detection diagram.

---

### 🔗 Attention & Architecture

---

**26. Attention Mechanism**

- **Metaphor:** A translator working with a long, dense foreign text. Rather than reading every word with equal focus, they scan the whole document but hold certain key phrases in high, active attention — returning to them repeatedly as they build each part of the translation. Some words glow with importance; most recede.
- **Why it works structurally:** Attention = a mechanism that assigns different weights to different parts of the input when producing each output; not all input tokens are equally relevant to every output.
- **Example prompt:** `Documentary photograph of a professional translator at a wide wooden desk. A long dense foreign-language manuscript is spread before them. Most of it is in shadow or peripheral. But several specific passages are illuminated by a directed lamp, marked with translucent sticky tabs, and surrounded by handwritten notes. The translator's eyes are locked on one such passage. No text legible. No labels.`
- **Cliché to avoid:** A heatmap over text tokens. Attention weight diagrams with arrows between positions.

---

**27. Transformer Architecture**

- **Metaphor:** A large editorial team producing a newspaper. Every journalist simultaneously reads all other journalists' draft articles (self-attention), then revises their own section based on what they learned from reading the whole room. This happens in parallel — no one waits for anyone else.
- **Why it works structurally:** Transformer = parallel self-attention across all positions; each position attends to all others simultaneously, unlike RNNs which process sequentially.
- **Example prompt:** `Wide-angle photograph of a busy open-plan newsroom. Every journalist is simultaneously reading other desks' papers and editing their own — papers and notes being passed in all directions at once. The room is in parallel motion; no sequential queue. Candid documentary, natural light through large windows. No text legible. No labels.`
- **Cliché to avoid:** A block diagram of the transformer architecture. Encoder-decoder boxes.

---

**28. Recurrent Neural Network (Sequential Memory)**

- **Metaphor:** A relay race where each runner passes not just the baton but also a folded note to the next runner — summarising everything significant from all the previous legs. The final runner has a note that is a compressed history of the entire race.
- **Why it works structurally:** RNN = each step processes the current input AND a hidden state carrying information from all previous steps.
- **Example prompt:** `Action photograph of a relay race on a running track. Mid-handoff between runners — the outgoing runner is passing both the baton and a small folded note to the incoming runner. The incoming runner's hand is open for both. Other runners in the background have notes visible in their hands. Natural track lighting. No text, no labels.`
- **Cliché to avoid:** An unrolled RNN diagram with boxes and arrows. Circular recurrence arrows.

---

### ⚖️ Statistical & Probabilistic Concepts

---

**29. Bayesian Updating**

- **Metaphor:** A ship's navigator in the pre-GPS era who begins each day with their best estimate of the ship's position, then updates that estimate every time a new observation (star sighting, depth sounding, landmark) comes in — each update revising the prior belief in light of new evidence.
- **Why it works structurally:** Bayesian updating = start with a prior belief, observe evidence, compute a posterior that incorporates both prior and likelihood.
- **Example prompt:** `Documentary photograph of a ship's navigation room at night. A navigator stands over a large paper chart covered in pencil marks — multiple position estimates crossing and revising each other, with the most recent one circled. A sextant and compass are on the table. Through the porthole, a clear star field. The navigator is mid-calculation, making a new mark. No text, no labels.`
- **Cliché to avoid:** A Bayes' theorem formula diagram. A prior/posterior distribution plot.

---

**30. Confidence Intervals**

- **Metaphor:** An archer who does not claim to know exactly where the next arrow will land — but can confidently draw a circle on the target and say that 95 out of 100 arrows will land within it. The circle is the interval; the claim is probabilistic, not precise.
- **Why it works structurally:** A confidence interval = a range within which the true parameter falls with a stated probability. It communicates uncertainty, not a point estimate.
- **Example prompt:** `Photograph of an archery target with many arrows embedded in it. All arrows are clustered within a clearly visible circular zone in the mid-target area — not centred, but definitely bounded. The area outside the cluster zone has no arrows at all. The archer stands to one side, relaxed, as if the outcome was predictable. Natural outdoor light. No text, no labels.`
- **Cliché to avoid:** A number line with brackets and a mean marked. A normal distribution with shaded tails.

---

**31. Correlation vs Causation**

- **Metaphor:** A photograph of an ice cream stand with a long queue, taken on a day when ambulances are also visible parked nearby responding to heat-related illnesses. Ice cream sales and ambulance calls are both high — both caused by the heat, not by each other.
- **Why it works structurally:** Correlation ≠ causation — two variables can co-vary because of a shared third cause, not because one causes the other.
- **Example prompt:** `Wide street photograph on a hot summer day. A busy ice cream van with a long queue of customers in the foreground. In the background, an ambulance parked outside a building with paramedics attending to someone. Both scenes are clearly caused by the same blazing heat visible in the image. Candid documentary style. No text, no labels.`
- **Cliché to avoid:** A scatter plot with a correlation line. Two bar charts shown side by side.

---

**32. P-Hacking / Multiple Testing**

- **Metaphor:** A person flipping a coin who discards every result that is not five heads in a row — and then triumphantly announces they have found a coin that always lands heads. They tried thousands of times; they only show you the one success.
- **Why it works structurally:** P-hacking = running many tests and reporting only the significant result; false positive rates become very high when multiple comparisons are made without correction.
- **Example prompt:** `Photograph of a large table completely covered in crumpled, discarded pieces of paper — hundreds of them. In the centre, a single uncrumpled sheet is held up proudly. The hand holding it belongs to someone grinning. The mountain of discarded results around them tells the full story. Studio lighting from above. No text, no labels.`
- **Cliché to avoid:** A p-value number diagram. A funnel plot.

---

### 🌐 Systems & Architecture Concepts

---

**33. Ensemble Methods**

- **Metaphor:** A panel of judges at a competition who each independently score each entry, then the final result is determined by the average of all judges' scores. No single judge determines the outcome; the wisdom of the group is more reliable than any individual.
- **Why it works structurally:** Ensemble = combine multiple models' predictions; the aggregate is more robust than any single model because individual errors cancel out.
- **Example prompt:** `Photograph of a panel of judges at a formal competition — perhaps an ice skating or diving event. Each judge holds up a score card simultaneously, independently. Their scores vary slightly. An official in the centre is averaging the scores. No single judge dominates. Formal event photography, warm arena lighting. No text visible on cards, no labels.`
- **Cliché to avoid:** Multiple decision tree diagrams shown together. A forest of labeled trees.

---

**34. Transfer Learning**

- **Metaphor:** A concert violinist who begins learning the cello. They do not start from zero — they bring all their understanding of music theory, bow technique, reading scores, ear training, and performance practice. Only the specific physical skills of the new instrument need learning.
- **Why it works structurally:** Transfer learning = take a model pre-trained on one task and fine-tune it on a new, related task; general representations transfer; only task-specific layers need updating.
- **Example prompt:** `Documentary photograph of a professional violinist sitting with a cello between their knees for the first time. Their posture, bow hold, and reading of the sheet music are expert. Their left hand position on the fingerboard is slightly uncertain — clearly new to this specific instrument. The violin case is visible nearby. Warm rehearsal room light. No text, no labels.`
- **Cliché to avoid:** An arrow from one network diagram to another. Frozen layers shown as a block diagram.

---

**35. Hyperparameter Tuning**

- **Metaphor:** An audio engineer adjusting the many knobs and sliders on a mixing desk. The music is fixed — what changes is how the desk's settings combine to shape the final sound. The engineer makes small adjustments, listens, adjusts again — searching through a vast space of possible combinations for the one that sounds best.
- **Why it works structurally:** Hyperparameters = settings that control the learning process itself (not learned from data). Tuning = searching through their combinations to find the set that maximises performance.
- **Example prompt:** `Close-up photograph of a professional audio mixing desk in a recording studio. Dozens of knobs, sliders, and buttons, all at slightly different positions — clearly the result of careful incremental adjustment. An audio engineer's hands are mid-adjustment on two sliders simultaneously. Concentration is visible. The mixing desk fills the entire frame. Studio lighting. No text, no labels.`
- **Cliché to avoid:** A grid search table. A labeled hyperparameter space diagram.

---

## 3. Step 2 — Extract the Structural Logic of Your Concept

Before you write a single prompt, you must answer this question in writing:

> **"What is the essential mechanism of this concept — and what physical scene shares that exact mechanism?"**

### The two-step test

**Step 1 — Write the mechanism in one sentence, without using the concept's name.**

For example, for overfitting:
> *"A system that has been shaped so precisely to one set of examples that it fails completely on any other examples, even very similar ones."*

**Step 2 — Find a physical scene where that same sentence is true.**

The scene must satisfy the mechanism description above. If it does, it works. If it only *reminds* you of the concept's name, it does not work.

### Structural vs surface mappings — the key distinction

| ❌ Surface mapping (weak) | ✅ Structural mapping (strong) |
|---|---|
| Gradient descent → a ball rolling (because rolling = movement) | Gradient descent → a blindfolded hiker following local slope (because: local-only information, no global view, step direction = gradient) |
| Overfitting → a person with too many clothes on | Overfitting → a bespoke suit so precisely fitted it fits no one else (because: the excess precision itself causes the failure to generalise) |
| Regularisation → a fence (because it "constrains") | Regularisation → a sculptor who must remove weight when they add detail (because: the mechanism is a cost penalty applied directly to complexity) |
| Attention → a spotlight | Attention → a translator returning to specific phrases in a manuscript (because: differential weighting based on relevance to current output position) |

The difference is always: does the *mechanism* of the scene match the *mechanism* of the concept?

---

## 4. Step 3 — Find and Refine Your Physical Scene

Once you have a structural metaphor, stress-test it before prompting.

### The three stress-test questions

**1. Could a domain expert identify the concept from the scene alone?**
Show your metaphor description (not the concept name) to a friend who knows data science. Can they name the concept?

**2. Is the scene physically plausible?**
Could a photographer have taken this picture? Could it exist in the real world? If you needed to add any floating text, annotations, or non-physical elements to make it work, the scene itself is not working.

**3. Is it specific enough?**
Generic scenes fail. "A complicated machine" does not map to any specific concept. "A mixing desk with dozens of differently positioned knobs, mid-adjustment by an audio engineer" maps specifically to hyperparameter tuning.

### What makes scenes fail

| Failure mode | Example | Fix |
|---|---|---|
| Too abstract | "A complex web of connections" | Name the specific physical objects, setting, and action |
| Too many concepts | "A blindfolded person adjusting knobs on a foggy mountain" | Pick one concept. Each extra element dilutes the metaphor. |
| Surface association only | Neurons firing for any ML concept | Find the mechanism, not the name association |
| Non-physical elements | A glowing diagram floating in space | Remove anything that would not exist in a real physical scene |
| Too obvious (stock AI cliché) | Gears for "mechanism", binary code for "computing" | Find a real-world human activity that shares the structure |

---

## 5. Step 4 — Write a Strong DALL·E 3 Prompt

### The Prompt Formula

```
[Photography/art style and medium] of [physical scene described in concrete detail],
showing [the specific action or state that encodes the concept],
[perspective and framing],
mood: [emotional tone],
lighting: [specific lighting description],
no diagrams, no text, no labels, no mathematical notation,
no floating elements, no annotations, no non-physical objects.
```

### What makes a good prompt for this assignment

- **Name every physical object concretely.** Not "tools" — "a sextant and brass dividers". Not "equipment" — "a mixing desk with 40 channel strips".
- **Describe the action, not just the scene.** The action is where the concept lives. "A navigator making a new pencil mark over previous estimates" is better than "a navigator at a chart table."
- **Specify that it must look like a real photograph.** Add: `"documentary photography style"`, `"could be a frame from a nature documentary"`, `"photorealistic, natural lighting"` — this prevents the model from adding diagrams or labels.
- **End with a strong negative constraint block.** DALL·E 3 will add text or diagrams if you do not explicitly forbid it.

### Full negative constraint block (copy this into every prompt)

```
No diagrams, no graphs, no text, no labels, no mathematical notation,
no equations, no floating annotations, no non-physical elements,
no neural network visualisations, no data flow arrows,
no UI elements, no screen displays, no infographic elements.
Everything in the scene must be a physical object that could exist in the real world.
```

### Annotated example prompt (Gradient Descent)

```
Cinematic documentary photograph of a lone hiker descending a dramatic 
fog-covered mountain range at dusk. The hiker is blindfolded, hands slightly 
extended for balance, carefully placing each foot on the local slope they can 
feel beneath them. The mountain landscape is complex — multiple valleys and 
ridges are visible through breaks in the fog, including a deeper, wider valley 
in the far distance that the hiker appears unaware of. The hiker is moving 
toward a nearer, shallower valley. Overcast golden hour light. 
Cinematic wide-angle photography.
No diagrams, no graphs, no text, no labels, no mathematical notation,
no equations, no floating annotations, no non-physical elements.
Everything in the scene must be a physical object that could exist in the real world.
```

### Annotated example prompt (Overfitting)

```
Close-up editorial photograph in a high-end tailor's atelier. A bespoke suit 
jacket hangs on a tailor's dummy, covered in an extraordinary number of 
hand-stitched custom seams, elaborate darts, and precise tucks tracking every 
individual contour of one specific body. The craftsmanship is obsessive. 
On a second dummy beside it, the same jacket clearly cannot fit — the shape 
is too specific, the custom work pulling and puckering against a body 
only slightly different. Warm atelier window light. Editorial fashion photography.
No diagrams, no graphs, no text, no labels, no mathematical notation,
no equations, no floating annotations, no non-physical elements.
```

---

## 6. Step 5 — Generate the Image

You have two recommended options: DALL·E 3 via OpenAI (paid, best quality) and Banana (free, powered by Gemini Imagen).

---

### Method A: DALL·E 3 via OpenAI (Recommended — Paid)

DALL·E 3 is ideal for this assignment because it follows prompts literally and precisely — which is exactly what you need when every detail of the scene is load-bearing for the concept to come through.

**Steps using ChatGPT Plus:**

1. Go to **https://chat.openai.com**
2. Log in (must be Plus or higher)
3. Start a new chat and type:
   ```
   Generate an image: [paste your full prompt here]
   ```
4. Download the result (download icon or right-click → Save image as `.png`)

**Steps using the OpenAI API:**

```python
from openai import OpenAI
import urllib.request

client = OpenAI(api_key="YOUR_API_KEY_HERE")  # ← replace with your key

prompt = """
YOUR FULL PROMPT HERE
"""  # ← paste your full prompt

response = client.images.generate(
    model="dall-e-3",
    prompt=prompt,
    size="1024x1024",
    quality="hd",
    n=1
)

image_url = response.data[0].url
print(f"Image URL: {image_url}")
urllib.request.urlretrieve(image_url, "my_image.png")
print("Saved as my_image.png")
```

**If DALL·E 3 refuses your prompt:** Rephrase to describe the visual scene only, not the emotional or thematic content. Replace "suffering" with specific physical descriptions. Replace abstract emotional words with concrete visual actions.

---

### Method B: Banana (Free — Powered by Gemini Imagen)

1. Go to **https://banana.com**
2. Sign up with Google or email (free)
3. Click **Create** → paste your full prompt
4. Select the highest resolution available
5. Click **Generate** → download as `.png`

**Tips for Banana on this assignment:**

- Banana's Gemini Imagen handles unusual, abstract scene descriptions very well — better than most free tools
- If the concept metaphor is subtle, add: `"photorealistic, documentary photography, no artificial elements"` to your prompt
- Generate at least 3–4 variations; the structural metaphor may land better in some than others
- If the output includes any diagram-like elements, strengthen the negative constraint block in your prompt

**Check image size after downloading:**
- Windows: Right-click → Properties → Details → Image dimensions
- Mac: Right-click → Get Info → More Info → Dimensions
- Need at least **1024px on the short side**. If smaller, use https://www.upscayl.org to upscale for free.

---

### Iteration strategy

After your first image, the key question is: **would a domain expert identify the right concept?**

| What you see | What to change |
|---|---|
| Scene is too generic (could be anything) | Make the scene more specific — name exact objects, exact actions, exact physical detail |
| A diagram or label appeared | Strengthen the negative constraint block; add `"no diagrams of any kind"` |
| Scene is physically implausible (floating elements, impossible lighting) | Add `"documentary photography"`, `"photorealistic"`, `"could be a real photograph"` |
| Scene looks like stock AI art (glowing nodes, data flows) | Name a real human profession or activity; anchor the scene in a specific place and time |
| Concept is too abstract in the image | Make the *action* more specific — the mechanism must be visible in what someone or something is *doing* |
| Scene could map to multiple concepts | Remove all elements except the one that encodes your concept's specific mechanism |

Generate at least **4–8 variations** before settling. Budget most of your 2–4 hours here.

---

## 7. Step 6 — Self-Evaluate with Gemini 3 Pro

Before submitting, run the same evaluation the auto-grader will run.

### Step-by-step instructions

**1.** Go to **https://aistudio.google.com** — sign in with a Google account (free).

**2.** Select **Gemini 3 Pro** from the model dropdown (top left).

**3.** Click **System Instructions** and paste this entire block — **replace `{CONCEPT}` with your actual concept name** (e.g. `overfitting`, `gradient descent`, `attention mechanism`):

```
You are an expert evaluator of AI-generated conceptual images for an academic data science course. You will receive one student-submitted image and the name of the data science or machine learning concept the student chose to represent. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to render an abstract data science or machine learning concept as a concrete, physical, real-world scene — with no diagrams, labels, notation, or text — such that a domain expert can recognize the concept from the image alone.

CONSTRAINTS:
1. No diagrams, graphs, mathematical notation, equations, or text within the image.
2. No floating labels, annotation overlays, or non-physical elements.
3. The scene must be physically plausible — it should look like something that exists or could exist in the real world.
4. The concept must be identifiable by a domain expert from the image alone.

IMPORTANT: Before reading the concept the student stated, first record your own independent identification of what concept you think is being depicted. Then evaluate how well the image communicates the stated concept.

The concept the student stated: {CONCEPT}

SCORING RULES: Use the full 0.0–10.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely — they will rank a cohort of 1,000 students. Avoid clustering in the 5–8 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "concept_identified_by_evaluator": "<string: what concept do YOU think is being depicted, based on the image alone — record this before considering the student's stated concept>",
  "concept_match": <boolean: does your independent identification match the student's stated concept?>,
  "scores": {
    "concept_recognition": {
      "score": <float 0.0–10.0>,
      "reason": "<would a domain expert recognize the stated concept from this image alone? what makes it recognisable or not?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0–10.0>,
      "reason": "<state which constraints are met and which are violated>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "physical_plausibility": {
      "score": <float 0.0–10.0>,
      "reason": "<does the scene feel like it exists or could exist in the real world? flag any non-physical or annotative elements>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "structural_fidelity": {
      "score": <float 0.0–10.0>,
      "reason": "<does the physical scene map to the deep structure of the concept, or only to its surface associations or name?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "visual_execution": {
      "score": <float 0.0–10.0>,
      "reason": "<composition, coherence, and craft — does the image look deliberately made?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "model_default_escaped": <boolean: does the image avoid stock AI-visualization clichés such as neurons, gears, or glowing data flows?>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
```

**4.** In the chat, click the **+** or paperclip icon to attach your image. Then paste this user message — **fill in your concept name**:

```
Please evaluate the attached image as a submission for Exercise 02: The Concept Incarnation.

The student was asked to render an abstract data science or machine learning concept as a physical, real-world scene — with no diagrams, labels, text, or non-physical elements — such that a domain expert can recognize the concept from the image alone.

The concept the student stated: [YOUR CONCEPT HERE]

First record your own independent assessment of what concept is being depicted. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
```

**5.** Send. Gemini returns a JSON evaluation.

---

### Which fields to change for your submission

When filling in the system prompt and user message, you only need to change **two things**:

| What to change | Where | Example |
|---|---|---|
| Replace `{CONCEPT}` in the system prompt | In the line: `"The concept the student stated: {CONCEPT}"` | `"The concept the student stated: overfitting"` |
| Replace `[YOUR CONCEPT HERE]` in the user message | Last line of the user message | `"The concept the student stated: gradient descent"` |

Everything else stays exactly as written above — do not change the scoring rules, constraints, or JSON structure.

---

### How to read your scores

```json
{
  "concept_identified_by_evaluator": "overfitting",
  "concept_match": true,
  "scores": {
    "concept_recognition":    { "score": 8.0, "reason": "...", "improvement": "..." },
    "constraint_adherence":   { "score": 9.5, "reason": "...", "improvement": "..." },
    "physical_plausibility":  { "score": 8.5, "reason": "...", "improvement": "..." },
    "structural_fidelity":    { "score": 6.5, "reason": "...", "improvement": "..." },
    "visual_execution":       { "score": 7.5, "reason": "...", "improvement": "..." }
  },
  "overall_score": 8.0,
  "model_default_escaped": true,
  "exhibition_worthy": false,
  "one_line_verdict": "..."
}
```

### What each field means and what to do about it

| Field | What it measures | If score < 6 | Fix |
|---|---|---|---|
| `concept_identified_by_evaluator` | What concept does Gemini think this is, independently? | If it names a different concept — your structural metaphor is not working | Go back to Step 2. The mechanism in your scene is mapping to a different concept than intended. |
| `concept_match` | Does Gemini's guess match yours? | `false` = the scene is communicating the wrong concept | Redesign the metaphor. This is the most important signal. |
| `concept_recognition` | Would a domain expert name the concept from this image? | Scene is too generic or maps to multiple concepts | Make the scene more specific and mechanistically precise |
| `constraint_adherence` | Are all four constraints met? | Text, labels, or non-physical elements present | Add stronger negatives to your prompt and regenerate |
| `physical_plausibility` | Does the scene look like it exists in the real world? | Floating elements, impossible physics, or diagram-like compositions | Anchor in a specific real place with real objects; add `"documentary photography"` |
| `structural_fidelity` | Does the *mechanism* of the scene match the concept's mechanism? | Scene only matches surface associations | Return to Step 2. Rewrite the one-sentence mechanism and find a better scene. |
| `visual_execution` | Is the image well-composed and deliberately made? | Looks like a default AI output | Specify composition, lighting, and perspective explicitly in your prompt |

### The `improvement` field — read every single one

Every score block contains one concrete suggestion. Apply all five before regenerating:

```json
"structural_fidelity": {
  "score": 5.5,
  "reason": "The scene of a person climbing shows effort and direction but not the key property of local-only gradient information.",
  "improvement": "Add blindfold or fog to explicitly show the hiker cannot see the global landscape — only the local slope underfoot."
}
```

Iterate until `overall_score` > 7.0, `concept_match` is `true`, and `model_default_escaped` is `true`.

---

## 8. Step 7 — Upload to GitHub and Get a Public URL

### Complete setup (if you have never used GitHub)

**1. Create a free account** at https://github.com → Sign up

**2. Create a new repository**
- Click **+** → **New repository**
- Name: `concept-incarnation` (or anything)
- Set to **Public**
- Check **Add a README file**
- Click **Create repository**

**3. Upload your files**
- Click **Add file** → **Upload files**
- Drag your `image.png` and `submission.json`
- Commit message: `Add submission files`
- Click **Commit changes**

**4. Get the Raw URL**
- Click on `image.png` in your repository
- Click the **Raw** button (top right)
- Copy the URL — it looks like:

```
https://raw.githubusercontent.com/your-username/concept-incarnation/main/image.png
```

Repeat for `submission.json`.

### Test in incognito before submitting

Open a private/incognito browser window and paste both URLs. Confirm:
- Image URL: opens the image directly
- JSON URL: shows raw JSON text

If either fails, your repository is private or the filename is misspelled.

### Troubleshooting

| Problem | Fix |
|---|---|
| 404 error | Repository is private — go to Settings → Change visibility → Public |
| URL shows a GitHub webpage | You copied the page URL, not the Raw URL — click Raw again |
| Image does not load | Re-upload the file; it may be corrupted |
| JSON shows an error | Syntax error in your JSON — validate at https://jsonlint.com |

---

## 9. Step 8 — Create and Host the Submission JSON

Your JSON must contain exactly these four fields:

```json
{
  "prompt": "your complete final prompt, verbatim",
  "model": "model name and version",
  "concept": "the name of the concept — one word or phrase only",
  "metaphor": "max 30 words: what is the physical scene, and what structural feature maps to the concept?"
}
```

### Field-by-field guide

| Field | What to put | Example |
|---|---|---|
| `prompt` | Your exact final prompt, word for word, including the negative constraint block | `"Cinematic documentary photograph of a blindfolded hiker..."` |
| `model` | The model and version you used | `"DALL-E 3 via OpenAI ChatGPT Plus"` or `"Banana (Gemini Imagen)"` |
| `concept` | One word or short phrase — exactly the concept name | `"overfitting"` or `"gradient descent"` or `"attention mechanism"` |
| `metaphor` | Max 30 words: what is the scene, and what structural feature encodes the concept? | `"A bespoke suit fitted to one body, unwearable by anyone else. The excessive precision that causes failure to generalise is directly visible."` |

### Example filled JSON (Gradient Descent)

```json
{
  "prompt": "Cinematic documentary photograph of a lone hiker descending a fog-covered mountain at dusk. The hiker is blindfolded, hands extended for balance, following the local slope underfoot. Complex terrain with multiple valleys visible through fog breaks — a deeper valley visible in the far distance, a shallower one nearby where the hiker is heading. No diagrams, no text, no labels, no mathematical notation, no floating annotations.",
  "model": "DALL-E 3 via OpenAI ChatGPT Plus",
  "concept": "gradient descent",
  "metaphor": "Blindfolded hiker follows only local slope downhill, unable to see the global landscape. Each step direction is determined solely by the terrain immediately underfoot."
}
```

### JSON rules

- Validate at https://jsonlint.com before uploading
- No trailing commas
- All strings in double quotes `"` not single `'`
- `concept` must be one word or short phrase — not a sentence
- `metaphor` must be 30 words or fewer
- `prompt` is your actual verbatim prompt — do not paraphrase it

### Optional: attribute your email

```json
{
  "prompt": "...",
  "model": "...",
  "concept": "...",
  "metaphor": "...",
  "publish_email": true
}
```

---

## 10. Step 9 — Final Submission Checklist

Go through every item before you submit.

### Image checks

- [ ] Image is at least 1024px on the short side
- [ ] Image is `.png`, `.jpg`, `.webp`, or `.avif`
- [ ] No text, labels, diagrams, equations, or annotations anywhere in the image
- [ ] No non-physical elements (floating objects, glowing overlays, UI elements)
- [ ] The scene looks like it could be a real photograph or painting
- [ ] You ran the Gemini self-evaluation and `concept_match` is `true`
- [ ] `overall_score` > 6.0
- [ ] `model_default_escaped` is `true`

### URL checks

- [ ] Image URL ends in an accepted extension (`.png`, `.jpg`, `.webp`, `.avif`)
- [ ] Image URL tested in incognito — opens image directly
- [ ] JSON URL tested in incognito — shows raw JSON text
- [ ] Both URLs start with `https://`

### JSON checks

- [ ] `prompt` is your complete verbatim final prompt
- [ ] `model` names the model you actually used
- [ ] `concept` is one word or short phrase (not a sentence)
- [ ] `metaphor` is 30 words or fewer and explains the structural mapping
- [ ] JSON validated at https://jsonlint.com — no errors

### Submission format

Paste exactly this format — image URL first, JSON URL second, separated by a space:

```
https://raw.githubusercontent.com/YOUR_USERNAME/concept-incarnation/main/image.png  https://raw.githubusercontent.com/YOUR_USERNAME/concept-incarnation/main/submission.json
```

---

## 11. Common Mistakes and How to Avoid Them

| Mistake | Why it matters | Fix |
|---|---|---|
| Surface association instead of structural metaphor | `concept_match` will be `false`; `structural_fidelity` will be low | Write the mechanism in one sentence without the concept name; find a scene where that sentence is true |
| Using neurons, gears, or glowing data flows | Stock AI clichés; `model_default_escaped` will be `false` | Find a real human activity in a real physical setting — a profession, a sport, a craft |
| Text or labels appearing in the image | Direct constraint violation | Add the full negative constraint block to your prompt and regenerate |
| Scene is physically impossible | Fails `physical_plausibility` | Add `"documentary photography"`, `"photorealistic"`, `"could be a real photograph"` |
| Concept is too vague in the image | Fails `concept_recognition` | Make the specific mechanism physically visible — name every object, every action |
| `concept` field in JSON is a sentence | Schema violation | Make it one word or phrase: `"overfitting"` not `"the overfitting of a neural network"` |
| `metaphor` field exceeds 30 words | May be truncated by evaluator | Count words; trim to the structural essence only |
| Not running the Gemini self-evaluation | No feedback before submission | Always run it; the `concept_identified_by_evaluator` field is your most important signal |
| Accepting the first generated image | AI defaults are generic | Generate 4–8 variants; the concept may land better in some than others |
| Choosing a concept you do not fully understand | Cannot build a structural metaphor without understanding the mechanism | Pick a concept from your coursework that you can explain in one sentence without looking it up |

---

*The hardest part of this assignment is Step 2 — writing the mechanism in one sentence. Once that sentence is right, the physical scene often suggests itself.*
