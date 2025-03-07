import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [message, setMessage] = useState(""); // State for success message

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5510242a-eb5d-43b4-8f5d-584a82dfa9ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("✅ Form submitted successfully!");
      event.target.reset(); // Reset form after submission

      // Hide message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="Contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel Free to Contact Me</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ssurajpatel1999@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 976 8844 976</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>
                Hansraj singh well fare association, Ram Mandir Road, Goregaon
                East, Mumbai- 400063
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>

          {/* ✅ Success/Error Message Display */}
          {message && <p className="success-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
