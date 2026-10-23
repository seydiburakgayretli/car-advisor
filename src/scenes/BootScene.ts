import Phaser from 'phaser';

/** Placeholder scene for M0; replaced by the real game scene in M1. */
export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create(): void {
    document.getElementById('loading')?.remove();
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Counter Champ\nM0 scaffold', {
      fontFamily: 'system-ui, sans-serif', fontSize: '32px', color: '#ffffff', align: 'center',
    }).setOrigin(0.5);
  }
}
