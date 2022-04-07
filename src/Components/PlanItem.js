import React from "react";

function PlanItem({ image, name, Month, Half_year, Year }) {
  return (
    <div className="planItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Month Rs.{Month} </p>
      <p> Half Year Rs.{Half_year} </p>
      <p> Full Year Rs.{Year} </p>
      <p>This does not include admission Fee</p>
    </div>
  );
}

export default PlanItem;
