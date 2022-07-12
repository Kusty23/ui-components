import React, { Component, useState } from "react";

import KSiteContainer from "../components/KSiteContainer";
import KCanvas from "../canvas/KCanvas.js";

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
  }, [null]);

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
  //console.log(x, y);
}

function onMouseMove(x, y, dx, dy) {
  //console.log(x, y, dx, dy);
}

function onMouseUp(x, y) {
  //console.log(x, y);
}

function onDraw(ctx) {
  //console.log(ctx);
  ctx.fillRect(50, 50, 50, 50);
}
