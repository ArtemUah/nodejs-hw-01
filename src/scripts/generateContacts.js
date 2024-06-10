import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const arrOfContacts = JSON.parse(contacts);
    for (let i = 0; i < number; i++) {
      arrOfContacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(arrOfContacts), 'utf-8');
  } catch (error) {
    console.log('Sudden error:', error);
  }
};

await generateContacts(3);
