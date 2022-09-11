import React from "react";
import "./welcome.css";

export default function Welcome({name}) {
  return (
    <div className="welcome">
      Welcome to your store - <b>{name}</b>!
    </div>
  );
}
