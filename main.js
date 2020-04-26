// Declaring Variables
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const explain = document.querySelector('.explanation');

const playerText = document.getElementById('playerText');
const drawsText = document.getElementById('drawsText');
const oppText = document.getElementById('oppText');

let playerScore = 0;
let draws = 0;
let oppScore = 0;

// Selecting Rock Functionality

rock.addEventListener('click', selectRock);

function selectRock() {
  let oppAnswer = Math.floor(Math.random() * 3);
  if (oppAnswer === 0) {
    explain.innerHTML = 'TIE! Both picked Rock!';
    draws++;
    drawsText.innerHTML = draws;
    rock.classList.add('selection-tie');
    setTimeout(() => rock.classList.remove('selection-tie'), 300);
  } else if (oppAnswer === 1) {
    explain.innerHTML = "Lost. Rock doesn't beat Paper!";
    oppScore++;
    oppText.innerHTML = oppScore;
    rock.classList.add('selection-lost');
    setTimeout(() => rock.classList.remove('selection-lost'), 300);
  } else if (oppAnswer === 2) {
    explain.innerHTML = 'WON! Rock beats Scissors!';
    playerScore++;
    playerText.innerHTML = playerScore;
    rock.classList.add('selection-won');
    setTimeout(() => rock.classList.remove('selection-won'), 300);
  }
}

// Selecting Paper Functionality

paper.addEventListener('click', selectPaper);

function selectPaper() {
  let oppAnswer = Math.floor(Math.random() * 3);
  if (oppAnswer === 0) {
    explain.innerHTML = 'WON! Paper beats Rock!';
    playerScore++;
    playerText.innerHTML = playerScore;
    paper.classList.add('selection-won');
    setTimeout(() => paper.classList.remove('selection-won'), 300);
  } else if (oppAnswer === 1) {
    explain.innerHTML = 'TIE! Both picked Paper!';
    draws++;
    drawsText.innerHTML = draws;
    paper.classList.add('selection-tie');
    setTimeout(() => paper.classList.remove('selection-tie'), 300);
  } else if (oppAnswer === 2) {
    explain.innerHTML = "Lost. Paper doesn't beat Scissors!";
    oppScore++;
    oppText.innerHTML = oppScore;
    paper.classList.add('selection-lost');
    setTimeout(() => paper.classList.remove('selection-lost'), 300);
  }
}

// Selecting Scissors Functionality

scissors.addEventListener('click', selectScissors);

function selectScissors() {
  let oppAnswer = Math.floor(Math.random() * 3);
  if (oppAnswer === 0) {
    explain.innerHTML = "Lost. Scissors doesn't beat Rock!";
    oppScore++;
    oppText.innerHTML = oppScore;
    scissors.classList.add('selection-lost');
    setTimeout(() => scissors.classList.remove('selection-lost'), 300);
  } else if (oppAnswer === 1) {
    explain.innerHTML = 'WON! Scissors beats Paper!';
    playerScore++;
    playerText.innerHTML = playerScore;
    scissors.classList.add('selection-won');
    setTimeout(() => scissors.classList.remove('selection-won'), 300);
  } else if (oppAnswer === 2) {
    explain.innerHTML = 'TIE! Both picked Scissors!';
    draws++;
    drawsText.innerHTML = draws;
    scissors.classList.add('selection-tie');
    setTimeout(() => scissors.classList.remove('selection-tie'), 300);
  }
}

// Shortcut Keys
window.addEventListener('keyup', (e) => {
  if (e.keyCode === 49 || e.keyCode === 97) {
    selectRock();
  } else if (e.keyCode === 50 || e.keyCode === 98) {
    selectPaper();
  } else if (e.keyCode === 51 || e.keyCode === 99) {
    selectScissors();
  }
});

// If score is impressive message
window.addEventListener('click', impressive);
window.addEventListener('keyup', impressive);

function impressive() {
  setTimeout(() => {
    if (playerScore === 10 && oppScore === 0) {
      explain.innerHTML = `YOU ARE VERY IMPRESSIVE! 10 - ${draws} - 0, WOW`;
    } else if (playerScore === 0 && oppScore === 10) {
      let resetScore = prompt(
        `Would you like to reset the score because it is 0 - ${draws} - 10... Just say 'Yes' or 'No'`
      );
      if (resetScore.toLowerCase().trim() === 'yes') {
        playerScore = 0;
        oppScore = 0;
        draws = 0;
        playerText.innerHTML = 0;
        drawsText.innerHTML = 0;
        oppText.innerHTML = 0;
        explain.innerHTML = `Reset the score to 0 - 0 - 0`;
      } else if (resetScore.toLowerCase().trim() === 'no') {
        explain.innerHTML = 'Continuing the game...';
      }
    } else if (playerScore === oppScore + 20) {
      explain.innerHTML = `CONGRATS! You are winning by 20 points, the score is ${playerScore} - ${draws} - ${oppScore}!`;
    }
  }, 100);
}

// Store score in local storage
window.onbeforeunload = () => {
  if (playerScore > 0 || draws > 0 || oppScore > 0) {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('draws', draws);
    localStorage.setItem('oppScore', oppScore);
  }
};

// Get score
window.onload = () => {
  let check = localStorage.getItem('playerScore');
  if (check) {
    let question = confirm(
      'Would you like to load the score from last session?'
    );
    if (question === true) {
      playerScore = localStorage.getItem('playerScore');
      draws = localStorage.getItem('draws');
      oppScore = localStorage.getItem('oppScore');
      playerText.innerHTML = playerScore;
      drawsText.innerHTML = draws;
      oppText.innerHTML = oppScore;
    }
  }
};
