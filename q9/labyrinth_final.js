(async () => {

// ============================================================
//  Data Labyrinth — Universal Auto Solver v7 (FINAL)
//
//  HOW TO USE:
//  1. Go to https://tds-network-games.sanand.workers.dev/labyrinth/
//  2. Open DevTools → Console (F12)
//  3. Change EMAIL below to your email
//  4. Paste entire script → press Enter
//  5. Wait ~5 mins → copy JWT token printed at the end
// ============================================================

const EMAIL = 'YOUR_EMAIL@ds.study.iitm.ac.in';  // ← CHANGE THIS ONLY

const BASE     = 'https://tds-network-games.sanand.workers.dev/labyrinth';
const COLS     = 11;
const TOTAL    = 121;
const MOVE_LIMIT = 600;
const OPPOSITE = {north:'south', south:'north', east:'west', west:'east'};
const DELTA    = {north:[-1,0], south:[1,0], east:[0,1], west:[0,-1]};

let SESSION_TOKEN  = null;
let QUESTION       = null;
let currentRoom    = null;
let exitRoom       = null;
let movesUsed      = 0;
let fragmentsCount = 0;

const visited   = {};
const fragments = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── LOGGING ───────────────────────────────────────────────────
const log  = msg => console.log(msg);
const ok   = msg => console.log(`  ✅ ${msg}`);
const warn = msg => console.log(`  ⚠️  ${msg}`);
const err  = msg => console.log(`  ❌ ${msg}`);
const info = msg => console.log(`  ℹ️  ${msg}`);

function status() {
    const movesLeft = MOVE_LIMIT - movesUsed;
    const bar = '█'.repeat(Math.floor(movesUsed/MOVE_LIMIT*20)) + '░'.repeat(20-Math.floor(movesUsed/MOVE_LIMIT*20));
    log(`  📍 Moves: ${movesUsed}/${MOVE_LIMIT} [${bar}] ${movesLeft} left | 📦 Fragments: ${fragmentsCount}/12`);
}

// ── API ───────────────────────────────────────────────────────
async function api(endpoint, body = {}) {
    const h = {'content-type': 'application/json'};
    if (SESSION_TOKEN) h['x-session-token'] = SESSION_TOKEN;
    const r = await fetch(`${BASE}/${endpoint}`, {
        method: 'POST', headers: h, body: JSON.stringify(body)
    });
    return {ok: r.ok, status: r.status, data: await r.json()};
}

async function moveDir(dir) {
    if (movesUsed >= MOVE_LIMIT - 20) {
        warn(`⚠️  Only ${MOVE_LIMIT - movesUsed} moves left! Stopping exploration to save moves for exit.`);
        return null;
    }
    const res = await api('move', {direction: dir});
    await sleep(300);
    if (!res.ok || !res.data.success) return null;
    movesUsed   = res.data.moves_used || movesUsed + 1;
    currentRoom = res.data.room_id;
    if (res.data.is_exit_room && exitRoom === null) {
        exitRoom = res.data.room_id;
        log(`  🚪 Exit room detected: ${exitRoom}`);
    }
    return res.data;
}

async function collectItem() {
    const res = await api('collect');
    if (res.data?.fragments_collected !== undefined) {
        fragmentsCount = res.data.fragments_collected;
    }
    return res.data;
}

async function submitAnswer(ans) { return (await api('submit', {answer: ans})).data; }

// ── START GAME ────────────────────────────────────────────────
async function startGame() {
    log('\n🚀 Starting game...');
    const res = await api('start', {email: EMAIL});
    if (!res.ok || !res.data.session_token) {
        err(`Failed: ${JSON.stringify(res.data)}`); return null;
    }
    const d = res.data;
    SESSION_TOKEN  = d.session_token;
    QUESTION       = d.question;
    currentRoom    = d.current_room;
    movesUsed      = d.moves_used || 0;
    fragmentsCount = d.fragments_collected || 0;
    log(`   Email      : ${EMAIL}`);
    log(`   Session    : ${SESSION_TOKEN}`);
    log(`   Week       : ${d.week_id}`);
    log(`   Start room : ${d.current_room}`);
    log(`   Question   : [${QUESTION.id}] ${QUESTION.text}`);
    log(`   Columns    : ${QUESTION.columns_hint?.join(', ')}`);
    status();
    return d;
}

// ── PROBE START ROOM ──────────────────────────────────────────
async function probeExits(roomId) {
    log(`\n🔍 Probing exits of start room ${roomId}...`);
    const exits = [];
    for (const dir of ['north','south','east','west']) {
        const d = await moveDir(dir);
        if (d) { exits.push(dir); await moveDir(OPPOSITE[dir]); }
    }
    log(`   Exits: ${JSON.stringify(exits)}`);
    return exits;
}

// ── DFS ───────────────────────────────────────────────────────
async function dfs(roomId, roomData) {
    if (!roomData || roomData.exits === undefined) {
        visited[roomId] = {exits:[], has_item:false, item_collected:false, is_exit_room:false};
        return;
    }
    visited[roomId] = roomData;
    const exits = roomData.exits || [];
    if (roomData.is_exit_room && exitRoom === null) exitRoom = roomId;

    log(`Room ${String(roomId).padStart(3)} | exits=${JSON.stringify(exits).padEnd(30)} | has_item=${roomData.has_item} | is_exit=${roomData.is_exit_room} | moves=${movesUsed} | frags=${fragmentsCount}`);

    // Collect
    if (roomData.has_item && !roomData.item_collected) {
        const c = await collectItem();
        if (!c || c.fragment_type === undefined) {
            warn(`Collect failed at room ${roomId}`);
        } else if (c.fragment_type === 'required') {
            const d = c.fragment?.data || {};
            if (Object.values(d).some(v => v === 'CORRUPT')) {
                warn(`CORRUPT at room ${roomId} — excluded`);
            } else {
                fragments.push({room_id: roomId, ...d});
                ok(`Saved room ${roomId}: ${JSON.stringify(d)}`);
                status();
            }
        } else {
            info(`${c.fragment_type} at room ${roomId} — skipped`);
        }
    }

    // Split exits: exit room last
    const exitDirs = [], normalDirs = [];
    for (const dir of exits) {
        const [dr,dc] = DELTA[dir];
        const nb = (Math.floor(roomId/COLS)+dr)*COLS + (roomId%COLS+dc);
        if (nb < 0 || nb >= TOTAL) continue;
        if (exitRoom !== null && nb === exitRoom) exitDirs.push(dir);
        else normalDirs.push(dir);
    }

    // Explore normal rooms
    for (const dir of normalDirs) {
        if (movesUsed >= MOVE_LIMIT - 20) { warn('Move limit approaching — stopping early!'); break; }
        const [dr,dc] = DELTA[dir];
        const nb = (Math.floor(roomId/COLS)+dr)*COLS + (roomId%COLS+dc);
        if (!visited[nb]) {
            const next = await moveDir(dir);
            if (!next) {
                visited[nb] = {exits:[], has_item:false, item_collected:false, is_exit_room:false};
                continue;
            }
            if (next.is_exit_room) {
                exitRoom = next.room_id;
                visited[exitRoom] = next;
                log(`  🚪 Exit room discovered: ${exitRoom} — saving for last!`);
                await moveDir(OPPOSITE[dir]);
                continue;
            }
            await dfs(nb, next);
            const back = await moveDir(OPPOSITE[dir]);
            if (!back) warn(`Backtrack from ${nb} failed!`);
        }
    }

    // Enter exit room last — stay there
    for (const dir of exitDirs) {
        if (exitRoom !== null && currentRoom !== exitRoom) {
            log(`\n🚪 Entering exit room ${exitRoom}...`);
            const next = await moveDir(dir);
            if (next) {
                visited[exitRoom] = next;
                ok(`At exit room! is_exit=${next.is_exit_room}`);
            }
        }
    }
}

// ── BFS TO EXIT ───────────────────────────────────────────────
async function navigateToExit() {
    if (exitRoom === null) { err('Exit room never detected!'); return false; }
    if (currentRoom === exitRoom) { ok(`Already at exit room ${exitRoom}`); return true; }
    log(`\n🧭 BFS path to exit room ${exitRoom}...`);
    const queue = [[currentRoom, []]];
    const seen  = new Set([currentRoom]);
    while (queue.length) {
        const [room, path] = queue.shift();
        for (const dir of (visited[room]?.exits || [])) {
            const [dr,dc] = DELTA[dir];
            const nb = (Math.floor(room/COLS)+dr)*COLS+(room%COLS+dc);
            if (nb === exitRoom) {
                const fullPath = [...path, dir];
                log(`   Path: ${fullPath.join(' → ')} (${fullPath.length} steps)`);
                for (const d of fullPath) {
                    if (!await moveDir(d)) { err(`Step '${d}' failed!`); return false; }
                }
                ok(`Now at exit room ${exitRoom}!`);
                return true;
            }
            if (!seen.has(nb) && visited[nb]) { seen.add(nb); queue.push([nb, [...path, dir]]); }
        }
    }
    err(`No path to exit room found!`); return false;
}

// ── STATS ─────────────────────────────────────────────────────
const mean    = a => a.reduce((s,x)=>s+x,0)/a.length;
const std     = a => { const m=mean(a); return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/a.length); };
const median  = a => { const s=[...a].sort((x,y)=>x-y),m=Math.floor(s.length/2); return s.length%2?s[m]:(s[m-1]+s[m])/2; };
const pct     = (a,p) => { const s=[...a].sort((x,y)=>x-y); return s[Math.ceil(s.length*p/100)-1]; };
const pearson = (x,y) => {
    const mx=mean(x),my=mean(y);
    const num=x.reduce((s,xi,i)=>s+(xi-mx)*(y[i]-my),0);
    return num/(Math.sqrt(x.reduce((s,xi)=>s+(xi-mx)**2,0))*Math.sqrt(y.reduce((s,yi)=>s+(yi-my)**2,0)));
};
const r2 = n => Math.round(n*100)/100;

// ── ANALYTICS ENGINE ─────────────────────────────────────────
function computeAnswer(question) {
    const id   = question.id;
    const text = question.text.toLowerCase();
    const cols = question.columns_hint || [];
    const c1   = cols[0], c2 = cols[1];

    log(`\n📊 [${id}] ${question.text}`);
    log(`   Columns  : ${cols.join(', ')}`);
    log(`   Fragments: ${fragments.length}`);
    fragments.forEach(f => log(`   ${JSON.stringify(f)}`));

    if (fragments.length === 0) { err('No fragments!'); return null; }

    const v1 = fragments.map(f => Number(f[c1]));
    const v2 = c2 ? fragments.map(f => Number(f[c2])) : [];

    if (text.includes('pearson') || text.includes('correlation'))
        { const r=pearson(v1,v2); log(`   Pearson r=${r} → ${r2(r)}`); return r2(r); }

    if (text.includes('spearman')) {
        const rank = arr => { const s=[...arr].sort((a,b)=>a-b); return arr.map(v=>s.indexOf(v)+1); };
        const r=pearson(rank(v1),rank(v2)); log(`   Spearman r=${r} → ${r2(r)}`); return r2(r);
    }

    if (text.includes('slope') || text.includes('linear regression')) {
        const mx=mean(v1),my=mean(v2);
        const slope=v1.reduce((s,xi,i)=>s+(xi-mx)*(v2[i]-my),0)/v1.reduce((s,xi)=>s+(xi-mx)**2,0);
        log(`   Slope=${slope} → ${r2(slope)}`); return r2(slope);
    }

    if (text.includes('intercept')) {
        const mx=mean(v1),my=mean(v2);
        const slope=v1.reduce((s,xi,i)=>s+(xi-mx)*(v2[i]-my),0)/v1.reduce((s,xi)=>s+(xi-mx)**2,0);
        const intercept=my-slope*mx; log(`   Intercept=${intercept} → ${r2(intercept)}`); return r2(intercept);
    }

    if (text.includes('coefficient of variation') || text.includes('std/mean') || (text.includes('cv') && text.includes('std')))
        { const cv=std(v1)/mean(v1); log(`   CV=${cv} → ${r2(cv)}`); return r2(cv); }

    if (text.includes('percentile') && (text.includes('greater') || text.includes('above') || text.includes('more'))) {
        const m=text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p=m?Number(m[1]):75;
        const t=pct(v1,p), count=v1.filter(v=>v>t).length;
        log(`   p${p}=${t} | count>${t}=${count}`); return count;
    }

    if (text.includes('percentile') && (text.includes('less') || text.includes('below') || text.includes('under'))) {
        const m=text.match(/(\d+)(st|nd|rd|th)\s+percentile/), p=m?Number(m[1]):25;
        const t=pct(v1,p), count=v1.filter(v=>v<t).length;
        log(`   p${p}=${t} | count<${t}=${count}`); return count;
    }

    if (text.includes('percentile'))
        { const m=text.match(/(\d+)(st|nd|rd|th)\s+percentile/),p=m?Number(m[1]):50; const val=pct(v1,p); log(`   p${p}=${val}`); return val; }

    if (text.includes('interquartile') || text.includes('iqr'))
        { const iqr=pct(v1,75)-pct(v1,25); log(`   IQR=${iqr}`); return iqr; }

    if (text.includes('mean') || text.includes('average'))
        { const m=mean(v1); log(`   mean(${c1})=${m} → ${r2(m)}`); return r2(m); }

    if (text.includes('median'))
        { const m=median(v1); log(`   median(${c1})=${m}`); return m; }

    if (text.includes('standard deviation') || (text.includes('std') && !text.includes('std/mean')))
        { const s=std(v1); log(`   std(${c1})=${s} → ${r2(s)}`); return r2(s); }

    if (text.includes('variance'))
        { const v=std(v1)**2; log(`   variance(${c1})=${v} → ${r2(v)}`); return r2(v); }

    if (text.includes('range'))
        { const range=Math.max(...v1)-Math.min(...v1); log(`   range(${c1})=${range}`); return range; }

    if (text.includes('mode')) {
        const freq={}; v1.forEach(v=>freq[v]=(freq[v]||0)+1);
        const mode=Number(Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0]);
        log(`   mode(${c1})=${mode}`); return mode;
    }

    if (text.includes('maximum') || (text.includes('max') && !text.includes('maximum')))
        { const m=Math.max(...v1); log(`   max(${c1})=${m}`); return m; }

    if (text.includes('minimum') || (text.includes('min') && !text.includes('minimum')))
        { const m=Math.min(...v1); log(`   min(${c1})=${m}`); return m; }

    if (text.includes('sum') || text.includes('total'))
        { const s=v1.reduce((a,b)=>a+b,0); log(`   sum(${c1})=${s}`); return r2(s); }

    if (text.includes('unique') || text.includes('distinct'))
        { const u=new Set(v1).size; log(`   unique(${c1})=${u}`); return u; }

    if (text.includes('ratio'))
        { const ratio=mean(v1)/mean(v2); log(`   ratio=${ratio} → ${r2(ratio)}`); return r2(ratio); }

    if (text.includes('how many') || text.includes('count'))
        { log(`   count=${fragments.length}`); return fragments.length; }

    // ── UNKNOWN — print everything for manual help ────────────
    log(`\n${'='.repeat(60)}`);
    err('UNKNOWN QUESTION — needs manual calculation!');
    log(`\n📋 COPY EVERYTHING BELOW AND PASTE INTO CLAUDE AI:\n`);
    log(`Question : ${question.text}`);
    log(`Columns  : ${cols.join(', ')}`);
    log(`\nFragment data (${fragments.length} records):`);
    fragments.forEach(f => log(JSON.stringify(f)));
    log(`\nSession  : ${SESSION_TOKEN}`);
    log(`Submit   : fetch('${BASE}/submit',{method:'POST',headers:{'content-type':'application/json','x-session-token':'${SESSION_TOKEN}'},body:JSON.stringify({answer: PUT_ANSWER_HERE})})`);
    log(`${'='.repeat(60)}`);
    return null;
}

