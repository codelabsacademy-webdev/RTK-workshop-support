import React from "react";
import { useSelector } from "react-redux";
import "./welcome.css";

export default function Welcome() {
  const storeName = useSelector(state => state.account.name)
  return (
    <div className="welcome">
      Welcome to your store - <b>{storeName}</b>!
    </div>
  );
}
