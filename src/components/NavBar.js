import React from "react";
import "../styles/navBar.scss";
import logo from "../assets/logo/logo_blanc.png";
import { NavLink } from "react-router-dom";

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="EShop" className="nav-link">
                ESHOP
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="MonCompt" className="nav-link">
                MON COMPT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default navBar;
