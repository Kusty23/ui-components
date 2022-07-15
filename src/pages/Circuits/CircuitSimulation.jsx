import React from "react";

import AndGateExample from "./AndGateExample";
import NotGateExample from "./NotGateExample";

export default function CircuitSimulation(props) {
  return (
    <div className="main KGrid">
      <h1 className="span--12">Web UI Components & Style Guide</h1>
      <AndGateExample />
      <NotGateExample />
    </div>
  );
}
