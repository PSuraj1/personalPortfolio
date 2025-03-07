import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="FooterSec">
      <div className="footer-top">
        <div className="footer-left">
          <img src={footer_logo} alt="" />
          <p>I am an front developer in India having 2+ yrs of experience</p>
        </div>
        <div className="footer-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Suraj Patel. All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms & Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
