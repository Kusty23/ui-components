import React, { Component } from "react";
import KIcon from "./KIcon";
import KLabel from "./KLabel";

class KButton extends Component {
  render() {
    let { color = "" } = this.props;

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
          className="KLightInput KButton"
          style={{
            borderColor: "var(" + color + ")",
            color: "var(" + color + ")",
          }}
        >
          {icon}
          {label}
        </button>
      );
    } else {
      return (
        <button
          className="KInput KButton"
          style={{
            backgroundColor: "var(" + color + ")",
          }}
        >
          {icon}
          {label}
        </button>
      );
    }
  }
}

export default KButton;
