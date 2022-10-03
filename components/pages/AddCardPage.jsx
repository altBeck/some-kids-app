import React from "react";
import { Link } from "react-router-dom";
export const AddCardPage = () => {
  return (
    <div className="container">
      <h1>Add New Card</h1>
      <form className="form">
        <label for="fname">Name:</label>
        <input type="text" name="name" placeholder="Full Name" />

        <label for="fname">Card Number:</label>
        <input
          type="numeric"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
        />
        <div className="exp_cvv_sec">
          <div className="exp_data">
            <label for="lname">Expiry Date:</label>
            <input type="date" name="date" placeholder="12/22" />
          </div>
          <div className="cvv_sec">
            <label for="lname">Security Code (CVV):</label>
            <input type="password" name="cvv" placeholder="123" />
          </div>
        </div>
        <Link to="/">
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </div>
  );
};
