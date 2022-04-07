import React from "react";
import FeaturedInfo from "./FeaturedInfo";
import Chart from "./Chart";
import "../Styles/dashboard_home.css";
import { userinfo } from "./Dummydata";

function DashboardHome() {
  return (
    <div className="Dash_home">
      <FeaturedInfo />
      <Chart
        data={userinfo}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
}

export default DashboardHome;
