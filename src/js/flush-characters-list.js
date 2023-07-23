function flushCharactersList(charactersDB){
    console.log(charactersDB.json());
};

window.flushCharactersList = fetch('../db/character-db.json')
.then(flushCharactersList)