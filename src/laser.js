class Laser {
  constructor(x, y, lasers) {
    this.x = x;
    this.y = y;
    this.scl = 20;
    this.stepSize = 1;
    this.lasers = lasers;
    this.lasers.add(this);
  }

  move() {
    if (this.y === 0) {
      this.lasers.remove(this);
    } else {
      this.y -= this.stepSize;
    }
  }

  checkHit(alien) {
    if (this.x < alien.x + alien.scl &&
        this.x + this.scl > alien.x &&
        this.y < alien.y + alien.scl &&
        this.y + this.scl > alien.y) {
          console.log("ALIEN HIT");
          this.lasers.remove(this);
    }
  }

  draw() {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(21, 126, 187)";
    ctx.fillRect(this.x, this.y, this.scl / 2, this.scl);
  }
}