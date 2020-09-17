import React, { useState } from "react";
import classes from "./AddActivityLogForm.module.css";

const AddActivityLogForm = () => {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className={[classes.activityLogFormMainDiv].join(" ")}>
      <div className={[`d-flex`, classes.formTitleDiv].join(" ")}>
        <label className={[`noMarginBottom`, classes.formTitle].join(" ")}>
          Edit Post
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
            Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
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
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
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
            Description
          </label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className={classes.descriptionTextArea}
            rows="4"
          ></textarea>
          {/* <input
            type="text"
            value={websiteName}
            onChange={(event) => setWebsiteName(event.target.value)}
            className={classes.formInput}
          /> */}
        </div>
        <div className="d-flex mt-4">
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              `mr-2`,
              classes.activityLogActionButton,
            ].join(" ")}
          >
            Save Changes
          </label>
        </div>
        <div className="d-flex flex-column mt-4">
          <label
            className={[`noMarginBottom`, classes.settingsFormLabel].join(" ")}
          >
            File Upload
          </label>
          <input type="file" className="d-none" id="chooseFile" />
          <div className="d-flex align-items-center">
            <label
              for="chooseFile"
              className={[
                `noMarginBottom`,
                `text-center`,
                `mt-2`,
                classes.chooseFileLabel,
              ].join(" ")}
            >
              Upload
            </label>
            <label
              className="noMarginBottom ml-2"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              no file chosen
            </label>
          </div>
          <div>
            <label
              className="noMarginBottom"
              style={{ fontSize: "10px", color: "#ccc" }}
            >
              Recommended image size is 1280px x 800px
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <label className={classes.activityLogSaveButton}>Save</label>
        </div>
      </div>
    </div>
  );
};

export default AddActivityLogForm;
