import React from "react";
import "./navbar.css";

const Navbar = ({name}) => {
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
          <span className="navbarName">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
