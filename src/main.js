let raf;
let player;
let input;
let lasers
let alien;

function main() {
  player = new Player();
  input = new Input();
  lasers = new Lasers();
  alien = new Alien();

  window.canvas = document.getElementById("canvas");
  gameLoop();
}

function gameLoop() {
  draw();
  update();

  raf = window.requestAnimationFrame(gameLoop);
}

function update() {
  player.move(input);
  player.shoot(input, lasers);
  lasers.move();
  alien.move();
  alien.checkHit(lasers);
}

function draw() {
  const ctx = window.canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();
  lasers.draw();
  alien.draw();
}

main();