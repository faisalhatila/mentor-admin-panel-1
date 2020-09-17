import React from "react";
import MentorsFilter from "./MentorsFilter";
import classes from "./MentorsTable.module.css";

const MentorsTable = () => {
  return (
    <div>
      <MentorsFilter />
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3 mt-3">
        My Mentors
      </h4>
      <table className={classes.menteesListTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Mentor Name
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Course
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Member Since
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Earn
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Acount Status
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.menteesListTableRow].join(" ")}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <div className="">
                    <img
                      alt="user"
                      src="assets/img/dashboard/userAvatar.png"
                      style={{ maxWidth: "28px", borderRadius: "50%" }}
                      className="mr-2"
                    />
                    <label className="noMarginBottom">Larry Guerrero</label>
                  </div>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Mechanical
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  14 Jan 2020
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $1000.00
                </td>
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <label className={classes.switch}>
                    <input type="checkbox" />
                    <span
                      className={[classes.slider, classes.round].join(" ")}
                    ></span>
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MentorsTable;
