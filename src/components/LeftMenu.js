import React from "react";
import classes from "./LeftMenu.module.css";

const LeftMenu = (props) => {
  const menuItem = [
    {
      id: 0,
      title: "Dashboard",
      image: "assets/img/leftMenu/mentees.png",
    },
    {
      id: 2,
      title: "Mentor",
      image: "assets/img/leftMenu/report.png",
    },
    {
      id: 2,
      title: "Mentee",
      image: "assets/img/leftMenu/report.png",
    },
    {
      id: 3,
      title: "Booking List",
      image: "assets/img/leftMenu/services.png",
    },
    {
      id: 4,
      title: "Categories",
      image: "assets/img/leftMenu/mentees.png",
    },
    {
      id: 5,
      title: "Transactions",
      image: "assets/img/leftMenu/report.png",
    },
    {
      id: 6,
      title: "Settings",
      image: "assets/img/leftMenu/services.png",
    },
    {
      id: 7,
      title: "Report",
      image: "assets/img/leftMenu/services.png",
    },
  ];
  return (
    <div className={[`mt-5`, `col`, classes.leftMenuMainDiv].join(" ")}>
      <div className={`pt-5`}>
        {menuItem.map((item, i) => {
          return (
            <div className="d-flex mt-4" key={i}>
              <span className={classes.leftSpan}></span>
              <div>
                <img alt={item.title} src={item.image} className=" ml-5" />
                <label className={`ml-4 noMarginBottom`}>{item.title}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMenu;
