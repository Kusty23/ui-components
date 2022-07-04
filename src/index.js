import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./import.js";

import KTopMenu from "./components/KTopMenu";

import Home from "./pages/Home";
import DesignGuidelines from "./pages/DesignGuidelines";
import NavMenus from "./pages/NavMenus";
import Scrollbars from "./pages/Scrollbars";
import Carousels from "./pages/Carousels";
import Blobs from "./pages/Blobs.jsx";
import Buttons from "./pages/Buttons.jsx";
import Grid from "./pages/Grid.jsx";
import ILoveHue from "./pages/ILoveHue.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app">
      <KTopMenu
        logo="./logo.svg"
        index="0"
        content={[
          { text: "Guideline", href: "./guideline" },
          {
            isGroup: true,
            text: "UI Components",
            content: [
              { text: "Nav Menus", href: "./navmenus" },
              { text: "Scrollbars", href: "./scrollbars" },
              { text: "Carousels", href: "./carousels" },
              { text: "Buttons", href: "./buttons" },
              { text: "Grid System", href: "./grid" },
            ],
          },
          { text: "Blobs", href: "./blobs" },
          { text: "I Love Hue", href: "./i-love-hue" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/guideline" element={<DesignGuidelines />} />
        <Route path="/navmenus" element={<NavMenus />} />
        <Route path="/scrollbars" element={<Scrollbars />} />
        <Route path="/carousels" element={<Carousels />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/blobs" element={<Blobs />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/i-love-hue" element={<ILoveHue />} />
      </Routes>
    </div>
  </BrowserRouter>
);
