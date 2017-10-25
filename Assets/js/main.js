var homeBtn = document.querySelector(".home-btn");
var visitorBtn = document.querySelector(".visitor-btn");
var homeScoreDisplay = document.querySelector(".homeScore");
var visitorScoreDisplay = document.querySelector(".visitorScore");
var homeScore = 0;
var visitorScore = 0;
var gameOver = false;
var winningScore = 5;

homeBtn.addEventListener("click", function() {
    //add score to home
    if(!gameOver) {
        homeScore++;
        if(homeScore === winningScore) {
            console.log("home")
        }
        homeScoreDisplay.textContent = homeScore;
    }
});

visitorBtn.addEventListener("click", function() {
    //add score to visitor
    if(!gameOver) {
        visitorScore++;
        if(visitorScore === winningScore) {
            console.log("visitor")
        }
        visitorScoreDisplay.textContent = visitorScore;
    }
})