import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const context = useContext(UserContext);

  const cartItem = useSelector((s) => s.cart.items.length);

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo-img" />
      </Link>{" "}
      <ul>
        <li>Online Status {onlineStatus ? "✅" : "🔴"} </li>
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
          <Link to="/cart"> 🛒 &nbsp;({cartItem+" Items"})</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/grocery">Grocery</Link>{" "}
        </li>
        <li> {context.loggedInUser} </li>
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
