import KMovableEntity from "../../canvas/KMovableEntity.js";
import { PackRGB } from "../../canvas/KCanvasHelpers.js";

export class Node extends KMovableEntity {
  constructor(x, y) {
    super(x, y, 30, 30);

    this.connections = [];
    this.canMove = false;

    this.color = PackRGB(123, 123, 235);
    this.highlightColor = PackRGB(163, 163, 255);
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

      ctx.lineWidth = 10;
      ctx.strokeStyle = this.active ? PackRGB(255, 255, 255) : PackRGB(0, 0, 0);

      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(other.pos.x, other.pos.y);
      ctx.stroke();
      ctx.closePath();
    }

    ctx.fillStyle = this.active ? this.highlightColor : this.color;
    ctx.strokeStyle = this.active ? this.color : PackRGB(0, 0, 0);
    ctx.lineWidth = 5;
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
    ctx.stroke();
    ctx.closePath();

    this.DrawLabel(ctx);
  }

  DrawLabel(ctx) {
    ctx.font = "30px  Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    if (this.active) {
      ctx.fillText("1", this.pos.x, this.pos.y + 10);
    } else {
      ctx.fillText("0", this.pos.x, this.pos.y + 10);
    }
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

    this.color = PackRGB(220, 120, 120);
    this.highlightColor = PackRGB(255, 160, 160);
  }

  OnClick() {
    if (this.active) {
      this.OnSignal(false);
    } else {
      this.OnSignal(true);
    }
  }
}

class GateNode extends Node {
  constructor(x, y, label) {
    super(x, y);

    this.label = label;

    this.color = PackRGB(220, 220, 20);
    this.highlightColor = PackRGB(255, 255, 160);
  }

  DrawLabel(ctx) {
    ctx.font = "20px  Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.fillText(this.label, this.pos.x, this.pos.y + 8);
  }
}

export class AndGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "AND");

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  DrawLabel(ctx) {
    ctx.font = "20px  Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.fillText("AND", this.pos.x, this.pos.y + 8);
  }

  OnSignal(signal) {
    if (this.node1.active && this.node2.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class OrGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "OR");

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

export class NotGate extends GateNode {
  constructor(x, y, node) {
    super(x, y, "NOT");

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

export class NandGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "NAND");

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (!(this.node1.active && this.node2.active)) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class NorGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "NOR");

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (!(this.node1.active && this.node2.active)) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class XorGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "XOR");

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (this.node1.active !== this.node2.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}

export class XnorGate extends GateNode {
  constructor(x, y, node1, node2) {
    super(x, y, "XNOR");

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal(signal) {
    if (this.node1.active === this.node2.active) {
      this.Activate();
    } else {
      this.Deactivate();
    }
  }
}
