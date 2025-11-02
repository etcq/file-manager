import { rename } from 'node:fs/promises';
import { join } from 'node:path';

export const rn = async (arg) => {;
  const [path, name] = arg.split(' ')
  await rename(path, join(path, '..', name))
}