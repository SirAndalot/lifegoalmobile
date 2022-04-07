import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/banner.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Life Goal </h1>
        <p>Make your Fitness Dream come ture</p>
        <Link to="/Plan">
          <button>JOIN NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
