import React, { Component } from "react";
import KLabel from "./KLabel";

class KCheckbox extends Component {
  render() {
    return (
      <div className="KInputContainer">
        <input className="KInput KCheckbox" type="checkbox"></input>
        <KLabel text="Option" />
      </div>
    );
  }
}

export default KCheckbox;
