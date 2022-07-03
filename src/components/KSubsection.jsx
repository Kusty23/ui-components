import React, { Component } from "react";

export default class KSubsection extends Component {
  render() {
    if (this.props.title) {
      return (
        <>
          <a id={this.props.title}></a>
          <div className="KContainer span--12 KGrid">
            <h3 className="span--12">{this.props.title}</h3>
            <section className="KSubsection span--12 KGrid">
              {this.props.content}
            </section>
          </div>
        </>
      );
    } else {
      return <section className="KSection">{this.props.content}</section>;
    }
  }
}
