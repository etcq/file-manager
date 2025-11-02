import os from 'node:os';

export const osCommand = async (arg) => {
  const command = arg.replace('--', '');
  switch (command) {
    case 'EOL': {
      console.log(JSON.stringify(os.EOL));
      break;
    }
    case 'cpus': {
      console.log(os.cpus());
      break;
    }
    case 'homedir': {
      console.log(os.homedir());
      break;
    }
    case 'architecture': {
      console.log(os.arch());
      break;
    }
    case 'username': {
      console.log(os.userInfo().username);
      break;
    }
  }
}
