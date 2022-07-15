import KMovableEntity from "../../canvas/KMovableEntity.js";
import { PackRGB } from "../../canvas/KCanvasHelpers.js";

export class Node extends KMovableEntity {
  constructor(x, y) {
    super(x, y, 30, 30);

    this.connections = [];
    this.canMove = false;
  }

  OnClick() {
    return;
  }

  OnSignal(signal) {
    if (signal) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }

  Activate() {
    this.active = true;

    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].OnSignal(true);
    }
  }

  Deactivate() {
    this.active = false;

    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].OnSignal(false);
    }
  }

  Render(ctx) {
    for (let i = 0; i < this.connections.length; i++) {
      let other = this.connections[i];
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(other.pos.x, other.pos.y);
      ctx.stroke();
      ctx.closePath();
    }

    ctx.fillStyle = this.active ? "rgb(255,255,255)" : this.color;
    ctx.beginPath();
    ctx.ellipse(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height,
      0,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.closePath();
  }

  AddConnection(box) {
    this.connections.push(box);
  }
}

export class ClockNode extends Node {
  constructor(x, y, delay) {
    super(x, y);

    this.delay = delay;
    this.timerInterval = null;

    this.start();
  }

  start() {
    this.stop(); // stoping the previous counting (if any)
    this.timerInterval = setInterval(this.turnOn.bind(this), this.delay);
  }

  turnOn() {
    if (this.active) {
      this.Deactivate();
    } else {
      this.Activate();
    }
  }

  stop() {
    clearInterval(this.timerInterval);
    this.Deactivate();
  }
}

export class SwitchNode extends Node {
  constructor(x, y) {
    super(x, y);
    this.color = PackRGB(255, 0, 0);
  }

  OnClick() {
    if (this.active) {
      this.OnSignal(false);
    } else {
      this.OnSignal(true);
    }
  }
}

export class AndGate extends Node {
  constructor(x, y, node1, node2) {
    super(x, y);

    this.color = PackRGB(255, 255, 0);

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (this.node1.active && this.node2.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class OrGate extends Node {
  constructor(x, y, node1, node2) {
    super(x, y);

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (this.node1.active || this.node2.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class NotGate extends Node {
  constructor(x, y, node) {
    super(x, y);

    this.color = PackRGB(0, 0, 255);

    this.node = node;
    this.node.AddConnection(this);
  }

  OnSignal(signal) {
    if (!this.node.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}
