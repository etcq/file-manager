import { chdir } from 'process';
import { switchPath } from './switchPath.js';

export const changeDirectory = (path) => {
  chdir(switchPath(path));
}