export const MAX_HEARTS = 3;
/** First seconds of a run in which a hit can never take the last heart. */
export const GRACE_MS = 10000;

export interface Rival {
  name: string;
  color: number;
  /** Silhouette: 0 bald, 1 spikes, 2 mohawk, 3 headband, 4 crown. */
  hair: number;
  /** Body width multiplier. */
  wide: number;
}

export const RIVALS: Rival[] = [
  { name: 'Rookie', color: 0x6fb1ff, hair: 0, wide: 1 },
  { name: 'Biff', color: 0x7ed957, hair: 1, wide: 1 },
  { name: 'Tank', color: 0xffb347, hair: 0, wide: 1.25 },
  { name: 'Viper', color: 0xb36bff, hair: 2, wide: 0.85 },
  { name: 'Mugsy', color: 0xff6b9a, hair: 3, wide: 1.1 },
  { name: 'Iron Joe', color: 0x9aa5b1, hair: 1, wide: 1.2 },
  { name: 'Blaze', color: 0xff5a36, hair: 2, wide: 0.95 },
  { name: 'The Champ', color: 0xffd23f, hair: 4, wide: 1.15 },
];

export interface Tuning {
  windupMs: number;
  idleMinMs: number;
  idleMaxMs: number;
  perfectMs: number;
  goodMs: number;
  doubleChance: number;
  feintChance: number;
}

const WINDUPS = [900, 800, 700, 600, 550];

/** Level 0 = first opponent. Windows shrink 5 % per opponent down to a floor. */
export function tuning(level: number): Tuning {
  const shrink = Math.pow(0.95, level);
  const windupMs = level < WINDUPS.length ? WINDUPS[level] : Math.max(400, 550 - (level - 4) * 25);
  const tricks = level >= 3;
  return {
    windupMs,
    idleMinMs: Math.max(350, 1000 - level * 100),
    idleMaxMs: Math.max(700, 1400 - level * 120),
    perfectMs: Math.max(50, 90 * shrink),
    goodMs: Math.max(120, 200 * shrink),
    doubleChance: tricks ? Math.min(0.5, 0.2 + 0.1 * (level - 3)) : 0,
    feintChance: tricks ? 0.2 : 0,
  };
}

export function rivalFor(level: number): Rival {
  return RIVALS[Math.min(level, RIVALS.length - 1)];
}
