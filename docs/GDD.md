# GDD – Counter Champ (final, 2026-10-23)

Decision: owner picked concept A (47/50) over Ring Rush (42, crowded, no round breaks) and
Drift Hook (43, crowded, physics tuning cost). Main risk: timing games punish new players →
opponent 1 is very slow with huge telegraphs and cannot KO you in the first 10 s.

## Concept
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
