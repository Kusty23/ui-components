import React, { Component } from "react";

export default class KMenuLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectVal = this.props.selectedValue
      ? this.props.selectedValue
      : this.props.text;

    console.log(this.props.selectedValue);

    return (
      <a
        href={this.props.href}
        onClick={() => this.props.setSelected(selectVal)}
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
