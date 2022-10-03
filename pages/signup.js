import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../img/cryft-logo.png";
import { Link } from "react-router-dom";
import "../styles/signup.scss";

const Signup = () => {
  let navigate = useNavigate();
  const formEndpoint = "http://localhost:3000/users";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [referral, setReferral] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      referral,
    };

    await fetch(formEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/login");
  };
  return (
    <div className="signup">
      <div className="signup--left">
        <div className="nft">
          <img src={img1} alt="nft" />
        </div>
      </div>
      <div className="signup--right">
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </p>
        <h1>Sign Up</h1>
        <div className="signup--choice">
          <Link to="/">Phone</Link> | <Link to="/">Email</Link>
        </div>
        <div className="form--input">
          <label for="phone">Phone</label>
          <div className="send">
            <input
              type="email"
              placeholder="example@gmail.com required"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            <button>Send code</button>
          </div>
        </div>
        <div className="form--input">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <div className="form--input">
          <label for="password">Confirm Password</label>
          <input type="password" placeholder="confirm-password" required />
        </div>
        <div className="form--input">
          <label for="referral" className="form--input">
            Referral
          </label>
          <input
            type="text"
            placeholder="referral"
            required
            onChange={(e) => setReferral(e.target.value)}
            name="referral"
          />
        </div>
        <div className="submit">
          <Link to="/">
            <button type="submit" onClick={handleSubmit()}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
