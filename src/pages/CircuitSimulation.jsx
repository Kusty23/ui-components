import React from "react";

import KSiteContainer from "../components/KSiteContainer";
import KCanvas from "../canvas/KCanvas.js";
import KMovableEntity from "../canvas/KMovableEntity.js";
import { PackRGB } from "../canvas/KCanvasHelpers.js";

let nodes = [];
let selected;

export default function CircuitSimulation(props) {
  // Canvas
  const canvasRef = React.useRef(null);

  // Waits until DOM elements are loaded
  React.useEffect(() => {
    let canvas = new KCanvas(canvasRef);
    canvas.AddMouseDown(onMouseDown);
    canvas.AddMouseMove(onMouseMove);
    canvas.AddMouseUp(onMouseUp);

    canvas.AddDraw(onDraw);
  });

  return (
    <KSiteContainer
      siteName="Circuit Simulation"
      content={
        <>
          <canvas width="700px" height="600px" ref={canvasRef} />
        </>
      }
    ></KSiteContainer>
  );
}

function onMouseDown(x, y) {
  nodes.forEach((node) => {
    if (node.ContainsPoint(x, y)) {
      selected = node;
      node.OnClick();
    }
  });
}

function onMouseMove(x, y, dx, dy) {
  if (selected) {
    selected.pos.x += dx;
    selected.pos.y += dy;
  }
}

function onMouseUp(x, y) {
  if (selected) {
    //selected.Deactivate();
    selected = null;
  }
}

function onDraw(ctx) {
  //console.log(ctx);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].Render(ctx);
  }
}

class Node extends KMovableEntity {
  constructor(x, y) {
    super(x, y, 50, 50);

    this.connections = [];
  }

  OnClick() {
    return;
  }

  OnSignal() {
    this.Activate();
  }

  Activate() {
    this.active = true;

    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].OnSignal();
    }
  }

  Deactivate() {
    this.active = false;

    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].Deactivate();
    }
  }

  Render(ctx) {
    for (let i = 0; i < this.connections.length; i++) {
      let other = this.connections[i];
      ctx.beginPath();
      ctx.moveTo(
        this.pos.x + this.size.width / 2,
        this.pos.y + this.size.height / 2
      );
      ctx.lineTo(
        other.pos.x + other.size.width / 2,
        other.pos.y + other.size.height / 2
      );
      ctx.stroke();
      ctx.closePath();
    }

    ctx.fillStyle = this.active ? "rgb(255,255,255)" : this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);
  }

  AddConnection(box) {
    this.connections.push(box);
  }
}

class ClockNode extends Node {
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

class SwitchNode extends Node {
  constructor(x, y) {
    super(x, y);
    this.color = PackRGB(255, 0, 0);
  }

  OnClick() {
    if (this.active) {
      this.Deactivate();
    } else {
      this.Activate();
    }
  }
}

class AndGate extends Node {
  constructor(x, y, node1, node2) {
    super(x, y);

    this.node1 = node1;
    this.node1.AddConnection(this);
    this.node2 = node2;
    this.node2.AddConnection(this);
  }

  OnSignal() {
    if (this.node1.active && this.node2.active) {
      this.Activate();
    }
  }
}

// Main Logic
nodes.push(new SwitchNode(200, 300));
nodes.push(new SwitchNode(200, 200));
nodes.push(new Node(400, 250));
nodes.push(new AndGate(300, 250, nodes[0], nodes[1]));

nodes[3].AddConnection(nodes[2]);
