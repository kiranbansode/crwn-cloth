import React from "react";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="shop">
        SHOP
      </Link>
      <Link className="option" to="shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
