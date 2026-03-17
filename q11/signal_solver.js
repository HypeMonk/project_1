/**
 * 📡 SIGNAL MYSTERY — v21 "THE OMNISCIENT HYBRID"
 * ═══════════════════════════════════════════════════════
 * Standalone Console Version. Standardized to use 
 * X-Session-Token and POST bodies for session initialization.
 * ═══════════════════════════════════════════════════════
 */

const EMAIL = 'yourroll@ds.study.iitm.ac.in'; // 👈 Change your email
const WEEK  = '2026-W11';                        // 👈 Change current week

(async function runSignalPhantom() {
  const BASE = 'https://tds-network-games.sanand.workers.dev/signal';
  let TOKEN = null, ADJ = {}, inv = [], memory = {}, visitedRooms = new Set();
  let frag1 = null, frag2 = null, frag3 = null;

  const sl = ms => new Promise(r => setTimeout(r, ms));

  // --- API Wrapper (Phantom-Class) ---
  async function api(ep, body = {}, method = 'POST') {
    const h = { 'Content-Type': 'application/json' };
    if (TOKEN) h['X-Session-Token'] = TOKEN;
    try {
      const url = `${BASE}/${ep}`;
      const options = { method, headers: h };
      if (method === 'POST') {
        options.body = JSON.stringify(ep === 'start' ? { email: EMAIL, week: WEEK } : body);
      }
      const r = await fetch(url, options);
      const d = await r.json();
      return { ok: r.ok, status: r.status, data: d };
    } catch (e) { return { ok: false, error: e }; }
  }

  console.log("%c 📡 SIGNAL v21 OMNISCIENT INITIATED ", "background: #111827; color: #3b82f6; font-weight: bold; padding: 10px;");

  const startRes = await api('start');
  if (!startRes.ok) return console.error("❌ Failed to start.");
  TOKEN = startRes.data.session_token;
  console.log("🗺  Connected. Scanning facility...");

  async function updateMap() {
    const res = await api('look', {}, 'GET');
    if (!res.ok) return null;
    const room = res.data.room;
    if (!ADJ[room]) ADJ[room] = {};
    for (const [dir, exit] of Object.entries(res.data.exits || {})) {
      ADJ[room][exit.to] = { dir, locked: exit.locked, requires: exit.requires };
      if (!ADJ[exit.to]) ADJ[exit.to] = {};
    }
    const clueIds = ['SIGNAL_LOG', 'BACKUP_LOG', 'NOTEBOOK', 'INSPECTION_CERTIFICATE', 'RESEARCH_NOTE'];
    const candidates = [...(res.data.items_here || []), ...(res.data.features || [])];
    for (const target of candidates) {
      if (clueIds.includes(target)) {
        const ex = await api(`examine?target=${target}`, {}, 'GET');
        if (ex.ok && ex.data.description) {
          const desc = ex.data.description;
          if (!memory[target] || !memory[target].includes(desc.substring(0, 15))) {
            memory[target] = (memory[target] || "") + "\n" + desc;
            console.log(`📖 Scanned: ${target}`);
          }
        }
      }
    }
    return res.data;
  }

  function getPath(from, to) {
    if (from === to) return [];
    const q = [[from, []]], seen = new Set([from]);
    while (q.length) {
      const [curr, path] = q.shift();
      for (const [nb, info] of Object.entries(ADJ[curr] || {})) {
        const canPass = !info.locked || inv.includes(info.requires);
        if (canPass && !seen.has(nb)) {
          if (nb === to) return [...path, info.dir];
          seen.add(nb);
          q.push([nb, [...path, info.dir]]);
        }
      }
    }
    return null;
  }

  async function navigate(target) {
    for (let i = 0; i < 40; i++) {
        const state = await updateMap();
        if (state.room === target) return true;
        const path = getPath(state.room, target);
        if (!path || path.length === 0) return false;
        await api('move', { direction: path[0] });
        await sl(250);
    }
    return false;
  }

  async function tryCrafting() {
    const list = [['CLEANING_CLOTH', 'SOLVENT_BOTTLE'], ['DEMAGNETISER', 'ACCESS_CARD'], ['FREQUENCY_TUNER', 'POWER_CELL']];
    let okAny = false;
    for (const [a, b] of list) {
        if (inv.includes(a) && inv.includes(b)) {
            const res = await api('combine', { item_a: a, item_b: b });
            if (res.ok && res.data.success) {
                console.log(`🔧 Crafted: ${res.data.output}`);
                inv = inv.filter(i => i !== a && i !== b);
                inv.push(res.data.output);
                okAny = true;
            }
        }
    }
    return okAny;
  }

  async function runDiscovery() {
    const mapData = await api('map', {}, 'GET');
    const allRooms = mapData.ok ? mapData.data.rooms.map(r => r.id) : [];
    let active = true;
    while (active) {
        active = false;
        const lk = await api('look', {}, 'GET');
        const current = lk.data.room;
        for (const target of allRooms) {
            if (visitedRooms.has(target)) continue;
            const path = getPath(current, target);
            if (path && await navigate(target)) {
                visitedRooms.add(target);
                const roomData = await updateMap();
                for (const item of (roomData.items_here || [])) {
                    if (await api('take', { item }).then(r => r.ok)) {
                        console.log(`📦 Found: ${item}`);
                        inv.push(item);
                        active = true;
                    }
                }
                if (await tryCrafting()) active = true;
                active = true;
                break; 
            }
        }
    }
  }

  async function attemptSolve() {
    // Collect fragments and solve puzzles
    const serverInv = await api('inventory', {}, 'GET');
    if (serverInv.ok) {
        const pz = serverInv.data.puzzles || {};
        if (pz.PUZZLE_1_PIN?.solved) frag1 = pz.PUZZLE_1_PIN.fragment;
        if (pz.PUZZLE_2_FREQ?.solved) frag2 = pz.PUZZLE_2_FREQ.fragment;
        if (pz.PUZZLE_3_VERIFY?.solved) frag3 = pz.PUZZLE_3_VERIFY.fragment;
    }

    if (!frag1) {
        const yr = memory['INSPECTION_CERTIFICATE']?.match(/\d{4}/)?.[0];
        const sub = memory['NOTEBOOK']?.match(/\d+/)?.[0];
        if (yr && sub && await navigate('SERVER_ROOM_A')) {
            const res = await api('use', { target: 'PIN_TERMINAL', value: parseInt(yr) + parseInt(sub) });
            frag1 = res.data.fragment || res.data.fragment_revealed;
            if (frag1) console.log(`✨ Frag 1: ${frag1}`);
        }
    }

    if (!frag2) {
        const freqRegex = /\d{2,3}(?:\.\d+)?/g;
        let counts = {};
        for (const desc of Object.values(memory)) {
            (desc.match(freqRegex) || []).forEach(v => {
                if (parseFloat(v) > 70 && parseFloat(v) < 150) counts[v] = (counts[v] || 0) + 1;
            });
        }
        const best = Object.entries(counts).sort((a,b) => b[1] - a[1])[0]?.[0];
        if (best && (inv.includes('POWERED_TUNER') || (await api('inventory', {}, 'GET')).data.items?.includes('POWERED_TUNER'))) {
            if (await navigate('MAINTENANCE_BAY')) {
                const res = await api('use', { target: 'RADIO_TRANSMITTER', value: best });
                frag2 = res.data.fragment || res.data.fragment_revealed;
                if (frag2) console.log(`✨ Frag 2: ${frag2}`);
            }
        }
    }

    if (frag1 && frag2 && !frag3 && await navigate('CONTROL_ROOM')) {
        const res = await api('use', { target: 'TERMINAL_3', inputs: [frag1, frag2] });
        frag3 = res.data.fragment || res.data.fragment_revealed;
        if (frag3) console.log(`✨ Frag 3: ${frag3}`);
    }

    if (frag1 && frag2 && frag3 && await navigate('CORE_CHAMBER')) {
        const res = await api('use', { target: 'EXIT_KEYPAD', value: `${frag1}${frag2}${frag3}` });
        const token = res.data.completion_token || res.data.token || res.data.jwt;
        if (token) {
            console.log("%c 🏆 MISSION ACCOMPLISHED ", "background: #1e3a8a; color: #60a5fa; font-weight: bold; padding: 10px;");
            console.log("%c JWT TOKEN: ", "color: #00ff00; font-weight: bold;", token);
            return true;
        }
    }
    return false;
  }

  for (let cycle = 0; cycle < 10; cycle++) {
    console.log(`Cycle ${cycle + 1}: Discovering...`);
    await runDiscovery();
    if (await attemptSolve()) return;
    await sl(1000);
  }
})();
