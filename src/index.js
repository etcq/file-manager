import { stdout } from 'process';

const fileManager = async () => {
  const args =  process.argv.slice(2);
  const user =  args[0].split('=')[1];
  console.log(`Welcome to the File Manager, ${user}!`);
}

fileManager();