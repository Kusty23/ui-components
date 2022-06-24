import React, { Component } from "react";
import KMenuLink from "./KMenuLink";

class KMenuGroup extends Component {
  render() {
    return (
      <>
        <div className="KMenuGroup">
          <KMenuLink
            href="#"
            text="Group"
            selected={this.props.selected}
            setSelected={this.props.setSelected}
          ></KMenuLink>
          <div>{this.props.content}</div>
        </div>
      </>
    );
  }
}

export default KMenuGroup;
