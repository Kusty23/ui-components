import React from "react";

import AndGateExample from "./AndGateExample";
import NandGateExample from "./NandGateExample";
import NorGateExample from "./NorGateExample";
import NotGateExample from "./NotGateExample";
import OrGateExample from "./OrGateExample";
import XorGateExample from "./XorGateExample";

export default function CircuitSimulation(props) {
  return (
    <div className="main KGrid">
      <h1 className="span--12">Web UI Components & Style Guide</h1>
      <AndGateExample />
      <NotGateExample />
      <NandGateExample />
      <OrGateExample />
      <NorGateExample />
      <XorGateExample />
    </div>
  );
}