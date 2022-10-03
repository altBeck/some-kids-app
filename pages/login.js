import React from "react";
import img1 from "../img/cryft-logo.png";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = ({ label, text, type, placeholder }) => {
  return (
    <div className="login">
      <div className="login--left">
        <div className="logo">
          <img src={img1} alt="logo" />
        </div>
      </div>
      <div className="login--right">
        <h1>Login</h1>
        <div className="login--choice">
          <Link to="/">Phone</Link> | <Link to="/">Email</Link>
        </div>
        <div className="form--input">
          <label htmlFor="phone">Email</label>
          <input type="email" placeholder="email or Username" required />
        </div>
        <div className="form--input">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="submit">
          <Link to="/">
            <button type="submit" required>
              Login
            </button>
          </Link>
        </div>
        <p>
          Don't have an account?
          <span>
            <Link to="/sign-up">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
