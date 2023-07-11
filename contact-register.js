const fs = require('fs');
const db = require('./contact-db.json');

const nameTxt = process.argv[2];
const email = process.argv[3];
const phone = process.argv[4];
let currentContacts = [];

if (db){
    currentContacts = db.contacts;
};

const contact = {
    id: 1,
    name: nameTxt, 
    email, 
    phone,
};

if (contact.id === db.contacts.id){
    contact.id = contact.id + 1;
};
const contactList = [...currentContacts, contact];
const contactsDB = {
    contacts: contactList,
};
const contactListDB = JSON.stringify(contactsDB, null, 4);

fs.writeFile('contact-db.json', contactListDB, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

