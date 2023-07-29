window.onload = function () {
  const music = document.getElementById("music");
  const soundBtn = document.querySelector(".sound-on");
  const soundOff = document.querySelector(".sound-off");
  
  soundOff.addEventListener("click", function () {
    music.play();
    soundBtn.style.display = "block";
    soundOff.style.display = "none";
    console.log(clicked);
  });

  soundBtn.addEventListener("click", function () {
    music.pause();
    soundBtn.style.display = "none";
    soundOff.style.display = "block";
    console.log(clicked);
  });

  const highScoreScreen = document.querySelector(".high-score");
  const backBtn = document.querySelector(".back-btn");
  
  highScoreScreen.addEventListener("click", function () {
    let scoreScreenToggle = document.getElementById("score-screen");
    let gameIntro = document.getElementById("intro-screen");
    gameIntro.style.display = "none";
    scoreScreenToggle.style.display = "block";
  });

  backBtn.addEventListener("click", function () {
    location.reload();
  });


  const game = new Game();

  const startButton = document.querySelector(".start-game-btn");
  startButton.addEventListener("click", function () {
    let introToggle = document.getElementById("intro-screen");
    let gameScreen = document.getElementById("inGame-container");
    introToggle.style.display = "none";
    gameScreen.style.display = "block";
    game.startGame();
  });
};
