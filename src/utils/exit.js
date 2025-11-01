import { exit } from 'process';

export const exitProgram = (user) => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
  exit();
}