import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import img from "./logo of calendly.svg";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={img} alt=""></img>
      </Link>
      <div className="header__links">
        <Link className="header__link" to="/individuals">
          <span>Individuals</span>
        </Link>
        <Link className="header__link" to="/teams">
          <span>Teams</span>
        </Link>
        <Link className="header__link" to="/enterprise">
          <span>Enterprise</span>
        </Link>
        <Link className="header__link" to="/product">
          <span>Product</span>
        </Link>
        <Link className="header__link" to="/pricing">
          <span>Pricing</span>
        </Link>
        <Link className="header__link" to="/resources">
          <span>Resources</span>
        </Link>
      </div>

      <div className="header__auth">
        <Link className="header__login" to="/login">
          <span>Login</span>
        </Link>
        <Link className="header__signup" to="/signup">
          <span>Sign UP free</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
