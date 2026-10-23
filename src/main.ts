import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { GameScene } from './scenes/GameScene';

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#1b1d2b',
  scale: { mode: Phaser.Scale.RESIZE, width: window.innerWidth, height: window.innerHeight },
  scene: [BootScene, GameScene],
});
