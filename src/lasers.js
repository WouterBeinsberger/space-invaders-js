class Lasers {
  laserList = new Set();

  add(laser) {
    this.laserList.add(laser);
    console.log("LASERS: " + this.laserList);
  }

  remove(laser) {
    this.laserList.delete(laser);
    console.log("LASERS: " + this.laserList);
  }

  move() {
    //move up
    for (const laser of this.laserList) {
      laser.move();
    }
  }

  draw() {
    for (const laser of this.laserList) {
      laser.draw();
    }
  }

  checkHit() {
    //check hit alien
  }
}