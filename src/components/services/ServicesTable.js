import React from "react";
import classes from "./ServicesTable.module.css";
const ServicesTable = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Services Request
      </h4>
      <table className={classes.servicesTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Mentee Name
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "130px" }}
              className="pt-2 pb-3"
            >
              Course
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "130px" }}
              className="pt-2 pb-3"
            >
              Category
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Amount
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Time Frame
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Time
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.servicessTableRow].join(" ")}
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
                  Enginerring
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $1000.00
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  4 Sep 2020
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <label
                    className={[
                      `noMarginBottom`,
                      classes.servicesScheduleButton,
                    ].join(" ")}
                  >
                    Schedule
                  </label>
                </td>
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <div className="d-flex justify-content-between">
                    <label
                      style={{ flex: 10 }}
                      className={[
                        `mr-2`,
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableRescheduleButton,
                      ].join(" ")}
                    >
                      Accept
                    </label>
                    <span className={{ flex: 1 }}></span>
                    <label
                      style={{ flex: 10 }}
                      className={[
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableCancelButton,
                      ].join(" ")}
                    >
                      Cancel
                    </label>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
