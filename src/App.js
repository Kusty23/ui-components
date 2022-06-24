import React from "react";
import { Routes, Route } from "react-router-dom";

import KTopMenu from "./components/KTopMenu";
import Home from "./pages/Home";

const App = () => (
  <div className="app">
    <KTopMenu
      logo="./logo.svg"
      index="0"
      content={["link1", "link2", "link3"]}
    />
    <Main />
  </div>
);

const Main = () => (
  <Routes>
    <Route path="/test" element={<Home />}></Route>
  </Routes>
);

export default App;
