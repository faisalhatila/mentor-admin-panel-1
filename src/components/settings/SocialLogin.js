import React, { useState } from "react";
import classes from "./SocialLogin.module.css";
const SocialLogin = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [gateWayName, setGateWayName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [restKey, setRestKey] = useState("");
  return (
    <div className={[classes.paymentGatewayMainDiv].join(" ")}>
      <div className={[`d-flex`, classes.formTitleDiv].join(" ")}>
        <label className={[`noMarginBottom`, classes.formTitle].join(" ")}>
          Social Login
        </label>
      </div>
      <div className={[`pb-5`, classes.formDiv].join(" ")}>
        <div className="d-flex flex-column mt-3">
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              classes.settingsFormLabel,
            ].join(" ")}
          >
            Facebook App ID
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          />
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              `pt-2`,
              classes.howToLabel,
            ].join(" ")}
          >
            How to create facebook app id
          </label>
        </div>
        <div className="d-flex flex-column mt-3">
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              classes.settingsFormLabel,
            ].join(" ")}
          >
            Google Client ID
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          />
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              `pt-2`,
              classes.howToLabel,
            ].join(" ")}
          >
            How to create facebook app id
          </label>
        </div>

        <div className="d-flex mt-4">
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              `mr-2`,
              classes.paymentGatewayActionButton,
            ].join(" ")}
          >
            Save Changes
          </label>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
