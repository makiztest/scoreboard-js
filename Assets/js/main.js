var homeBtn = document.querySelector(".home-btn");
var visitorBtn = document.querySelector(".visitor-btn");
var resetBtn = document.querySelector(".reset");
var homeScoreDisplay = document.querySelector(".homeScore");
var visitorScoreDisplay = document.querySelector(".visitorScore");
var winner = document.querySelector(".winner");
var bestOfScoreInput = document.querySelector("input[type='number']");
var bestOfScoreInputDisplay = document.querySelector("h3");
var homeScore = 0;
var visitorScore = 0;
var gameOver = false;
var winnerBlink;
var winningScore = 5;

homeBtn.addEventListener("click", function() {
    //add score to home
    if(!gameOver) {
        homeScore++;
        console.log(homeScore, winningScore)
        if(homeScore === winningScore) {
            winner.textContent = "home wins";
            winner.classList.add("winner");
            gameOver = true;
            winnerBlink = setInterval(function() {
                winner.classList.toggle("winnerBlink");
            }, 1000)
        }
        homeScoreDisplay.textContent = homeScore;
    }
});

visitorBtn.addEventListener("click", function() {
    //add score to visitor
    if(!gameOver) {
        visitorScore++;
        if(visitorScore === winningScore) {
            winner.textContent = "visitor wins";
            winner.classList.add("winner");
            gameOver = true;
            winnerBlink = setInterval(function() {
                winner.classList.toggle("winnerBlink");
            }, 1000)
        }
        visitorScoreDisplay.textContent = visitorScore;
    }
})

 bestOfScoreInput.addEventListener("change", function() {
     bestOfScoreInputDisplay.textContent = bestOfScoreInput.value;
     winningScore = bestOfScoreInput.value;
 })

var stopBlink = function() {
    clearInterval(winnerBlink);
}

resetBtn.addEventListener("click", function() {
    homeScore = 0;
    visitorScore = 0;
    homeScoreDisplay.textContent = homeScore;
    visitorScoreDisplay.textContent = visitorScore;
    winner.textContent = "";
    stopBlink();
    gameOver = false;
})