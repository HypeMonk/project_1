# 🕵️ Graph Detective — Auto Solver

Automatically solves the TDS Network Game: Graph Detective for any student, any week, any graph.

---

## 🚀 How to Use (Step by Step)

### Step 1 — Open the Game

Go to:
```
https://tds-network-games.sanand.workers.dev/detective/
```

### Step 2 — Log In with Your IITM Email

- Click **Login** or **Start**
- Enter your **IITM email** (e.g. `23fXXXXXXX@ds.study.iitm.ac.in`)
- The transaction graph will appear on screen

### Step 3 — Open Browser Console

- Press **F12** on your keyboard
- Click the **Console** tab at the top of the panel that opens

### Step 4 — Edit the Script

- Open the file `automated.js`
- Find line 1:

```javascript
const EMAIL = 'YOUR_EMAIL@ds.study.iitm.ac.in';  // ← CHANGE THIS ONLY
```

- Replace with your actual IITM email

### Step 5 — Paste and Run

- Copy the **entire script** from `automated.js`
- Paste it into the browser console
- Press **Enter**

### Step 6 — Watch It Solve Automatically

The script will:

- 🚀 Start a new session automatically
- 📖 Read the clues to decide which metric to follow
- 🔍 Query nodes greedily, following the most suspicious trail
- 🚨 Detect the compromised node (massive tx_size outlier)
- 🛤️ Find the shortest proof path from anchor → compromised node
- 📤 Submit the answer
- 🏆 Print your JWT token

You will see live output like:

```
🚀 Starting...
Anchor: 3 | Clues: ['Transactions are rare but individually massive.', ...]
📊 Metric: avg_tx_size
Node 46  | tx_size: 912  | tx_count: 10 | counterparty: 5  | left: 39
Node 119 | tx_size: 9780 | tx_count: 3  | counterparty: 4  | left: 30
🚨 SUSPECT: Node 119 (score: 9780)
🛤️ Path: [3 → 119]
📊 Queries used: 25
```

### Step 7 — Copy Your JWT Token

At the end you will see:

```
🎉 SUCCESS! Score: 545
══════════════════════════════════════════
COMPLETION TOKEN:
eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...
══════════════════════════════════════════
```

Copy the **entire token** (one long string, no spaces) and paste it into the submission box on the course portal.

---

## 🧠 How the Script Works

### Clue-Based Strategy

The game gives 3 clues every week. The script reads them and picks the right metric automatically:

| Clue contains | Strategy |
|---------------|----------|
| *"massive"*, *"dwarfs"*, *"size"* | Follow highest `avg_tx_size` |
| *"rare"*, *"infrequent"* | Follow lowest `tx_count_daily` |
| *"few counterparties"*, *"isolated"* | Follow lowest `counterparty_count` |
| *"volume"*, *"extraordinary"* | Follow highest `tx_volume_daily` |

### Greedy Single-Path Search

Instead of querying all 120 nodes, the script:

1. Queries all anchor neighbors (first hop — usually ~20 nodes)
2. Finds the **highest scoring node**
3. Follows only that node deeper (saves queries!)
4. Detects outlier when `score > median × 5` AND `score > 2000`

This finds the suspect in **~25 queries** instead of all 55.

### Shortest Path (BFS)

Once the suspect is found, BFS reconstructs the shortest chain:
```
Anchor → ... → Compromised Node
```
using only already-queried nodes (no extra queries needed).

---

## ⚠️ Important Notes

- **Only change your email** — nothing else in the script needs editing
- **Don't refresh** the page while the script runs
- The script uses at most **40 queries**, saving 15 as buffer
- If the script uses a submit attempt and fails, **do not re-run immediately** — paste the output here for debugging first
- You have **3 submit attempts** — the script will only submit when confident

---

## 🔁 Works For

| Scenario | Supported |
|----------|-----------|
| Any IITM student email | ✅ |
| Any week (week_id changes) | ✅ |
| Any anchor node | ✅ |
| Any graph structure | ✅ |
| Different clues each week | ✅ |
| Path length 2, 3, or more hops | ✅ |
