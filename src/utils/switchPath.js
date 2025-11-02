import { isAbsolute, join } from 'path';
import { cwd } from 'process';

export const switchPath = (path) => {
  return isAbsolute(path) ? path : join(cwd(), path);
}