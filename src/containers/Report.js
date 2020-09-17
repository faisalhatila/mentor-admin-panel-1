import React from "react";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import InvoiceReportTable from "../components/report/InvoiceReportTable";

const Report = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Report</h3>
          <h3 className="noMarginBottom">Dashboard / Invoice Report</h3>
          <div className="mt-4">
            <InvoiceReportTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
