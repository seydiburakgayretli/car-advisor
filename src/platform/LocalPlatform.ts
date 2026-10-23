import type { Platform } from './Platform';

/** Dev/GitHub Pages platform: logs events, guards gameplay start/stop order, localStorage saves. */
export class LocalPlatform implements Platform {
  private playing = false;

  async init(): Promise<void> {
    console.log('[platform] local init');
  }

  loadingStart(): void {
    console.log('[platform] loadingStart');
  }

  loadingFinished(): void {
    console.log('[platform] loadingFinished');
  }

  gameplayStart(): void {
    if (this.playing) return;
    this.playing = true;
    console.log('[platform] gameplayStart');
  }

  gameplayStop(): void {
    if (!this.playing) return;
    this.playing = false;
    console.log('[platform] gameplayStop');
  }

  async commercialBreak(): Promise<void> {
    console.log('[platform] commercialBreak (fake)');
  }

  async rewardedBreak(): Promise<boolean> {
    console.log('[platform] rewardedBreak (fake)');
    return true;
  }

  save(key: string, value: string): void {
    try {
      localStorage.setItem(`cc.${key}`, value);
    } catch {
      /* storage blocked: ignore */
    }
  }

  load(key: string): string | null {
    try {
      return localStorage.getItem(`cc.${key}`);
    } catch {
      return null;
    }
  }
}
