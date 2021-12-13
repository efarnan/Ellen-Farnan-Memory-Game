const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let combosFound = 0;  
let movesCounter = 0
let count = 60;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  movesCounter++;
  //MOVE COUNTER{  
  document.getElementById('moves').innerHTML= movesCounter;

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  
  secondCard = this;

  checkForMatch();
}
//leave flipCard as current function format. OR Pass in a variable to the button to use new synax

const checkForMatch = () => {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
         disableCards();
         combosFound++;
         return;

         if (combosFound === 8){
           victory();
         }
    }
        
    unflipCards();
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';

    resetBoard();
    }, 1500);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

cards.forEach(card => card.addEventListener('click', flipCard));

//TUTORAL MODAL 
const modal = document.getElementById("tutModal");
// Get the button that opens the modal
const btn = document.getElementById("tut-btn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function modalOpen() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function modalClose() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function modalExit(event) {
  if (event.target == modal) {
    modal.style.display = "none";
 }
}



//START GAME
const startGame = () => {
    //TIMER
  let interval = setInterval( () => {
    document.getElementById('time-remaining').innerHTML= count;
    count--;

    if (count === 0){
      clearInterval(interval);
      document.getElementById('time-remaining').innerHTML='Done';

      gameOver();
  }
}, 1000);
}


const reStartGame = () => {
  startGame();

//Restart Confirmation Modal
  const modal = document.getElementById('rsrt-modal');

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      }
  } 
}


//GAME OVER
function gameOver(){
  clearInterval(interval);
  document.getElementById('game-over-text').classList.add('visible')
}

//VICTORY
function victory(){
  clearInterval(interval);
  documemt.getElementById('victory-text').classList.add('visible');
}

function ready(){
  const overlays = Array.from(document.getElementsByClassName('overlay-text'));
  const cards = Array.from(document.getElementsByClassName('memory-card'));

  overlays.forEach(overlay => { 
   overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    startGame();
    console.log ('test')
  })
});
}
ready();