import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, updateAccount } from "../../redux/accountSlice";
import Welcome from "../welcome/Welcome";
import "./edit.css";

export default function Edit() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const storeName = useSelector(state=> state.account.name)
  const storeEmail = useSelector(state=> state.account.email)
  const dispatch = useDispatch()

  console.log('<Edit /> Rendered')

  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch(update({name, email}))
    dispatch(updateAccount({name, email}))
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Store</h3>
        <Welcome/>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Store Name</label>
              <input
                className="formInput"
                type="text"
                placeholder={storeName}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="formInput"
                type="email"
                placeholder={storeEmail}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
