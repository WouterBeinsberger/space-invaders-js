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
    if (input.isDown(68)) {
      this.x += this.stepSize;
    } else if (input.isDown(65)) {
      this.x -= this.stepSize;
    } 
  }

  shoot(input) {
    if(input.isDown(32)) {
      console.log("SHOOTING");
    }
  }

  draw() {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(this.x, this.y, this.scl, this.scl);
  }
}
