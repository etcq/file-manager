import { createReadStream, createWriteStream } from 'fs';

export const copyFile = async (arg) => {
  const [originalPath, copyPath] = arg.split(' '); 
  const read = createReadStream(originalPath, { encoding: 'utf-8' });
  const write = createWriteStream(copyPath, { encoding: 'utf-8' });
  read.pipe(write);
}