import React from "react";

import KCanvas from "../../../canvas/KCanvas.js";

import { Node, SwitchNode, NotGate, XorGate, XnorGate } from "../Nodes.js";

let nodes = [];
let selected;

export default function XnorGateExample(props) {
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
        <canvas width="400px" height="300px" ref={canvasRef} />
      </div>
      <div className="span--6">
        <h3>XNOR Gate</h3>
        <p>
          We also have the XNOR gate. It is just the opposite of the XOR gate.
        </p>
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
nodes.push(new XorGate(150, 75, nodes[0], nodes[1]));
nodes.push(new NotGate(250, 75, nodes[2]));
nodes.push(new Node(350, 75));

nodes[3].AddConnection(nodes[4]);
nodes[0].OnSignal(false);
nodes[1].OnSignal(false);

nodes.push(new SwitchNode(50, 190));
nodes.push(new SwitchNode(50, 260));
nodes.push(new XnorGate(200, 225, nodes[5], nodes[6]));
nodes.push(new Node(350, 225));

nodes[7].AddConnection(nodes[8]);
nodes[5].OnSignal(false);
nodes[6].OnSignal(false);
