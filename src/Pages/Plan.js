import React from "react";
import PlanItem from "../Components/PlanItem";
import { planList } from "../Helpers/PlanList";
import "../Styles/Plan.css";

function Plan() {
  return (
    <div className="plan">
      <h1 className="planTitle"> Our Plan </h1>
      <div className="planList">
        {planList.map((planItem, key) => {
          return (
            <PlanItem
              key={key}
              image={planItem.image}
              name={planItem.name}
              Month={planItem.Month} 
              Half_year={planItem.Half_year}
              Year={planItem.Year}
            />            
          );
        })}
      </div>
    </div>
  );
}

export default Plan;
