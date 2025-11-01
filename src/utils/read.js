import { readFile } from 'node:fs/promises';
import { switchPath } from './switchPath.js';


export const read = async (file) => {;
  const path = await switchPath(file);
  console.log(path);
  const fileContent = await readFile(path, { encoding: 'utf-8' });
  console.log(fileContent);
}