export default class KMovableEntity {
  constructor(x, y, width, height) {
    this.pos = { x: x, y: y };

    this.size = { width: width, height: height };
    this.color = "rgb(0, 255, 255)";
    this.active = false;
  }

  ContainsPointRect(x, y) {
    return (
      Math.abs(this.pos.x - x) < this.size.width &&
      Math.abs(this.pos.y - y) < this.size.height
    );
  }

  ContainsPointEllipse(x, y) {
    let valx = (x - this.pos.x) ** 2 / this.size.width ** 2;
    let valy = (y - this.pos.y) ** 2 / this.size.height ** 2;

    return valx + valy < 1;
  }

  Render(ctx) {
    ctx.fillStyle = this.active ? "rgb(255,255,255)" : this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);
  }
}
