import React from "react";
import ManageForums from "../components/activitylog/ManageForums";
import ManagePosts from "../components/activitylog/ManagePosts";
import Invoices from "../components/dashboard/Invoices";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";

const ActivityLog = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Activity Log</h3>
          <h3 className="noMarginBottom">Dashboard / Activity Log</h3>
          {/* <div className="row justify-content-between mt-4">
            {[...Array(3)].map((i) => {
              return <TopCard />;
            })}
          </div> */}
          <div className="mt-4">
            <ManagePosts />
          </div>
          <div className="mt-4">
            <ManageForums />
          </div>
          {/* <div className="mt-4">
            <Invoices />
          </div> */}
        </div>
      </div>
      {/* <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Report</h3>
          <h3 className="noMarginBottom">Dashboard / Invoice Report</h3>
          <div className="mt-4">
            <InvoiceReportTable />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ActivityLog;
