# GDD – DRAFT (awaiting owner's concept pick)

## Concept candidates

Scores 1–5 per market rule. "Risk" = what could make it fail.

| Rule | A. Counter Champ (boxing parry) | B. Ring Rush (boxing two-side brawler) | C. Drift Hook (one-tap car drift) |
|---|---|---|---|
| Fun in 10 s, teach by play | 4 | 5 | 4 |
| "One more try", 30–120 s runs | 5 | 4 | 5 |
| One-thumb / one-key | 4 (two zones) | 4 (two zones) | 5 (hold) |
| Portrait + landscape | 5 | 4 (wide is easier) | 4 |
| Tiny / procedural | 5 | 5 | 5 |
| Juice potential | 5 | 5 | 4 |
| PEGI 12 safe | 5 | 5 | 5 |
| Clean consistent style | 5 | 4 (many enemies) | 5 |
| Stands out on portals | 4 | 3 (many clones) | 3 (many clones) |
| Natural ad breaks | 5 (between opponents) | 3 (only game over) | 3 (only game over) |
| **Total** | **47** | **42** | **43** |

**A. Counter Champ** – You face one cartoon boxer. He winds up a left or right punch; a
shrinking ring on that glove shows the timing. Tap that side as the ring closes: *Perfect* =
parry + automatic counter (big hit, hit-stop, combo up). *Early/late* = block (small score, combo
lost). *Miss* = you get hit (lose 1 of 3 hearts). Counters fill his KO bar; KO → next, faster
opponent with new tricks (feints, double punches). Risk: timing games punish new players; fixed by
a slow first opponent with huge telegraphs.

**B. Ring Rush** – Punching bags / cartoon sparring dummies slide in from left and right; tap the
side to jab the nearest one. Speed ramps, combos for streaks, punching too early leaves you open.
Proven loop (Timberman / One Finger Death Punch style), instantly readable, but crowded and has no
built-in round breaks.

**C. Drift Hook** – Top-down car; hold to hook onto the nearest pin and drift around it, release
to shoot straight. Pass through gates, don't leave the track. Very satisfying one-input feel, but
genre is crowded and needs more tuning time for the physics.

**Recommendation: A. Counter Champ.** Your boxing idea, the most distinctive on portals, one
character to draw (consistent style, tiny), and the opponent ladder gives natural ad breaks and
small unlocks for free. Dodge is folded into the parry tap to keep it one-thumb; a real dodge can
be added later if playtests want more depth.

---

## Concept: Counter Champ (draft)
Cartoon reflex boxing. Read the punch, tap at the perfect moment, land the counter, chain combos,
knock out a ladder of rivals. Each run: 30–120 s.

## Core loop
1. Opponent idles and bobs (0.4–1.2 s), then telegraphs: glove pulls back and glows, timing
   ring shrinks onto it.
2. Player taps the side of that glove. Judgement by timing window:
   Perfect (±70 ms → shrinks with level) → parry + counter, +100 × combo, KO bar fills.
   Good (±160 ms) → block, +20, combo resets. Wrong side / no tap → hit, lose a heart, shake.
3. KO bar full → slow-motion knockout, score pop, next opponent walks in (~1.5 s).
   Every 3rd KO = natural break (interstitial slot).
4. 0 hearts → game over card: score, best, "tap to retry" (restart < 1 s). Rewarded: continue
   once with 1 heart.

## Controls (one thumb / one key)
- Touch / mouse: tap left or right half of the screen.
- Keyboard: ← / → (also A / D). Space = side of the current threat (accessibility fallback).
- First tap on the title screen starts the first round immediately (fires `gameplayStart`).

## Difficulty curve
- Opponent 1 "Rookie": slow wind-ups (900 ms), only single punches, wide windows. Teaches the game.
- Opponent 2–3: faster (700 → 550 ms), shorter idle.
- Opponent 4+: feints (glove glows then drops: tapping = small penalty), double punches L-R,
  random idle rhythm. Windows shrink 5 % per opponent to a floor.
- Target: average new player loses at opponent 2–3 (~45 s); good players reach 6–8 (~2 min).

## Progression
- Best score and best opponent always visible on the HUD and game over card.
- Unlocks (cosmetic only): glove colors, shorts, ring floor colors – earned by score milestones
  and first KO of each opponent. Saved via the platform adapter.
- Opponent ladder of ~8 named rivals with distinct silhouette + color + one trick each.

## Art direction
Flat vector cartoon, thick dark outlines, 4–5 color palette per opponent, chunky proportions
(big gloves, small body). All drawn procedurally (Phaser Graphics) – no bitmap assets. Background:
simple ring with ropes and a soft spotlight. Impacts: stars, "POW" bursts, sweat drops. No blood.
Player shown from behind as two big gloves at the bottom (works in portrait and landscape).

## Audio direction
Generated WebAudio SFX: punchy low thump for counters, plastic "tock" for blocks, whoosh for
punches, bell for KO, crowd "ooh" swell from filtered noise. One short looping beat optional
(small, procedurally sequenced). Mute toggle.
