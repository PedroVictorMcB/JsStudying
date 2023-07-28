window.onload = setTimeout( function() {
    console.log('Document is fully loaded and that\'s your characters list: ', window.charactersList)

    // HOMEWORK: With the list obtained by searching data from window.charactersList.character
    // you'll need to manipulate DOM's to add these characters dynamically to this list.
    // Then you'll need to go to old-scripts and run your CRUD commands to add new ones.
    // Refresh page to see then appearing.

    // Use code bellow as example, but probably something will be needed to change, making code
    // more generalist. Remember to use .map function.
    // To load character's small and bigger images you should adjust CRUD's Create command to 
    // accept these images URL as parameter and save it to JSON file. That way you'll not be 
    // strongly tied to the existence or not of these character's image in img-db folder.

    // This is the list that will need to have characters appended:
    charactersListDOM = document.getElementById("lista-personagens");


    // Bellow, there's the process to create one character. You'll need to put it
    // inside map function:

    function characterHandler(characterData, index){
        const character = document.createElement('li');
        character.classList.add('personagem');
        character.id = characterData.id;
        character.setAttribute('data-name', characterData.name);
        character.setAttribute('data-description', characterData.description);
        character.setAttribute('data-race', characterData.race);
        character.setAttribute('data-gender', characterData.gender);
        character.setAttribute('data-affiliation', characterData.affiliation);
        character.setAttribute('data-combat-style', characterData.combatStyle);
        const characterImage = document.createElement('img');
        if (characterData.image){
            characterImage.src = characterData.image;
        } else{
            characterImage.src = `./src/img-db/${characterData.id}.jpg`;
        }
        characterImage.setAttribute('data-big-image', characterImage.src);
        character.appendChild(characterImage);
        
        if(index === 0){
            character.classList.add('selecionado');
        }
        return character;
    };
    
    const personaList = window.charactersList.character.map(characterHandler);
    
    function appendHandler(character){
        charactersListDOM.appendChild(character);

    };

    personaList.forEach(appendHandler);

    const personagens = document.querySelectorAll('.personagem'); //pesquisar sobre document, document.

    /*personagens.addEventListeners('click', () => {
        console.log('clicou!');
    } ); pesquisar sobre arrow function*/


    personagens.forEach((personagem) => {
        personagem.addEventListener('click', () => {

            if(window.innerWidth < 450){
                window.scrollTo({top: 0, behavior: 'smooth'});
            }

            /*para refatorar selecione o txt >> clique com o direito >> acesse refatorar >> extrair para function
            no escopo global >> nomear o nome de sua função
            */
            
            const personagemSelecionado = document.querySelector('.selecionado');
            personagemSelecionado.classList.remove('selecionado');  

            personagem.classList.add('selecionado');

            const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            const idPersonagem = personagem.attributes.id.value;
            
            imagemPersonagemGrande.src = personagem.getElementsByTagName("img")[0].getAttribute('data-big-image');
            // `./src/img-db/${idPersonagem}.jpg`; //ajuste os nomes das imgs para funcionar
            //pesquisar sobre interpolação template string
            console.log(imagemPersonagemGrande, personagem);

            const nomePersonagem = document.getElementById('nome-personagem');
            nomePersonagem.innerText = personagem.getAttribute('data-name');

            const descricaoPersonagem = document.getElementById('descricao-personagem');
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');

            const racePersonagem = document.getElementById('race-personagem');
            racePersonagem.innerText = personagem.getAttribute('data-race');

            const genderPersonagem = document.getElementById('gender-personagem');
            genderPersonagem.innerText = personagem.getAttribute('data-gender');

            const affiliationPersonagem = document.getElementById('affiliation-personagem');
            affiliationPersonagem.innerText = personagem.getAttribute('data-affiliation');

            const combatPersonagem = document.getElementById('combat-personagem');
            combatPersonagem.innerText = personagem.getAttribute('data-combat-style');
        })
    })
    // character.setAttribute('data-name', 'PUT HERE CHARACTER NAME');
    // character.setAttribute('data-description', 'PUT HERE CHARACTER DESCRIPTION');
    // ... do these same additions of character.setAttribute('data-ATTRIBUTE', ...) to the remaining attributes

    // Bellow it will be the creation if the image:
    
    // characterImage = document.createElement('img');​
    // characterImage.src = 'PUT HERE THE URL OF THE SMALL IMAGE'

    // Adding image to the li item:
    // character.appendChild(characterImage);



    // HOMEWORK STEP 2: Now that you've loaded character's list dynamically, please change the DOM's
    // in pagina-selecao.html at section <section class="personagem-selecionado"> to show all the detailed
    // character's data obtained in window.charactersList. Find the nicier styles to display it with beauty.

}, 2000);
