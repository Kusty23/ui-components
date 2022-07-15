import React from "react";

import KCanvas from "../../canvas/KCanvas.js";

import {
  Node,
  SwitchNode,
  AndGate,
  NotGate,
  NandGate,
  OrGate,
} from "./Nodes.js";

let nodes = [];
let selected;

export default function OrGateExample(props) {
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
        <h3>OR Gate</h3>
        <p>
          Now that we have our two base gates, we can construct the NAND gate.
        </p>
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
nodes.push(new SwitchNode(50, 40));
nodes.push(new SwitchNode(50, 110));
nodes.push(new NotGate(150, 40, nodes[0]));
nodes.push(new NotGate(150, 110, nodes[1]));
nodes.push(new NandGate(250, 75, nodes[2], nodes[3]));
nodes.push(new Node(350, 75));

nodes[4].AddConnection(nodes[5]);
nodes[0].OnSignal(false);
nodes[1].OnSignal(false);

nodes.push(new SwitchNode(50, 190));
nodes.push(new SwitchNode(50, 260));
nodes.push(new OrGate(200, 225, nodes[6], nodes[7]));
nodes.push(new Node(350, 225));

nodes[8].AddConnection(nodes[9]);
nodes[6].OnSignal(false);