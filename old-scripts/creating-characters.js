const fs = require('fs');
const db = require('./contact-db.json');
const { log } = require('console');

const nameTxt = process.argv[2];
const alias = process.argv[3];
const race = process.argv[4];
const gender = process.argv[5];
const age = process.argv[6];
const height = process.argv[7];
const weight = process.argv[8];
const birthday = process.argv[9];
const hairColor = process.argv[10];
const eyeColor = process.argv[11];
const affiliation = process.argv[12];
const occupation = process.argv[13];
const combatStyle = process.argv[14];
const partner = process.argv[15];
const operationBase = process.argv[16];
const liveStatus = process.argv[17];
const relatives = process.argv[18];
const mangaDebut = process.argv[19];
const animeDebut = process.argv[20];
const japanDub = process.argv[21];
const englishDub = process.argv[22];
let currentCharacter = [];

if (db){
    currentCharacter = db.character;
};

function idHandler(character){
    return character.id;
};

const idListNum = currentCharacter.map(idHandler);
let idMax = Math.max(...idListNum); //Aqui o idMax está recebendo um valor -Infinity resultando num null no character.id

if (idMax < 0){
    idMax = 0;
}; //Aqui eu estou corrigindo o idMax, transformando um negativo infinito em 0 para o character.id começar em 1

const character = {
    id: idMax + 1,
    name: nameTxt, 
    alias: alias, //pseudônimo, mais de um
    race: race, //mais de uma
    gender: gender,
    age: age, //mais de uma
    height: height,
    weight: weight,
    birthday: birthday,
    hairColor: hairColor, //mais de uma
    eyeColor: eyeColor, //mais de uma
    affiliation: affiliation,
    occupation: occupation, //pode ter mais de um
    combatStyle: combatStyle,
    partner: partner, //pode ter mais de um
    operationBase: operationBase, //mais de uma
    liveStatus: liveStatus, //use um botão para revelar, para não dar spoiler para quem não viu a história completa
    relatives: relatives, //mais de um
    mangaDebut: mangaDebut, //mais de um
    animeDebut: animeDebut, //mais de um
    japanDub: japanDub, 
    englishDub: englishDub,
}; //pesquisar pq não preciso colocar a variável dentro da chave no objeto

const charactersList = [...currentCharacter, character];
const charactersDB = {
    character: charactersList,
};
const charactersListDB = JSON.stringify(charactersDB, null, 4);

fs.writeFile('contact-db.json', charactersListDB, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });