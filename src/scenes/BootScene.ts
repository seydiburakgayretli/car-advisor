import Phaser from 'phaser';
import { platform } from '../platform';

/** Initialises the platform adapter, then hands over to the game scene. */
export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create(): void {
    platform.loadingStart();
    void platform.init().then(() => {
      document.getElementById('loading')?.remove();
      platform.loadingFinished();
      this.scene.start('Game');
    });
  }
}
