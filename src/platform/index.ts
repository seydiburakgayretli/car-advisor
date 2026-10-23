import type { Platform } from './Platform';
import { LocalPlatform } from './LocalPlatform';

/** M4 selects crazygames/poki by build mode; until then everything runs on the local adapter. */
export const platform: Platform = new LocalPlatform();
