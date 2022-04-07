import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/lifegoal.fc/" target="_blank">
          {" "}
          <InstagramIcon />
        </a>
      </div>
      <p> &copy; 2021 Life Goal</p>
    </div>
  );
}

export default Footer;
