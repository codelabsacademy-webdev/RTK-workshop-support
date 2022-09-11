import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const storeName = useSelector(state => state.account.name)
  console.log('Navbar Rendered')
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">CLA Stores</span>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="navbarName">{storeName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
