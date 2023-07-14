let homeScore = document.getElementById('home-Score');
let guestScore = document.getElementById('guest-Score');

let scoreOne = 0;
let scoreTwo = 0;

function homeScoreOne() {
  scoreOne += 1;
  homeScore.innerText = scoreOne;
}

function homeScoreTwo() {
  scoreOne += 2;
  homeScore.innerText = scoreOne;
}

function homeScoreThree() {
  scoreOne += 3;
  homeScore.innerText = scoreOne;
}

function guestScoreOne() {
  scoreTwo += 1;
  guestScore.innerText = scoreTwo;
}

function guestScoreTwo() {
  scoreTwo += 2;
  guestScore.innerText = scoreTwo;
}

function guestScoreThree() {
  scoreTwo += 3;
  guestScore.innerText = scoreTwo;
}