// ── MAIN ─────────────────────────────────────────────────────
log('='.repeat(60));
log('  Data Labyrinth — Universal Auto Solver v7');
log('='.repeat(60));

const startData = await startGame();
if (!startData) return;

const startRoom  = startData.current_room;
const startExits = await probeExits(startRoom);
const startRoomData = {
    room_id: startRoom, exits: startExits,
    has_item: false, item_collected: false, is_exit_room: false,
};

log(`\n🗺️  Exploring maze from room ${startRoom}...\n`);
await dfs(startRoom, startRoomData);

log(`\n${'='.repeat(60)}`);
log(`✅ Exploration done!`);
log(`   Rooms visited   : ${Object.keys(visited).length} / ${TOTAL}`);
log(`   Clean fragments : ${fragments.length}`);
log(`   Exit room       : ${exitRoom}`);
status();

const atExit = await navigateToExit();
if (!atExit) {
    err('Could not reach exit room! Navigate manually to exit room then run:');
    log(`fetch('${BASE}/submit',{method:'POST',headers:{'content-type':'application/json','x-session-token':'${SESSION_TOKEN}'},body:JSON.stringify({answer: YOUR_ANSWER})})`);
    return;
}

const answer = computeAnswer(QUESTION);
if (answer === null) return;

log(`\n📤 Submitting: ${answer} (${typeof answer})`);
const result = await submitAnswer(answer);
log(`\nResponse:\n${JSON.stringify(result, null, 2)}`);

const jwt = result.completion_token || result.jwt ||
            result.token || result.jwt_token;

if (jwt) {
    log(`\n${'='.repeat(60)}`);
    log(`🏆 SUCCESS! Score=${result.score} | Moves=${result.moves_used} | Wrong=${result.wrong_attempts}`);
    log(`\n📋 PASTE THIS TOKEN INTO THE SUBMISSION BOX:\n`);
    log(jwt);
    log(`${'='.repeat(60)}`);
} else if (result.error === 'wrong_answer') {
    err(`Wrong answer! Attempts left: ${result.attempts_remaining}`);
    warn(`Try manually with different rounding:`);
    log(`fetch('${BASE}/submit',{method:'POST',headers:{'content-type':'application/json','x-session-token':'${SESSION_TOKEN}'},body:JSON.stringify({answer: YOUR_ANSWER})})`);
    log(`\nFragments:`);
    fragments.forEach(f => log(JSON.stringify(f)));
} else {
    warn(`Unexpected: ${JSON.stringify(result)}`);
}

})();
