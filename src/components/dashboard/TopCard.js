import React from "react";
import classes from "./TopCard.module.css";

const TopCard = (props) => {
  return (
    <div className="col">
      <div
        className={[
          `d-flex`,
          `col-12`,
          //   `col-md-4`,
          `justify-content-between`,
          `align-items-center`,
          `whiteBack`,
          classes.dashboardTopCardMainDiv,
        ].join(" ")}
      >
        <div
          className={[
            `d-flex`,
            `flex-column`,
            classes.dashboardContentCard,
          ].join(" ")}
        >
          <label className={[`noMarginBottom`, classes.topCardLabel].join(" ")}>
            Mentees
          </label>
          <label className={[`noMarginBottom`, classes.topCardLabel].join(" ")}>
            100
          </label>
          <label className={[`noMarginBottom`, classes.topCardLabel].join(" ")}>
            <span>+3.48%</span> Since last month
          </label>
        </div>
        <div>
          <i class={[`fas`, `fa-users`, classes.cardIcon].join(" ")}></i>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
