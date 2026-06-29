class Input {
  constructor() {
    this.keys = {};

    window.addEventListener("keydown", (event) => {
      this.keys[event.keyCode] = true;
    });

    window.addEventListener("keyup", (event) => {
      this.keys[event.keyCode] = false;
    });
  }

  isDown(keyCode) {
    return this.keys[keyCode] === true;
  }
}