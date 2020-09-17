import React from "react";
import Star from "../Star";
import classes from "./ListOfCategories.module.css";

const ListOfCategories = (props) => {
  return (
    <div className="col-6">
      <h4 style={{ fontSize: "16px" }} className="whiteBack p-3">
        List Of Categories
      </h4>
      <table className={classes.UpComingWebinarsTable}>
        <thead>
          <tr className="">
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
              Service
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
                className={[`whiteBack`, classes.UpComingWebinarsTableRow].join(
                  " "
                )}
              >
                <td style={{ fontSize: "12px" }} className="mr-5">
                  <div className="">
                    <label className="noMarginBottom">Mechanical</label>
                  </div>
                </td>
                <td style={{ fontSize: "12px" }} className="mr-5">
                  Engineering
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

export default ListOfCategories;
