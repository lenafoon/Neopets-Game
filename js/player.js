class Player {
  constructor() {
    this.w = 140;
    this.h = 170;
    this.x = 210;
    this.y = 10;
    this.dom = document.getElementById("player-hasee");
    this.dom.style.left = `${this.x}px`;
    this.dom.style.width = `${this.w}px`;
    this.dom.style.height = `${this.h}px`;
    this.dom.style.bottom = `${this.y}px`;

    this.dom.style.position = "absolute";
  }
}

const player = new Player();
console.log(player);
const update = () => {
  player.dom.style.left = `${player.x}px`;
  //console.log(player.x);

  // requestAnimationFrame(update);
};
setInterval(update, 1000 / 30);
// update();
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "ArrowLeft":
        if (player.x > -30) {
          player.x -= 20;
        }
        console.log(1);
        break;
      case "ArrowRight":
        if (player.x < 370) {
          player.x += 20;
        }
        console.log(2);

        break;
      case "Enter":
        break;
      case "Escape":
        location.reload();
        break;
      default:
        return;
    }

    event.preventDefault();
  },
  true
);
