import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({ icon, text }) {
  // Call store name
  const storeName = useSelector(state => state.account.name)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text === "Exit" && `${storeName}`}</span>
    </div>
  );
}
