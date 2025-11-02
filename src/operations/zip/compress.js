import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import  { createBrotliCompress } from 'node:zlib';

export const compress = async (arg) => {
  const [originalPath, targetPath] = arg.split(' ');
  const brotli = createBrotliCompress();
  const source = createReadStream(originalPath);
  const destination = createWriteStream(targetPath);
  source.pipe(brotli).pipe(destination);
};