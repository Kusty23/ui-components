import React, { Component } from "react";

export default class KMenuLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        onClick={() => this.props.setSelected(this.props.text)}
        className={
          this.props.selected === this.props.text
            ? "KMenuLink active"
            : "KMenuLink"
        }
      >
        {this.props.text}
      </a>
    );
  }
}
