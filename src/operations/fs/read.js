import { stat } from 'node:fs/promises';
import { switchPath } from '../../utils/switchPath.js';
import { createReadStream } from 'node:fs';


export const read = async (file) => {;
  const path = await switchPath(file);
  if ((await stat(path)).isFile()) {
    const read = createReadStream(path, { encoding: 'utf-8' })
    await read.on('data', (chunk) => {
      console.log(chunk)
    });
  } else {
    console.log('Please, input path to file')
  }

}