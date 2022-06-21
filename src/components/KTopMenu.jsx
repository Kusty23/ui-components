import React, { Component } from "react";

export default class KTopMenu extends Component {
  render() {
    return (
      <div class="KTopMenu">
        <img src={this.props.logo}></img>
      </div>
    );
  }
}
