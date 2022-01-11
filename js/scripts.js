 const cards = document.querySelectorAll('.memory-card');
 const deck = document.querySelectorAll('.memory-game');

//Star rating
const stars = document.querySelectorAll(".fa-star");
let starsList = document.querySelectorAll(".stars li");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let combosFound = 0;  
let movesCounter = 0;
let timeLeft;
let isPaused = false;
let cardsTotal = 12;
let cardsDisabled = []
let count = 60;
let interval;
let grid = document.querySelector(".memory-game"); 

//AUDIO




//START GAME
const startGame = () => {
  movesCounter = 0
  document.getElementById('moves').innerHTML= movesCounter;

  count = 60;
  timer = document.getElementById('time-remaining').innerHTML= count;
    timer.innerHTML = "60";
    clearInterval(interval);

    startTimer();

  lockBoard = false;
  hasFlippedCard = false;
  combosFound = 0; 
  cardsDisabled = [];
  console.log(cardsDisabled); 
  
  cards.forEach(card => card.style.visibility = 'visible');

  for (var i = 0; i < cards.length; i++) {
    deck.innerHTML = "";
    cards[i].classList.remove("flip");
  }

  cards.forEach(card => card.addEventListener('click', flipCard));
  
  for (let i= 0; i < stars.length; i++){
    stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
  }

  shuffle(cards);

  resetBoard();
  
  console.log('startGame running')
}


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  if (moves === 13) {
    // First element child is the <i> within the <li>
    star[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
  if (moves === 18) {
    star[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  movesCounter++;
  document.getElementById('moves').innerHTML= movesCounter;

  checkForMatch();
  console.log('flipCards running')
}
//leave flipCard as current function format. OR Pass in a variable to the button to use new synax per Sunny

let checkForMatch = () => {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
        combosFound++;
        console.log('combosFound');
        disableCards();
        
        if (combosFound === 6){
          victory();
          console.log('test combos')
        } 

         return;
    }

    unflipCards();
    console.log('checkforMatch running')
}

let disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';

    resetBoard();
    cardsDisabled++;
    console.count('The value of cardsDisabled is "')
    }, 1000);
    console.log('disableCards running')
}

let unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);

  console.log('unflipCards running')
}

const resetBoard = () => {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  console.log('resetBoard running')
}

const shuffle = () => {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
   console.log('shuffle running')
 };

cards.forEach(card => card.addEventListener('click', flipCard));

const startTimer = () => {
  //TIMER
  interval = setInterval( () => {
    if (!isPaused) {
    document.getElementById('time-remaining').innerHTML= count;
    count--;
    console.log('test timer 1')
    }

    if (count === 0){
      clearInterval(interval);
      document.getElementById('time-remaining').innerHTML='Done';
      gameOver();
      console.log('test timer 2')
     }
   }, 1000);
   console.log('startTimer running')
}

const pauseGame = () => {  
  //document.getElementById('pause-text').classList.add('visible');

  if(!isPaused){
		isPaused = true;
    //setting the value to ispause 
	}
  else {
    isPaused = false;
  }
  console.log('pauseGame running')
}

const pauseModal = () => {
  document.getElementById('pause-text').style.visibility='visible'
  pauseGame();
  
  console.log('pauseGame Modal running')
}


//TUTORAL MODAL 
const modal = document.getElementById("tutModal");
const tutbtn = document.getElementById("tut-btn");
const span = document.getElementsByClassName("close")[0];

tutbtn.onclick = function modalOpen() {
  modal.style.display = "block";
  pauseGame();
}

span.onclick = function modalClose() {
  modal.style.display = "none";
  isPaused = false;
}

window.onclick = function modalExit(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    isPaused = false;
 }
}


const reStartGame = () => {
//Restart Confirmation Modal
  const modal = document.getElementById('restartModal');
  const btn = document.getElementById('rstrt-btn');
  const span = document.getElementsByClassName('close')[0];
  const restart = document.getElementById('int-rstrt');

  modalOpen = () => {
    modal.style.display = "block";
  }

  span.onclick = function modalClose() {
    modal.style.display = "none";
  }

  window.onclick = function modalExit(event) {
    if (event.target == modal) {
      modal.style.display = "none";
   }
  }

  restart.onclick = function restartComp(){
    modal.style.display = "none";
    startGame();
  }

  pauseGame();
  console.log('reStartGame running')
}

document.getElementById('rstrt-btn').addEventListener('click', reStartGame);

//GAME OVER
const gameOver = () => {
  document.getElementById('game-over-text').classList.add('visible')
  clearInterval(interval);
  console.log('gameOver running')
}

//VICTORY
const victory = () => {
  clearInterval(interval);
  document.getElementById('victory-text').classList.add('visible');
  
  const starRating = document.querySelector('.stars').innerHTML;
  document.getElementById("starRating").innerHTML = starRating;
  
  console.log('victory running')
    
}

const ready = () => {
  const overlays = Array.from(document.getElementsByClassName('overlay-text'));

  overlays.forEach(overlay => { 
   overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    startGame();
  })
  console.log('ready running')
});
}

ready();

//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
//https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-5-the-timer


