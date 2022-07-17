import React from "react";

import KAccordion from "../../../components/KAccordion";

import {
  Node,
  SwitchNode,
  AndGate,
  NotGate,
  NandGate,
  OrGate,
  NorGate,
  XorGate,
  XnorGate,
} from "../Nodes.js";

import GateExample from "./GateExample";

export default function CircuitSimulation(props) {
  return (
    <div className="main KGrid">
      <h1 className="span--12">Basic Circuit Components</h1>
      <KAccordion
        title="AND Gate"
        content={
          <>
            <GateExample
              main={() => {
                let nodes = [];

                nodes.push(new SwitchNode(50, 100));
                nodes.push(new SwitchNode(50, 200));
                nodes.push(new AndGate(200, 150, nodes[0], nodes[1]));
                nodes.push(new Node(350, 150));

                nodes[2].AddConnection(nodes[3]);

                return nodes;
              }}
            />
            <div className="span--6">
              <h3>And Gate</h3>
              <p>The simple AND gate.</p>
            </div>
          </>
        }
      />

      <KAccordion
        title="NOT Gate"
        content={
          <>
            <div className="span--6">
              <h3>NOT Gate</h3>
              <p>The NOT gate simply inverts the input</p>
            </div>
            <GateExample
              main={() => {
                let nodes = [];

                nodes.push(new SwitchNode(50, 150));
                nodes.push(new NotGate(200, 150, nodes[0]));
                nodes.push(new Node(350, 150));

                nodes[1].AddConnection(nodes[2]);
                nodes[1].OnSignal(false);

                return nodes;
              }}
            />
          </>
        }
      />

      <KAccordion
        title="NAND Gate"
        content={
          <>
            <GateExample
              main={() => {
                let nodes = [];

                nodes.push(new SwitchNode(50, 40));
                nodes.push(new SwitchNode(50, 110));
                nodes.push(new AndGate(150, 75, nodes[0], nodes[1]));
                nodes.push(new NotGate(250, 75, nodes[2]));
                nodes.push(new Node(350, 75));

                nodes[3].AddConnection(nodes[4]);
                nodes[0].OnSignal(false);

                nodes.push(new SwitchNode(50, 190));
                nodes.push(new SwitchNode(50, 260));
                nodes.push(new NandGate(200, 225, nodes[5], nodes[6]));
                nodes.push(new Node(350, 225));

                nodes[7].AddConnection(nodes[8]);
                nodes[5].OnSignal(false);

                return nodes;
              }}
            />
            <div className="span--6">
              <h3>NAND Gate</h3>
              <p>
                Now that we have our two base gates, we can construct the NAND
                gate.
              </p>
            </div>
          </>
        }
      />

      <KAccordion
        title="OR Gate"
        content={
          <>
            <div className="span--6">
              <h3>OR Gate</h3>
              <p>
                Now that we have our two base gates, we can construct the NAND
                gate.
              </p>
            </div>
            <GateExample
              main={() => {
                let nodes = [];

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

                return nodes;
              }}
            />
          </>
        }
      />

      <KAccordion
        title="NOR Gate"
        content={
          <>
            <GateExample
              main={() => {
                let nodes = [];

                nodes.push(new SwitchNode(50, 40));
                nodes.push(new SwitchNode(50, 110));
                nodes.push(new OrGate(150, 75, nodes[0], nodes[1]));
                nodes.push(new NotGate(250, 75, nodes[2]));
                nodes.push(new Node(350, 75));

                nodes[3].AddConnection(nodes[4]);
                nodes[0].OnSignal(false);
                nodes[1].OnSignal(false);

                nodes.push(new SwitchNode(50, 190));
                nodes.push(new SwitchNode(50, 260));
                nodes.push(new NorGate(200, 225, nodes[5], nodes[6]));
                nodes.push(new Node(350, 225));

                nodes[7].AddConnection(nodes[8]);
                nodes[5].OnSignal(false);
                nodes[6].OnSignal(false);

                return nodes;
              }}
            />
            <div className="span--6">
              <h3>NOR Gate</h3>
              <p>
                We also have the NOR gate. It is just the opposite of the OR
                gate.
              </p>
            </div>
          </>
        }
      />

      <KAccordion
        title="XOR Gate"
        content={
          <>
            <div className="span--6">
              <h3>XOR Gate</h3>
              <p>The XOR gate is a little tricker.</p>
            </div>
            <GateExample
              main={() => {
                let nodes = [];

                nodes.push(new SwitchNode(50, 40));
                nodes.push(new SwitchNode(50, 110));
                nodes.push(new OrGate(150, 40, nodes[0], nodes[1]));
                nodes.push(new NandGate(150, 110, nodes[0], nodes[1]));
                nodes.push(new AndGate(250, 75, nodes[2], nodes[3]));
                nodes.push(new Node(350, 75));

                nodes[4].AddConnection(nodes[5]);
                nodes[0].OnSignal(false);
                nodes[1].OnSignal(false);

                nodes.push(new SwitchNode(50, 190));
                nodes.push(new SwitchNode(50, 260));
                nodes.push(new XorGate(200, 225, nodes[6], nodes[7]));
                nodes.push(new Node(350, 225));

                nodes[8].AddConnection(nodes[9]);
                nodes[6].OnSignal(false);

                return nodes;
              }}
            />
          </>
        }
      />

      <KAccordion
        title="XNOR Gate"
        content={
          <>
            <GateExample
              main={() => {
                let nodes = [];

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

                return nodes;
              }}
            />
            <div className="span--6">
              <h3>XNOR Gate</h3>
              <p>
                We also have the XNOR gate. It is just the opposite of the XOR
                gate.
              </p>
            </div>
          </>
        }
      />
    </div>
  );
}
