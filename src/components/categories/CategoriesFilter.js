import React from "react";
import classes from "./CategoriesFilter.module.css";

const CategoriesFilter = (props) => {
  return (
    <div className="d-flex justify-content-between whiteBack p-4">
      <div className="d-flex align-items-center">
        <label className="noMarginBottom mr-3" style={{ fontSize: "20px" }}>
          Filter
        </label>
        <div className={classes.searchDiv}>
          <input
            type="text"
            placeholder="All Courses"
            className={classes.searchInput}
          />
          <i
            className={[
              `fas fa-chevron-right`,
              classes.fitlerSearchRightIcon,
            ].join(" ")}
          ></i>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <label className="noMarginBottom mr-3" style={{ fontSize: "20px" }}>
          Show
        </label>
        <div>
          <select className={[`mr-3`, classes.selectDropdown].join(" ")}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
        </div>
        <label className="noMarginBottom" style={{ fontSize: "20px" }}>
          Entries
        </label>
      </div>
    </div>
  );
};

export default CategoriesFilter;
