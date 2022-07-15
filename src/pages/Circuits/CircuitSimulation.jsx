import React from "react";

import KSiteContainer from "../../components/KSiteContainer";
import KCanvas from "../../canvas/KCanvas.js";

import { Node, SwitchNode, ClockNode, AndGate, OrGate } from "./Nodes.js";

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
    if (node.ContainsPointEllipse(x, y)) {
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

// Main Logic
nodes.push(new SwitchNode(200, 300));
nodes.push(new SwitchNode(200, 200));
nodes.push(new Node(400, 250));
nodes.push(new AndGate(300, 250, nodes[0], nodes[1]));

nodes[3].AddConnection(nodes[2]);
