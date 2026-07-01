class Alien {
  constructor(x, y, scl) {
    this.x = x;
    this.y = y;
    this.scl = scl;
    this.alive = true;
  }

  move() {

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