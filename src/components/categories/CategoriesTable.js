import React from "react";
import classes from "./CategoriesTable.module.css";
import CategoriesFilter from "./CategoriesFilter";
import Star from "../Star";

const CategoriesTable = () => {
  return (
    <div>
      <CategoriesFilter />
      <table className={classes.bookingListTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              #
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Category
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Date
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Reviews
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i, j) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.bookingListTableRow].join(" ")}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  {j}
                </td>
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
                  14 Jan 2020
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <Star />
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
                      Edit
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
                      Delete
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

export default CategoriesTable;
