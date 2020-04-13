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
