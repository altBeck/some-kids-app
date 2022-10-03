import React from "react";
import { dashCoinImgSec } from "../../userdata";

export const CoinSec = () => {
  const BaseSec = dashCoinImgSec.map((dash) => {
    return <CoinCode {...dash} />;
  });
  return (
    <>
      <div className="coin_base_sec">{BaseSec}</div>
    </>
  );
};

const CoinCode = (props) => {
  return (
    <>
      <div className="coin_base_sec_inner">
        <div className="main_sec">
          <div className="decimal">
            <p>{props.decimal_no}</p>
          </div>
          <div className="text_amount">
            <div className="head_text">
              <p>{props.headText}</p>
            </div>
            <div className="amount">
              <p>{props.amount}</p>
            </div>
          </div>
          <div className="coin_img_sec">
            <div className="coinlogo">
              <img src={props.coin_logo} alt="coinlogo" />
            </div>
            <div className="percentage">
              <p>{props.percentage_text}</p>
            </div>
          </div>
        </div>
        <div className="markets_sec">
          <img src={props.img_market} alt="img" />
        </div>
      </div>
    </>
  );
};
