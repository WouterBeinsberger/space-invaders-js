let raf;
let player;
let input;
let lasers

function main() {
  player = new Player();
  input = new Input();
  lasers = new Lasers();

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
  player.shoot(input, lasers);
  lasers.move();
}

function draw() {
  const ctx = window.canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();
  lasers.draw();
}

main();