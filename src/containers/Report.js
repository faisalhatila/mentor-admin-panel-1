import React from "react";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import InvoiceReportTable from "../components/report/InvoiceReportTable";

const Report = (props) => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu path={props.match.path} />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom mainCoverHeading">Report</h3>
          <label className="noMarginBottom mainCoverSubHeading">
            Dashboard / Invoice Report
          </label>{" "}
          <div className="mt-4">
            <InvoiceReportTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
