import React, { useState } from "react";
//import "../src/components/KCaorusel.css";

import KSlide from "./KSlide";
import KIcon from "./KIcon";

export default function KCarousel(props) {
  const [selected, setSelected] = useState();

  const length = props.content.length;
  const cards =
    props.content.length > 0 &&
    props.content.map((item, i) => {
      return (
        <KSlide
          index={i}
          style={props.style}
          background={item.background}
          title={item.title}
          content={item.content}
          selected={selected}
          setSelected={setSelected}
        />
      );
    }, this);

  let classStyle = "KCarousel";

  return (
    <div className={classStyle}>
      <a
        className="slide-arrow backward"
        onClick={() => {
          if (selected < 1) {
            setSelected(length - 1);
          } else {
            setSelected(selected - 1);
          }
        }}
      >
        <KIcon name="arrow_back" />
      </a>
      {cards}{" "}
      <a
        className="slide-arrow forward"
        onClick={() => {
          if (selected >= length - 1) {
            setSelected(0);
          } else {
            setSelected(selected + 1);
          }
        }}
      >
        <KIcon name="arrow_forward" />
      </a>
    </div>
  );
}
