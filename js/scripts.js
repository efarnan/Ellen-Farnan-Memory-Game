const cards = document.querySelectorAll('.memory-card');

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

//START GAME
const startGame = () => {
  movesCounter = 0
  document.getElementById('moves').innerHTML= movesCounter;

  for (var i= 0; i < stars.length; i++){
    stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
  }

  count = 60;
  timer = document.getElementById('time-remaining').innerHTML= count;
    timer.innerHTML = "60";
    clearInterval(interval);

    startTimer();

  lockBoard = false;
  hasFlippedCard = false;
  combosFound = 0; 
    
  cards.forEach(card => card.style.visibility = 'visible');
  shuffle(cards);
  
  resetBoard();

}
    


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  movesCounter++;
  document.getElementById('moves').innerHTML= movesCounter;

  if (movesCounter > 8 && movesCounter < 12){
    for( i= 0; i < 3; i++){
        if(i > 1){
            stars[i].style.visibility = "collapse";
        }
    }
}
else if (movesCounter > 13){
    for( i= 0; i < 3; i++){
        if(i > 0){
            stars[i].style.visibility = "collapse";
        }
    }
}

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  
  secondCard = this;

  checkForMatch();
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
}



let disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';

    resetBoard();
    cardsDisabled++;
    console.log('The value of cardsDisabled is "')
    }, 1000);
}

let unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);

  if (victory) return;

}

const resetBoard = () => {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  console.log('test reset')
}

const shuffle = () => {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 };

cards.forEach(card => card.addEventListener('click', flipCard));

//TUTORAL MODAL 
const modal = document.getElementById("tutModal");
const tutbtn = document.getElementById("tut-btn");
const span = document.getElementsByClassName("close")[0];

tutbtn.onclick = function modalOpen() {
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


const startTimer = () => {
  //TIMER
  interval = setInterval( () => {
    document.getElementById('time-remaining').innerHTML= count;
    count--;

    if (count === 0){
      clearInterval(interval);
      document.getElementById('time-remaining').innerHTML='Done';
      gameOver();
      console.log('test start game')
     }
   }, 1000);
}

const pauseGame = () => {
  if(!paused){
		isPaused = true;
		clearInterval(interval); // stop the clock
		timeLeft = time_remaining(deadline).total; // preserve remaining time
	}
}

  document.getElementById('pause-btn').addEventListener('click', function () {
    isPaused = true;
  });

  function resume_clock(){
    if(paused){
      isPaused = false;
  
      // update the deadline to preserve the amount of time remaining
      deadline = new Date(Date.parse(new Date()) + timeLeft);
  
      // start the clock
      startTimer();
    }
  }


const reStartGame = () => {
//Restart Confirmation Modal
  const modal = document.getElementById('restartModal');
  const btn = document.getElementById('rstrt-btn');
  const span = document.getElementsByClassName('close')[0];

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

  startGame();
}


//GAME OVER
const gameOver = () => {
  document.getElementById('game-over-text').classList.add('visible')
  clearInterval(interval);
  clearInterval(movesCounter);
}

//VICTORY
const victory = () => {
  document.getElementById('victory-text').classList.add('visible');
  
  const starRating = document.getElementById('stars').innerHTML;
    //showing move, rating, time on modal
    clearInterval(interval);
    clearInterval(movesCounter);

    //document.getElementById("starRating").innerHTML = starRating;
}

const ready = () => {
  const overlays = Array.from(document.getElementsByClassName('overlay-text'));

  overlays.forEach(overlay => { 
   overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    startGame();
    console.log('test start game fun')
  })
});
}

ready();

//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
//https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-5-the-timer