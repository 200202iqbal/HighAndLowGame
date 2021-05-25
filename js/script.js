   //browser Random number
    var numberValueElement = document.getElementById("number");
    var numberRandom = Math.floor(Math.random()*13);
    numberValueElement.innerHTML = numberRandom;
      
    //user Random number
    var userRandomNumber = Math.floor(Math.random()*13); 
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
    var flag = 0;
    var setValue = sessionStorage.setItem("scoreCount", scoreValue);
    var getValue = sessionStorage.getItem("scoreCount");

    
//buttonの関数
function low()
{

    if( userRandomNumber < numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        var setValue = sessionStorage.setItem("scoreCount", scoreValue);;
        buttonNext();
    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        sessionStorage.clear();
    }
}

function draw()
{
    
    if( userRandomNumber == numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        var setValue = sessionStorage.setItem("scoreCount", scoreValue);
        buttonNext();
    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        sessionStorage.clear();
    }
}

function high()
{
    
    if( userRandomNumber > numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        var setValue = sessionStorage.setItem("scoreCount", scoreValue);
        buttonNext();
        
    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        sessionStorage.clear();
    }
}

function buttonHidden()
{
    boxLow.hidden = true;
    boxDraw.hidden = true; 
    boxHigh.hidden = true;
    buttonRetry.hidden = false;
}

function buttonNext()
{
    boxLow.hidden = true;
    boxDraw.hidden = true; 
    boxHigh.hidden = true;
    buttonRetry.hidden = true;
    buttonNextGame.hidden = false;
    
}
function next()
{
    boxLow.hidden = false;
    boxDraw.hidden = false; 
    boxHigh.hidden = false;
    buttonNextGame.hidden = true;
    randomNumber();
}
function retry()
{
    document.location.reload();
}
// Retrieve
scoreValueElement.innerHTML = sessionStorage.getItem("scoreCount");

function scoreFlag(flag)
{
    if (flag == 1)
    {
        scoreValue++;   
    }else
    {
        scoreValue = 0;
    }
    return scoreValue;
}
function showscore()
{
    var score = sessionStorage.getItem("scoreCount");
    console.log(score);
}
function randomNumber()
{
    //browser Random number
    numberValueElement = document.getElementById("number");
    numberRandom = Math.floor(Math.random()*13);
    numberValueElement.innerHTML = numberRandom;
      
    //user Random number
    userRandomNumber = Math.floor(Math.random()*13); 
    console.log("number random ", numberRandom);
    console.log("user random ", userRandomNumber);
}


