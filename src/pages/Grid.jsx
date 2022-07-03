import React, { Component } from "react";

import KSection from "../components/KSection";
import KSubsection from "../components/KSubsection";

export default class Grid extends Component {
  render() {
    return (
      <div className="main KGrid">
        <KSection
          title="Grid System"
          content={
            <>
              <KSubsection
                title="Basic"
                content={
                  <div className="KGrid demo-only">
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>
                    <p className="span--1"></p>

                    <p className="span--2"></p>
                    <p className="span--2"></p>
                    <p className="span--2"></p>
                    <p className="span--2"></p>
                    <p className="span--2"></p>
                    <p className="span--2"></p>

                    <p className="span--3"></p>
                    <p className="span--3"></p>
                    <p className="span--3"></p>
                    <p className="span--3"></p>

                    <p className="span--4"></p>
                    <p className="span--4"></p>
                    <p className="span--4"></p>

                    <p className="span--6"></p>
                    <p className="span--6"></p>

                    <p className="span--12"></p>
                  </div>
                }
              />
            </>
          }
        />
      </div>
    );
  }
}
