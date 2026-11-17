// Math Roast — meme index (PRD §5) — MEME + VOICE RESONANCE.
// ============================================================================
// CHANGE A PAIRING HERE — ONE LINE PER MEME.
// Every reaction meme is ONE entry: { file, voice, audio }.
//   file  = the meme video (GIPHY/Tenor mp4, or a Pinterest still converted
//           to mp4). GIPHY mp4s are SILENT — the sound comes from `audio`.
//   voice = the short line spoken/shown for THAT meme's feeling. A cheer meme
//           only ever gets its cheer voice, a roast meme only its roast voice,
//           NOOB only NOOB. Never pair a random voice with a random meme.
//   audio = the ONE MyInstants mp3 that matches THAT meme (1-to-1 pairing).
//           When the meme shows, ONLY its paired sound plays — never a random
//           sound from the same category. Only the meme choice is random.
//           audio = null -> the game speaks entry.voice with SpeechSynthesis
//           (fallback only, for that meme alone — never force a mismatched
//           sound onto a meme).
// It is NOT always the same base number: e.g. cheer-09 (DiCaprio slow clap)
// plays cheer-13.mp3 (Applause), roast-01 (Ramsay) plays roast-15.mp3 (FAAAH),
// roast-20 (Doge Emotional Damage) plays roast-05.mp3 (EMOTIONAL DAMAGE).
// timeout = the crying-chicken meme, shown ONLY when the timer runs out.
// rainbow = the hamster-on-a-unicorn fly-across visuals (see script.js
//           flyRainbowHorse): under-60s round finish, and any correct answer
//           given in under 2 seconds.
// mlg = 2016 MLG flying layer (Doritos, Mountain Dew, Illuminati, FaZe,
//       airhorn, Doge, thug skull, Snoop, hamster) — floaters/swoopers/jump-pops.
// Dropped as weak: cheer-04 (tiny generic happy cat), roast-17 (generic stare),
// roast-11 (Mocking SpongeBob 2, duplicate of roast-10 — file deleted).
// Spare sound: roast-09.mp3 (Oh Hell No) is currently unpaired — it was
// roast-11's pair before roast-11 was deleted. Pair it to a future meme here.
// SpongeBob cap (user rule): max ~4-5 SpongeBob memes total. Current count is
// exactly 5: cheer-11, cheer-12, cheer-13, roast-10, roast-12. Do not add more.
// Audio integrated 2026-11-17: 39 MyInstants mp3s + chicken cry x2 + Ohmagaa,
// Anime Wow, Speed bark x2, Speed scream, SIU, hamster laugh, Among Us role
// reveal + emergency meeting, evil laugh, bomboclat, pigeon hook (sfx).
const MEMES = {
  "cheering": [
    { "file": "memes/cheering/cheer-01.mp4", "voice": "Let's go! That cat is dancing because YOU got it right!", "audio": "memes/cheering/cheer-10.mp3" },
    { "file": "memes/cheering/cheer-02.mp4", "voice": "Birthday dance! You did it!", "audio": "memes/cheering/cheer-07.mp3" },
    { "file": "memes/cheering/cheer-03.mp4", "voice": "Party cat says: correct!", "audio": "memes/cheering/cheer-03.mp3" },
    { "file": "memes/cheering/cheer-05.mp4", "voice": "Nailed it! Fist pump!", "audio": "memes/cheering/cheer-05.mp3" },
    { "file": "memes/cheering/cheer-06.mp4", "voice": "Yes! Nailed it, just like that!", "audio": "memes/cheering/cheer-06.mp3" },
    { "file": "memes/cheering/cheer-07.mp4", "voice": "The baby is laughing WITH you — you got it!", "audio": "memes/cheering/cheer-09.mp3" },
    { "file": "memes/cheering/cheer-08.mp4", "voice": "Cheers! Leo is toasting your brain!", "audio": "memes/cheering/cheer-04.mp3" },
    { "file": "memes/cheering/cheer-09.mp4", "voice": "Slow clap. Well played.", "audio": "memes/cheering/cheer-13.mp3" },
    { "file": "memes/cheering/cheer-10.mp4", "voice": "YES! Look at that win!", "audio": "memes/cheering/cheer-02.mp3" },
    { "file": "memes/cheering/cheer-11.mp4", "voice": "SpongeBob and Patrick are celebrating YOU!", "audio": "memes/cheering/cheer-14.mp3" },
    { "file": "memes/cheering/cheer-12.mp4", "voice": "SpongeBob dance! Correct!", "audio": "memes/cheering/cheer-12.mp3" },
    { "file": "memes/cheering/cheer-13.mp4", "voice": "Happy dance! You got it!", "audio": "memes/cheering/cheer-08.mp3" },
    { "file": "memes/cheering/cheer-14.mp4", "voice": "The whole Minion crowd is cheering for you!", "audio": "memes/cheering/cheer-01.mp3" },
    { "file": "memes/cheering/cheer-15.mp4", "voice": "Yaaaay! You did it!", "audio": "memes/cheering/cheer-15.mp3" },
    { "file": "memes/cheering/cheer-16.mp4", "voice": "Woohoo! Homer approves!", "audio": "memes/cheering/cheer-11.mp3" },
    { "file": "memes/cheering/cheer-17.mp4", "voice": "Pikachu says: you did it!", "audio": null },
    { "file": "memes/cheering/cheer-18.mp4", "voice": "Pikachu gives you a peace sign. Correct!", "audio": null },
    { "file": "memes/cheering/cheer-19.mp4", "voice": "Snoop says yes. Yes indeed.", "audio": null },
    { "file": "memes/cheering/cheer-20.mp4", "voice": "Snoop is dancing — you won that one!", "audio": null },
    { "file": "memes/cheering/cheer-21.mp4", "voice": "Puppy Monkey Baby is dancing for you. Correct!", "audio": null },
    { "file": "memes/cheering/cheer-22.mp4", "voice": "Oh my God! You actually got it!", "audio": null },
    { "file": "memes/cheering/cheer-23.mp4", "voice": "Let's go! FaZe would be proud!", "audio": null },
    { "file": "memes/cheering/cheer-24.mp4", "voice": "Mr Bean is laughing! You got it right!", "audio": null },
    { "file": "memes/cheering/cheer-25.mp4", "voice": "Mind. Blown. You actually got that right!", "audio": null },
    { "file": "memes/cheering/cheer-26.mp4", "voice": "Thumbs up from Iron Man himself. Nice.", "audio": null },
    { "file": "memes/cheering/cheer-27.mp4", "voice": "Oh my God! Oh my G-W-A-D! You got it!", "audio": "memes/cheering/cheer-27.mp3" },
    { "file": "memes/cheering/cheer-28.mp4", "voice": "Woooow! The rabbit is impressed. So are we.", "audio": "memes/cheering/cheer-28.mp3" },
    { "file": "memes/cheering/cheer-29.mp4", "voice": "Speed is SPEECHLESS. You broke him.", "audio": "memes/cheering/cheer-29.mp3" },
    { "file": "memes/cheering/cheer-30.mp4", "voice": "Speed is clapping for you. Take the win.", "audio": null },
    { "file": "memes/cheering/cheer-31.mp4", "voice": "Speed is dancing. You earned this.", "audio": null },
    { "file": "memes/cheering/cheer-32.mp4", "voice": "Pancake the hamster is LAUGHING with you. Correct!", "audio": "memes/cheering/cheer-32.mp3" },
    { "file": "memes/cheering/cheer-33.mp4", "voice": "SIUUU! Ronaldo would be proud.", "audio": "memes/cheering/cheer-33.mp3" }
  ],
  "roasting": [
    { "file": "memes/roasting/roast-01.mp4", "voice": "What are you doing? Idiot sandwich!", "audio": "memes/roasting/roast-15.mp3" },
    { "file": "memes/roasting/roast-02.mp4", "voice": "Ramsay is judging that answer. Harshly.", "audio": null },
    { "file": "memes/roasting/roast-03.gif", "voice": "Picard facepalmed. That was that bad.", "audio": null },
    { "file": "memes/roasting/roast-04.mp4", "voice": "No! Michael Scott says no!", "audio": "memes/roasting/roast-08.mp3" },
    { "file": "memes/roasting/roast-05.mp4", "voice": "Grumpy Cat is not impressed. At all.", "audio": "memes/roasting/roast-01.mp3" },
    { "file": "memes/roasting/roast-06.mp4", "voice": "Grumpy Cat is tired of your answers.", "audio": null },
    { "file": "memes/roasting/roast-07.mp4", "voice": "Grumpy Cat is ANGRY now.", "audio": "memes/roasting/roast-13.mp3" },
    { "file": "memes/roasting/roast-08.mp4", "voice": "D'oh! Homer facepalmed for you.", "audio": "memes/roasting/roast-03.mp3" },
    { "file": "memes/roasting/roast-09.mp4", "voice": "D'oh! Wrong again!", "audio": null },
    { "file": "memes/roasting/roast-10.mp4", "voice": "Oh, you thought that was right? Mocking SpongeBob disagrees.", "audio": "memes/roasting/roast-02.mp3" },
    { "file": "memes/roasting/roast-12.mp4", "voice": "World's smallest violin, playing just for that answer.", "audio": "memes/roasting/roast-04.mp3" },
    { "file": "memes/roasting/roast-13.mp4", "voice": "That cat is judging you. Hard.", "audio": "memes/roasting/roast-14.mp3" },
    { "file": "memes/roasting/roast-14.mp4", "voice": "Kermit says no. Just no.", "audio": null },
    { "file": "memes/roasting/roast-15.mp4", "voice": "Kermit is done with you.", "audio": "memes/roasting/roast-12.mp3" },
    { "file": "memes/roasting/roast-16.mp4", "voice": "That cat is glaring at your answer.", "audio": "memes/roasting/roast-10.mp3" },
    { "file": "memes/roasting/roast-18.mp4", "voice": "Snoop just looked at that answer like... really?", "audio": "memes/roasting/roast-07.mp3" },
    { "file": "memes/roasting/roast-19.mp4", "voice": "Deal with it. Thug life chose that answer.", "audio": null },
    { "file": "memes/roasting/roast-20.mp4", "voice": "Emotional damage! Doge is crying for you.", "audio": "memes/roasting/roast-05.mp3" },
    { "file": "memes/roasting/roast-21.mp4", "voice": "The Illuminati saw that answer. They are watching you.", "audio": "memes/roasting/roast-06.mp3" },
    { "file": "memes/roasting/roast-22.mp4", "voice": "Thug life. That answer was not it.", "audio": null },
    { "file": "memes/roasting/roast-23.mp4", "voice": "Mr Bean is panicking at the exam desk. Same, Bean. Same.", "audio": null },
    { "file": "memes/roasting/roast-24.mp4", "voice": "Mr Bean is SHOCKED. So is everyone.", "audio": null },
    { "file": "memes/roasting/roast-25.mp4", "voice": "Mr Bean saw that answer. He is not impressed.", "audio": null },
    { "file": "memes/roasting/roast-26.mp4", "voice": "He is SHOCKED. Hands on head. That answer did that.", "audio": "memes/roasting/roast-11.mp3" },
    { "file": "memes/roasting/roast-27.mp4", "voice": "Sike! That's the wrong number!", "audio": null },
    { "file": "memes/roasting/roast-28.mp4", "voice": "Slow clap. Wow. That was... something.", "audio": null },
    { "file": "memes/roasting/roast-29.mp4", "voice": "Kurt Angle is just... staring. Say nothing.", "audio": null },
    { "file": "memes/roasting/roast-30.mp4", "voice": "Doakes is watching. He knows. He always knows.", "audio": null },
    { "file": "memes/roasting/roast-31.mp4", "voice": "Speed is BARKING at your answer.", "audio": "memes/roasting/roast-31.mp3" },
    { "file": "memes/roasting/roast-32.mp4", "voice": "BARK BARK. That's what your answer deserved.", "audio": "memes/roasting/roast-32.mp3" },
    { "file": "memes/roasting/roast-33.mp4", "voice": "Speed is crying. Beautiful. Tragic, but beautiful.", "audio": null },
    { "file": "memes/roasting/roast-34.mp4", "voice": "Speed is LAUGHING at you. Not with you. At you.", "audio": null },
    { "file": "memes/roasting/roast-35.mp4", "voice": "Even the dog is judging that answer.", "audio": null },
    { "file": "memes/roasting/roast-36.mp4", "voice": "When you're in math and you just don't know. Same.", "audio": null },
    { "file": "memes/roasting/roast-37.mp4", "voice": "He is crying. Your score did that.", "audio": null },
    { "file": "memes/roasting/roast-38.mp4", "voice": "Red is SUS. And so is that answer.", "audio": "memes/roasting/roast-38.mp3" },
    { "file": "memes/roasting/roast-39.mp4", "voice": "Someone is wearing the imposter suit. It's your answer.", "audio": null },
    { "file": "memes/roasting/roast-40.mp4", "voice": "EMERGENCY MEETING. Your answer was that bad.", "audio": "memes/roasting/roast-40.mp3" },
    { "file": "memes/roasting/roast-41.mp4", "voice": "MUHAHAHA. The cat is laughing at your maths.", "audio": "memes/roasting/roast-41.mp3" },
    { "file": "memes/roasting/roast-42.mp4", "voice": "The kitten is SHOCKED. So is everyone.", "audio": null },
    { "file": "memes/roasting/roast-43.mp4", "voice": "The hamster is FURIOUS at that answer.", "audio": null },
    { "file": "memes/roasting/roast-44.mp4", "voice": "Bomboclat! That answer was NOT it.", "audio": "memes/roasting/roast-44.mp3" }
  ],
  "noob": [
    { "file": "memes/roasting/noob-01.mp4", "voice": "Noob! Where even are you right now?", "audio": "memes/roasting/noob-01.mp3" },
    { "file": "memes/roasting/noob-02.mp4", "voice": "Noob! Still lost, I see.", "audio": "memes/roasting/noob-05.mp3" },
    { "file": "memes/roasting/noob-03.mp4", "voice": "Noob! That cat fell harder than your score.", "audio": "memes/roasting/noob-03.mp3" },
    { "file": "memes/roasting/noob-04.mp4", "voice": "Noob! You tried. You failed. Classic.", "audio": "memes/roasting/noob-04.mp3" },
    { "file": "memes/roasting/noob-05.mp4", "voice": "Noob! Doge does not even care anymore.", "audio": "memes/roasting/noob-02.mp3" },
    { "file": "memes/roasting/noob-06.mp4", "voice": "Noob! Even Doge is walking away from that one.", "audio": "memes/roasting/noob-06.mp3" }
  ],
  "timeout": [
    { "file": "memes/timeout/chicken-tree.mp4", "voice": "Time's up! The chicken on the tree is crying for you.", "audio": "audio/sfx/chicken-cry.mp3" }
  ],
  // winError = the fake Windows error screen, shown ONLY on the 3rd consecutive
  // wrong answer (first time per round, at most once per round) — a surprise
  // roast, NOT part of the normal roast pool. Paired with the XP error ding.
  "winError": [
    { "file": "memes/roasting/win-error.mp4", "voice": "Error: Brain not found. Please restart your brain and try again.", "audio": "audio/sfx/windows-xp-error.mp3" }
  ],
  "rainbow": [
    "memes/rainbow/rainbow-horse-01.mp4",
    "memes/rainbow/rainbow-horse-02.mp4"
  ],
  "mlg": [
    "memes/mlg/mlg-01-doritos.mp4",
    "memes/mlg/mlg-02-doritos-nacho.mp4",
    "memes/mlg/mlg-03-mtn-dew.mp4",
    "memes/mlg/mlg-04-mtn-dew-kickstart.mp4",
    "memes/mlg/mlg-05-illuminati.mp4",
    "memes/mlg/mlg-06-illuminati-eye.mp4",
    "memes/mlg/mlg-07-faze-logo.mp4",
    "memes/mlg/mlg-08-faze.mp4",
    "memes/mlg/mlg-09-airhorn.mp4",
    "memes/mlg/mlg-10-airhorn.mp4",
    "memes/mlg/mlg-11-doge-proud.mp4",
    "memes/mlg/mlg-12-doge.mp4",
    "memes/mlg/mlg-13-thug-skull.mp4",
    "memes/mlg/mlg-14-snoop-swag.mp4",
    "memes/mlg/mlg-15-oh-my-god.mp4",
    "memes/mlg/mlg-16-mtn-dew-oh-yeah.mp4",
    "memes/mlg/mlg-17-hamster-laugh.mp4",
    "memes/mlg/mlg-18-hamster-rainbow.mp4"
  ]
};
if (typeof window !== "undefined") window.MEMES = MEMES;
if (typeof module !== "undefined") module.exports = MEMES;
