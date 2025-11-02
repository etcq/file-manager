import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import  { createBrotliDecompress } from 'node:zlib';

export const decompress = async (arg) => {
    const [originalPath, targetPath] = arg.split(' ');
    const brotliDecompress = createBrotliDecompress();
    const destination = createWriteStream(targetPath);
    const source = createReadStream(originalPath);
    source.pipe(brotliDecompress).pipe(destination);
};