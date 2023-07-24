function setCharactersList(charactersDB) {
    window.charactersList = charactersDB;
};

fetch('/db/characters')
    .then(res => res.json())
    .then(setCharactersList)
    .catch(err => console.log(err))