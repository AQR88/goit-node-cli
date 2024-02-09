const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "contacts.json");

async function readContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });
  return JSON.parse(data);
}

function writeContacts(contact) {
  return fs.writeFile(contactsPath, JSON.stringify(contact, undefined, 2));
}

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.

  const contacts = await readContacts();

  const contact = contacts.find((contact) => contact.id === contactId);

  return contact;
}

async function removeContact(contactId) {
  const contacts = await readContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const delContact = contacts[index];
  contacts.splice(index, 1);
  await writeContacts(contacts);
  return delContact;
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
module.exports = {
  readContacts,
  writeContacts,
};
