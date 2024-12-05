import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import logo from "../assets/images/logo.jpg"
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo-img" />
      </Link>{" "}
      <ul>
        <li>Online Status { onlineStatus ? "✅" : "🔴"} </li>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">About Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/grocery">Grocery</Link>{" "}
        </li>
        <button
          onClick={() =>
            setBtnName((prevName) =>
              prevName === "Login" ? "Logout" : "Login"
            )
          }
        >
          {" "}
          {btnName}{" "}
        </button>
      </ul>
    </div>
  );
};

export default Header;
