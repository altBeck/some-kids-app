import React from "react";
import { marketCapData } from "../../userdata";

export const MarketCapPage = () => {
  const marketSec = marketCapData.map((marketdata) => {
    return <MarketInfo {...marketdata} />;
  });
  return <div className="market_data">{marketSec}</div>;
};

const MarketInfo = (props) => {
  return (
    <>
      <div className="market_data_inner">
        <div className="coin_icon">
          <img src={props.coinIcon} alt="img" />
        </div>
        <div className="coin_name">
          <p>{props.coinName}</p>
        </div>
        <div className="usd_number">
          <p>{props.USD}</p>
        </div>
        <div className="percentage_number">
          <p>{props.percentageNo}</p>
        </div>
        <div className="plus_logo">
          <img src={props.plusIcon} alt="img" />
        </div>
      </div>
    </>
  );
};
