import React, { Component } from "react";

class KCard extends Component {
  render() {
    return (
      <div className="KCard KContainer">
        <h2>{this.props.title}</h2>
        {this.props.content}
      </div>
    );
  }
}

export default KCard;
