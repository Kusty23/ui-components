import React, { Component } from "react";

import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";

const filler =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque ac nisi vulputate auctor feugiat a erat. Aenean faucibus ornare tortor ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nunc bibendum vehicula risus ac porttitor. Cras nisi metus, efficitur nec augue ultricies, viverra auctor mauris. Suspendisse quis ante quis sem aliquam finibus. Cras dictum ac purus non consectetur. Suspendisse potenti. Sed a tellus ac turpis convallis rhoncus vitae sit amet lacus. Cras eget dui neque. Nulla vulputate ligula quis ex suscipit cursus. Fusce ultricies diam quis velit imperdiet, sit amet ullamcorper est placerat. Sed fermentum nisi ac dui tristique vestibulum. In posuere fermentum dignissim. Nunc in enim eget lacus sollicitudin aliquam quis quis nisi. Vivamus porta accumsan ante, nec scelerisque libero faucibus sit amet. Suspendisse pulvinar nunc id orci gravida, in bibendum felis egestas. Nam consequat id libero non sollicitudin. Nulla quis nulla ullamcorper, dapibus sapien non, sollicitudin lacus. Vestibulum in rhoncus diam, nec elementum sem. Ut hendrerit sed quam nec vulputate.";

export default class Scrollbars extends Component {
  render() {
    return (
      <div className="main">
        <KSection
          title="Scrollbars"
          content={
            <>
              <KSubsection
                title="Basic"
                content={
                  <>
                    <div
                      style={{
                        height: "200px",
                        width: "100%",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      className="KScrollable span--12"
                    >
                      <p>{filler}</p>
                    </div>
                  </>
                }
              />
              <KSubsection
                title="No Track"
                content={
                  <>
                    <div
                      style={{
                        height: "200px",
                        width: "100%",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      className="KScrollable notrack span--12"
                    >
                      <p>{filler}</p>
                    </div>
                  </>
                }
              />
              <KSubsection
                title="No Scrollbar"
                content={
                  <>
                    <div
                      style={{
                        height: "200px",
                        width: "100%",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      className="KScrollable nobar span--12"
                    >
                      <p>{filler}</p>
                    </div>
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
