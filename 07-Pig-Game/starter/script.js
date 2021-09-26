'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerEl = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let stillPlaying = true;
const score = [0, 0];
// functions
//function 1 switch
function switchPlayer() {
  // give currentScore a zero value
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (stillPlaying) {
    // 1.generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. check if the dice == 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// the hold functionality

btnHold.addEventListener('click', function () {
  if (stillPlaying) {
    // 1.add current score to player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //check if score >= 100
    if (score[activePlayer] >= 20) {
      //if true end the game
      stillPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //else switch player
      switchPlayer();
    }
  }
});

// the reset button functionality
btnNew.addEventListener('click', function () {
  // set stillPlaying to true
  stillPlaying = true;
  // set score to zero for both players
  for (let i = 0; i < 2; i++) {
    score[i] = 0;
    document.getElementById(`score--${i}`).textContent = score[i];
  }
  // set current score to 0 for winner/current player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // remove the player winer class
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // select first player
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
