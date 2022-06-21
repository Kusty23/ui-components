import React, { Component } from "react";

export default class KSelect extends Component {
  render() {
    let optionsList =
      this.props.options.length > 0 &&
      this.props.options.map((item, i) => {
        return <option key={i}>{item}</option>;
      }, this);

    return <select className="KInput KSelect">{optionsList};</select>;
  }
}
