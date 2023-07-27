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
    imageSrc: "./../Neopets-Doughnutfruits/foo_grey_doughnutfruit.gif",
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
    imageSrc: "/Neopets-Doughnutfruits/tropical_donutfruit.gif",
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
    imageSrc: "Neopets-Doughnutfruitsfoo_doughnutfruit_rainbow.gif",
    pointValue: 20,
    isGood: true,
  },
];
 



const dungData = [{ name: "Dung", imageSrc: "Dung.webp", isGood: false }];

/*class Doughnutfruit {
  constructor(name, imageSrc, pointValue, isGood) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.pointValue = pointValue;
    this.isGood = isGood;
    this.speed = 2; 
  }
}*/


class Doughnutfruit {
  constructor(name, imageSrc, pointValue, isGood) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.pointValue = pointValue;
    this.isGood = isGood;
    this.speed = this.calculateSpeed();
    this.x = Math.random() * 760;
    this.y = -50;
    this.element = this.createImageElement();
  }

  calculateSpeed() {

    return Math.floor(4 / this.pointValue) + 1;
  }

}

