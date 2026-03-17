/**
 * 🔄 GRAPH DETECTIVE — SESSION RESET SCRIPT (v11.3 AUTH-AWARE)
 * ════════════════════════════════════════════
 */

const EMAIL = 'yourroll@ds.study.iitm.ac.in'; // <--- EDIT YOUR EMAIL
const WEEK  = '2026-W11';                     // <--- EDIT CURRENT WEEK

(async function resetDetectiveAuth() {
  console.log("%c 🔄 Initiating Auth-Aware Detective Reset...", "color: #f59e0b; font-weight: bold; font-size: 14px;");
  const base = 'https://tds-network-games.sanand.workers.dev/detective';
  const startBody = { email: EMAIL, week: WEEK };

  try {
    const authRes = await fetch(`${base}/start`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(startBody)
    });
    const authData = await authRes.json();
    const token = authData.session_token;

    if (!token) return console.error("❌ Auth Failed.");

    const clearRes = await fetch(`${base}/clear`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'X-Session-Token': token },
      body: JSON.stringify(startBody)
    });
    const clearData = await clearRes.json();
    console.log("✅ Session Wiped:", clearData.message || "Success");

    const startRes = await fetch(`${base}/start`, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(startBody)
    });
    const startData = await startRes.json();
    
    if (startData.session_token) {
      console.log("%c 🚀 SUCCESS: Session restarted!", "color: #10b981; font-weight: bold;");
      console.log(`📍 Anchor: ${startData.anchor_node.id}`);
    } else {
      console.error("❌ Error:", startData);
    }
  } catch (err) {
    console.error("❌ Fetch Error:", err);
  }
})();
