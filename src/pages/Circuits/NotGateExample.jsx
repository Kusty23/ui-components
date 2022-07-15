import React from "react";

import KSiteContainer from "../../components/KSiteContainer";
import KCanvas from "../../canvas/KCanvas.js";

import { Node, SwitchNode, NotGate } from "./Nodes.js";

let nodes = [];
let selected;

export default function NotGateExample(props) {
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
    <>
      <div className="span--6">
        <h3>NOT Gate</h3>
        <p>The NOT gate.</p>
      </div>
      <div className="span--6">
        <canvas width="400px" height="300px" ref={canvasRef} />
      </div>
    </>
  );
}

function onMouseDown(x, y) {
  nodes.forEach((node) => {
    if (node.ContainsPointEllipse(x, y)) {
      selected = node;
      node.OnClick();
    }
  });
}

function onMouseMove(x, y, dx, dy) {
  if (selected && selected.canMove) {
    selected.pos.x += dx;
    selected.pos.y += dy;
  }
}

function onMouseUp(x, y) {
  if (selected) {
    selected = null;
  }
}

function onDraw(ctx) {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].Render(ctx);
  }
}

// Main Logic
nodes.push(new SwitchNode(50, 150));
nodes.push(new NotGate(200, 150, nodes[0]));
nodes.push(new Node(350, 150));

nodes[1].AddConnection(nodes[2]);
nodes[1].OnSignal(false);
