import React, { Component } from "react";
import KMenuLink from "./KMenuLink";

class KMenuGroup extends Component {
  render() {
    return (
      <>
        <div className="KMenuGroup">
          <KMenuLink text="Group"></KMenuLink>
          <div>{this.props.content}</div>
        </div>
      </>
    );
  }
}

export default KMenuGroup;
