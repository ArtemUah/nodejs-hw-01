import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const countOfContacts = JSON.parse(contacts).length;
    return countOfContacts;
  } catch (error) {
    console.log('Sudden error:', error);
  }
};

console.log(await countContacts());
