import React from "react";
import { Home } from "./pages/Home";

import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <Link to="/" className="n">
            Spencer
          </Link>
        </div>

        <nav className="nav-display ">
          <ul>
            <li>
              <Link to="/" className="n">
                Home
              </Link>
            </li>

            <li>
              <Link to="/support" className="n">
                Support
              </Link>
            </li>
            <li>
              <Link to="/wallet-bal" className="n">
                Wallet
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="n">
                DashBaord
              </Link>
            </li>
          </ul>

          <button className="btn">
            <Link to="/login">Login</Link>
          </button>

          <button className="btn">
            <Link to="/sign-up">SignUp</Link>
          </button>
        </nav>
      </div>
      <Home />
    </div>
  );
};
export default NavComp;
