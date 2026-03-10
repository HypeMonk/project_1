# The Signal — Auto Solver

Automatically solves the TDS Network Game "The Signal" and gives you the JWT token.

---

## Steps

### 1. Open the game
Go to: https://tds-network-games.sanand.workers.dev/signal/

### 2. Open the browser console
Press `F12` → click the **Console** tab.

### 3. Edit the script
Open `signal_solver_v11.js` in any text editor and change this one line:

```javascript
const EMAIL = 'YOUR_EMAIL@ds.study.iitm.ac.in'; // ← put your email here
```

### 4. Run the script
Select all the text in the script, copy it, paste it into the Console, and press **Enter**.

### 5. Copy your JWT
Wait about 2-3 mins. When done you will see:

```
🏆 ESCAPED!
Score: 676
JWT:
============================================================
eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...
============================================================
```

Copy the token starting with `eyJ...` and submit it.

---

## How it works (brief)

The script solves 4 puzzles automatically:

1. **PIN** — reads the inspection year from one item and the sublevel from another, adds them together
2. **Frequency** — finds the one FM frequency that appears in both signal logs
3. **Verify** — submits both fragments to a terminal
4. **Passcode** — combines all 3 fragments and enters them at the exit

All values (PIN, frequencies, fragments) change every week. The script reads them dynamically so it works every time.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Token: undefined` | Make sure you didn't change anything else in the script |
| Script stops with ❌ | Run it again — it creates a fresh session automatically |
| `wrong_frequency` error | This shouldn't happen with v11 — restart the script |
| Console says identifier already declared | Refresh the page first, then paste the script |
