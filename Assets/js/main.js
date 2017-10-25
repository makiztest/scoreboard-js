var homeBtn = document.querySelector(".home-btn");
var visitorBtn = document.querySelector(".visitor-btn");
var resetBtn = document.querySelector(".reset");
var homeScoreDisplay = document.querySelector(".homeScore");
var visitorScoreDisplay = document.querySelector(".visitorScore");
var winner = document.querySelector(".winner");
var blink = false;
var homeScore = 0;
var visitorScore = 0;
var gameOver = false;
var winningScore = 5;

homeBtn.addEventListener("click", function() {
    //add score to home
    if(!gameOver) {
        homeScore++;
        if(homeScore === winningScore) {
            winner.textContent = "home wins";
            winner.classList.add("winner");
            winnerBlink();
            gameOver = true;
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
            winnerBlink();
            gameOver = true;
        }
        visitorScoreDisplay.textContent = visitorScore;
    }
})

function winnerBlink() {
    if(!blink) {
        setInterval(function() {
            winner.classList.toggle("winnerBlink");
        }, 800)
    }
}



resetBtn.addEventListener("click", function() {
    homeScore = 0;
    visitorScore = 0;
    homeScoreDisplay.textContent = homeScore;
    visitorScoreDisplay.textContent = visitorScore;
    gameOver = false;
})