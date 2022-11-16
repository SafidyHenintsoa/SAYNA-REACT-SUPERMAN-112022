import React from "react";
import NavBar from "./NavBar";
import fontImage from "../assets/background/img1.png";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EShop from "../pages/EShop";
import MonCompt from "../pages/MonCompt";

function App() {
  return (
    <div
      className="fontImg"
      style={{
        backgroundImage: "url(" + fontImage + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EShop" element={<EShop />} />
        <Route path="/MonCompt" element={<MonCompt />} />
      </Routes>
    </div>
  );
}

export default App;
