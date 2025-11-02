import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { switchPath } from '../utils/switchPath.js';


export const calculateHash = async (arg) => {
  const hash = createHash('sha256');
  const read = createReadStream(switchPath(arg), { encoding: 'utf-8' });
  read.on('data', (chunk) => hash.update(chunk));
  read.on('end', () => {
    console.log(hash.digest('hex'))
  });
};