import React from "react";
import classes from "./TabNav.module.css";

const TabNav = (props) => {
  const tabs = ["General Settings", "Payment Gateway", "Social Login"];
  return (
    <div className={[`d-flex`, classes.tabDiv].join(" ")}>
      {/* <label
        className={[
          `noMarginBottom`,
          classes.settingsTab,
          classes.activeTab,
        ].join(" ")}
      >
        General Settings
      </label>
      <label className={[`noMarginBottom`, classes.settingsTab].join(" ")}>
        Payment Gateway
      </label>
      <label className={[`noMarginBottom`, classes.settingsTab].join(" ")}>
        Social Login
      </label> */}
      {tabs.map((tab, i) => {
        return (
          <label
            key={i}
            className={`noMarginBottom ${classes.settingsTab} ${
              props.activeSettingTab === tab ? classes.activeTab : null
            }`}
            onClick={() => props.handleActiveSettingTab(tab)}
          >
            {tab}
          </label>
        );
      })}
    </div>
  );
};

export default TabNav;
