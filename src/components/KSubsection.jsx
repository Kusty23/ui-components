import React, { Component } from "react";

export default class KSubsection extends Component {
  render() {
    if (this.props.title) {
      return (
        <div className="KContainer">
          <h3>{this.props.title}</h3>
          <section className="KSubsection">{this.props.content}</section>
        </div>
      );
    } else {
      return <section className="KSection">{this.props.content}</section>;
    }
  }
}
