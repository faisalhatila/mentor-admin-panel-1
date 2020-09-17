import React from "react";
import classes from "./BookingTable.module.css";
import BookingFilter from "./BookingFilter";

const BookingTable = () => {
  return (
    <div>
      <BookingFilter />
      <table className={classes.bookingListTable}>
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
              Mentee Name
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Booking Time
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Status
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Amount
            </td>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.bookingListTableRow].join(" ")}
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
                  <div className="d-flex flex-column">
                    <label className="noMarginBottom">14 Jan 2020</label>
                    <label
                      className={[`noMarginBottom`, classes.bookingTime].join(
                        " "
                      )}
                    >
                      11:00 AM - 11:15 AM
                    </label>
                  </div>
                </td>
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <label className={classes.switch}>
                    <input type="checkbox" />
                    <span
                      className={[classes.slider, classes.round].join(" ")}
                    ></span>
                  </label>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  $1000.00
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
