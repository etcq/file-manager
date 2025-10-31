import { exit } from process;

export const exitProgram = () => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
  exit();
}