import React from "react";
import Welcome from "../welcome/Welcome";
import "./edit.css";
import { useState } from "react";

export default function Edit({ name, setName }) {
  const [email, setEmail] = useState("email@example.com");
  console.log('<Edit /> Rendered')

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Action Dispatched");
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Store</h3>
        <Welcome name={name}/>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Store Name</label>
              <input
                className="formInput"
                type="text"
                placeholder="Store Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="formInput"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
            <br />
            <button className="updateButton" disabled={true}>
              Fetch Users
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
