const grid = document.querySelector('.grid');
const move = document.querySelector('.move-counter');

const cards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
const deck = [...cards, ...cards];
const mosse = 8;

let pick = [];

let counter = 0;
// let errors = 0

deck.sort(function() {
    return 0.5 - Math.random();
});

for(let i = 0; i < deck.length; i++) {
    const card = document.createElement('div');
    const cardName = deck[i];
    card.classList.add('card');
    card.setAttribute('data-name', cardName);
    move.innerHTML = `Errori possibili : ${(mosse - counter)}`
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
}


function flipCard(event) {
    const card = event.target;
    
    

    if(card.classList.contains('flipped')) return;

    if (counter == mosse ) return;
    card.classList.add(card.getAttribute('data-name'), 'flipped');

    pick.push(card);

    if(pick.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    
    const card1 = pick[0];
    const card2 = pick[1];
    const card1Name = card1.getAttribute('data-name');
    const card2Name = card2.getAttribute('data-name');

    
    if(card1Name === card2Name) {
        move.innerHTML = `Errori possibili : ${(mosse - counter)}`
        checkForMove();
        checkForWin();
    } else {        
        counter++
        move.innerHTML = `Errori possibili : ${(mosse - counter)}`
        setTimeout(function() {
            card1.classList.remove(card1Name, 'flipped');
            card2.classList.remove(card2Name, 'flipped');
            checkForMove();
        }, 500);
    }

    pick = [];
}

function checkForWin() {
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length === deck.length) {
        showAlert('Hai vinto!');
        restart();
    }
}

function checkForMove() {
    if(mosse == counter){
        showAlert('Hai Perso!');
        restart();
    } 


}

