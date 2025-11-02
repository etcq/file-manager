import { cwd, stdin, stdout } from 'process';
import { exitProgram } from './utils/exit.js';
import { parseCommand } from './utils/parse-command.js';

import { commandHandler } from './command-handler.js';


const fileManager = async () => {
  const args =  process.argv.slice(2);
  const user = args.length > 0  ? args[0].split('=')[1] : 'Anonymous';
  console.log(`You are currently in ${cwd()}\n`);
  console.log(`Welcome to the File Manager, ${user}!\n`);
  stdout.write('Enter the command, please\n');
  stdin.on('data', async (chunk) => {
    const { command, arg } = parseCommand(chunk);
    commandHandler(command, arg);
    console.log(`You are currently in ${cwd()} \n`)
    }
  );
  process.on('SIGINT', () => {
    exitProgram(user);
  })
}

fileManager();