import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

export default function KCanvas(props) {
  return (
    <canvas width="700px" height="500px" ref={props.canvasref} {...props} />
  );
}
