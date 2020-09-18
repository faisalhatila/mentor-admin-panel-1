import React from "react";
import classes from "./TransactionsTable.module.css";
import Star from "../Star";
import TransactionsFilter from "./TransactionsFilter";

const TransactionsTable = () => {
  return (
    <div>
      <TransactionsFilter />
      <table className={classes.bookingListTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Invoice No
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              ID
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
              Total Amount
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
                  #IN0001
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  #01
                </td>
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
                  $1000.00
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <i
                    class={[`fas`, `fa-check`, classes.checkMark].join(" ")}
                  ></i>
                </td>
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <div className="d-flex">
                    <label
                      // style={{ flex: 10 }}
                      className={[
                        `mr-2`,
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableRescheduleButton,
                      ].join(" ")}
                    >
                      Edit
                    </label>
                    {/* <span className={{ flex: 1 }}></span> */}
                    <label
                      // style={{ flex: 10 }}
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

export default TransactionsTable;
