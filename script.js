/* Math Roast — plain JS, no framework. PRD v1.0 + user updates 2026-11-17:
   fixed 100-question pool (questions.js, no algebra), timer chosen per round
   (5/6/7/8s, default 8), name + contenders in localStorage, freaky flying
   meme faces, surprise roast, rainbow if round < 60s, rainbow horse
   (hamster on a unicorn) fly-across on any correct answer under 2 seconds,
   crying-chicken timeout meme with escalating chicken cry, quirky certificate
   + completion music on the result screen.
   AUDIO: Giphy mp4s are SILENT. Sound comes from (1) the meme's ONE paired
   mp3 (entry.audio in memes.js — 1-to-1, never a random sound from the
   category), (2) the SpeechSynthesis voice line if that meme has no mp3 yet.
   That meme + voice pairing is the heart of every reaction.
   A siren-type sting is only ONE optional surprise sound among others —
   it is NOT the focus and NOT required. Occasionally (about 1 reaction in 3)
   a short surprise sting plays too (audio/sfx/siren-01.mp3 or
   audio/sfx/airhorn-01.mp3 if present, else a synthesised blip), so a roast
   can still hit out of nowhere. Real meme audios: 39 MyInstants mp3s +
   chicken cry x2 + Ohmagaa, Anime Wow, Speed bark x2, Speed scream, SIU,
   hamster laugh, Among Us role reveal + emergency meeting, evil laugh,
   bomboclat, pigeon hook — all integrated 2026-11-17.
   Missing audio files NEVER break the game: every play is caught.
   SCHOOL-SAFE: roasts target the SCORE, never the person. No slurs, no
   racist content in any meme, line or sound. The pigeon hook on the result
   screen is a 7s cut of the clean hook only — the full song's crude verses
   are never played. */
'use strict';

