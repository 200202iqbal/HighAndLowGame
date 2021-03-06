//browser Random number
var numberValueElement = document.getElementById("number");
var numberRandom = Math.floor(Math.random() * 3);
numberValueElement.innerHTML = numberRandom;

//user Random number
var userRandomNumber = Math.floor(Math.random() * 3);
console.log(numberRandom);
console.log(userRandomNumber);

//Button を宣言する
var boxLow = document.getElementById("box-low");
var boxDraw = document.getElementById("box-draw");
var boxHigh = document.getElementById("box-high");
var buttonRetry = document.getElementById("box-retry");
var buttonNextGame = document.getElementById("box-next");
buttonRetry.hidden = true;
buttonNextGame.hidden = true;
//

var resultTextElement = document.getElementById("resultText");
var scoreValueElement = document.getElementById("scoresValue");
var scoreValue = 0;

var setValue = sessionStorage.setItem("scoreCount", scoreValue);
var getValue = sessionStorage.getItem("scoreCount");

//buttonの関数
function low() {
  if (userRandomNumber < numberRandom) {
    scoreValue++;
    resultTextElement.innerHTML = "Win !! [勝った !!]";
    scoreValueElement.innerHTML = scoreValue;
    setValue = sessionStorage.setItem("scoreCount", scoreValue);
    buttonNext();
  } else {
    resultTextElement.innerHTML = "Lose !! [負けた !!]";
    buttonHidden();
    sessionStorage.clear();
  }
}

function draw() {
  if (userRandomNumber == numberRandom) {
    scoreValue++;
    resultTextElement.innerHTML = "Win !! [勝った !!]";
    scoreValueElement.innerHTML = scoreValue;
    setValue = sessionStorage.setItem("scoreCount", scoreValue);
    buttonNext();
  } else {
    resultTextElement.innerHTML = "Lose !! [負けた !!]";
    buttonHidden();
    sessionStorage.clear();
  }
}

function high() {
  if (userRandomNumber > numberRandom) {
    scoreValue++;
    resultTextElement.innerHTML = "Win !! [勝った !!]";
    scoreValueElement.innerHTML = scoreValue;
    setValue = sessionStorage.setItem("scoreCount", scoreValue);
    buttonNext();
  } else {
    resultTextElement.innerHTML = "Lose !! [負けた !!]";
    buttonHidden();
    sessionStorage.clear();
  }
}

function buttonHidden() {
  boxLow.hidden = true;
  boxDraw.hidden = true;
  boxHigh.hidden = true;
  buttonRetry.hidden = false;
}

function buttonNext() {
  boxLow.hidden = true;
  boxDraw.hidden = true;
  boxHigh.hidden = true;
  buttonRetry.hidden = true;
  buttonNextGame.hidden = false;
}
function next() {
  boxLow.hidden = false;
  boxDraw.hidden = false;
  boxHigh.hidden = false;
  buttonNextGame.hidden = true;
  randomNumber();
}
function retry() {
  document.location.reload();
}
// Retrieve
scoreValueElement.innerHTML = sessionStorage.getItem("scoreCount");

function randomNumber() {
  //browser Random number
  numberValueElement = document.getElementById("number");
  numberRandom = Math.floor(Math.random() * 3);
  numberValueElement.innerHTML = numberRandom;

  //user Random number
  userRandomNumber = Math.floor(Math.random() * 3);
  console.log("number random ", numberRandom);
  console.log("user random ", userRandomNumber);
}
