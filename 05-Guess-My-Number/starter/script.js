'use strict';
// *********** expirimeting with the DOM *******

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number🤟';

// document.querySelector('.guess').value = 15;

//******* guess my number Game ***********************
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//functions
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when there is no imput
  if (!guess) {
    displayMessage('type a correct number ‼');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('correct number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the number is different
  } else if (guess !== secretNumber) {
    let nbrMessage = guess > secretNumber ? 'too high!↗' : 'too low!↘';
    if (score > 1) {
      displayMessage(nbrMessage);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost🙁');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// coding challenge restoring button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//the end
