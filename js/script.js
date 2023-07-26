window.onload = function () {
  const startButton = document.querySelector(".start-game-btn");
  const highScoreScreen = document.querySelector(".high-score");
  startButton.addEventListener("click", function () {
    let introToggle = document.getElementById("intro-screen");
    let gameScreen = document.getElementById("inGame-container");
    introToggle.style.display = "none";
    gameScreen.style.display = "block";
  });
};
