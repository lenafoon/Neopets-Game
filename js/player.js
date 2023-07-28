class Player {
  constructor() {
    this.w = 80;
    this.h = 110;
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

const game = new Game();
const player = new Player();
console.log(player);
const update = () => {
  player.dom.style.left = `${player.x}px`;
  console.log(player.x);
  // requestAnimationFrame(update);
};
setInterval(update, 1000 / 30);
// update();
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowLeft":
        if (player.x > 8) {
          player.x -= 20;
        }
        console.log(1);
        break;
      case "ArrowRight":
        if (player.x < 410) {
          player.x += 20;
        }
        console.log(2);
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case "Escape":
        // Do something for "esc" key press.
        location.reload();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
