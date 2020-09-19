import React, { useState } from "react";
import Invoices from "../components/dashboard/Invoices";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import GeneraLSettingsForm from "../components/settings/GeneraLSettingsForm";
import PaymentGateway from "../components/settings/PaymentGateway";
import SocialLogin from "../components/settings/SocialLogin";
import TabNav from "../components/settings/TabNav";

const Settings = (props) => {
  const [activeSettingTab, setActiveSettingTab] = useState("General Settings");

  const handleActiveSettingTab = (tab) => {
    setActiveSettingTab(tab);
  };
  return (
    <div className="home-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu path={props.match.path} />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <TabNav
            activeSettingTab={activeSettingTab}
            handleActiveSettingTab={handleActiveSettingTab}
          />
          <div className="mt-5">
            <h3 className="noMarginBottom mainCoverHeading">
              {activeSettingTab}
            </h3>
            <label className="noMarginBottom mainCoverSubHeading">
              Dashboard / Setting / {activeSettingTab}
            </label>
          </div>
          {activeSettingTab === "General Settings" ? (
            <div className="mt-4">
              <GeneraLSettingsForm />
            </div>
          ) : activeSettingTab === "Social Login" ? (
            <div className="mt-4">
              <PaymentGateway />
            </div>
          ) : (
            <div className="mt-4">
              <SocialLogin />
            </div>
          )}
          {/* {activeSettingTab === "General Settings" ? (
            <div className="mt-4">
              <GeneraLSettingsForm />
            </div>
          ) : null}
          {activeSettingTab === "Payment Gateway" ? (
            <div className="mt-4">
              <PaymentGateway />
            </div>
          ) : null}
          {activeSettingTab === "Social Login" ? (
            <div className="mt-4">
              <SocialLogin />
            </div>
          ) : null} */}
          {/* <div className="mt-4">
            <GeneraLSettingsForm />
          </div> */}
          {/* <div className="mt-4">
            <PaymentGateway />
          </div> */}

          {/* <div className="mt-4">
            <SocialLogin />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
