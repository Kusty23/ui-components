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
            ],
          },
          { text: "Blobs", href: "./blobs" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/guideline" element={<DesignGuidelines />} />
        <Route path="/navmenus" element={<NavMenus />} />
        <Route path="/scrollbars" element={<Scrollbars />} />
        <Route path="/carousels" element={<Carousels />} />
        <Route path="/blobs" element={<Blobs />} />
      </Routes>
    </div>
  </BrowserRouter>
);
