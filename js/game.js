class Doughnutfruit {
  constructor(name, imageSrc, pointValue, isGood) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.pointValue = pointValue;
    this.isGood = isGood;
    this.speed = this.calculateSpeed();
    this.x = Math.random() * (496 - 80);
    this.y = 200;
    this.element = this.createImageElement();
    // this.fruits = fruits.style.top = `${fruit.y}px`;
  }

  calculateSpeed() {
    return Math.floor(8 / this.pointValue) + 1;
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
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_green-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Purple-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_purple-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Yellow-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_yellow-removebg-preview.png",
    pointValue: 1,
    isGood: true,
  },
  {
    name: "Grey-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_grey_doughnutfruit-removebg-preview.png",
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
    imageSrc:
      "/editedDoughnutfruits/foo_grill_doughnutfruit-removebg-preview.png",
    pointValue: 2,
    isGood: true,
  },
  {
    name: "Fish-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_fish-removebg-preview.png",
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
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_silver-removebg-preview.png",
    pointValue: 5,
    isGood: true,
  },
  {
    name: "Gold-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_gold-removebg-preview.png",
    pointValue: 10,
    isGood: true,
  },
  {
    name: "Rainbow-Doughnutfruit",
    imageSrc:
      "/editedDoughnutfruits/foo_doughnutfruit_rainbow-removebg-preview.png",
    pointValue: 20,
    isGood: true,
  },
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
    if (!this.isGameOver) {
      this.update();
      console.log(this.fruits);

      requestAnimationFrame(() => this.gameLoop());
    }
  }

  isOutOfBounds(fruit) {
    console.log(this.h);
    return fruit.y > 810;
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
    if (this.overlaps(playerRect, fruitRect)) {
      if (fruit.isGood) {
        this.score += fruit.pointValue;
        this.updateScoreDisplay();
      } 
      else {
        this.isGameOver = true;
      }
      return true;
    } 
    else {
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
    this.fruits.forEach((fruit) => {
      fruit.element.style.top = `${fruit.y}px`;
      fruit.y += 4;

      if (this.isOutOfBounds(fruit)) {
        this.handleOutofBounds(fruit);
      }
      if (this.catchFruit(fruit)) {
        fruit.element.remove();
        const index = this.fruits.indexOf(fruit);
        if (index > -1) this.fruits.splice(index, 1);
      }
      
    

      // console.log(fruit);
    });
  }
  updateScoreDisplay() {
    const scoreDisplay = document.querySelector(".points");
    scoreDisplay.textContent = this.score;
  }

  // checkCollision(player, fruit) {
  //   const playerRect = player.dom.getBoundingClientRect();
  //   const fruitRect = fruit.dom.getBoundingClientRect();

  //   return (
  //     playerRect.left < fruitRect.right &&
  //     playerRect.right > fruitRect.left &&
  //     playerRect.top < fruitRect.bottom &&
  //     playerRect.bottom > fruitRect.top
  //   );
  // }

   /*handleCollision(fruit) {
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
}*/
}
