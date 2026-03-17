/**
 * 🧩 DATA LABYRINTH — AUTO SOLVER (v11.1 PERFECT PORT)
 * ═══════════════════════════════════════════════════════
 * Ported from the "Perfect" Web App Logic (v10 Bulletproof)
 * Features: Adjacency-Aware Navigation, Iterative DFS, 
 * and Full Statistical Analytics Suite.
 * ═══════════════════════════════════════════════════════
 */

const EMAIL = 'YOUR_EMAIL@ds.study.iitm.ac.in'; // 👈 Change your email
const WEEK  = '2026-W11';                        // 👈 Change current week

(async function runPerfectLabyrinth() {
  const BASE = 'https://tds-network-games.sanand.workers.dev/labyrinth';
  const COLS = 11, TOTAL = 121, LIMIT = 600, RESERVE = 60;
  const OPP  = {north:'south', south:'north', east:'west', west:'east'};
  const DELT = {north:[-1,0], south:[1,0], east:[0,1], west:[0,-1]};
  
  let TOKEN=null, Q=null, room=null, exitRoom=null, moves=0, fragCount=0;
  const visited={}, frags=[];
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));

  // ── API Wrapper (Phantom-Class) ─────────────────────────────
  async function api(path, body = {}, method = 'POST') {
    const h = { 'Content-Type': 'application/json' };
    if (TOKEN) h['X-Session-Token'] = TOKEN;
    const url = `${BASE}/${path}`;
    try {
      const res = await fetch(url, {
        method, headers: h,
        body: method === 'POST' ? JSON.stringify(path === 'start' ? { email: EMAIL, week: WEEK } : body) : null
      });
      const d = await res.json();
      return { ok: res.ok, data: d };
    } catch(e) { return { ok: false, error: e }; }
  }

  // ── Analytics Engine (Ported from solver.js) ─────────────────
  const mean = a => a.reduce((s, x) => s + x, 0) / a.length;
  const std = a => {
    const m = mean(a);
    return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / a.length);
  };
  const median = a => {
    const s = [...a].sort((x, y) => x - y), m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m-1] + s[m]) / 2;
  };
  const pct = (a, p) => {
    if (a.length === 0) return 0;
    const s = [...a].sort((x, y) => x - y);
    const pos = (s.length - 1) * p / 100;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (s[base + 1] !== undefined) return s[base] + rest * (s[base + 1] - s[base]);
    return s[base];
  };
  const pearson = (x, y) => {
    const mx = mean(x), my = mean(y);
    const n = x.reduce((s, xi, i) => s + (xi - mx) * (y[i] - my), 0);
    const dx = Math.sqrt(x.reduce((s, xi) => s + (xi - mx) ** 2, 0));
    const dy = Math.sqrt(y.reduce((s, yi) => s + (yi - my) ** 2, 0));
    return (dx === 0 || dy === 0) ? 0 : n / (dx * dy);
  };
  const rd = (n, dp) => Math.round(n * 10 ** dp) / 10 ** dp;

  function computeAnswer(q, dp = 2) {
    const text = q.text.toLowerCase();
    const hints = q.columns_hint || [];
    const [c1, c2] = hints;
    
    // Strict: Exclude the entire record if ANY field is null, undefined, or 'CORRUPT'
    const data = frags.filter(f => Object.values(f).every(v => v !== null && v !== undefined && v !== '' && v !== 'CORRUPT'));
    if (!data.length) return null;
    const v1 = data.map(f => Number(f[c1])), v2 = c2 ? data.map(f => Number(f[c2])) : [];
    const r = n => rd(n, dp);

    if (/mode of .* among records where .* is above its median/.test(text)) {
      const medVal = median(v2);
      const sub = data.filter((f, i) => v2[i] > medVal).map(f => String(f[c1]));
      if (!sub.length) return null;
      const freq = {}; sub.forEach(v => freq[v] = (freq[v] || 0) + 1);
      const top = Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0];
      return isNaN(top) ? top : Number(top);
    }
    if (/spearman/.test(text)) {
      const getRanks = a => {
        const sorted = [...a].sort((x, y) => x - y);
        return a.map(v => (sorted.indexOf(v) + sorted.lastIndexOf(v) + 2) / 2);
      };
      return r(pearson(getRanks(v1), getRanks(v2)));
    }
    if (/pearson|correlation/.test(text)) return r(pearson(v1, v2));
    if (/slope|linear regression/.test(text) && !/intercept/.test(text)) {
      const mx = mean(v1), my = mean(v2);
      return r(v1.reduce((s, xi, i) => s + (xi - mx) * (v2[i] - my), 0) / v1.reduce((s, xi) => s + (xi - mx) ** 2, 0));
    }
    if (/intercept/.test(text)) {
      const mx = mean(v1), my = mean(v2);
      const slp = v1.reduce((s, xi, i) => s + (xi - mx) * (v2[i] - my), 0) / v1.reduce((s, xi) => s + (xi - mx) ** 2, 0);
      return r(my - slp * mx);
    }
    if (/coefficient of variation|std\/mean/.test(text)) return r(std(v1) / mean(v1));
    if (/percentile/.test(text)) {
        const m = text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p = m ? +m[1] : 50;
        if (/(greater|above|more)/.test(text)) return v1.filter(v => v > pct(v1, p)).length;
        if (/(less|below|under)/.test(text)) return v1.filter(v => v < pct(v1, p)).length;
        return pct(v1, p);
    }
    if (/interquartile|iqr/.test(text)) return pct(v1, 75) - pct(v1, 25);
    if (/weighted mean/.test(text)) return r(v1.reduce((s, x, i) => s + x * v2[i], 0) / v2.reduce((s, x) => s + x, 0));
    if (/top\s+\d+/.test(text) && /(sum|total)/.test(text)) {
       const n = parseInt(text.match(/top\s+(\d+)/)[1]);
       return [...data].sort((a,b)=>Number(b[c1])-Number(a[c1])).slice(0,n).reduce((acc,f)=>acc+Number(f[c2]),0);
    }
    if (/(mean|average)/.test(text)) return r(mean(v1));
    if (/median/.test(text)) return median(v1);
    if (/standard deviation|(?<!std\/)std/.test(text)) return r(std(v1));
    if (/variance/.test(text)) return r(std(v1) ** 2);
    if (/range/.test(text)) return Math.max(...v1) - Math.min(...v1);
    if (/mode/.test(text)) {
      const freq = {}; v1.forEach(v => freq[v] = (freq[v] || 0) + 1);
      const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
      return isNaN(top) ? top : Number(top);
    }
    if (/maximum/.test(text)) return Math.max(...v1);
    if (/minimum/.test(text)) return Math.min(...v1);
    if (/(sum|total)/.test(text)) return r(v1.reduce((a, b) => a + b, 0));
    if (/(unique|distinct)/.test(text)) return new Set(v1).size;
    if (/(how many|count)/.test(text)) return data.length;
    return null;
  }

  // ── Core Move Logic (No-Wall) ────────────────────────────────
  function neighbor(id, dir) {
    const r = Math.floor(id / COLS), c = id % COLS;
    const [dr, dc] = DELT[dir];
    const nr = r + dr, nc = c + dc;
    if (nr < 0 || nr >= 11 || nc < 0 || nc >= 11) return -1;
    return nr * COLS + nc;
  }

  async function doMove(dir) {
    if (moves >= LIMIT) return null;
    const r = await api('move', { direction: dir });
    if (!r.ok || !r.data.success) return null;
    room = r.data.room_id;
    moves = r.data.moves_used ?? (moves + 1);
    if (r.data.is_exit_room && exitRoom === null) exitRoom = room;
    return r.data;
  }

  async function navigateTo(target) {
    if (room === target) return true;
    const queue = [[room, []]]; const seen = new Set([room]);
    while (queue.length) {
      const [r, path] = queue.shift();
      for (const dir of (visited[r]?.exits || [])) {
        const nb = neighbor(r, dir);
        if (nb === target) {
          for (const d of [...path, dir]) {
            if (!(await doMove(d))) return false;
          }
          return true;
        }
        if (!seen.has(nb) && visited[nb]) {
          seen.add(nb); queue.push([nb, [...path, dir]]);
        }
      }
    }
    return false;
  }

  // ── Exploration Logic ────────────────────────────────────────
  console.log("%c 🧩 PERFECT LABYRINTH INITIATED ", "background: #111827; color: #10b981; font-weight: bold; padding: 10px;");
  
  const start = await api('start');
  if (!start.ok) return console.error("❌ Failed to start.");
  TOKEN = start.data.session_token; Q = start.data.question; room = start.data.current_room;
  
  async function exploreMaze() {
    console.log("🔦 Exploring maze...");
    const lkRes = await api('look', {}, 'GET');
    if(!lkRes.ok) return;
    visited[room] = { ...lkRes.data, item_collected: false };
    
    if (visited[room].has_item) {
        const colRes = await api('collect');
        if (colRes.ok) {
            const c = colRes.data;
            if (c.fragment_type === 'required') {
                const d = c.fragment?.data || {};
                frags.push(d);
                console.log(`💎 Required Fragment #${frags.length} Collected (Start Room)`);
            }
            visited[room].item_collected = true;
        }
    }

    const stack = [{ roomId: room, pending: [...visited[room].exits], fromDir: null }];

    while (stack.length > 0 && moves < LIMIT - RESERVE) {
      const top = stack[stack.length - 1];
      let nextDir = null;
      while (top.pending.length > 0) {
        const dir = top.pending.shift();
        const nb = neighbor(top.roomId, dir);
        if (nb !== -1 && !visited[nb]) { nextDir = dir; break; }
      }

      if (nextDir === null) {
        stack.pop();
        if (stack.length > 0 && top.fromDir) {
            await doMove(OPP[top.fromDir]);
        }
        continue;
      }

      const moveRes = await doMove(nextDir);
      if (!moveRes) {
        visited[neighbor(top.roomId, nextDir)] = { exits: [], blocked: true };
        continue;
      }

      const lk = await api('look', {}, 'GET');
      const roomData = lk.ok ? lk.data : moveRes;
      visited[room] = { ...roomData, item_collected: false };

      if (roomData.has_item) {
        const colRes = await api('collect');
        if (colRes.ok) {
          const c = colRes.data;
          if (c.fragment_type === 'required') {
            const d = c.fragment?.data || {};
            frags.push(d);
            console.log(`💎 Required Fragment #${frags.length} Collected`);
          } else {
            console.log(`🗑️ Distractor in room ${room} — skipped`);
          }
          visited[room].item_collected = true;
        }
      }
      stack.push({ roomId: room, pending: [...(roomData.exits || [])], fromDir: nextDir });
      await sleep(100);
    }
  }

  await exploreMaze();
  if (exitRoom === null) exitRoom = 120; // fallback

  console.log(`🏁 Navigation to EXIT Room ${exitRoom}...`);
  if (await navigateTo(exitRoom)) {
    const ans = computeAnswer(Q, 2);
    console.log(`🧮 Answer: ${ans}`);
    const final = await api('submit', { answer: ans });
    if (final.data?.completion_token) {
        console.log("%c 🏆 MISSION ACCOMPLISHED ", "background: #065f46; color: #34d399; font-weight: bold; padding: 10px;");
        console.log("%c JWT TOKEN: ", "color: #00ff00; font-weight: bold;", final.data.completion_token);
    } else {
        console.error("❌ Submission failed.", final.data);
    }
  } else {
    console.error("❌ Could not reach exit room.");
  }
})();
