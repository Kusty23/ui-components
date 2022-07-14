import React from "react";

import KSiteContainer from "../components/KSiteContainer";
import KCanvas from "../canvas/KCanvas.js";
import KMovableEntity from "../canvas/KMovableEntity.js";

let boxes = [];
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
  boxes.forEach((box) => {
    if (box.ContainsPoint(x, y)) {
      selected = box;
      box.active = true;
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
    selected.active = false;
    selected = null;
  }
}

function onDraw(ctx) {
  //console.log(ctx);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].Render(ctx);
  }
}

class Box extends KMovableEntity {
  constructor(x, y) {
    super(x, y, 50, 50);

    this.connections = [];
  }

  Render(ctx) {
    ctx.fillStyle = this.active ? "rgb(255,255,255)" : this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);

    for (let i = 0; i < this.connections.length; i++) {
      let other = this.connections[i];
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(other.pos.x, other.pos.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  AddConnection(box) {
    this.connections.push(box);
  }
}

// Main Logic

boxes.push(new Box(100, 100));
boxes.push(new Box(200, 300));

boxes[0].AddConnection(boxes[1]);
