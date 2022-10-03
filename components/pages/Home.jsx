import React, { useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { FcNeutralTrading } from "react-icons/fc";
import image from "../Images/pix5.png";
import img from "../Images/pix6.png";
import FlexBox from "./FlexBox";
import Aos from "aos";
import "aos/dist/aos.css";
import Community from "./Community";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const less = () => "<0.10%";

  return (
    <div className="home">
      <section>
        <div className="first_section">
          <div className="home_left_side">
            <div className="home_left_side_inner">
              <p className="left_side_text">
                Buy, trade, and hold 600+ crytopcurrencies on Binance
              </p>
              <div className="left_side_form">
                <form>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email/Phone number"
                  />
                  <input type="submit" value="Get Started" />{" "}
                  <i class="fa fa-chrome" aria-hidden="true"></i>
                </form>
              </div>
            </div>
          </div>

          <div className="home_right_side">
            <div className="home_right_side_inner">
              <div className="right_side_img">
                <img src={img} alt="Image" className="right_side_img" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-easing="linear" className="analysis">
            <div className="text">
              <p className="large_text">$76 billion</p>
              <p className="small_text">
                24h trading volume on Binance exchange
              </p>
            </div>
            <div className="text">
              <p className="large_text">600+</p>
              <p className="small_text">Cryptocurrencies listed</p>
            </div>
            <div className="text">
              <p className="large_text">90 million</p>
              <p className="small_text">Registered users who trust Binance</p>
            </div>
            <div className="text">
              <p className="large_text">{less()}</p>
              <p className="small_text">Lowest transaction fees</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="second_section">
          <div className="second_section_inner">
            <div
              data-aos="flip-right"
              data-aos-delay="5000"
              data-aos-easing="linear"
              className="second_section_left_side"
            >
              <div className="second_section_left_side_inner">
                <div className="heading_sec">
                  <p className="heading">Build your crypto portfolio</p>
                  <p className="heading_text">
                    Start your first trade with these easy steps.
                  </p>
                </div>
                <div className="section_portfolio">
                  <div className="icon">
                    <span>
                      <FaUserTie />
                    </span>
                  </div>
                  <div className="portfolio">
                    <p className="portfolio_header">Fund your account</p>
                    <p className="portfolio_text">
                      Add funds to your crypto account to start trading crypto.
                      You can add funds with a variety of payment methods
                    </p>
                  </div>
                </div>
                <div className="section_portfolio">
                  <div className="icon">
                    <span>
                      <HiIdentification />
                    </span>
                  </div>
                  <div className="portfolio">
                    <p className="portfolio_header">Verify your Identity</p>

                    <p className="portfolio_text">
                      Complete the identity verification process to secure your
                      account and transactions
                    </p>
                  </div>
                </div>
                <div className="section_portfolio">
                  <div className="icon">
                    <span>
                      <FcNeutralTrading />
                    </span>
                  </div>
                  <div className="portfolio">
                    <p className="portfolio_header">Start trading</p>

                    <p className="portfolio_text">
                      You're good to go! Buy/sell crypto, set up recurring buys
                      for your investments, and discover what Binance has to
                      offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-buttom"
              data-aos-delay="1000"
              data-aos-easing="linear"
              className="second_section_right_side"
            >
              <div className="second_section_right_side_inner">
                <img src={image} alt="image" />
              </div>
            </div>
            <button data-aos="zoom-in" className="get_started">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex_box_section">
          <div className="flex_title">
            <p
              data-aos="fade-down-right"
              dos-aos-easing="linear"
              className="title"
            >
              Explore endless possibilities with Binance
            </p>
          </div>
          <FlexBox />
        </div>
      </section>
      
      <section>
        <div className="get_started">
          <div className="get_started_contents">
            <p data-aos="slide-up" className="get_started_header">
              Start earning today
            </p>

            <button data-aos="zoom-in" className="sign_up_btn">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>


      <section>
        <Community />
      </section>
    </div>
  );
};
