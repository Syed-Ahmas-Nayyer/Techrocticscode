import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";


const NavbarMaaz = () => {

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-md  navbar-dark"
        style={{ backgroundColor: "#333333" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo2} style={{ width: "80px", paddingRight: "15px" }} />
            The Techrotics Lab
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/diplomaT" className="navbar-brand">
                  Services
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="navbar-brand">
                  About
                </Link>     
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMaaz;
