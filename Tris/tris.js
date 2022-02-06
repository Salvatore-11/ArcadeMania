const cells = document.querySelectorAll('.cell');

//input name e wrapper e box player
let newplayer=document.querySelector('#nameplayer')

let namePlayer= document.querySelector('.game-alert-notification');

let labelPlayer = document.querySelector('#labelPlayer');

let boxPlayer = document.querySelector('#box-player');


//bottone add 
let add=document.querySelector('#add')

const game = {

   'players' : [],

   'changePlayer': function(nome, sign){
    if(nome == '' ||  nome === ' '){
        alert('Inserire Nome')
    }else{
        namePlayer.innerHTML=''
        let newPlayer= {'name': nome , 'sign' : sign};
        this.players.push(newPlayer)
    }
},

}


function trisPvP(){

    let turn = 0;
    
    const cellSigns = [];
    let hasWon = null;    
    for(let i = 0; i < cells.length; i++){
      const cell = cells[i];
    
     
      if (hasWon == null){
        namePlayer.innerText= game.players[0].name;
          cell.addEventListener('click', function(){
        
            if(cellSigns[i] || hasWon){
              return; 
            }
        
            turn++;
        
            let player;
            if(turn % 2 === 0) {
              player = game.players[1];
              namePlayer.innerText= game.players[0].name;
            } else {
              player = game.players[0];
              namePlayer.innerText= game.players[1].name;

            }
            
            cell.innerText = player.sign;
            cellSigns[i] = player.sign;
        
            hasWon = checkVictory(cellSigns);
        
            if(hasWon){
              showAlert(`${player.name} con simbolo ${player.sign} ha vinto!`);
              restart();
              return;
            } else if (turn === 9){
              showAlert('Pareggio');
              restart();
              return;
            }
          })

      }
    }

}
setNamePlayers();



function checkVictory (cellSigns) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < winningCombinations.length; i++){
    const combination = winningCombinations[i];

    const a = combination[0];
    const b = combination[1];
    const c = combination[2];


    if(cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]){
      console.log(`Trovata combinazione vincente: ${a} ${b} ${c}`);
      return true;
    }
  }

  return false;
}

function setNamePlayers(){

    let inputName='';
    let controllo = true;
    labelPlayer.innerText= `Nome Player 1`
    add.addEventListener('click' , ()=>{
        labelPlayer.innerText= `Nome Player 2`
        if(game.players.length==0 && controllo == true){
            inputName=newplayer.value
            game.changePlayer(inputName,'X')
        }else if(game.players.length=1 && controllo){
            inputName=newplayer.value
            game.changePlayer(inputName,'O')
            boxPlayer.classList.add('d-none');
            controllo = false;
            
        }
        else
        {
            alert('Errore massimo 2 giocatori')
        }

        if (game.players.length==2) {
            trisPvP();
      }
})




    
}




// Modalita vs cpu
// function trisCpu() {
// }


