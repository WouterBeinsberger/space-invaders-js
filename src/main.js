let raf;
let player;
let input;

function main() {
  player = new Player();
  input = new Input();

  window.canvas = document.getElementById("canvas");
  gameLoop();
}

function gameLoop() {
  update();
  draw();

  raf = window.requestAnimationFrame(gameLoop);
}

function update() {
  player.move(input);
}

function draw() {
  const ctx = window.canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();
}



main();