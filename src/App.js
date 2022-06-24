import React from "react";
import { Routes, Route } from "react-router-dom";

import KTopMenu from "./components/KTopMenu";

import Home from "./pages/Home";
import DesignGuidelines from "./pages/DesignGuidelines";
import NavMenus from "./pages/NavMenus";
import Scrollbars from "./pages/Scrollbars";

const App = () => (
  <div className="app">
    <KTopMenu
      logo="./logo.svg"
      index="0"
      content={[
        { text: "Guideline", href: "./guideline" },
        { text: "Nav Menus", href: "./navmenus" },
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
  </Routes>
);

export default App;
