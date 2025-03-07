import React from "react";
import "./About.css";
import about_profile from "../../assets/about_profile.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="About-me" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              sdfakjfahsn sndfnasndkandf nsndkfnakndknfa nsdjknfadnuadnasd
              nfnasdfnauiddfn
            </p>
            <p>
              sdhabdbadaba d bdasdf f jbkbdbfadf asdfbasdbadcasdf jnjsdufasbd
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>htmls & css</p>
              <hr style={{ width: "80%" }}></hr>{" "}
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>NextJs</p>
              <hr style={{ width: "80%" }}></hr>
            </div>

            <div className="about-skill">
              <p>javascript</p>
              <hr style={{ width: "70%" }}></hr>
            </div>

            <div className="about-skill">
              <p>Shopify & wordpress</p>
              <hr style={{ width: "90%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of experience</p>
        </div>

        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Project Completed</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>25+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default About;
