import React from "react";
import { Routes, Route } from "react-router-dom";

import KTopMenu from "./components/KTopMenu";
import DesignGuidelines from "./pages/DesignGuidelines";
import Home from "./pages/Home";

const App = () => (
  <div className="app">
    <KTopMenu
      logo="./logo.svg"
      index="0"
      content={[{ text: "Guideline", href: "./guideline" }]}
    />
    <Main />
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/guideline" element={<DesignGuidelines />} />
  </Routes>
);

export default App;
