import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {};
try {
  await fs.writeFile(PATH_DB, '[]', 'utf-8');
} catch (error) {
  console.log('Sudden error: ', error);
}
await removeAllContacts();
