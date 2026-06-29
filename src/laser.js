class Laser {
  constructor(x, y, lasers) {
    this.x = x;
    this.y = y;
    this.scl = 20;
    this.stepSize = 1;
    this.lasers = lasers;
    lasers.add(this);
  }

  move() {
    if (this.y > window.canvas.height) {
      this.lasers.delete(this);
    } else {
      this.y -= this.stepSize;
    }
  }

  draw() {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(21, 126, 187)";
    ctx.fillRect(this.x, this.y, this.scl / 2, this.scl);
  }
}