const fs = require('fs');
const contactDB = require('./contact-db.json');

const searchId = +process.argv[2]; //parametro que foi enviado por comand line.
const {contacts} = contactDB; //Criei uma variável chamada contacts a partir da destructuring de uma variável que possui uma chave chamada contacts
function contactHandler(contact){
    const isFound = contact.id === searchId;
    return isFound;
};

function removeHandler(contact){
    const isFound = contact.id !== searchId;
    return isFound
};

const contact = contacts.find(contactHandler);
if (contact){
    const remainingContacts = contacts.filter(removeHandler);
    
    const contactsDB = {
        contacts: remainingContacts,
    };
    const contactListDB = JSON.stringify(contactsDB, null, 4);
    
    fs.writeFile('contact-db.json', contactListDB, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
} else{
    console.log("Not Found");
}