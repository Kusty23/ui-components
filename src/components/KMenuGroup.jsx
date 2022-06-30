import React, { Component } from "react";
import KMenuLink from "./KMenuLink";

class KMenuGroup extends Component {
  render() {
    const subgroup = this.props.content.map((subitem, i) => {
      return (
        <KMenuLink
          key={i + subitem}
          href={subitem.href}
          text={subitem.text}
          selected={this.props.selected}
          setSelected={this.props.setSelected}
          selectedValue={this.props.text}
        />
      );
    });

    return (
      <>
        <div className="KMenuGroup">
          <KMenuLink
            href={this.props.href}
            text={this.props.text}
            selected={this.props.selected}
            setSelected={this.props.setSelected}
          ></KMenuLink>
          <div>{subgroup}</div>
        </div>
      </>
    );
  }
}

export default KMenuGroup;
