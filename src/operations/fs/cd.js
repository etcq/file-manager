import { chdir } from 'process';
import { switchPath } from '../../utils/switchPath.js';

export const changeDirectory = (path) => {
  chdir(switchPath(path));
}