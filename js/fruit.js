/*class Doughnutfruit {
    constructor(name, imageSrc, pointValue, isGood) {
      this.name = name;
      this.imageSrc = imageSrc;
      this.pointValue = pointValue;
      this.isGood = isGood;
      this.speed = this.calculateSpeed();
      this.x = Math.random() * (496 - 80); 
      this.y = -80; 
      this.element = this.createImageElement();
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
      imgElement.style.width = "80px";
      imgElement.style.height = "80px";
      imgElement.style.left = this.x + "px";
      imgElement.style.top = this.y + "px";
      document.getElementById("fruits").appendChild(imgElement);
      return imgElement;
    }
  
    updatePosition() {
      this.y += this.speed;
      this.element.style.top = this.y + "px";
    }
  
    isOutOfBounds() {
      return this.y > 656;
    }
  }
  */
