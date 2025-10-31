import { opendir, readdir } from 'fs/promises';
import { join } from 'path';
import { chdir, cwd, stdin, stdout } from 'process';
import { printTable } from './operations/print';
import { exitProgram } from './operations/exit';


const fileManager = async () => {
  const args =  process.argv.slice(2);
  const user = args.length > 0  ? args[0].split('=')[1] : 'Anonymous';
  console.log(`You are currently in ${cwd()}`)
  console.log(`Welcome to the File Manager, ${user}!`);
  stdout.write('Enter the command, please\n');
  stdin.on('data', async (chunk) => {
    const command = chunk.toString().trim();
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
        exitProgram();
      }
      default: {
        console.log(`Invalid input`);
        break;
      }
    }
      console.log(`You are currently in ${cwd()}`)
    }
  );
  process.on('SIGINT', () => {
    exitProgram();
  })
}

fileManager();