export default class KMovableEntity {
  constructor(x, y, width, height) {
    this.pos = { x: x, y: y };

    this.size = { width: width, height: height };
    this.color = "rgb(0, 255, 255)";
    this.active = false;
  }

  ContainsPoint(x, y) {
    return (
      Math.abs(this.pos.x - x) < this.size.width &&
      Math.abs(this.pos.y - y) < this.size.height
    );
  }

  Render(ctx) {
    ctx.fillStyle = this.active ? "rgb(255,255,255)" : this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);
  }
}
