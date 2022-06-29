import React from "react";
import { Routes, Route } from "react-router-dom";

import KTopMenu from "./components/KTopMenu";

import Home from "./pages/Home";
import DesignGuidelines from "./pages/DesignGuidelines";
import NavMenus from "./pages/NavMenus";
import Scrollbars from "./pages/Scrollbars";
import Carousels from "./pages/Carousels";

const App = () => (
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
      ]}
    />
    <Main />
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/guideline" element={<DesignGuidelines />} />
    <Route path="/navmenus" element={<NavMenus />} />
    <Route path="/scrollbars" element={<Scrollbars />} />
    <Route path="/carousels" element={<Carousels />} />
  </Routes>
);

export default App;
