import React, { useState } from "react";
import classes from "./PaymentGateway.module.css";
const PaymentGateway = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [gateWayName, setGateWayName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [restKey, setRestKey] = useState("");
  return (
    <div className={[classes.paymentGatewayMainDiv].join(" ")}>
      <div className={[`d-flex`, classes.formTitleDiv].join(" ")}>
        <label className={[`noMarginBottom`, classes.formTitle].join(" ")}>
          General
        </label>
      </div>
      <div className={[`pb-5`, classes.formDiv].join(" ")}>
        <label
          className={[`noMarginBottom`, classes.paymentGatewayFormLabel].join(
            " "
          )}
        >
          Stripe
        </label>
        <div className="d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label
              className={[
                `form-check-label`,
                `mr-3`,
                classes.settingsFormLabel,
              ].join(" ")}
              for="exampleRadios1"
            >
              Sandbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label
              className={[`form-check-label`, classes.settingsFormLabel].join(
                " "
              )}
              for="exampleRadios2"
            >
              Live
            </label>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              classes.settingsFormLabel,
            ].join(" ")}
          >
            Gateway Name
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          />
        </div>
        <div className="d-flex flex-column mt-3">
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              classes.settingsFormLabel,
            ].join(" ")}
          >
            API Key
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          />
        </div>
        <div className="d-flex flex-column mt-3">
          <label
            className={[
              `noMarginBottom`,
              `pb-1`,
              classes.settingsFormLabel,
            ].join(" ")}
          >
            Rest Key
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          />
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
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              classes.paymentGatewayActionButton,
            ].join(" ")}
          >
            Cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
