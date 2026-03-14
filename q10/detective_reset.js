/**
 * 🔄 GRAPH DETECTIVE — SESSION RESET SCRIPT
 * ════════════════════════════════════════════
 * Paste this into the console at:
 * https://tds-network-games.sanand.workers.dev/detective/
 */

const EMAIL = 'yourroll@ds.study.iitm.ac.in'; // <--- EDIT YOUR EMAIL
const WEEK  = '2026-W11';                     // <--- EDIT CURRENT WEEK

(async function resetDetective() {
  console.log("%c 🔄 Initiating Detective Reset...", "color: #f59e0b; font-weight: bold; font-size: 14px;");
  
  const base = 'https://tds-network-games.sanand.workers.dev/detective';
  
  try {
    // 1. Wipe Session
    const clearRes = await fetch(`${base}/clear?email=${EMAIL}&week_id=${WEEK}`, { method: 'POST' });
    const clearData = await clearRes.json();
    console.log("✅ Session Wiped:", clearData.message || "Success");

    // 2. Start Fresh
    const startRes = await fetch(`${base}/start?email=${EMAIL}&week_id=${WEEK}`, { method: 'POST' });
    const startData = await startRes.json();
    
    if (startData.session_token) {
      console.log("%c 🚀 SUCCESS: Session restarted!", "color: #10b981; font-weight: bold;");
      console.log(`📍 Anchor Node: ${startData.anchor_node.id}`);
      console.log(`📄 Clues Found: ${startData.clues.length}`);
    } else {
      console.error("❌ Reset Error:", startData);
    }
  } catch (err) {
    console.error("❌ Fetch Error:", err);
  }
})();
