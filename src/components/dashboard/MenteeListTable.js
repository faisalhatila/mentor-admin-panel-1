import React from "react";
import classes from "./MenteeListTable.module.css";

const MenteeListTable = (props) => {
  return (
    <div className="col-6">
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Mentee List
      </h4>
      <table className={classes.UpComingWebinarsTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Mentee Name
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Phone
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Last Visit
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Paid
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.UpComingWebinarsTableRow].join(
                  " "
                )}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <div className="">
                    <img
                      alt="user"
                      src="assets/img/dashboard/userAvatar.png"
                      style={{
                        maxWidth: "38px",
                        borderRadius: "50%",
                        border: "solid 2px #000",
                      }}
                      className="mr-2"
                    />
                    <label className="noMarginBottom">Larry Guerrero</label>
                  </div>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  84562015
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  01/08/2020
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $100
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MenteeListTable;
