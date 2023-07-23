const personagens = document.querySelectorAll('.personagem'); //pesquisar sobre document, document.

/*personagens.addEventListeners('click', () => {
    console.log('clicou!');
} ); pesquisar sobre arrow function*/


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

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
        
        imagemPersonagemGrande.src = `./src/img-db/perfil-${idPersonagem}-whcorrected.jpg`; //ajuste os nomes das imgs para funcionar
        //pesquisar sobre interpolação template string

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})