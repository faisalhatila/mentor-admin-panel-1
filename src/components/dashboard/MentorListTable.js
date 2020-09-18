import React from "react";
import Star from "../Star";
import classes from "./MentorListTable.module.css";
const MentorListTable = (props) => {
  return (
    <div className="col-6">
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Mentor List
      </h4>
      <table className={classes.mentorListTable}>
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
              Earn
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Reviews
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.mentorListTableRow].join(" ")}
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
                  Physics
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $1000.00
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <Star />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MentorListTable;
