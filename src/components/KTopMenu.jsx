import React, { useState } from "react";
import KMenuGroup from "./KMenuGroup";
import KMenuLink from "./KMenuLink";

export default function KTopMenu(props) {
  const [selected, setSelected] = useState(null);
  const links =
    props.content.length > 0 &&
    props.content.map((item, i) => {
      if (item.isGroup) {
        return (
          <KMenuGroup
            text={item.text}
            href={item.href}
            content={item.content}
            selected={selected}
            setSelected={setSelected}
          />
        );
      } else {
        return (
          <KMenuLink
            href={item.href}
            text={item.text}
            selected={selected}
            setSelected={setSelected}
          />
        );
      }
    }, this);

  let classStyle = "KTopMenu " + props.style;

  return (
    <div className={classStyle}>
      <img src={props.logo}></img>
      <div>{links}</div>
    </div>
  );
}
