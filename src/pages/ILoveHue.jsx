import React, { Component } from "react";
import KCanvas from "../components/KCanvas";

import KSiteContainer from "../components/KSiteContainer";

export default class ILoveHue extends Component {
  render() {
    return (
      <KSiteContainer
        content={
          <>
            <h1>I Love Hue More</h1>
            <KCanvas />
          </>
        }
      ></KSiteContainer>
    );
  }
}
