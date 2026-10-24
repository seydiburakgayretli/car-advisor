import { RIVALS } from './tuning';

/** Cosmetic unlock: earned by beating a rival (`kos` = rivals knocked out in one run) or by a run score. */
export interface Unlock {
  name: string;
  color: number;
  kos: number;
  score: number;
}

export const GLOVES: Unlock[] = [
  { name: 'Red', color: 0xe63946, kos: 0, score: 0 },
  { name: 'Blue', color: 0x3a86ff, kos: 1, score: 0 },
  { name: 'Green', color: 0x2ec27e, kos: 3, score: 0 },
  { name: 'Pink', color: 0xff5fa2, kos: 5, score: 0 },
  { name: 'Gold', color: 0xffc300, kos: 8, score: 0 },
];

export const FLOORS: Unlock[] = [
  { name: 'Purple', color: 0x3b2f5c, kos: 0, score: 0 },
  { name: 'Teal', color: 0x1f5c5a, kos: 0, score: 1500 },
  { name: 'Crimson', color: 0x6a2433, kos: 0, score: 4000 },
  { name: 'Midnight', color: 0x15193a, kos: 0, score: 8000 },
];

export const isUnlocked = (u: Unlock, bestKos: number, best: number): boolean => bestKos >= u.kos && best >= u.score;

/** Highest unlocked index (the newest unlock is auto-equipped). Lists are sorted by difficulty. */
export function topUnlocked(list: Unlock[], bestKos: number, best: number): number {
  let top = 0;
  for (let i = 1; i < list.length; i++) if (isUnlocked(list[i], bestKos, best)) top = i;
  return top;
}

/** Short goal line for the title / game over card, or '' when everything is unlocked. */
export function nextGoal(bestKos: number, best: number): string {
  const g = GLOVES.find((u) => !isUnlocked(u, bestKos, best));
  const f = FLOORS.find((u) => !isUnlocked(u, bestKos, best));
  if (g && (!f || g.kos <= bestKos + 2)) return `Beat ${RIVALS[g.kos - 1].name.toUpperCase()} → ${g.name.toUpperCase()} GLOVES`;
  if (f) return `Score ${f.score} → ${f.name.toUpperCase()} RING`;
  return '';
}
