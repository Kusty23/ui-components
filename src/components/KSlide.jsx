import React, { Component } from "react";

export default class KSlide extends Component {
  constructor(props) {
    super(props);

    this.props.setSelected(0);
  }

  render() {
    let classStyle =
      this.props.selected === this.props.index ? "KSlide active " : "KSlide ";

    classStyle += this.props.style;

    return (
      <div
        style={{ backgroundImage: "url(" + this.props.background + ")" }}
        className={classStyle}
      >
        {this.props.content}
      </div>
    );
  }
}
