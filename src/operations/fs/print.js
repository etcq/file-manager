import { readdir } from 'fs/promises';
import { cwd } from 'process';

export const printTable = async () => {
  const folder = await readdir(cwd(), { withFileTypes: true });
  const entryFolderObject = folder.map((item) => {
    return {
      name: item.name,
      type: item.isDirectory() ? 'Directory' : 'File',
    }
  })
  console.table(entryFolderObject);
}