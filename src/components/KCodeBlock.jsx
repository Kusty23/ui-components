import React, { Component } from "react";

export default class KCodeBlock extends Component {
  render() {
    return (
      <pre className={"KCodeBlock " + this.props.classStyle}>
        <code>{this.props.content}</code>
      </pre>
    );
  }
}
