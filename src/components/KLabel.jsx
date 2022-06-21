import React, { Component } from "react";

export default class KLabel extends Component {
  render() {
    return <label className="KLabel">{this.props.text}</label>;
  }
}
