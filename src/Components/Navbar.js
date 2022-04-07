import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/Plan"> Plan</Link>
          <Link to="/Contact"> Contact</Link>
          <Link to="/login"> Login</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/Plan"> Plan</Link>
        <Link to="/Contact"> Contact</Link>
        <Link to="/login"> Login</Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
