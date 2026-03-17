/**
 * 🔄 DATA LABYRINTH — SESSION RESET SCRIPT (v11.3 AUTH-AWARE)
 * ════════════════════════════════════════════
 * This script handles the "401 Unauthorized" by getting
 * a valid token first, then clearing, then restarting.
 * ════════════════════════════════════════════
 */

const EMAIL = 'yourroll@ds.study.iitm.ac.in'; // <--- EDIT YOUR EMAIL
const WEEK  = '2026-W11';                     // <--- EDIT CURRENT WEEK

(async function resetLabyrinthAuth() {
  console.log("%c 🔄 Initiating Auth-Aware Labyrinth Reset...", "color: #f59e0b; font-weight: bold; font-size: 14px;");
  
  const base = 'https://tds-network-games.sanand.workers.dev/labyrinth';
  const startBody = { email: EMAIL, week: WEEK };

  try {
    // 1. Get a temporary token (Auth hurdle)
    console.log("🔑 Authenticating...");
    const authRes = await fetch(`${base}/start`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(startBody)
    });
    const authData = await authRes.json();
    const token = authData.session_token;

    if (!token) {
        console.error("❌ Auth Failed: Could not get session token.");
        return;
    }

    // 2. Wipe Session with the token
    console.log("🧹 Wiping session with Token...");
    const clearRes = await fetch(`${base}/clear`, { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json',
        'X-Session-Token': token
      },
      body: JSON.stringify(startBody)
    });
    const clearData = await clearRes.json();
    console.log("✅ Session Wiped:", clearData.message || "Success");

    // 3. Start Fresh
    console.log("🚀 Restarting...");
    const startRes = await fetch(`${base}/start`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(startBody)
    });
    const startData = await startRes.json();
    
    if (startData.session_token) {
      console.log("%c 🚀 SUCCESS: Session restarted!", "color: #10b981; font-weight: bold;");
      console.log(`📍 Starting Room: ${startData.current_room}`);
    } else {
      console.error("❌ Restart Error:", startData);
    }
  } catch (err) {
    console.error("❌ Fetch Error:", err);
  }
})();
