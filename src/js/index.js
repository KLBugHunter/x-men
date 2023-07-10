const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerHeight < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerSelecao();
        personagem.classList.add('selecionado');
        altepersonagemGrande(personagem);
        alteNomePersonagem(personagem);
        alteDescricacao(personagem);
    })
})

function alteDescricacao(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-descripition');
}

function alteNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function removerSelecao() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function altepersonagemGrande(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}
