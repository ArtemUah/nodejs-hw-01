import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const arrOfContacts = JSON.parse(contacts);
    const filteredContacts = arrOfContacts.filter(
      (contact) => Math.random() > 0.5,
    );
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts), 'utf-8');
  } catch (error) {
    console.log('Sudden error:', error);
  }
};
await thanos();
