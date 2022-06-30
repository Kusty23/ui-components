import React, { Component } from "react";

import KSiteContainer from "../components/KSiteContainer";

export default class Blobs extends Component {
  render() {
    return (
      <KSiteContainer
        content={
          <>
            <h1>Test</h1>
            <div className="blob">
              <svg viewBox="0 0 120 173.8" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="st0"
                  d="M98.3,138.2C90.8,150.6,78.8,161,66.1,161S40,150.5,26.4,144.8c-9.2-3.9-18.5-5.8-26.4-8.7V7.8
	c12.5-4.3,27-4.2,40.5-2.2c16.3,2.5,31,7.9,40.5,17.7s13.7,24,18,37.1c4.3,13.1,8.5,25.1,9.2,38.2
	C108.8,111.7,105.8,125.9,98.3,138.2z"
                />
                <path
                  class="st1"
                  d="M0,19.4c12.5-4.3,36.6-7.3,50-5.2c16.3,2.5,31,7.9,40.5,17.7s13.7,24,18,37.1c4.3,13.1,8.5,25.1,9.2,38.2
	c0.6,13.1-2.4,27.3-9.9,39.6c-7.5,12.4-19.5,22.8-32.2,22.8s-26.1-10.5-39.7-16.2c-9.2-3.9-28-7.9-35.9-10.8"
                />
              </svg>
            </div>
          </>
        }
      ></KSiteContainer>
    );
  }
}
