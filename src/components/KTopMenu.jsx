import React, { useState } from "react";
import KMenuLink from "./KMenuLink";

export default function KTopMenu(props) {
  const [selected, setSelected] = useState(null);
  const links =
    props.content.length > 0 &&
    props.content.map((item, i) => {
      return (
        <KMenuLink
          href={item.href}
          text={item.text}
          selected={selected}
          setSelected={setSelected}
        />
      );
    }, this);

  return (
    <div className="KTopMenu">
      <img src={props.logo}></img>
      <div>{links}</div>
    </div>
  );
}
