import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Realizacje from "./components/pages/Realizacje"
import Inwestycje from "./components/pages/Inwestycje";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Map" element={<Map /> } />
        <Route path="/Realizacje" element={<Realizacje /> } />
        <Route path="/Inwestycje" element={<Inwestycje /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
