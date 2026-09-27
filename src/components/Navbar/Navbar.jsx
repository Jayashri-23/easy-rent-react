import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

           <div className="logo">
        <div className="logo-icon">🏠</div>
        <h2>Easy Rent</h2>
      </div>


      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/properties">
          Properties
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;