/* ---------- pure logic (testable, no DOM) ---------- */
function applyAnswer(score, isCorrect) {
  // PRD §4, exactly. NOOB fires only when score is exactly 0 AND answer is wrong.
  if (isCorrect) return { score: Math.min(20, score + 2), kind: 'cheer' };
  if (score === 0) return { score: 0, kind: 'noob' };
  return { score: Math.max(0, score - 1), kind: 'roast' };
}
function verdictFor(score) {
  if (score === 20) return 'Perfect. Untouchable.';
  if (score >= 15) return 'Sharp. The memes barely got you.';
  if (score >= 10) return 'Decent — half hero, half meme material.';
  if (score >= 1) return 'The roast folder did most of the work.';
  return 'Full NOOB run. Respect for finishing.';
}
function sortContenders(list) {
  // Highest score first, then fastest time, then earliest entry.
  return list.slice().sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    if (a.timeSecs !== b.timeSecs) return a.timeSecs - b.timeSecs;
    return (a.at || 0) - (b.at || 0);
  });
}
function sampleRound(pool, n) {
  var copy = pool.slice();
  for (var i = copy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
  }
  return copy.slice(0, n);
}
function shuffledOptions(q) {
  var opts = q.options.slice();
  for (var i = opts.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = opts[i]; opts[i] = opts[j]; opts[j] = t;
  }
  return opts;
}
function pickMeme(list, lastPick) {
  if (!list || !list.length) return null;
  if (list.length === 1) return list[0];
  var m = list[Math.floor(Math.random() * list.length)];
  var tries = 0;
  while (m === lastPick && tries < 10) { m = list[Math.floor(Math.random() * list.length)]; tries++; }
  return m;
}
function cleanName(raw) {
  var n = String(raw || '').replace(/[<>&"']/g, '').trim().slice(0, 20);
  return n || 'Anonymous';
}
function beat60(timeSecs) { return timeSecs < 60; }
function fastAnswer(elapsedMs) { return elapsedMs < 2000; } // correct in under 2s -> rainbow horse flies across
function cryLevelFor(n) {
  // Chicken cry escalation, by CONSECUTIVE losses (wrong + timeouts in a row).
  // 1st loss: short cut (~1s). 2nd: longer (~2s). 3rd: longer + louder (~3s).
  // 4th loss and beyond: the LOUD "WAH" — the full loud cry file.
  if (n <= 0) return { capMs: 0, volume: 0, file: null };
  if (n === 1) return { capMs: 1000, volume: 0.7, file: 'audio/sfx/chicken-cry.mp3' };
  if (n === 2) return { capMs: 2000, volume: 0.85, file: 'audio/sfx/chicken-cry.mp3' };
  if (n === 3) return { capMs: 3000, volume: 1.0, file: 'audio/sfx/chicken-cry.mp3' };
  return { capMs: 6000, volume: 1.0, file: 'audio/sfx/chicken-cry-loud.mp3' };
}
function winErrFor(consecLosses, alreadyShown) {
  // WINDOWS ERROR trigger: 3rd consecutive wrong answer (answered, not a
  // timeout — timeouts keep their chicken), first time per round only.
  // At most once per round: it must stay a surprise, not a routine.
  return consecLosses === 3 && !alreadyShown;
}
function certificateFor(score) {
  // Quirky certificate titles, by score band. Roasts the SCORE, never the person.
  if (score === 0) return 'Certified NOOB';
  if (score <= 9) return 'Certified Almost-A-Mathematician';
  if (score <= 14) return 'Certified Decent Brain';
  if (score <= 17) return 'Certified Big Brain';
  return 'Certified 200 IQ Lit Man';
}
function completionMusicFor(score) {
  // Result-screen music, matched to the result. Great = fanfare, mid = cheer,
  // low = the pigeon hook (clean hook only — never the full song).
  if (score >= 15) return 'fanfare';
  if (score >= 10) return 'cheer';
  return 'pigeon';
}

var CHEER_LINES = [
  'YES! Nailed it!', 'BOOM! Genius!', 'Look at you go!', 'Correct! The crowd goes wild!',
  'Too easy for you!', 'Brain: ON. Roast: dodged.', 'That was beautiful maths!',
  'YESSS! Cheer time!', 'You actually did it!', 'Smart AND fast!'
];
var ROAST_LINES = [
  'Oh no. OH NO.', 'That was... a choice.', 'The maths just roasted YOU.',
  'Did you even read the question?', 'Wrong. Loudly wrong.', 'My grandma got that one.',
  'That answer hurt to watch.', 'Nope. Try thinking next time.', 'The meme folder is laughing.',
  'Idiot sandwich energy.'
];
var NOOB_LINES = [
  'NOOB! Zero points and proud of it!', 'NOOB ALERT! Sound the alarm!',
  'Zero. Zilch. NOOB!', 'You are officially a NOOB!', 'NOOB! The cat is disappointed.',
  'Full NOOB. Respect for finishing... badly.'
];
function randomLine(kind) {
  var list = kind === 'cheer' ? CHEER_LINES : kind === 'noob' ? NOOB_LINES : ROAST_LINES;
  return list[Math.floor(Math.random() * list.length)];
}

if (typeof window !== 'undefined') {
  window.MathRoast = { applyAnswer: applyAnswer, verdictFor: verdictFor, sortContenders: sortContenders, sampleRound: sampleRound, shuffledOptions: shuffledOptions, pickMeme: pickMeme, cleanName: cleanName, beat60: beat60, randomLine: randomLine, cryLevelFor: cryLevelFor, certificateFor: certificateFor, fastAnswer: fastAnswer, completionMusicFor: completionMusicFor, winErrFor: winErrFor };
}
if (typeof module !== 'undefined') {
  module.exports = { applyAnswer: applyAnswer, verdictFor: verdictFor, sortContenders: sortContenders, sampleRound: sampleRound, shuffledOptions: shuffledOptions, pickMeme: pickMeme, cleanName: cleanName, beat60: beat60, randomLine: randomLine, cryLevelFor: cryLevelFor, certificateFor: certificateFor, fastAnswer: fastAnswer, completionMusicFor: completionMusicFor, winErrFor: winErrFor };
}

/* ---------- browser app (only runs with a DOM) ---------- */
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}

// init() must run EXACTLY once: DOMContentLoaded can fire twice in some
// environments (jsdom fires it naturally AND a test harness may dispatch it),
// and a second run would register a second set of listeners — a second game
// state fighting the first over the same DOM (double sounds, double saves,
// wrong names). The guard makes the second call a no-op.
var __mathRoastInited = false;

function init() {
  if (__mathRoastInited) return;
  __mathRoastInited = true;
  var QUESTIONS = (typeof window !== 'undefined' && window.QUESTIONS) || (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []);
  var MEMES = (typeof window !== 'undefined' && window.MEMES) || (typeof MEMES !== 'undefined' ? MEMES : { cheering: [], roasting: [], noob: [] });

  var $ = function (id) { return document.getElementById(id); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var CONTENDERS_KEY = 'mathRoastContendersV1';
  var BEST_KEY = 'mathRoastBestV1';
  var SOUND_KEY = 'mathRoastSoundV1';

  var state = {
    name: 'Anonymous', timerLimit: 8, score: 0, qIndex: 0, questions: [],
    current: null, answered: false, timerId: null, timeLeft: 8, roundStart: 0,
    questionStart: 0, consecLosses: 0, winErrShown: false,
    streak: 0, bestStreak: store.get('mathRoastStreakBestV1', 0),
    soundOn: store.get(SOUND_KEY, true), lastCheer: null, lastRoast: null, lastNoob: null,
    lastTimeout: null,
    latestEntryId: null
  };

  /* ----- audio: paired mp3 -> named sting -> synth -> speech. Never throws. ----- */
  var audioCtx = null;
  function getAudioCtx() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    } catch (e) { return null; }
  }
  function synthSiren() { // sudden two-tone alarm, ~0.9s — the surprise
    try {
      var ctx = getAudioCtx(); if (!ctx) return;
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'square'; o.connect(g); g.connect(ctx.destination);
      var t = ctx.currentTime;
      g.gain.setValueAtTime(0.12, t);
      o.frequency.setValueAtTime(880, t);
      o.frequency.setValueAtTime(620, t + 0.22);
      o.frequency.setValueAtTime(880, t + 0.44);
      o.frequency.setValueAtTime(620, t + 0.66);
      o.start(t); o.stop(t + 0.9);
    } catch (e) {}
  }
  function synthSting() { // sudden happy ascending sting
    try {
      var ctx = getAudioCtx(); if (!ctx) return;
      var notes = [523, 659, 784, 1047];
      notes.forEach(function (f, i) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'triangle'; o.frequency.value = f; o.connect(g); g.connect(ctx.destination);
        var t = ctx.currentTime + i * 0.09;
        g.gain.setValueAtTime(0.14, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        o.start(t); o.stop(t + 0.4);
      });
    } catch (e) {}
  }
  var currentAudio = null; // the audio playing right now, if any
  function stopCurrentAudio() {
    // Cut playback: a few mp3s are longer than the 2-3s reaction overlay
    // (cheer-11 "Oh yeah" 14.73s, cheer-15 8.15s, cheer-13 applause 7.10s,
    // cheer-09 baby laugh 6.59s, roast-08 6.12s, noob-02 7.29s, siren 6.25s).
    // They must NEVER play whole — stop when the reaction advances.
    try {
      if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    } catch (e) {}
    currentAudio = null;
  }
  function tryPlayFile(path, capMs, volume) {
    // Returns a promise resolving true if the file actually played, false if missing.
    // Missing file = resolve false (NOT an error) so the game carries on.
    // capMs: stop playback after this many ms (reaction overlay is ~2.5s).
    return new Promise(function (resolve) {
      if (!state.soundOn) return resolve(false);
      try {
        var a = new Audio(path);
        if (volume != null) { try { a.volume = volume; } catch (e) {} }
        var done = false;
        var finish = function (ok) { if (!done) { done = true; resolve(ok); } };
        a.addEventListener('error', function () { finish(false); });
        a.addEventListener('canplay', function () {
          var p = a.play();
          // play() returns a Promise in every modern browser: resolve TRUE
          // when it plays, FALSE only if it rejects. (The old code only
          // resolved true when play() returned nothing — which never happens
          // — so every paired mp3 was wrongly followed 1.2s later by its
          // fallback: the voice line talking over the mp3, a sad trombone
          // after every chicken cry, a synth sting after the lobby sound.)
          if (p && p.then) p.then(function () { finish(true); }, function () { finish(false); });
          else finish(true);
        });
        a.load();
        currentAudio = a;
        if (capMs) setTimeout(function () { try { a.pause(); } catch (e) {} if (currentAudio === a) currentAudio = null; }, capMs);
        setTimeout(function () { finish(false); }, 1200); // file never arrived: fall back
      } catch (e) { resolve(false); }
    });
  }
  function speak(text) {
    if (!state.soundOn) return;
    try {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.rate = 1.15; u.pitch = 1.3; u.volume = 1;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }
  function playMemeAudio(entry) {
    // MEME + VOICE RESONANCE: the voice belongs to THIS meme. Play its real
    // paired mp3 (entry.audio, from MyInstants). SpeechSynthesis is now ONLY
    // the fallback if that mp3 is missing. Long clips are cut at ~2.6s.
    if (!entry) { return; }
    if (entry.audio) {
      tryPlayFile(entry.audio, 2600).then(function (played) {
        if (!played) speak(entry.voice);
      });
    } else {
      speak(entry.voice);
    }
  }
  function playAirhorn() {
    // Perfect round / under-60s rainbow finish: VERY LOUD AIRHORN (1.13s, plays whole).
    if (!state.soundOn) return;
    tryPlayFile('audio/sfx/airhorn-01.mp3', 3000).then(function (played) { if (!played) synthSting(); });
  }
  function playChickenCry(level, delayMs) {
    // The chicken cry, at the escalation level for this consecutive-loss count.
    // Plays after the meme's own sound (delayMs, default 700ms), so the two do
    // not talk over each other — except on a timeout, where the cry IS the
    // meme's sound and plays at once (delayMs 0). If the cry file is missing,
    // sad trombone takes its place with the same caps — the game never breaks.
    if (!state.soundOn || !level || !level.file) return;
    setTimeout(function () {
      tryPlayFile(level.file, level.capMs, level.volume).then(function (played) {
        if (!played) tryPlayFile('memes/roasting/roast-03.mp3', level.capMs, level.volume);
      });
    }, delayMs == null ? 700 : delayMs);
  }
  function playCompletionMusic(score) {
    // Result-screen music, matched to the result (see completionMusicFor).
    // 'pigeon' = the 7s clean-hook cut only (audio/sfx/pigeon-hook.mp3) —
    // the full song's crude verses are NEVER played at a school fest.
    if (!state.soundOn) return;
    var kind = completionMusicFor(score);
    if (kind === 'fanfare') {
      playAirhorn();
      tryPlayFile('memes/cheering/cheer-01.mp3', 3000).then(function (played) { if (!played) synthSting(); });
    } else if (kind === 'cheer') {
      tryPlayFile('memes/cheering/cheer-01.mp3', 3000).then(function (played) { if (!played) synthSting(); });
    } else {
      tryPlayFile('audio/sfx/pigeon-hook.mp3', 7000).then(function (played) {
        if (!played) tryPlayFile('memes/roasting/roast-03.mp3', 3000);
      });
    }
  }
  function playSurpriseSting(kind) {
    // Optional extra surprise, about 1 reaction in 3 — NOT the main sound.
    // The main sound is always the paired mp3 / voice line (see playMemeAudio).
    // One siren only (audio/sfx/siren-01.mp3, 6.25s — cut at 2.6s), used
    // sparingly as one surprise sting among others, plus the airhorn.
    if (!state.soundOn || Math.random() > 0.33) return;
    var pool = (kind === 'roast' || kind === 'noob')
      ? ['audio/sfx/siren-01.mp3', 'audio/sfx/airhorn-01.mp3', 'audio/sfx/siren-01.mp3']
      : ['audio/sfx/airhorn-01.mp3', 'audio/sfx/airhorn-01.mp3'];
    var file = pool[Math.floor(Math.random() * pool.length)];
    tryPlayFile(file, 2600).then(function (played) {
      if (played) return;
      if (kind === 'roast' || kind === 'noob') synthSiren(); else synthSting();
    });
  }
  function flashBody(kind) {
    // 2016 MLG colour flash: rapid hue shifts on the PAGE background only.
    // The game card stays solid white, so the question stays readable.
    var cls = kind === 'cheer' ? 'flash-cheer' : 'flash-roast';
    document.body.classList.remove('flash-cheer', 'flash-roast', 'flash-rainbow');
    void document.body.offsetWidth;
    document.body.classList.add(cls);
    setTimeout(function () { document.body.classList.remove(cls); }, 800);
  }

  /* ----- floating meme faces ----- */
  // Flying layer = reaction memes + the 2016 MLG tropes (Doritos, Mountain
  // Dew, Illuminati, FaZe, airhorn, Doge...). Entries are objects; mlg are plain paths.
  var allMemes = [].concat(
    (MEMES.cheering || []).map(function (e) { return e.file || e; }),
    (MEMES.roasting || []).map(function (e) { return e.file || e; }),
    (MEMES.noob || []).map(function (e) { return e.file || e; }),
    MEMES.mlg || []
  );
  function makeFloater(burst) {
    if (!allMemes.length) return;
    var layer = $('float-layer'); if (!layer) return;
    var path = allMemes[Math.floor(Math.random() * allMemes.length)];
    var el = path.toLowerCase().endsWith('.gif')
      ? document.createElement('img')
      : document.createElement('video');
    if (el.tagName === 'VIDEO') { el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true; }
    el.src = path; el.className = 'float-meme' + (burst ? ' burst' : '');
    var size = burst ? 90 + Math.random() * 90 : 60 + Math.random() * 90;
    el.style.width = size + 'px'; el.style.height = size + 'px';
    el.style.top = (5 + Math.random() * 80) + '%';
    el.style.left = burst ? (20 + Math.random() * 60) + '%' : '-15vw';
    if (!burst) {
      el.style.animationDuration = (18 + Math.random() * 26) + 's, ' + (1 + Math.random() * 2) + 's';
      el.style.animationDelay = (-Math.random() * 30) + 's, 0s';
    }
    layer.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, burst ? 1200 : 48000);
  }
  function startFloaters() {
    for (var i = 0; i < 12; i++) makeFloater(false);
    setInterval(function () { makeFloater(false); }, 6000);
    // 2016 MLG: swoopers from a different angle every few seconds.
    setInterval(function () { spawnSwooper(); }, 2600);
    // Jump-cut pops: a meme suddenly zooms in for a beat, then vanishes.
    setInterval(function () { spawnJumpPop(); }, 4200);
  }
  var SWOOP_DIRS = ['from-top', 'from-bottom', 'from-left', 'from-right', 'from-tl', 'from-tr', 'from-bl', 'from-br'];
  function spawnSwooper() {
    if (!allMemes.length) return;
    var layer = $('float-layer'); if (!layer) return;
    var path = allMemes[Math.floor(Math.random() * allMemes.length)];
    var el = path.toLowerCase().endsWith('.gif') ? document.createElement('img') : document.createElement('video');
    if (el.tagName === 'VIDEO') { el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true; }
    el.src = path;
    var dir = SWOOP_DIRS[Math.floor(Math.random() * SWOOP_DIRS.length)];
    el.className = 'swooper ' + dir;
    var size = 80 + Math.random() * 90;
    el.style.width = size + 'px'; el.style.height = size + 'px';
    // start position depends on direction: sides need a top, top/bottom need a left
    if (dir === 'from-left' || dir === 'from-right') el.style.top = (5 + Math.random() * 80) + '%';
    else if (dir === 'from-top' || dir === 'from-bottom') el.style.left = (5 + Math.random() * 80) + '%';
    el.style.animationDuration = (2.5 + Math.random() * 3) + 's';
    layer.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 6500);
  }
  function spawnJumpPop() {
    // Jump-cut: a meme pops/zooms in at a screen EDGE (never over the middle,
    // so it can never cover the answer buttons), holds a beat, then vanishes.
    if (!allMemes.length) return;
    var path = allMemes[Math.floor(Math.random() * allMemes.length)];
    var el = path.toLowerCase().endsWith('.gif') ? document.createElement('img') : document.createElement('video');
    if (el.tagName === 'VIDEO') { el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true; }
    el.src = path; el.className = 'jump-pop';
    var size = 110 + Math.random() * 70;
    el.style.width = size + 'px'; el.style.height = size + 'px';
    var spots = [
      { left: '2%', top: '12%' }, { left: '2%', top: '62%' },
      { right: '2%', top: '12%' }, { right: '2%', top: '62%' },
      { left: '42%', top: '2%' }, { left: '42%', bottom: '2%' }
    ];
    var spot = spots[Math.floor(Math.random() * spots.length)];
    Object.keys(spot).forEach(function (k) { el.style[k] = spot[k]; });
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 900);
  }
  function memeBurst() { for (var i = 0; i < 4; i++) setTimeout(function () { makeFloater(true); }, i * 90); }

  /* ----- screens ----- */
  function showScreen(id) {
    ['start-screen', 'lobby-screen', 'game-screen', 'result-screen', 'contenders-screen'].forEach(function (s) {
      $(s).classList.toggle('active', s === id);
    });
  }
  function renderBest() {
    var best = store.get(BEST_KEY, null);
    $('best-line').textContent = best
      ? 'Best on this laptop: ' + best.score + ' / 20 by ' + best.name + ' (' + best.timeSecs + 's)'
      : 'No rounds played yet on this laptop. Be the first.';
  }

  /* ----- round flow: start -> AMONG US LOBBY -> questions ----- */
  function playAmongUsStart() {
    // The Among Us starting sound — the imposter/start sting. This is its
    // main home (the lobby). The imposter reveal sting also stays paired to
    // the sus-crewmate roast meme inside the game. Missing file = synth sting.
    if (!state.soundOn) return;
    tryPlayFile('audio/sfx/amongus-start.mp3', 3000).then(function (played) { if (!played) synthSting(); });
  }
  function showLobby() {
    // Start screen -> lobby. Name + timer are locked in here; the round clock
    // does NOT start until LET ME IN, so the lobby never eats round time.
    stopCurrentAudio();
    state.name = cleanName($('player-name').value);
    $('lobby-timer').textContent = state.timerLimit;
    $('lobby-name').textContent = state.name === 'Anonymous' ? '' : state.name + ', you are in the lobby.';
    showScreen('lobby-screen');
    playAmongUsStart();
  }
  function startRound() {
    // LET ME IN -> Question 1. The round clock starts HERE.
    stopCurrentAudio();
    state.score = 0; state.qIndex = 0; state.streak = 0; state.consecLosses = 0; state.winErrShown = false;
    state.questions = sampleRound(QUESTIONS, 10);
    state.roundStart = Date.now();
    showScreen('game-screen');
    showQuestion();
  }
  function showQuestion() {
    state.current = state.questions[state.qIndex];
    state.answered = false;
    state.questionStart = Date.now();
    var q = state.current;
    $('q-count').textContent = 'Q ' + (state.qIndex + 1) + ' / 10';
    $('q-type').textContent = q.type.charAt(0).toUpperCase() + q.type.slice(1);
    $('score-now').textContent = 'Score: ' + state.score;
    $('streak-now').textContent = 'Streak: ' + state.streak;
    $('timer-limit-note').textContent = 'Timer: ' + state.timerLimit + 's per question — you chose it, no excuses.';
    $('question-text').textContent = q.text;
    var dots = $('progress-dots'); dots.innerHTML = '';
    for (var i = 0; i < 10; i++) {
      var d = document.createElement('span');
      d.className = 'dot' + (i < state.qIndex ? ' done' : i === state.qIndex ? ' now' : '');
      dots.appendChild(d);
    }
    var box = $('options'); box.innerHTML = '';
    shuffledOptions(q).forEach(function (opt, idx) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = opt;
      b.addEventListener('click', function () { answer(idx, opt); });
      box.appendChild(b);
    });
    startTimer();
  }
  function startTimer() {
    stopTimer();
    state.timeLeft = state.timerLimit;
    var started = Date.now();
    var tick = function () {
      var elapsed = (Date.now() - started) / 1000;
      state.timeLeft = Math.max(0, state.timerLimit - elapsed);
      $('timer-bar').style.width = (state.timeLeft / state.timerLimit * 100) + '%';
      $('timer-text').textContent = Math.ceil(state.timeLeft) + 's';
      if (state.timeLeft <= 0) { stopTimer(); answer(-1, null, true); }
    };
    tick();
    state.timerId = setInterval(tick, 100);
  }
  function stopTimer() { if (state.timerId) { clearInterval(state.timerId); state.timerId = null; } }

  function answer(idx, value, isTimeout) {
    if (state.answered) return;
    state.answered = true; stopTimer();
    var q = state.current;
    var isCorrect = value !== null && value === q.answer;
    var res = applyAnswer(state.score, isCorrect);
    var wasNoob = res.kind === 'noob';
    state.score = res.score;
    if (isCorrect) {
      state.streak++; if (state.streak > state.bestStreak) { state.bestStreak = state.streak; store.set('mathRoastStreakBestV1', state.bestStreak); }
      state.consecLosses = 0; // a correct answer resets the chicken-cry escalation
      // FAST correct answer (under 2s): the rainbow horse flies across!
      if (fastAnswer(Date.now() - state.questionStart)) flyRainbowHorse(false);
    }
    else { state.streak = 0; state.consecLosses++; }
    // mark buttons
    var btns = $('options').querySelectorAll('button');
    btns.forEach(function (b) {
      b.disabled = true;
      if (Number(b.textContent) === q.answer) b.classList.add('correct');
      if (idx >= 0 && b === btns[idx] && !isCorrect) b.classList.add('wrong-pick');
    });
    $('score-now').textContent = 'Score: ' + state.score;
    showReaction(res.kind, isCorrect, q, !!isTimeout);
  }

  function memeEl(entry) {
    var path = typeof entry === 'string' ? entry : entry.file;
    if (path.toLowerCase().endsWith('.gif')) {
      var img = document.createElement('img'); img.src = path; img.alt = 'meme'; return img;
    }
    var v = document.createElement('video');
    v.src = path; v.autoplay = true; v.loop = true; v.muted = true; v.playsInline = true;
    return v;
  }
  function showReaction(kind, isCorrect, q, isTimeout) {
    // SURPRISE: no warning, no build-up. Overlay pops instantly, sting hits now.
    // MEME + VOICE RESONANCE: the meme entry carries its own matching voice.
    // TIMEOUT: the crying chicken is the face of it — chicken meme + chicken cry.
    // The cry ESCALATES with consecutive losses (see cryLevelFor): on a normal
    // wrong answer the roast meme shows, but the cry still follows the count.
    if (isTimeout) kind = 'timeout';
    var meme, line, isWinErr = false;
    // WINDOWS ERROR: 3rd consecutive wrong answer (answered, not timeout),
    // first time per round — the fake BSOD + XP ding INSTEAD of the normal
    // roast. NOOB reactions and timeouts keep their own memes.
    if (kind === 'roast' && !isTimeout && winErrFor(state.consecLosses, state.winErrShown)) {
      isWinErr = true; state.winErrShown = true;
      meme = MEMES.winError[0]; line = meme.voice;
    }
    else if (kind === 'cheer') { meme = pickMeme(MEMES.cheering, state.lastCheer); state.lastCheer = meme; }
    else if (kind === 'noob') { meme = pickMeme(MEMES.noob, state.lastNoob); state.lastNoob = meme; }
    else if (kind === 'timeout') { meme = pickMeme(MEMES.timeout, state.lastTimeout); state.lastTimeout = meme; }
    else { meme = pickMeme(MEMES.roasting, state.lastRoast); state.lastRoast = meme; }
    if (!isWinErr) line = meme ? meme.voice : randomLine(kind === 'timeout' ? 'roast' : kind);
    var cryLevel = cryLevelFor(state.consecLosses);
    if (isTimeout) {
      // The chicken cry IS this meme's paired sound — played at the escalated
      // length/volume, not the plain 2.6s meme cap. No record scratch anymore.
      playChickenCry(cryLevel, 0);
    } else {
      if (!isWinErr) playSurpriseSting(kind); // the XP ding IS the sting for the Windows error
      if (meme) playMemeAudio(meme); else speak(line);
      if (kind !== 'cheer') playChickenCry(cryLevel, 700); // cry follows the loss count
    }
    flashBody(kind); // 2016 MLG colour flash around the (still readable) card
    if (kind !== 'cheer') { document.body.classList.add('shake'); memeBurst(); spawnSwooper(); spawnSwooper(); setTimeout(function () { document.body.classList.remove('shake'); }, 500); }
    else { spawnJumpPop(); }

    var r = $('reaction');
    $('reaction-kind').textContent = isWinErr ? 'ERROR!' : kind === 'cheer' ? 'CORRECT!' : kind === 'noob' ? 'NOOB!' : kind === 'timeout' ? "TIME'S UP!" : 'ROASTED!';
    $('reaction-kind').className = kind;
    var mm = $('reaction-meme'); mm.innerHTML = '';
    if (meme) mm.appendChild(memeEl(meme));
    $('reaction-line').textContent = line;
    $('reaction-answer').textContent = isCorrect ? '' : 'Correct answer was ' + q.answer + '.';
    r.classList.remove('hidden');
    r.classList.add('surprise');
    setTimeout(function () {
      stopCurrentAudio(); // long clips never play past the reaction overlay
      r.classList.add('hidden'); r.classList.remove('surprise');
      state.qIndex++;
      if (state.qIndex < 10) showQuestion(); else finishRound();
    }, 2500);
  }

  function finishRound() {
    var timeSecs = Math.round((Date.now() - state.roundStart) / 1000);
    var fast = beat60(timeSecs);
    var entry = {
      id: Date.now() + '-' + Math.floor(Math.random() * 10000),
      name: state.name, score: state.score, timeSecs: timeSecs,
      timerLimit: state.timerLimit, beat60: fast,
      verdict: verdictFor(state.score), at: Date.now(),
      date: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
    };
    var list = store.get(CONTENDERS_KEY, []);
    list.push(entry); store.set(CONTENDERS_KEY, list);
    state.latestEntryId = entry.id;
    var best = store.get(BEST_KEY, null);
    if (!best || state.score > best.score || (state.score === best.score && timeSecs < best.timeSecs)) {
      store.set(BEST_KEY, { name: entry.name, score: entry.score, timeSecs: timeSecs });
    }
    var sorted = sortContenders(list);
    var rank = sorted.findIndex(function (e) { return e.id === entry.id; }) + 1;

    $('result-title').textContent = state.score === 20 ? 'PERFECT!' : state.score === 0 ? 'FULL NOOB!' : 'DONE!';
    $('result-name').textContent = state.name + ' — you played at ' + state.timerLimit + 's per question.';
    $('final-score').textContent = state.score;
    $('result-verdict').textContent = verdictFor(state.score);
    $('result-time').textContent = 'Time: ' + timeSecs + ' seconds' + (fast ? ' — under 60!' : '');
    $('result-rank').textContent = 'You are #' + rank + ' of ' + list.length + ' contender' + (list.length === 1 ? '' : 's') + '.';
    $('rainbow-note').textContent = fast ? 'RAINBOW! You beat 60 seconds!' : 'Beat 60 seconds next time for the rainbow.';
    // Quirky certificate (just for fun — a joke certificate, not a real one).
    $('cert-title').textContent = certificateFor(state.score);
    $('cert-name').textContent = state.name;
    $('cert-score').textContent = state.score + ' / 20';
    $('cert-time').textContent = timeSecs + 's';
    $('cert-timer').textContent = state.timerLimit + 's per question';
    $('cert-date').textContent = entry.date;
    var cm = $('cert-meme'); cm.innerHTML = '';
    var certMeme = state.score === 0 ? pickMeme(MEMES.noob, null)
      : state.score >= 18 ? pickMeme(MEMES.cheering, null)
      : state.score >= 10 ? pickMeme(MEMES.cheering, null)
      : pickMeme(MEMES.roasting, null);
    if (certMeme) cm.appendChild(memeEl(certMeme));
    var rm = $('result-meme'); rm.innerHTML = '';
    var finalMeme = state.score >= 10
      ? pickMeme(MEMES.cheering, null)
      : (state.score === 0 ? pickMeme(MEMES.noob, null) : pickMeme(MEMES.roasting, null));
    if (finalMeme) rm.appendChild(memeEl(finalMeme));
    showScreen('result-screen');
    if (fast) fireRainbow();
    playCompletionMusic(state.score); // fanfare / cheer / pigeon hook, by band
    renderBest();
  }

  function flyRainbowHorse(big) {
    // THE RAINBOW HORSE: the white hamster riding a cartoon unicorn under a
    // rainbow flies ACROSS the screen, right OVER / THROUGH the question area,
    // with a LOT of rainbow sparkling around it. ~1.8s. pointer-events: none,
    // so it can NEVER block the question text or the answer buttons — the
    // sweep passes over them and is gone. Two triggers: (a) a correct answer
    // in under 2 seconds (small, big=false), (b) finishing the whole round
    // in under 60 seconds (big=true, with the banner + confetti too).
    var layer = $('rainbow-horse-layer'); if (!layer || !MEMES.rainbow || !MEMES.rainbow.length) return;
    var path = MEMES.rainbow[Math.floor(Math.random() * MEMES.rainbow.length)];
    var el = document.createElement('video');
    el.src = path; el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true;
    el.className = 'rainbow-horse' + (big ? ' big' : '');
    layer.appendChild(el);
    spawnSparkles(big ? 22 : 14);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2000);
  }
  function spawnSparkles(n) {
    // Rainbow sparkle trail around the flying horse: little coloured stars
    // scattered across the middle of the screen, twinkling out in ~1.5s.
    var colours = ['#ff0000', '#ff7f00', '#ffee00', '#00e500', '#0088ff', '#7a00ff', '#ff2e88', '#ffffff'];
    for (var i = 0; i < n; i++) {
      var s = document.createElement('div');
      s.className = 'sparkle';
      s.textContent = Math.random() < 0.5 ? '✦' : '★';
      s.style.left = (5 + Math.random() * 90) + '%';
      s.style.top = (15 + Math.random() * 60) + '%';
      s.style.color = colours[i % colours.length];
      s.style.fontSize = (18 + Math.random() * 26) + 'px';
      s.style.animationDelay = (Math.random() * 0.9) + 's';
      document.body.appendChild(s);
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1800); })(s);
    }
  }

  function fireRainbow() {
    document.body.classList.add('flash-rainbow');
    setTimeout(function () { document.body.classList.remove('flash-rainbow'); }, 2600);
    var r = $('rainbow');
    r.classList.remove('go'); void r.offsetWidth; r.classList.add('go');
    flyRainbowHorse(true); // the hamster on the unicorn flies across, sparkling
    for (var s = 0; s < 3; s++) setTimeout(spawnSwooper, s * 400);
    var c = $('confetti'); c.innerHTML = '';
    var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', '#ff2e88'];
    for (var i = 0; i < 60; i++) {
      var bit = document.createElement('div');
      bit.className = 'confetti-bit';
      bit.style.left = Math.random() * 100 + '%';
      bit.style.background = colours[i % colours.length];
      bit.style.animationDuration = (2 + Math.random() * 2) + 's';
      bit.style.animationDelay = (Math.random() * 1.5) + 's';
      c.appendChild(bit);
    }
    setTimeout(function () { c.innerHTML = ''; }, 5000);
  }

  /* ----- contenders ----- */
  function renderContenders() {
    var list = sortContenders(store.get(CONTENDERS_KEY, []));
    var body = $('contenders-body'); body.innerHTML = '';
    var fastest = list.length ? Math.min.apply(null, list.map(function (e) { return e.timeSecs; })) : null;
    $('contenders-empty').style.display = list.length ? 'none' : 'block';
    $('contenders-summary').textContent = list.length
      ? list.length + ' contender' + (list.length === 1 ? '' : 's') + ' — fastest round: ' + fastest + 's.'
      : '';
    list.forEach(function (e, i) {
      var tr = document.createElement('tr');
      if (i < 3) tr.classList.add('top3');
      if (e.timeSecs === fastest) tr.classList.add('fastest');
      if (e.id === state.latestEntryId) tr.classList.add('me');
      var medal = i === 0 ? '🥇 ' : i === 1 ? '🥈 ' : i === 2 ? '🥉 ' : '';
      tr.innerHTML = '<td>' + medal + (i + 1) + '</td><td>' + e.name + '</td><td>' + e.score + ' / 20</td><td>' + e.timeSecs + 's</td><td>' + e.timerLimit + 's</td><td>' + (e.beat60 ? '<span class="badge">BEAT 60s 🌈</span>' : '') + '</td><td>' + e.date + '</td>';
      body.appendChild(tr);
    });
  }

  /* ----- wiring ----- */
  var timerBtns = document.querySelectorAll('#timer-pick button');
  timerBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      timerBtns.forEach(function (x) { x.classList.remove('selected'); });
      b.classList.add('selected');
      state.timerLimit = Number(b.dataset.secs);
    });
  });
  $('play-btn').addEventListener('click', function () { getAudioCtx(); showLobby(); });
  $('let-me-in-btn').addEventListener('click', startRound);
  $('play-again-btn').addEventListener('click', showLobby);
  $('home-btn').addEventListener('click', function () { showScreen('start-screen'); renderBest(); });
  $('contenders-btn').addEventListener('click', function () { renderContenders(); showScreen('contenders-screen'); });
  $('result-contenders-btn').addEventListener('click', function () { renderContenders(); showScreen('contenders-screen'); });
  $('back-btn').addEventListener('click', function () { showScreen('start-screen'); });
  var clearArmed = false;
  $('clear-contenders-btn').addEventListener('click', function () {
    if (!clearArmed) {
      clearArmed = true; $('clear-contenders-btn').textContent = 'SURE? TAP AGAIN TO CLEAR';
      setTimeout(function () { clearArmed = false; $('clear-contenders-btn').textContent = 'CLEAR CONTENDERS'; }, 4000);
      return;
    }
    store.set(CONTENDERS_KEY, []); clearArmed = false;
    $('clear-contenders-btn').textContent = 'CLEAR CONTENDERS';
    renderContenders();
  });
  $('sound-toggle').addEventListener('click', function () {
    state.soundOn = !state.soundOn;
    store.set(SOUND_KEY, state.soundOn);
    $('sound-toggle').textContent = state.soundOn ? 'SOUND: ON' : 'SOUND: OFF';
    if (!state.soundOn && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  });
  document.addEventListener('keydown', function (e) {
    if (!$('game-screen').classList.contains('active') || state.answered) return;
    var n = Number(e.key);
    if (n >= 1 && n <= 4) {
      var btns = $('options').querySelectorAll('button');
      if (btns[n - 1]) btns[n - 1].click();
    }
  });
  $('player-name').addEventListener('keydown', function (e) { if (e.key === 'Enter') { getAudioCtx(); showLobby(); } });

  $('sound-toggle').textContent = state.soundOn ? 'SOUND: ON' : 'SOUND: OFF';
  renderBest();
  startFloaters();
}
