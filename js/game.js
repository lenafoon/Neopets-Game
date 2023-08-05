class Doughnutfruit {
  constructor(name, imageSrc, pointValue, isGood) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.pointValue = pointValue;
    this.isGood = isGood;

    this.x = Math.random() * (400 - 80);
    this.y = 180;
    this.element = this.createImageElement();
  }

  createImageElement() {
    const imgElement = document.createElement("img");
    imgElement.src = this.imageSrc;
    imgElement.alt = this.name;
    imgElement.className = "falling-fruit";
    imgElement.style.position = "absolute";
    imgElement.style.width = "47px";
    imgElement.style.height = "47px";
    imgElement.style.left = this.x + "px";
    imgElement.style.top = this.y + "px";
    document.getElementById("fruits").appendChild(imgElement);
    return imgElement;
  }
}

const doughnutfruitsData = [
  {
    name: "Blue-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/foo_doughnutfruit_blue_edited.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Cloud-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/tfo_ddY21_cloud_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Coco-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/can_doughnutfruit_choco-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Prickly-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_prickly-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Strawberry-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_strawberry-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Dung-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/tro_doughnutfruit_dung-removebg-preview.png",
    pointValue: -10,
    isGood: true,
  },
  {
    name: "Pineapple-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/tro_doughnutfruit_pineapple-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Sprinkle-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/tro_doughnutfruit_sprinkled-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Green-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_green-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Purple-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_purple-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Yellow-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_yellow-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Grey-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_grey_doughnutfruit-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Checkered-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/checkered_doughnutfruit_edited.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Grilled-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_grill_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fish-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_fish-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fire-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/fire_doughnutfruit_edited.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Ice-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/ice_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Sponge-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/sponge_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Tropical-Doughnutfruit",
    imageSrc: "editedDoughnutfruits/tropical_donutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Silver-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_silver-removebg-preview.png",
    pointValue: 3,
    isGood: true,
  },
  {
    name: "Gold-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_gold-removebg-preview.png",
    pointValue: 5,
    isGood: true,
  },
  {
    name: "Rainbow-Doughnutfruit",
    imageSrc:
      "editedDoughnutfruits/foo_doughnutfruit_rainbow-removebg-preview.png",
    pointValue: 10,
    isGood: true,
  },
  {
    name: "Dung",
    imageSrc: "Neopets-Doughnutfruits/Dung.webp",
    isGood: false,
  },
  {
    name: "Dung1",
    imageSrc: "Neopets-Doughnutfruits/Dung.webp",
    isGood: false,
  },
  {
    name: "Dung2",
    imageSrc: "Neopets-Doughnutfruits/Dung.webp",
    isGood: false,
  },
  {
    name: "Dung3",
    imageSrc: "Neopets-Doughnutfruits/Dung.webp",
    isGood: false,
  },
];

class Game {
  constructor() {
    this.w = 400;
    this.h = 656;
    this.baseWidth = 380;
    this.maxScaleWidth = Math.min(this.w, window.innerWidth);
    this.scaleFactor = this.maxScaleWidth / this.baseWidth;
    this.inGameScreen = document.querySelector(".inGame-img");
    this.inGameScreen.style.width = `${this.w}px`;
    this.inGameScreen.style.height = `${this.h}px`;
    this.player = new Player();
    this.fruits = [];
    this.score = 0;
    this.isGameOver = false;
    this.spawnFruitsInterval = 100000;
    this.baseFruitSpeed = 5;
    this.fruitSpeedIncrease = 2;
    this.loop = null;
    this.animationFrame = null;
  }

  startGame() {
    this.isGameOver = false;
    this.score = 0;
    this.fruits = [];
    this.spawnFruits();
    this.gameLoop();
    this.inGameScreen.style.display = "block";
    this.player.dom.style.display = "block";
  }

  spawnFruits() {
    this.loop = setInterval(() => {
      //debugger;
      if (!this.isGameOver) {
        const randomFruitIndex = Math.floor(
          Math.random() * doughnutfruitsData.length
        );
        const randomFruitData = doughnutfruitsData[randomFruitIndex];
        const fruit = new Doughnutfruit(
          randomFruitData.name,
          randomFruitData.imageSrc,
          randomFruitData.pointValue,
          randomFruitData.isGood
        );
        this.fruits.push(fruit);
      }
    }, this.spawnFruitsInterval / 60);
  }

  calculateFruitSpeed() {
    const speedIncreaseFactor = Math.floor(this.score / 15);
    return this.baseFruitSpeed + speedIncreaseFactor * this.fruitSpeedIncrease;
  }

  gameLoop() {
    if (!this.isGameOver) {
      this.update();

      this.animationFrame = requestAnimationFrame(() => this.gameLoop());
    }
  }

  isOutOfBounds(fruit) {
    console.log(this.h);
    return fruit.y > 770;
  }

  handleOutofBounds(fruit) {
    const indexes = this.fruits.indexOf(fruit);
    if (indexes > -1) {
      fruit.element.remove();
      this.fruits.splice(indexes, 1);
    }
  }

  catchFruit(fruit) {
    const playerRect = this.player.dom.getBoundingClientRect();
    const fruitRect = fruit.element.getBoundingClientRect();
    const bell = document.getElementById("bell");
    const gameOverScreen = document.getElementById("game-over");
    const neotitle = document.getElementById("inGame-container");
    const finalPoints = document.querySelector(".final-score-num");
    const dungEffect = document.getElementById("dung");
    const startGamePoints = document.querySelector(".points");
    if (this.overlaps(playerRect, fruitRect)) {
      if (fruit.isGood) {
        bell.play();
        this.score += fruit.pointValue;
        this.updateScoreDisplay();
      } else {
        neotitle.style.display = "none";
        this.player.dom.style.display = "none";
        this.inGameScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        finalPoints.textContent = this.score;
        this.isGameOver = true;
        startGamePoints.innerHTML = 0;

        clearInterval(this.loop);
        cancelAnimationFrame(this.animationFrame);

        // get the current high score
        const currentHighScore = localStorage.getItem("high-score") || 0;

        // if our score is greater than the high score, set the high score
        if (this.score > currentHighScore) {
          // save high score in the memory
          localStorage.setItem("high-score", this.score);
        }

        music.pause();
        dungEffect.play();
      }
      return true;
    } else {
      return false;
    }
  }

  overlaps(rect1, rect2) {
    const isInHoriztonalBounds =
      rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds =
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
  }

  update() {
    const currentFruitSpeed = this.calculateFruitSpeed();

    this.fruits.forEach((fruit) => {
      fruit.element.style.top = `${fruit.y}px`;
      fruit.y += currentFruitSpeed;

      if (this.isOutOfBounds(fruit)) {
        this.handleOutofBounds(fruit);
      }
      if (this.catchFruit(fruit)) {
        fruit.element.remove();
        const index = this.fruits.indexOf(fruit);
        if (index > -1) this.fruits.splice(index, 1);
      }
    });
  }
  updateScoreDisplay() {
    const scoreDisplay = document.querySelector(".points");
    scoreDisplay.textContent = this.score;
  }
}
