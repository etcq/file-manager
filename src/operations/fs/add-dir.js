import { mkdir } from 'fs/promises';
import { cwd } from 'process';
import { join } from 'path';

export const addDir = async (name) => {;
  await mkdir(join(cwd(), name));
}