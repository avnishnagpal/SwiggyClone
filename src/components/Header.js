import React from "react";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
        alt="Swiggy-logo"
      />
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>Cart</li>
        <button
          onClick={() =>
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          }
          className="login"
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
