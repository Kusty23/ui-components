import React, { Component } from "react";

export default class KColorSwatch extends Component {
  render() {
    const color = this.props.color;
    return (
      <div className="">
        <div
          style={{
            backgroundColor: color,
            wordBreak: "break-all",
          }}
          className="KColorSwatch"
        >
          <p
            className="KTinyText"
            style={{ backgroundColor: "rgba(255,255,255,.5)" }}
          >
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}
