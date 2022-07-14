export default class KCanvas {
  constructor(canvasRef) {
    this.CanvasRef = canvasRef;
    this.canvas = canvasRef.current;

    this.ctx = this.canvas.getContext("2d");

    this.Mouse = { x: -1, y: -1 };

    this.canvas.addEventListener("mousedown", (e) => this.MouseDown(e), false);
    this.Draw();
  }

  AddMouseDown(fun) {
    this.onMouseDown = fun;
  }

  MouseDown(e) {
    this.Mouse.x = e.offsetX;
    this.Mouse.y = e.offsetY;

    this.onMouseDown(this.Mouse.x, this.Mouse.y);

    window.addEventListener("mousemove", (e) => this.MouseMove(e), false);
    window.addEventListener("mouseup", (e) => this.MouseUp(e), false);
  }

  AddMouseMove(fun) {
    this.onMouseMove = fun;
  }

  MouseMove(e) {
    var dx = e.offsetX - this.Mouse.x;
    var dy = e.offsetY - this.Mouse.y;

    this.Mouse.x = e.offsetX;
    this.Mouse.y = e.offsetY;

    this.onMouseMove(this.Mouse.x, this.Mouse.y, dx, dy);
  }

  AddMouseUp(fun) {
    this.onMouseUp = fun;
  }

  MouseUp(e) {
    this.onMouseUp(this.Mouse.x, this.Mouse.y);

    window.removeEventListener("mousemove", this.MouseMove, false);
    window.removeEventListener("mouseup", this.MouseUp, false);
  }

  AddDraw(fun) {
    this.onDraw = fun;
  }

  Draw() {
    this.ctx.clearRect(0, 0, 1000, 1000);

    if (this.onDraw) {
      this.onDraw(this.ctx);
    }

    window.requestAnimationFrame(this.Draw.bind(this));
  }

  PackRGB(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
  }
}
