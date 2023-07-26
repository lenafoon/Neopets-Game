const doughnutfruitsData = [
  {
    name: "Blue-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits\foo_doughnutfruit_blue.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Green-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_green.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Purple-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_purple.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Yellow-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_yellow.gif",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Grey-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_grey_doughnutfruit.gif",
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
    imageSrc: "/Neopets-Doughnutfruits/foo_grill_doughnutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fish-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_fish.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fire-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/fire_doughnutfruit.gif",
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
    imageSrc: "/Neopets-Doughnutfruits/tropical_donutfruit.gif",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Silver-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_silver.gif",
    pointValue: 5,
    isGood: true,
  },
  {
    name: "Gold-Doughnutfruit",
    imageSrc: "/Neopets-Doughnutfruits/foo_doughnutfruit_gold.gif",
    pointValue: 10,
    isGood: true,
  },
  {
    name: "Rainbow-Doughnutfruit",
    imageSrc:  "",
    pointValue: 20,
    isGood: true,
  },
 
];

const dungData = [{ name: "Dung", imageSrc: "Dung.webp", isGood: false }];

class Game {
  // code to be added
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-over-screen");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.gameIsOver = false;
  }
}
