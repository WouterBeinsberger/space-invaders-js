class Alien {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.scl = 20;
    this.stepSize = 1;
    this.alive = true;
  }

  move() {
    if (this.x > window.canvas.width - this.scl || this.x < 0) {
      this.stepSize = -this.stepSize;
    }
    this.x += this.stepSize;
  }
  
  checkHit(lasers) {
    lasers.checkHit(this);
  }

  draw() {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(0, 200, 67)";
    ctx.fillRect(this.x, this.y, this.scl, this.scl);
  }
}