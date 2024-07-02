export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
  constructor() {
    this.map={
      "ArrowUp":UP,
      "ArrowDown":DOWN,
      "ArrowLeft":LEFT,
      "ArrowRight":RIGHT,
      "KeyW":UP,
      "KeyS":DOWN,
      "KeyA":LEFT,
      "KeyD":RIGHT,
    }
    this.KeyUp = (e) => {
      this.onArrowReleased(this.map[e.code]);
    }
    this.KeyDown = (e) => {
      this.onArrowPressed(this.map[e.code]);
    }
    this.heldDirections = [];
    this.EnableInput()
  }

  get direction() {
    return this.heldDirections[0];
  }


  EnableInput() {
    document.addEventListener("keydown", this.KeyDown);
    document.addEventListener("keyup", this.KeyUp);
  }
  DisableInput(){
    document.removeEventListener("keydown", this.KeyDown)
    document.removeEventListener("keyup", this.KeyUp)
  }
  
  onArrowPressed(direction) {
    if (this.heldDirections.indexOf(direction) === -1) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);
    if (index === -1) {
      return;
    }
    this.heldDirections.splice(index, 1);
  }
}