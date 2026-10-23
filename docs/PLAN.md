# Plan

## M0 – Setup + concept
- [x] Vite + TS + Phaser 3 scaffold, build into /dist
- [x] Working docs (CLAUDE.md, GDD, PLAN, PROGRESS, IDEAS, PORTAL_CHECKLIST)
- [x] 3 concepts scored, recommendation in GDD draft
- [x] Owner picks a concept → GDD finalized
Acceptance: build passes; owner has chosen a concept.

## M1 – Grey-box core loop
Model: Sonnet
- [ ] Core loop with placeholder shapes; touch, mouse, keyboard
- [ ] Score, hearts, game over, instant restart (< 1 s)
- [ ] `gameplayStart` on first input, `gameplayStop` on game over (local adapter logs)
- [ ] Playwright smoke test (load → input → game over)
- [ ] GitHub Pages auto-deploy of the dev build; link shared
Acceptance: owner plays 5 runs on phone and wants a 6th.

## M2 – Game feel, art, audio
Model: Sonnet
- [ ] Hit-stop, screen shake, particles, score pop-ups (pooled)
- [ ] Procedural vector art for player gloves, opponents, ring
- [ ] Generated WebAudio SFX + mute toggle
Acceptance: 60 fps on mid-range phone; impacts feel punchy; no console errors.

## M3 – Progression
Model: Opus (curve tuning), then Sonnet
- [ ] Best score + best opponent always visible
- [ ] Cosmetic unlocks (gloves, shorts, ring)
- [ ] Tuned difficulty curve (new player ~45 s, good player ~2 min)
- [ ] Save/load through the adapter
Acceptance: progress survives reload; unlock reached in first 3 runs.

## M4 – Portal adapter + ads
Model: Sonnet
- [ ] local (1 s fake ad overlay), crazygames, poki implementations (check current SDK docs)
- [ ] Interstitial every 3rd KO / at game over (rate-limited), rewarded continue once
- [ ] Event order verified (no double start/stop)
Acceptance: each build mode runs in its portal QA tool / local harness without errors.

## M5 – Responsive, performance, size
Model: Sonnet
- [ ] Portrait + landscape layouts, resize live, no scroll
- [ ] Pooling audit, no per-frame allocations, 60 fps
- [ ] Bundle size report, < 5 MB
Acceptance: works on phone (both orientations) and desktop; size within budget.

## M6 – Release kit
Model: Opus (final pre-release review)
- [ ] Production zip per portal, PORTAL_CHECKLIST all green
- [ ] Cover/icon images per portal spec, description, tags
- [ ] Step-by-step submission notes for the owner
Acceptance: owner can submit without asking questions.
