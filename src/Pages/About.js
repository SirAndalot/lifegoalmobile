import React from "react";
import Mass from "../images/about.jpg";
import "../Styles/About.css";

function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${Mass})` }}>
      <div className="aboutTop">
        <h1>ABOUT US</h1>
        <p>
          Life Goal fitness was established in 2019, in the suburban area of
          Raniban. Our journey begain when we wanted to mix lifestyle with
          fitness.
          <br />
          We wanted to make sure that individual who were passionate in fitness
          and wanted to make it a daily routin in their day to day activity
          without doing too far.
          <br />
          Our Moto has always been Customer first and will give the best
          customer service that we can. <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default About;
