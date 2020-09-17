import React from "react";
import Invoices from "../components/dashboard/Invoices";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import ServicesTable from "../components/services/ServicesTable";

const Services = () => {
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom">Welcome Mentor</h3>
          <h3 className="noMarginBottom">Dashboard / Service</h3>
          <div className="mt-4">
            <ServicesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
