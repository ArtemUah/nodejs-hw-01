import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const arrOfContacts = JSON.parse(contacts);
    return arrOfContacts;
  } catch (error) {
    console.log('Sudden error:', error);
  }
};

console.log(await getAllContacts());
