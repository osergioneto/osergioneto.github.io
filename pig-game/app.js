/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next 
player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', () => {
    trocaImagemDado();
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    addPontosAoPlacar();
    verificaGanhador();
});

document.querySelector('.btn-new').addEventListener('click', () => {
    novoJogo();
});


function gerarNumeroDado(){
    return (Math.floor(Math.random() * 6)) + 1;
}

function trocaImagemDado(){
    let numeroImagem = gerarNumeroDado();
    console.log(numeroImagem);
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${numeroImagem}.png`;

    if(numeroImagem !== 1){
        addPontosRodada(numeroImagem);
    } else{
        trocaJogador();
    }

    return diceDOM;
}

function addPontosRodada(numero){
    let pontuacaoDOM;
    roundScore += numero;
    pontuacaoDOM = document.querySelector(`#current-${activePlayer}`);
    pontuacaoDOM.textContent = roundScore;
    return roundScore;
}

function addPontosAoPlacar(){
    let placarDOM;
    placarDOM = document.querySelector(`#score-${activePlayer}`);
    scores[activePlayer] += roundScore;
    placarDOM.textContent = scores[activePlayer];
    limpaPontosRodada();
    trocaJogador();
    return scores[activePlayer];
}

function limpaPontosRodada(){
    let pontuacaoDOM = document.querySelector(`#current-${activePlayer}`);
    pontuacaoDOM.textContent = 0;
    roundScore = 0;
    return pontuacaoDOM;
}

function limpaPlacares(){
    scores = [0,0];
    for(let i = 0; i < scores.length; i++){
        let placarDOM = document.querySelector(`#score-${i}`);
        placarDOM.textContent = 0;
    }
    return 'limpou';
}

function verificaGanhador(){
    if( scores[activePlayer] >= 50 ){
        alert(`O jogador ${activePlayer} ganhou!`);
    }
}

function trocaJogador(){
    limpaPontosRodada();
    removeClasse();
    if(activePlayer === 0){
        activePlayer = 1;
    } else{
        activePlayer = 0;
    }
    adicionaClasse();
    return activePlayer;
}

function removeClasse(){
    let activePlayerDOM = document.querySelector(`.player-${activePlayer}-panel`);
    activePlayerDOM.classList.remove(`active`);
}

function adicionaClasse(){
    let activePlayerDOM = document.querySelector(`.player-${activePlayer}-panel`);
    activePlayerDOM.classList.add(`active`);
}

function novoJogo(){
    roundScore = 0;
    activePlayer = 0;
    limpaPlacares();
    limpaPontosRodada();
}


//roundScore = document.querySelector(`#current-${activePlayer}`);
//roundScore.textContent = dice;
