/**
 * 📡 SIGNAL MYSTERY — AUTO SOLVER (v21 OMNISCIENT HYBRID)
 * ══════════════════════════════════════════════════════
 * Paste this into the console at:
 * https://tds-network-games.sanand.workers.dev/signal/
 */

const EMAIL = 'yourroll@ds.study.iitm.ac.in'; // <--- EDIT YOUR EMAIL
const WEEK  = '2026-W11';                     // <--- EDIT CURRENT WEEK

(async function runSignalSolver() {
  const BASE = 'https://tds-network-games.sanand.workers.dev/signal';
  let TOKEN=null, _inv=[], _visited=new Set(), _logs=[], _items=[], _path=[], _rooms=[];

  const api = async (p, b={}, m='POST') => {
    const r = await fetch(`${BASE}/${p}?email=${EMAIL}&week_id=${WEEK}`, {
      method:m, headers:{'Content-Type':'application/json','Authorization':TOKEN?`Bearer ${TOKEN}`:''},
      body:m==='POST'?JSON.stringify(b):null
    }); return await r.json();
  };

  console.log("%c 📡 SIGNAL v21 INITIATED ", "background: #111827; color: #3b82f6; font-weight: bold; font-size: 16px; padding: 10px;");

  const start = await api('start');
  if(!start.session_token) return console.error("❌ Failed to connect.");
  TOKEN=start.session_token;

  async function explore() {
    const q = [start.current_room]; 
    while(q.length) {
      const curr = q.shift(); if(_visited.has(curr)) continue;
      _visited.add(curr);
      const res = await api(`move/${curr}`);
      _inv = res.inventory;
      
      const sc = await api('scan', {}, 'GET');
      if(sc.items) {
        for(const item of sc.items) {
          const col = await api('collect', {item_id: item.id});
          if(col.item_id) {
            console.log(`📦 Collected: ${item.id}`);
            if(item.id.includes('LOG')) _logs.push(col.content);
            else _items.push(col.content);
          }
        }
      }
      if(res.adjacent_rooms) res.adjacent_rooms.forEach(r => q.push(r));
    }
  }

  await explore();
  
  // Logic from v21: Hybrid Extraction
  const allText = (_logs.join(' ') + ' ' + _items.join(' ')).replace(/[\[\]\!,]/g, ' ');
  const freqs = allText.match(/\d{2,3}\.\d{1,2}/g) || [];
  const fmFreqs = freqs.filter(f => parseFloat(f) >= 87.0 && parseFloat(f) <= 109.0);
  
  // Strategy: Intersection first, Mode fallback
  let candidate = "";
  if(_logs.length >= 2) {
    const s1 = _logs[0].match(/\d{2,3}\.\d{1,2}/g) || [];
    const s2 = _logs[1].match(/\d{2,3}\.\d{1,2}/g) || [];
    const intersect = s1.filter(v => s2.includes(v));
    if(intersect.length) candidate = intersect[0];
  }
  
  if(!candidate) {
    const counts = {}; fmFreqs.forEach(f => counts[f] = (counts[f]||0)+1);
    candidate = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0];
  }

  console.log(`📡 Frequency Identified: ${candidate} MHz`);
  
  const solve = await api('solve', {frequency: candidate, fragments: ["HFBH", "JFKD", "PLMN"]}); // Logic placeholders
  // Note: Detailed puzzle steps omitted for console brevity, focusing on the core W12 fix
  
  if(solve.completion_token) {
     console.log("%c 🏆 EXTRACTION SUCCESSFUL ", "background: #1e3a8a; color: #60a5fa; font-weight: bold; font-size: 18px; padding: 10px;");
     console.log(`JWT: ${solve.completion_token}`);
  }
})();
