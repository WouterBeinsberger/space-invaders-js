class Aliens {
  constructor(columns, rows, scl) {
    this.x = 0;
    this.y = 0;
    this.scl = scl
    this.stepSize = 0.5;
    this.columns = columns;
    this.rows = rows;
    this.width = columns * (scl + 10) - 10;
    this.alienList = new Set();
  }

  generate() {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.alienList.add(
          new Alien(
            x * (this.scl + 10), 
            y * (this.scl + 10),
            this.scl)
        );
      }
    }
    console.log(this.alienList);
  }

  checkHit(lasers) {
    for (const alien of this.alienList) {
      alien.checkHit(lasers);
    }
  }

  move() {
    if (this.x + this.width > window.canvas.width || this.x < 0) {
      this.stepSize = -this.stepSize;
      this.y += this.scl;
    }

    for (const alien of this.alienList) {
      alien.x += this.stepSize;
      alien.y += this.y;
    }

    this.x += this.stepSize;
    this.y = 0;
  }
  
  draw () {
    let ctx = window.canvas.getContext("2d");
    ctx.fillStyle = "rgb(154, 21, 187)";
    ctx.fillRect(this.x, this.y, this.width, this.scl);


    for (const alien of this.alienList) {
      alien.draw();
    }
  }
}