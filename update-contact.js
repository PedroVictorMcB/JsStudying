const fs = require('fs');
const contactDB = require('./contact-db.json');

const searchId = +process.argv[2]; //parametro que foi enviado por comand line.
const newName = process.argv[3];
const newEmail = process.argv[4];
const newPhone = process.argv[5];
const {contacts} = contactDB; //Criei uma variável chamada contacts a partir da destructuring de uma variável que possui uma chave chamada contacts
function contactHandler(contact){
    const isFound = contact.id === searchId;
    return isFound;
};

function updateHandler(contact){
    if (contact.id === searchId){
        if (newName){
            contact.name = newName;
        }
        if (newEmail){
            contact.email = newEmail;
        }
        if (newPhone){
            contact.phone = newPhone;
        }
    }
    return contact;
};

const contact = contacts.find(contactHandler);
if (contact){

    const updatedContacts = contacts.map(updateHandler);
    
    const contactsDB = {
        contacts: updatedContacts,
    };
    const contactListDB = JSON.stringify(contactsDB, null, 4);
    
    fs.writeFile('contact-db.json', contactListDB, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
} else{
    console.log("Not Found");
}