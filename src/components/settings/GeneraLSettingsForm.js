import React, { useState } from "react";
import classes from "./GeneraLSettingsForm.module.css";
const GeneraLSettingsForm = () => {
  const [websiteName, setWebsiteName] = useState("");
  return (
    <div className={[classes.generalSettingsMainDiv].join(" ")}>
      <div className={[`d-flex`, classes.formTitleDiv].join(" ")}>
        <label className={[`noMarginBottom`, classes.formTitle].join(" ")}>
          General
        </label>
      </div>
      <div className={[`pb-5`, classes.formDiv].join(" ")}>
        <div className="d-flex flex-column">
          <label
            className={[`noMarginBottom`, classes.settingsFormLabel].join(" ")}
          >
            Website Name
          </label>
          <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.websiteNameInput}
          />
        </div>
        <div className="d-flex flex-column mt-4">
          <label
            className={[`noMarginBottom`, classes.settingsFormLabel].join(" ")}
          >
            Website Logo
          </label>
          <input
            type="file"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            // className={classes.websiteNameInput}
            className="d-none"
            id="chooseFile"
          />
          <div className="d-flex align-items-center">
            <label
              for="chooseFile"
              className={[
                `noMarginBottom`,
                `text-center`,
                classes.chooseFileLabel,
              ].join(" ")}
            >
              Choose File
            </label>
            <label
              className="noMarginBotton ml-2"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              no file chosen
            </label>
          </div>
          <div>
            <label
              className="noMarginBotton"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              Recommended image size is 150px x 150px
            </label>
          </div>
        </div>
        <div className="d-flex flex-column mt-4">
          <label
            className={[`noMarginBottom`, classes.settingsFormLabel].join(" ")}
          >
            Favicon
          </label>
          <input
            type="file"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            // className={classes.websiteNameInput}
            className="d-none"
            id="chooseFileFavicon"
          />
          <div className="d-flex align-items-center">
            <label
              for="chooseFileFavicon"
              className={[
                `noMarginBottom`,
                `text-center`,
                classes.chooseFileLabel,
              ].join(" ")}
            >
              Choose File
            </label>
            <label
              className="noMarginBotton ml-2"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              no file chosen
            </label>
          </div>
          <div>
            <label
              className="noMarginBotton"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              Recommended image size is 16px x 16px or 32px x 32px
              <br />
              Accepted formals only png and ico
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneraLSettingsForm;
