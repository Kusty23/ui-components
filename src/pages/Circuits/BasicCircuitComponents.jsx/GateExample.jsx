import React from "react";

import KCanvas from "../../../canvas/KCanvas.js";

let selected;

export default function GateExample(props) {
  let nodes = [];

  nodes = props.main();

  // Canvas
  const canvasRef = React.useRef(null);

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

  // Waits until DOM elements are loaded
  React.useEffect(() => {
    let canvas = new KCanvas(canvasRef);
    canvas.AddMouseDown(onMouseDown);
    canvas.AddMouseMove(onMouseMove);
    canvas.AddMouseUp(onMouseUp);

    canvas.AddDraw(onDraw);

    // Run the passed in node generation
  });

  return (
    <div className="span--6">
      <canvas width="400px" height="300px" ref={canvasRef} />
    </div>
  );
}
