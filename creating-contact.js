const fs = require('fs');
const db = require('./contact-db.json');

const nameTxt = process.argv[2];
const email = process.argv[3];
const phone = process.argv[4];
let currentContacts = [];

if (db){
    currentContacts = db.contacts;
};

function idHandler(contact){
    return contact.id;
}

const idListNum = currentContacts.map(idHandler);
const idMax = Math.max(...idListNum);

const contact = {
    id: idMax + 1,
    name: nameTxt, 
    email, 
    phone,
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

