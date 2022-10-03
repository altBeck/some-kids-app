import React from "react";
import { Link } from "react-router-dom";
import { dashTopData } from "../../userdata";

export const DashBoardTop = () => {
  const dashTopInfo = dashTopData.map((topInfo) => {
    return <DashTop {...topInfo} />;
  });
  return <div className="dash_top_sec">{dashTopInfo}</div>;
};

const DashTop = (props) => {
  return (
    <>
      <div className="dash_top_sec_inner">
        <div className="top_text">
          <ul>
            <li className="top_sec">{props.top_sec}</li>
            <div className="buttons_sec">
              <li>
                <Link to="/add-card" className="button">
                  {props.top_sec_btn}
                </Link>
              </li>
              <li>
                <Link to="/" className="button blue">
                  {props.bottom_sec_btn}
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="bottom_sec">
          <div className="bottom_sec_inner">
            <ul>
              <li className="bottom_number">{props.bottom_sec}</li>
              <div className="coin_bottom">
                <li className="right icon1">{props.bottom_logo1}</li>
                <li className="right icon2">{props.bottom_logo2}</li>
                <li className="right icon3">{props.bottom_logo3}</li>
                <li className="right icon4">{props.bottom_logo4}</li>
                <li className=" logo_text">{props.bottom_logoText}</li>
              </div>

              <li className="color_number">{props.bottom_percentage}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
