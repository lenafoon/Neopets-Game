class Doughnutfruit {
  constructor(name, imageSrc, pointValue, isGood) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.pointValue = pointValue;
    this.isGood = isGood;
    this.speed = this.calculateSpeed();
    this.x = Math.random() * (496 - 80);
    this.y = 150;
    this.element = this.createImageElement();
    // this.fruits = fruits.style.top = `${fruit.y}px`;
  }

  calculateSpeed() {
    return Math.floor(1 / this.pointValue) ;
  }

  createImageElement() {
    const imgElement = document.createElement("img");
    imgElement.src = this.imageSrc;
    imgElement.alt = this.name;
    imgElement.className = "falling-fruit";
    imgElement.style.position = "absolute";
    imgElement.style.width = "40px";
    imgElement.style.height = "40px";
    imgElement.style.left = this.x + "px";
    imgElement.style.top = this.y + "px";
    document.getElementById("fruits").appendChild(imgElement);
    return imgElement;
  }

  update() {
    this.y += this.speed;
    this.element.style.top = `${this.y}` + "px";
  }

  isOutOfBounds() {
    return this.y > this.player.y;
  }
}

const doughnutfruitsData = [
  {
    name: "Blue-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_blue_edited.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Green-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_green-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Purple-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_purple-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Yellow-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_yellow-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Grey-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_grey_doughnutfruit-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Checkered-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/checkered_doughnutfruit_edited.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Grilled-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_grill_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fish-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_fish-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fire-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/fire_doughnutfruit_edited.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Ice-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/ice_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Sponge-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/sponge_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Tropical-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/tropical_donutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Silver-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_silver-removebg-preview.png",
    pointValue: 5,
    isGood: true,
  },
  {
    name: "Gold-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_gold-removebg-preview.png",
    pointValue: 10,
    isGood: true,
  },
  {
    name: "Rainbow-Doughnutfruit",
    imageSrc: "/editedDoughnutfruits/foo_doughnutfruit_rainbow-removebg-preview.png",
    pointValue: 20,
    isGood: true,
  },
];

const dungData = [
  {
    name: "Dung",
    imageSrc: "/Neopets-Doughnutfruits/Dung.webp",
    isGood: false,
  },
];

class Game {
  constructor() {
    this.w = 496;
    this.h = 656;
    this.inGameScreen = document.querySelector(".inGame-img");
    this.inGameScreen.style.width = `${this.w}px`;
    this.inGameScreen.style.height = `${this.h}px`;
    this.player = new Player();
    this.fruits = [];
    this.score = 0;
    this.isGameOver = false;
    this.spawnFruitsInterval = 100000;
  }

  startGame() {
    this.gameIsOver = false;
    this.score = 0;
    this.fruits = [];
    this.spawnFruits();
    this.gameLoop();
  }

  spawnFruits() {
    setInterval(() => {
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

  gameLoop() {
    if (!this.gameIsOver) {
      this.update();
      this.render();
      requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    this.player.update();
    this.fruits.forEach((fruit) => {
      fruit.element.style.top = `${fruit.y}px`;
      fruit.y += 4;
    });
  }

  render() {
    this.player.render();

    // this.fruits.forEach((fruit) => fruit.render());
  }

  // figure out position/size, return true/false
  checkCollision(player, fruit) {
    const playerRect = player.dom.getBoundingClientRect();
    const fruitRect = fruit.dom.getBoundingClientRect();

    return (
      playerRect.left < fruitRect.right &&
      playerRect.right > fruitRect.left &&
      playerRect.top < fruitRect.bottom &&
      playerRect.bottom > fruitRect.top
    );
  }

  handleCollision(fruit) {
    if (fruit.isGood) {
      this.score += fruit.pointValue;
    } else {
      this.gameIsOver = true;
    }
    const index = this.fruits.indexOf(fruit);
    if (index > -1) {
      this.fruits.splice(index, 1);
    }
  }
  //handle Input?
}
