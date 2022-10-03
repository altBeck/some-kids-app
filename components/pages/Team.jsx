import React, { useEffect } from "react";
import { teamData } from "../../userdata";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const teamInfo = teamData.map((teamdata) => {
    return <Group6 {...teamdata} />;
  });

  return <div className="team_flex_box">{teamInfo}</div>;
};

const Group6 = (props) => {
  return (
    <>
      <div
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="5000"
        className="team_flex_box_inner"
      >
        <div className="team_img">
          <img src={props.img} alt="image" />
        </div>
        <div className="team_bio">
          <div className="name">
            <p
              data-aos="flip-right"
              data-aos-duration="1000"
              className="name_text"
            >
              {props.name}
            </p>
          </div>
          <div className="member_info">
            <p className="info_text">{props.info}</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-buttom"
            className="nickname"
          >
            <p className="nickname_text">{props.userName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

// data-aos="zoom-in"
// data-aos-easing="linear"
// data-aos-anchor-placement="top-buttom"
// data-aos-delay="9000"
// data-aos-offset="200"
// data-aos-mirror="false"
// data-aos-once="false"
