const doughnutfruitsData = [
  {
    name: "Blue-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_blue.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Green-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_green.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Purple-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_purple.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Yellow-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_yellow.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Grey-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_grey_doughnutfruit.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Checkered-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/checkered_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Grilled-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_grill_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fish-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_fish.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fire-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/fire_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Ice-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/ice_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Sponge-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/sponge_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Tropical-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/tropical_donutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Silver-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_silver.gif",
    pointValue: 5,
    isGood: true,
  },
  {
    name: "Gold-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_gold.gif",
    pointValue: 10,
    isGood: true,
  },
  {
    name: "Rainbow-Doughnutfruit",
    imageSrc: "Neopets-Doughnutfruits/foo_doughnutfruit_rainbow.gif",
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
  // code to be added
  constructor() {
    this.w = 496;
    this.h = 656;
    this.inGameScreen = document.querySelector(".inGame-img");
    this.inGameScreen.style.width = `${this.w}px`;
    this.inGameScreen.style.height = `${this.h}px`;
    this.fruit = [];
    this.score = document.querySelector(".points");
    this.isGameOver = false;
    this.spawnFruitInterval = 1000;
  }
  startGame() {
    this.gameIsOver = false;
    this.score = 0;
    this.fruit = [];
    this.spawnFruitInterval();
    this.gameLoop();
  }
  spawnFruit() {
    setInterval(() => {
      if (!this.isGameOver) {
        const randomFruit = Math.floor(
          Math.random() * doughnutfruitsData.addEventListener
        );
        const fruit = new this.fruit(doughnutfruitsData[randomFruit]);
        this.fruit.push(fruit);
      }
    });
  }
}
