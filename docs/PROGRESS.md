# Progress log (append-only)

## 2026-10-23 – M0
- Done: Vite 7 + TS 5.9 + Phaser 3.90 scaffold (builds, 1.2 MB / 333 KB gzip), platform
  interface stub, all working docs, 3 concepts scored in GDD.
- Decisions: Phaser 3.90 over Phaser 4 (mature docs, fewer surprises; size fits budget).
  Relative base path so one build serves GitHub Pages and portal iframes.
- Next: owner picks a concept → finalize GDD → M1 grey-box + GitHub Pages deploy.

## 2026-10-23 – M0 done
- Done: owner picked A. Counter Champ; GDD finalized (candidates collapsed to a decision note).
  Session coach: model check at every session start; PLAN milestones carry a "Model:" tag.
- Next: M1 grey-box core loop + Playwright smoke + GitHub Pages. Model: Sonnet.

## 2026-10-23 – M1 (code done, owner playtest pending)
- Done: grey-box core loop (idle → telegraph ring → tap L/R half or ←/→/A/D/Space → perfect/block/hit,
  combo, KO bar, 8 rivals, doubles + feints from opponent 4, 3 hearts, 10 s grace on last heart),
  instant retry (~90 ms), pause on tab hidden, best score/rival saved via adapter, LocalPlatform
  (guards gameplayStart/Stop order), Playwright smoke (`npm run build && npm run smoke`) passes,
  Pages workflow `.github/workflows/pages.yml`.
- Bundle: 1.22 MB (337 KB gzip). No console errors in smoke run.
- Need from owner: enable Pages (Settings → Pages → Source: GitHub Actions); the github-pages
  environment must allow this branch (or merge to main). Then playtest 5 runs on phone.
- Next: M2 (feel/art/audio) after owner feedback. Model: Sonnet.

## 2026-10-23 – M2 (code done, owner playtest pending)
- Done: hit-stop (70 ms counter/hit, 180 ms KO), camera shake, pooled star particles (32) and
  pop-ups (6), vector art (opponent face/hair/shorts per rival, 8 silhouettes, hurt face, gloves
  with cuff/thumb/glow, ropes + spotlight), WebAudio SFX (whoosh, counter thump, block tock, hit,
  feint, KO bell + crowd, game over, start), mute toggle (icon or M, saved under `mute`).
- HUD fix: hearts no longer overlap KO bar; rival name moved under the opponent.
- Bundle 1.23 MB (340 KB gzip). Smoke passes, no console errors, restart ~160 ms.
- Not verified: 60 fps on a real phone (headless only) and actual sound (no audio device) – owner check.
- Next: owner feedback on feel → M3 progression. Model: Opus for the difficulty curve, then Sonnet.

## Overrides
(none)
