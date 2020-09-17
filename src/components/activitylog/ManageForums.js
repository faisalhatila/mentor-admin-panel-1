import React from "react";
import classes from "./ManageForums.module.css";

const ManageForums = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Manage Forums
      </h4>
      <table className={classes.managePstsTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "350px" }}
              className="pt-2 pb-3"
            >
              Topics
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "300px" }}
              className="pt-2 pb-3"
            >
              Category
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "250px" }}
              className="pt-2 pb-3"
            >
              Author
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "200px" }}
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
                className={[`whiteBack`, classes.managePostsTableRow].join(" ")}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <p
                    className={[`noMarginBottom`, classes.topicsText].join(" ")}
                  >
                    ipsum anim cras <br />
                    consequat ulputate turpis,
                  </p>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Enginerring
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  ipsum anim cra
                </td>

                <td style={{ fontSize: "12px", flex: 3 }}>
                  <div className="d-flex justify-content-between">
                    <label
                      className={[
                        `mr-2`,
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableRescheduleButton,
                      ].join(" ")}
                    >
                      Edit
                    </label>
                    <label
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

export default ManageForums;
