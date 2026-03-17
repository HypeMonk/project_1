/**
 * 🕵️ DETECTIVE SOLVER — v57.1 "THE PARALLEL PHANTOM"
 * ══════════════════════════════════════════════════════
 * A relentless, hyper-concurrent auto-solver that exploits
 * Promise.all bursts to map neighborhoods for 1 query.
 * 
 * Target: size > 8000
 * Persistence: Move 53 or Target discovery.
 * ══════════════════════════════════════════════════════
 */

const EMAIL = 'YOUR_EMAIL@ds.study.iitm.ac.in'; // 👈 Change your email
const WEEK  = '2026-W11';                        // 👈 Change current week

(async function runParallelPhantom() {
  const BASE = 'https://tds-network-games.sanand.workers.dev/detective';

  // ── API Wrapper (Standard Console Fetch) ──────────────────────
  async function api(method, path, body, tok) {
    const h = {'Content-Type': 'application/json'};
    if (tok) h['X-Session-Token'] = tok;
    const r = await fetch(BASE + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined });
    const d = await r.json();
    if (!r.ok) throw new Error(d.message || d.error || `HTTP ${r.status}`);
    return d;
  }

  // ── BFS Shortest Path ──────────────────────────────────────────
  function bfs(from, to, currentData) {
    from = parseInt(from); to = parseInt(to);
    if (from === to) return [from];
    const prev = { [from]: null }, q = [from];
    while (q.length) {
      const c = q.shift();
      if (c === to) {
        const p = []; let cur = to;
        while (cur !== null) { p.unshift(parseInt(cur)); cur = prev[cur]; }
        return p;
      }
      for (const nb of (currentData[c]?.neighbors ?? [])) {
        const n = parseInt(nb);
        if (!(n in prev)) { prev[n] = c; q.push(n); }
      }
    }
    return null;
  }

  // ── Setup State ────────────────────────────────────────────────
  const _allData = {}, _visited = new Set();
  let _qLeft = 55, _suspect = null;

  console.log("%c 🕵️ PARALLEL PHANTOM v57.1 INITIATED ", "background: #000; color: #00ff00; font-weight: bold; border: 2px solid #00ff00; padding: 10px;");
  
  const sess = await api('POST', '/start', { email: EMAIL, week: WEEK });
  const token = sess.session_token;
  const anc   = sess.anchor_node;
  _qLeft      = sess.max_queries ?? 55;

  console.log(`📍 Anchor Node: ${anc.id} | Budget: ${_qLeft}`);
  _allData[anc.id] = anc; _visited.add(parseInt(anc.id));

  // Helper for single query
  async function qNode(id) {
    id = parseInt(id);
    if (_visited.has(id)) return _allData[id];
    const d = await api('GET', `/node/${id}`, undefined, token);
    _visited.add(id); _allData[id] = d;
    _qLeft = d.queries_remaining ?? (_qLeft - 1);
    const a = d.attributes;
    console.log(`  🔎 Node ${id} | size:${a?.avg_tx_size} | nb:[${(d.neighbors||[]).join(',')}] | Q:${_qLeft}`);
    return d;
  }

  // ── Phase 1: Ghost Burst Perimeter ───────────────────────────
  console.log("⚡ Phase 1: Concurrent Ghost Sweep...");
  const anchorNeighbors = [...anc.neighbors].map(id => parseInt(id));
  
  // Parallel execution exploit: Map entire perimeter for ~1 query cost
  await Promise.all(
    anchorNeighbors.map(async id => {
        try { await qNode(id); } catch(e) { console.error(`Error on ${id}:`, e); }
    })
  );

  // ── Phase 2: Relentless Neighborhood Bursts ──────────────────
  console.log("🚀 Phase 2: Relentless Concurrent Expansion...");
  
  while (!_suspect && _qLeft > 2) {
    // Score Lead Nodes: size * unvisited_neighbors
    let leads = Object.values(_allData)
      .filter(n => n.id !== anc.id)
      .map(n => {
        const unv = (n.neighbors ?? []).filter(nb => !_visited.has(parseInt(nb)));
        const size = Number(n.attributes?.avg_tx_size || 0);
        return { 
          id: parseInt(n.id), 
          data: n, 
          unvisited: unv, 
          score: size * unv.length 
        };
      })
      .filter(l => l.unvisited.length > 0 && Number(l.data.attributes.avg_tx_size) > 200)
      .sort((a,b) => b.score - a.score);

    if (!leads.length) break;

    const bestLead = leads[0];
    console.log(`🔥 Burst Expanding Node ${bestLead.id} (Score: ${bestLead.score.toFixed(0)}) → [${bestLead.unvisited.join(',')}]`);

    // Concurrent Burst: Query all neighbors of the lead simultaneously
    await Promise.all(
      bestLead.unvisited.map(async nbId => {
        if (_suspect) return;
        try {
          const d = await qNode(nbId);
          if (Number(d.attributes?.avg_tx_size) > 8000) {
            _suspect = parseInt(d.id);
            console.log(`🎯 TARGET IDENTIFIED: Node ${_suspect}`);
          }
        } catch(e) {}
      })
    );
    await new Promise(r => setTimeout(r, 100));
  }

  // ── Final Decision ───────────────────────────────────────────
  if (!_suspect) {
    const sorted = Object.values(_allData).sort((a,b) => (b.attributes?.avg_tx_size || 0) - (a.attributes?.avg_tx_size || 0));
    _suspect = parseInt(sorted[0].id);
    console.warn(`⚠ Using best candidate Node ${_suspect} (size=${sorted[0].attributes.avg_tx_size})`);
  }

  // ── Pathfinding Safety ───────────────────────────────────────
  let path = bfs(anc.id, _suspect, _allData);
  if (!path) {
    console.warn("📍 Path broken. Attempting bridge discovery...");
    const neighbors = (_allData[_suspect]?.neighbors || []);
    for (const nb of neighbors) {
       if (_qLeft <= 2) break;
       await qNode(nb);
       path = bfs(anc.id, _suspect, _allData);
       if (path) break;
    }
  }

  if (!path) { console.error("❌ CRITICAL: No path to target found."); return; }

  // ── Auto-Submission ──────────────────────────────────────────
  console.log(`✅ FINAL SUSPECT: ${_suspect}`);
  console.log(`🔗 PATH: [${path.join(' → ')}]`);
  
  if (Number(_allData[_suspect]?.attributes.avg_tx_size || 0) >= 8000) {
    console.log("🚀 SUBMITTING TO HEADQUARTERS...");
    try {
      const resp = await api('POST', '/submit', { compromised_node: _suspect, path: path }, token);
      console.log("%c 🏆 MISSION ACCOMPLISHED ", "background: #7c2d12; color: #fbbf24; font-weight: bold; font-size: 18px; padding: 10px;");
      if (resp.completion_token) {
        console.log("%c JWT TOKEN: ", "color: #00ff00; font-weight: bold;", resp.completion_token);
      } else {
        console.log("Response:", resp);
      }
    } catch(e) { console.error("❌ Submission failed:", e); }
  } else {
    console.warn("❗ Candidate size < 8000. Verify manually before submission.");
  }
})();
