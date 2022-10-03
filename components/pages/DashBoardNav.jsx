import React from "react";
import { DashBoardData } from "../../userdata";

export const DashBoardNav = () => {
  const navBarData = DashBoardData.map((navInfo) => {
    return <DashBoardMenuInfo {...navInfo} />;
  });
  return (
    <>
      <div className="dashsec">
        <div className="dashsec_inner">
          <div className="dash_header">
            <p>dashboard</p>
          </div>
          <div className="navbarinfo_sec">{navBarData}</div>
        </div>
      </div>
    </>
  );
};

const DashBoardMenuInfo = (props) => {
  return (
    <>
      <div className="navbarinfo_sec_inner">
        <div className="navbar_contents">
          <ul>
            <li className="logo_nav">{props.navLogo}</li>
            <li className="nav_text">{props.navPage}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
