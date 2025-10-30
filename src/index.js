import { stdin } from 'process';

const fileManager = async () => {
  
  const args =  process.argv.slice(2);
  const user = args.length > 0  ? args[0].split('=')[1] : 'unknown user';
  console.log(`Welcome to the File Manager, ${user}!`);
  stdin.
  stdin.on('data', (chunk) => {
    const command = chunk.toString();``
    if (command === '.exit') {
      console.log(`Thank you for using File Manager, ${user}, goodbye!`);
      process.exit();
    } else {
      console.log(command);
    }

  });
  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${user}, goodbye!`);
  })
}

fileManager();