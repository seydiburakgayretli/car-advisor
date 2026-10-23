# Portal checklist

Status: ⬜ todo · ✅ done · ❌ failing. Requirements from memory at M0; **re-verify against
current docs in M4** (CrazyGames: docs.crazygames.com, Poki: sdk.poki.com).

## Both portals
- ⬜ Initial download < 5 MB (Poki strongly prefers small; hard max 8 MB for us)
- ⬜ Works on mobile + desktop, portrait + landscape, no scroll, no orientation lock
- ⬜ No external links, no third-party ads/trackers, no own analytics
- ⬜ No console errors; runs inside an iframe; relative asset paths
- ⬜ Audio muted during ads, resumes after; game paused during ads
- ⬜ gameplayStart / gameplayStop correct (first input, pause/menu/game over, never doubled)
- ⬜ Ads only at natural breaks; rewarded optional and clearly offered
- ⬜ Content PEGI 12 safe; English UI

## CrazyGames
- ⬜ SDK v3 loaded, `SDK.init()` before use; loadingStart/Stop
- ⬜ Midgame + rewarded ads via SDK; ad-block / no-fill handled gracefully
- ⬜ Save data via SDK data module
- ⬜ Cover images (landscape, portrait, square) per current spec
- ⬜ Passes CrazyGames QA tool / preview

## Poki
- ⬜ PokiSDK init, gameLoadingFinished, gameplayStart/Stop
- ⬜ commercialBreak / rewardedBreak with pause + mute
- ⬜ Passes Poki Inspector
- ⬜ Thumbnail / assets per current spec
