const startButton = document.querySelector(".start-game-btn");

const inGameMaxPoints = document.querySelector(".point");
const music = document.getElementById("music");
const soundBtn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");
const backMenuBtn = document.querySelector(".back-menu");
//SCORE-SCREEN////////////////////
const highScoreScreen = document.querySelector(".high-score");
const backBtn = document.querySelector(".back-btn");
const points = document.querySelector(".tb-points");
const maxPoints = document.querySelector(".final-score-num");
//SCREENS//
let scoreScreenToggle = document.getElementById("score-screen");
let gameIntro = document.getElementById("intro-screen");
let gameImage = document.getElementById("inGame-container");
const gameOverScreenMenu = document.getElementById("game-over");

const game = new Game();

window.onload = function () {
  soundOff.addEventListener("click", function () {
    music.play();
    soundBtn.style.display = "block";
    soundOff.style.display = "none";
    
  });

  soundBtn.addEventListener("click", function () {
    music.pause();
    soundBtn.style.display = "none";
    soundOff.style.display = "block";
    console.log(clicked);
  });
  //score screen//
  highScoreScreen.addEventListener("click", function () {
    gameIntro.style.display = "none";
    scoreScreenToggle.style.display = "block";
    points.textContent = game.score;
  });

  backBtn.addEventListener("click", function () {
    scoreScreenToggle.style.display = "none";
    gameIntro.style.display = "block";
  });

  //Start the game//
  startButton.addEventListener("click", function () {
    gameIntro.style.display = "none";
    gameImage.style.display = "block";
    game.startGame();
    console.log(maxPoints.textContent);

    // get high score from the memory, if it doesn't yet exist put 0.
    inGameMaxPoints.innerHTML = localStorage.getItem("high-score") || 0;
  });

  //Back to main menu after game-over//
  backMenuBtn.addEventListener("click", function () {
    gameIntro.style.display = "block";
    console.log("pressed");
    gameOverScreenMenu.style.display = "none";
  });
};
