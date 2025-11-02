import { copyFile } from './copy.js';
import { rm } from 'fs/promises';

export const moveFile = async (arg) => {
  await copyFile(arg);
  await rm(arg.split(' ')[0]);
}