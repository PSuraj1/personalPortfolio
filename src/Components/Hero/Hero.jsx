import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="herosec">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Suraj Patel,</span> full stack developer from india.{" "}
      </h1>
      <p>
        sdfsdfsdfsdfsdfs dfdfsdfsdfsdfsdfsfgggdfgsdf dsfsdfsdfs sfsdf sdfsdf
        sdfsdfsdfggbcbvxcvb fsdfsd sfs dxdsd
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
