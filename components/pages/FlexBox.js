import React, { useEffect } from "react";
import { portfolioData } from "../../userdata";
import Aos from "aos";
import "aos/dist/aos.css";

// import { Link } from "react-router-dom";

const Box = () => {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  }, []);

  const boxInfo = portfolioData.map((boxData) => {
    return <FlexBox {...boxData} />;
  });
  return <div className="flex_box">{boxInfo}</div>;
};

const FlexBox = (props) => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="linear"
        className="flex_box_inner"
      >
        <div data-aos="zoom-in" className="flex_image">
          <img src={props.img_src} />
        </div>
        <div data-aos="flip-left" className="text_contents">
          <div className="flex_text">
            <p className="text">{props.text}</p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="flex_contents"
          >
            <p className="contents">{props.contents}</p>
          </div>
          <div data-aos="zoom-in" className="learn_more">
            <p className="learn_more">Learn More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
