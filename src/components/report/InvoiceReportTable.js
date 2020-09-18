import React from "react";
import classes from "./InvoiceReportTable.module.css";
const InvoiceReportTable = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        Invoices
      </h4>
      <table className={classes.invoiceReportTable}>
        <thead>
          <tr className="">
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Invoice
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
              Mentee
            </td>
            <td
              style={{ fontSize: "11px", minWidth: "150px" }}
              className="pt-2 pb-3"
            >
              Amount
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
          {[...Array(6)].map((i) => {
            return (
              <tr
                style={{ height: "50px" }}
                className={[`whiteBack`, classes.invoiceReportTableRow].join(
                  " "
                )}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  INV001
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
                </td>{" "}
                <td style={{ fontSize: "12px", flex: 3 }}>
                  <div className="d-flex">
                    <label
                      className={[
                        `mr-2`,
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableRescheduleButton,
                      ].join(" ")}
                      // style={{ flex: 80 }}
                    >
                      Re-Schedule
                    </label>
                    {/* <span style={{ flex: 1 }}></span> */}
                    <label
                      className={[
                        `text-center`,
                        `noMarginBottom`,
                        classes.tableCancelButton,
                      ].join(" ")}
                      // style={{ flex: 80 }}
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

export default InvoiceReportTable;
