import React from "react";
import { logos } from "../../userdata";
import Aos from "aos";
import "aos/dist/aos.css";

const Community = () => {
  const socialIcons = logos.map((logo) => {
    return <SocialLogos {...logo} />;
  });
  return (
    <>
      <div className="community_sec">
        <div className="community_sec_inner">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-buttom"
            data-aos-duration="1000"
            className="logo_header"
          >
            <p>Community</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-anchor-placement="top-buttom"
            className="logo_section"
          >
            {socialIcons}
          </div>
        </div>
      </div>
    </>
  );
};

const SocialLogos = (props) => {
  return (
    <>
      <div className="logo_section_inner">
        <div className="logo1">{props.logos_src}</div>
      </div>
    </>
  );
};
export default Community;
