import React from "react";
import "../../marketcap.scss";
import "../../coinsec.scss";
import "../../dashboardnav.scss";
import "../../dashboardtopsec.scss";
import "../../dashboardapi.scss";
import { CoinSec } from "./CoinSec";
import { DashboardAPI } from "./DashboardAPI";
import { DashBoardNav } from "./DashBoardNav";
import { DashBoardTop } from "./DashBoardTop";
import { MarketCapPage } from "./MarketCapPage";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_main">
        <div className="dashboard_main_inner">
          <div className="user_name_sec">
            <p>Welcome,</p>
          </div>
          <div className="dash_left_section">
            <div className="dash_navbar">
              <div className="dash_navbar_inner">
                <DashBoardNav />
              </div>
            </div>
          </div>

          <div className="dash_right_section">
            <div className="top_section">
              <div className="top_section_inner">
                <DashBoardTop />
              </div>
            </div>
            <div className="bottom_section">
              <div className="dashboard_api">
                <div className="dashboard_api_inner">
                  <DashboardAPI />
                </div>
              </div>
              <div className="dashboard_coin_details_sec">
                <div className="dashboard_coin_details_sec_inner">
                  <CoinSec />
                </div>
              </div>
            </div>

            <div className="market_cap_sec">
              <p>Market Cap</p>
              <div className="market_cap_sec_inner">
                <MarketCapPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
