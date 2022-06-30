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
            key={i + item}
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
            key={i + item}
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
      <a href="./">
        <img src={props.logo}></img>
      </a>

      <div>{links}</div>
    </div>
  );
}
