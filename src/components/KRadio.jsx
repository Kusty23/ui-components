import React, { Component } from "react";
import KLabel from "./KLabel";

export default class KRadio extends Component {
  render() {
    let optionsList =
      this.props.options.length > 0 &&
      this.props.options.map((item, i) => {
        return (
          <>
            <input
              className="KInput KRadio"
              name={this.props.name}
              type="radio"
              value={item}
            ></input>
            <KLabel text={item} />
          </>
        );
      }, this);

    return <div className="KInputContainer">{optionsList}</div>;
  }
}
