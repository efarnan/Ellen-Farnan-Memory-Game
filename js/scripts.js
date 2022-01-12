 const cards = document.querySelectorAll('.memory-card');
 const deck = document.querySelectorAll('.memory-game');

//Star rating
const stars = document.querySelectorAll(".fa-star");
const starsList = document.querySelectorAll(".stars li");

const grid = document.querySelector(".memory-game"); 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let combosFound = 0;  
let movesCounter = 0;
let isPaused = false;
let cardsTotal = 12;
let cardsDisabled = []
let count = 60;
let interval;


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
  isPaused = false;
  
  cards.forEach(card => card.style.visibility = 'visible');

  for (var i = 0; i < cards.length; i++) {
    deck.innerHTML = "";
    cards[i].classList.remove("flip");
  }

 cards.forEach(card => card.onclick = flipCard);
  
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

if (movesCounter > 8 && movesCounter < 12) {
  for (i = 0; i < 3; i++) {
    if (i > 1) {
      stars[i].style.visibility = "collapse";
    }
  }
} else if (movesCounter > 13) {
  for (i = 0; i < 3; i++) {
    if (i > 0) {
      stars[i].style.visibility = "collapse";
    }
  }
} 

  movesCounter++;
  document.getElementById('moves').innerHTML= movesCounter;

  checkForMatch();
  console.log('flipCards running')
}
//leave flipCard as current function format. OR Pass in a variable to the button to use new synax per Sunny

const checkForMatch = () => {
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

const disableCards = () => {
  firstCard.removeAttribute('onclick', flipCard);
  secondCard.removeAttribute('onclick', flipCard);

    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';

    resetBoard();
    cardsDisabled++;
    console.count('The value of cardsDisabled is "')
    }, 1000);
    console.log('disableCards running')
}

const unflipCards = () => {
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

cards.forEach(card => card.onclick = flipCard);

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
  pauseGame();

  const modal3 = document.getElementById("pse-Modal");
  modal3.style.display= 'block';
  window.onclick = modalExit = (event) => {
    if (event.target == modal3) {
      modal3.style.display = "none";
      isPaused = false; 
   }
  }
}

//TUTORAL MODAL 
const modal = document.getElementById("tutModal");
const tutbtn = document.getElementById("tut-btn");
const span = document.getElementsByClassName("close")[0];

tutbtn.onclick = modalOpen = () => {
  modal.style.display = "block";
  pauseGame();
}

span.onclick = modalClose = () => {
  modal.style.display = "none";
  isPaused = false;
}

window.onclick = modalExit = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    isPaused = false;
 }
}

const reStartGame = () => {
//Restart Confirmation Modal
  isPaused = true;
  const modal2 = document.getElementById('restartModal');
  const span = document.getElementsByClassName('close')[1];
  const cancelBtn = document.getElementsByClassName('cancel-btn')[0];
  const restartBtn = document.getElementsByClassName('restart-btn')[0];
  modal2.style.display = "block";

  cancelBtn.onclick = modalClose = () => {
    modal2.style.display = "none";
    isPaused = false;
  }

  span.onclick = modalClose = () => {
    modal2.style.display = "none";
    isPaused = false;
  }

  window.onclick = modalExit = (event) => {
    if (event.target == modal2) {
      modal2.style.display = "none";
      isPaused = false;
   }
  }

  restartBtn.onclick =  () => {
    modal2.style.display = "none";
    startGame();

  }
  console.log('reStartGame running')
}

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
   overlay.onclick = () => {
    overlay.classList.remove('visible');
    startGame();
  }
  console.log('ready running')
});
}

ready();

//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
//https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-5-the-timer
