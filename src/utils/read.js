import { readFile, stat } from 'node:fs/promises';
import { switchPath } from './switchPath.js';


export const read = async (file) => {;
  const path = await switchPath(file);
  if ((await stat(path)).isFile()) {
    const fileContent = await readFile(path, { encoding: 'utf-8' });
    console.log(fileContent);
  } else {
    console.log('Please, input path to file')
  }

}