const db = require('./contact-db.json');

const searchId = +process.argv[2]; //parametro que foi enviado por comand line.
const {contacts} = db; //Criei uma variável chamada contacts a partir da destructuring de uma variável que possui uma chave chamada contacts
function contactHandler(contact){
    const isFound = contact.id === searchId;
    return isFound;
};

const contact = contacts.find(contactHandler);
if (contact){
    console.log(`Found contact with ID ${contact.id}\n\nName: ${contact.name}\nE-mail: ${contact.email}\nPhone: ${contact.phone}`);
} else{
    console.log("Not Found");
}
