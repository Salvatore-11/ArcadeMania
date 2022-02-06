function showAlert(message) {
    const alertMessage= document.querySelector('.game-alert-notification');

    alertMessage.innerHTML = message;
}

function restart(){
    const restartButton = document.getElementById('restart');
    restartButton.classList.remove('d-none');
    // Tasto rigioca 
    restartButton.addEventListener('click', function(){
      window.location.reload(); // ricarico la pagina
    })
  }