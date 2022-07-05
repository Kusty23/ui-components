import React, { Component } from "react";

class KSiteContainer extends Component {
  render() {
    return (
      <div className="KSiteContainer ">
        <div className={"KSite " + this.props.siteName}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default KSiteContainer;
