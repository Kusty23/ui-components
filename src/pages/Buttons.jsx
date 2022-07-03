import React, { Component } from "react";

import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";
import KButton from "../components/KButton";
import KTable from "../components/KTable";

export default class Buttons extends Component {
  render() {
    return (
      <div className="main">
        <KSection
          title="Carousels"
          content={
            <>
              <KSubsection
                title="Basic"
                content={
                  <>
                    {" "}
                    <KTable
                      classStyle="span--12"
                      title="Table"
                      headers={[
                        "",
                        "Icon Only",
                        "Label Only",
                        "Icon and Label",
                        "Light Version",
                      ]}
                      rows={[
                        [
                          "Primary",
                          <KButton icon="search" />,
                          <KButton label="Label" />,
                          <KButton icon="search" label="Label" />,
                          <KButton icon="search" label="Label" light="true" />,
                        ],
                        [
                          "Functional Green",
                          <KButton color="--functionalGreen" icon="done" />,
                          <KButton color="--functionalGreen" label="Done" />,
                          <KButton
                            color="--functionalGreen"
                            icon="done"
                            label="Done"
                          />,
                          <KButton
                            color="--functionalGreen"
                            icon="done"
                            label="Done"
                            light="true"
                          />,
                        ],
                        [
                          "Functional Yellow",
                          <KButton color="--functionalYellow" icon="warning" />,
                          <KButton
                            color="--functionalYellow"
                            label="Warning"
                          />,
                          <KButton
                            color="--functionalYellow"
                            icon="warning"
                            label="Warning"
                          />,
                          <KButton
                            color="--functionalYellow"
                            icon="warning"
                            label="Warning"
                            light="true"
                          />,
                        ],
                        [
                          "Functional Red",
                          <KButton color="--functionalRed" icon="close" />,
                          <KButton color="--functionalRed" label="Exit" />,
                          <KButton
                            color="--functionalRed"
                            icon="close"
                            label="Exit"
                          />,
                          <KButton
                            color="--functionalRed"
                            icon="close"
                            label="Exit"
                            light="true"
                          />,
                        ],
                        [
                          "Functional Blue",
                          <KButton
                            color="--functionalBlue"
                            icon="question_mark"
                          />,
                          <KButton color="--functionalBlue" label="Help" />,
                          <KButton
                            color="--functionalBlue"
                            icon="question_mark"
                            label="Help"
                          />,
                          <KButton
                            color="--functionalBlue"
                            icon="question_mark"
                            label="Help"
                            light="true"
                          />,
                        ],
                      ]}
                    />
                  </>
                }
              />

              <KSubsection
                title="3D"
                classStyle="3d"
                content={
                  <>
                    <KButton classStyle="three-d" label="Press Me" />
                  </>
                }
              />
            </>
          }
        />
      </div>
    );
  }
}
