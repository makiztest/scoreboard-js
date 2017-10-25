var homeBtn = document.querySelector(".home-btn");
var visitorBtn = document.querySelector(".visitor-btn");
var homeScore = document.querySelector(".homeScore");
var visitorScore = document.querySelector(".visitorScore");
var homeInitialScore = 0;
var visitorInitialScore = 0;

homeBtn.addEventListener("click", function() {
    //add score to home
    homeInitialScore++;
    homeScore.textContent = homeInitialScore;
});

visitorBtn.addEventListener("click", function() {
    //add score to visitor
    visitorInitialScore++;
    visitorScore.textContent = visitorInitialScore;
})