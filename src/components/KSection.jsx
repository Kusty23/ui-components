import React, { Component } from "react";

export default class KSection extends Component {
  render() {
    if (this.props.title) {
      return (
        <div className="KContainer span--12 KGrid">
          <h2 className="span--12">{this.props.title}</h2>
          <section className="KSection span--12">{this.props.content}</section>
        </div>
      );
    } else {
      return <section className="KSection">{this.props.content}</section>;
    }
  }
}
