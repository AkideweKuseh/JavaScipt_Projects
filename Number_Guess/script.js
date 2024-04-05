'use strict';

// Defining secrete number

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let currentHighscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // RC
    displayMessage('🛑 No Number!');
    // document.querySelector('.message').textContent = '🛑 No Number!';
    // when Player wins
  } else if (guess === secreteNumber) {
    // RC
    displayMessage('✅ Correct Number!');
    // document.querySelector('.message').textContent = '✅ Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNumber;
    if (currentScore > currentHighscore) {
      currentHighscore = currentScore;

      document.querySelector('.highscore').textContent = currentHighscore;
    }
  }
  // Refactored code(RC)
  // when guess is wrong
  else if (guess !== secreteNumber) {
    if (currentScore > 1) {
      // RC
      displayMessage(guess > secreteNumber ? '📈 Too High' : '📉 Too Low');
      // document.querySelector('.message').textContent =
      //   guess > secreteNumber ? '📈 Too High' : '📉 Too Low';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      // RC
      displayMessage('💥You lost the game');
      // document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   When guess is too high
  // else if (guess > secreteNumber) {
  //   if (currentScore > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     currentScore--;
  //     document.querySelector('.score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //   When guess is too low
  // else if (guess < secreteNumber) {
  //   if (currentScore > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     currentScore--;
  //     document.querySelector('.score').textContent = currentScore;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;

  // RC
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  // resetting the game
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = currentScore;
});

// Remember to always refactor your code
