import React from "react";
import classes from "./ListOfWebinars.module.css";

const ListOfWebinars = (props) => {
  return (
    <div className="col-6">
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        List Of Webinars
      </h4>
      <table className={classes.listOfWebinarsTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Webinar
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Service
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Schedule Time
            </td>
            {/* <td
              style={{ fontSize: "11px", minWidth: "100px" }}
              className="pt-2 pb-3"
            >
              Paid
            </td> */}
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.listOfWebinarsTableRow].join(
                  " "
                )}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <div className="">
                    {/* <img
                      alt="user"
                      src="assets/img/dashboard/userAvatar.png"
                      style={{ maxWidth: "28px", borderRadius: "50%" }}
                      className="mr-2"
                    /> */}
                    <label className="noMarginBottom">Physics</label>
                  </div>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Teaching
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  01/08/2020 6:00 pm
                </td>
                {/* <td style={{ fontSize: "12px" }} className="mr-5">
                  $100
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfWebinars;
