window.onload = function() {
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
    charactersList = document.getElementById("lista-personagens");


    // Bellow, there's the process to create one character. You'll need to put it
    // inside map function:

    // character = document.createElement('li');​
    // character.classList.add('personagem');
    // character.id = 'PUT HERE THE CHARACTER ID';
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
}
