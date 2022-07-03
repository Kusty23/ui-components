import React, { Component } from "react";

export default class KAccordion extends Component {
  render() {
    return (
      <details className="KContainer KAccordion span--12 KGrid">
        <summary className="span--12">{this.props.title}</summary>
        <section className="KSection KGrid span--12">
          {this.props.content}
        </section>
      </details>
    );
  }
}
