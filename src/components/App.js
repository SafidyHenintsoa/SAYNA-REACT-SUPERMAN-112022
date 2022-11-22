import React from "react";
import NavBar from "./NavBar";
import fontImage from "../assets/background/img1.png";
import img20 from "../assets/images/img20.png";
import img37 from "../assets/images/img37.png";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EShop from "../pages/EShop";
import MonCompt from "../pages/MonCompt";
import Inscription from "../pages/Iscription";
import Connection from "../pages/Connection";
import { AuthContextProvider } from "../context/AuthContext";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function App() {
  var imgUrl = "";
  const location = useLocation();
  const Url = location.pathname;

  if (Url === "/") {
    imgUrl = fontImage;
  }
  if (Url === "/EShop") {
    imgUrl = img20;
  }
  if (Url === "/MonCompt") {
    imgUrl = img37;
  }

  return (
    <>
      <div
        className="fontImg"
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <NavBar />

        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EShop" element={<EShop />} />
            <Route path="/MonCompt" element={<MonCompt />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Connection" element={<Connection />} />
          </Routes>
        </AuthContextProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
