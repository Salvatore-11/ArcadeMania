// Inseriamo il punteggio iniziale
const scoreDisplay = document.querySelector('#score-display');
let score = 0;
scoreDisplay.innerText = score;

// Inseriamo il timer iniziale
const timerDisplay = document.querySelector('#timer-display');
let timeLeft = 20000;
timerDisplay.innerText = conversionMstoSec(timeLeft);

// Inseriamo il bug in una cella via JS
const cells = document.querySelectorAll('.cell');

// Diamo un valore di velocità iniziale
let bugSpeed = 800; //millisecondi


// // Logica per randomizzare i bug in una cella 

function randomBug() {
//   // pulisco tutte le celle prima di randomizzarne un'altra
  removeBug();

// randomizzo una cella a caso in cui far apparire il bug
  const randomNumber = Math.floor(Math.random() * cells.length);
  const cell = cells[randomNumber];
  cell.classList.add('bug');
}

  // Aumentiamo la difficoltà se il giocatore è troppo bravo 

  // da vedere il funzionameno
  if(score === 5){
    bugSpeed = 200;
  }
  
const bugMovement = setInterval(randomBug, bugSpeed);

function removeBug(){
  for (let i = 0; i < cells.length; i++){
    const cellToClean = cells[i];
    cellToClean.classList.remove('bug');
  }
}

// // Diamo modo all'utente di colpire il bug!

for(let i = 0; i < cells.length; i++){
  const cell = cells[i];
  cell.addEventListener('click', function(){
    // se tra le classi della cella cliccata c'è la classe bug
    if(cell.classList.contains('bug')){
      // incremento il punteggio e lo stampo
      cell.classList.remove('bug');
      score++; 
      scoreDisplay.innerText = score;

      cell.classList.add('splat');

      // Incrementiamo il timer se viene colpito un bug
      timeLeft+=1000;

      // puliamo la cella dallo splat!
      setTimeout(function(){
        cell.classList.remove('splat');
      }, 200);
    }
  })
}

// // impostiamo un conto alla rovescia
const timer = setInterval(countDown, 1000);

function countDown() {
  timeLeft-=1000;
  let sec = conversionMstoSec(timeLeft);
  timerDisplay.innerText = sec;

  if(timeLeft === 0){
    clearInterval(timer);
    clearInterval(bugMovement);
    removeBug();
    restart()

    showAlert(`GAME OVER! Punti: ${score}`);
  }
}







function conversionMstoSec (ms){
  let sec = ms/1000;

  return sec;
}