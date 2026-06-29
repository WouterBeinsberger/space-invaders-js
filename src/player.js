class Player {
  constructor() {
    this.scl = 20;
    this.x = Math.floor(window.canvas.width / 2);
    this.y = Math.floor(window.canvas.height - this.scl);
    this.stepSize = 1;
    this.alive = false;
  }

  isAlive() {
    return this.alive;
  }

  move(input) {
    if (input.isKeyDown(68)) {
      this.x += this.stepSize;
    } else if (input.isKeyDown(65)) {
      this.x -= this.stepSize;
    } 
  }

  shoot(input, lasers) {
    if(input.isKeyPressed(32)) {
      let x = Math.floor(this.x + this.scl / 4);
      let y = Math.floor(this.y - this.scl);
      new Laser(x, y, lasers)
    }
  }

  draw() {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(this.x, this.y, this.scl, this.scl);
  }
}
