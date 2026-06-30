class Lasers {
  laserList = new Set();

  add(laser) {
    this.laserList.add(laser);
    console.log("ADDED: " + laser);
  }

  remove(laser) {
    this.laserList.delete(laser);
    console.log("DELETED: " + laser);
  }

  move() {
    for (const laser of this.laserList) {
      laser.move();
    }
  }

  draw() {
    for (const laser of this.laserList) {
      laser.draw();
    }
  }

  checkHit(alien) {
    for (const laser of this.laserList) {
      laser.checkHit(alien);
    }
  }
}