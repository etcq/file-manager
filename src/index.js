import { join, isAbsolute } from 'path';
import { chdir, cwd, stdin, stdout } from 'process';
import { printTable } from './utils/print.js';
import { exitProgram } from './utils/exit.js';
import { changeDirectory } from './utils/cd.js';
import { parseCommand } from './utils/parse-command.js';
import { read } from './utils/read.js';
import { add } from './utils/add.js';
import { addDir } from './utils/add-dir.js';
import { rn } from './utils/rename.js';


const fileManager = async () => {
  const args =  process.argv.slice(2);
  const user = args.length > 0  ? args[0].split('=')[1] : 'Anonymous';
  console.log(`You are currently in ${cwd()}\n`);
  console.log(`Welcome to the File Manager, ${user}!\n`);
  stdout.write('Enter the command, please\n');
  stdin.on('data', async (chunk) => {
  const { command, arg } = parseCommand(chunk);
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
        addDir(arg);
        break;
      }
      case 'rn': {
        rn(arg);
        break;
      }
      default: {
        console.log(`Invalid input`);
        break;
      }
    }
      console.log(`You are currently in ${cwd()} \n`)
    }
  );
  process.on('SIGINT', () => {
    exitProgram(user);
  })
}

fileManager();