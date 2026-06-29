class Input {
  constructor() {
    this.keys = {};
    this.pressed = {};

    window.addEventListener("keydown", (event) => {
      if (!this.keys[event.keyCode]) {
        this.pressed[event.keyCode] = true;
      }
      this.keys[event.keyCode] = true;
    });

    window.addEventListener("keyup", (event) => {
      this.keys[event.keyCode] = false;
    });
  }

  isKeyDown(keyCode) {
    return this.keys[keyCode] === true;
  }

  isKeyPressed(keyCode) {
    if (this.pressed[keyCode] === true) {
      this.pressed[keyCode] = false;
      return true;
    }
    return false;
  }

}