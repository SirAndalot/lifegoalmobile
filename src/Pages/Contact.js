import React from "react";
import gains from "../images/gains.jpg";
import "../Styles/Register.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dn4a8nc",
        "template_ngjwwih",
        e.target,
        "M75gh8t7HoQV7La4q"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${gains})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact US </h1>

        <form id="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="number">Number</label>
          <input
            name="number"
            placeholder="Enter phone number..."
            type="number"
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
