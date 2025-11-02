import { writeFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

export const add = async (name) => {;
  await writeFile(join(cwd(), name), '', { encoding: 'utf-8' });
}