import { read } from './operations/fs/read.js';
import { add } from './operations/fs/add.js';
import { addDir } from './operations/fs/add-dir.js';
import { rn } from './operations/fs/rename.js';
import { copyFile } from './operations/fs/copy.js';
import { moveFile } from './operations/fs/move.js';
import { rm } from 'fs/promises';
import { printTable } from './operations/fs/print.js';
import { changeDirectory } from './operations/fs/cd.js';
import { osCommand } from './operations/os.js';
import { calculateHash } from './operations/hash.js';
import { compress } from './operations/zip/compress.js';
import { decompress } from './operations/zip/decompress.js';
import { join } from 'path';
import { chdir, cwd } from 'process';
import { exitProgram } from './utils/exit.js';

export const commandHandler = async (command, arg) => {
  switch (command) {
    case 'up': {
      chdir(join(cwd(), '..'));
      break;
    }
    case 'ls': {
      await printTable();
      break;
    }
    case '.exit': {
      exitProgram(user);
    }
    case 'cd': {
      changeDirectory(arg);
      break;
    }
    case 'cat': {
      await read(arg);
      break;
    }
    case 'add': {
      await add(arg);
      break;
    }
    case 'mkdir': {
      await addDir(arg);
      break;
    }
    case 'rn': {
      await rn(arg);
      break;
    }
    case 'cp': {
      await copyFile(arg);
      break;
    }
    case 'mv': {
      await moveFile(arg);
      break;
    }
    case 'rm': {
      await rm(arg);
      break;
    }
    case 'os': {
      await osCommand(arg);
      break;
    }
    case 'hash': {
      await calculateHash(arg);
      break;
    }
    case 'compress': {
      await compress(arg);
      break;
    }
    case 'decompress': {
      await decompress(arg);
      break;
    }
    default: {
      console.log(`Invalid input`);
      break;
    }
  }
}