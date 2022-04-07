import React from "react";
import "../Styles/Navigation.css";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Navigation() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
