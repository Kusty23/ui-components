import React, { Component } from "react";
import KIcon from "./KIcon";
import KLabel from "./KLabel";

class KButton extends Component {
  render() {
    let { color = "--accentColor" } = this.props;

    let icon;
    if (this.props.icon) {
      icon = <KIcon name={this.props.icon} />;
    }

    let label;
    if (this.props.label) {
      label = <KLabel text={this.props.label} />;
    }

    if (this.props.light) {
      return (
        <button
          className={"KLightInput KButton " + this.props.classStyle}
          style={{
            borderColor: "var(" + color + ")",
            color: "var(" + color + ")",
          }}
        >
          <span>
            {icon}
            {label}
          </span>
        </button>
      );
    } else {
      return (
        <button
          className={"KInput KButton " + this.props.classStyle}
          style={{
            backgroundColor: "var(" + color + ")",
          }}
        >
          <span>
            {icon}
            {label}
          </span>
        </button>
      );
    }
  }
}

export default KButton;
