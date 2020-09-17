import React from "react";
import classes from "./ProfileBody.module.css";
const ProfileBody = () => {
  return (
    <div className={classes.profileBodyMainDiv}>
      <div className={[`mt-4`, `p-4`, classes.aboutDiv].join(" ")}>
        <h4 className={[`noMarginBottom`, classes.aboutHeading].join(" ")}>
          About
        </h4>
        <p className={[`noMarginBottom`, `pt-2`, classes.aboutPara].join(" ")}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        </p>
      </div>
      <div className={[`mt-4`, classes.experienceHeadingDiv].join(" ")}>
        <div
          className={[
            `d-flex`,
            `justify-content-between`,
            `align-items-center`,
            classes.experienceDivTitleDiv,
          ].join(" ")}
        >
          <h4
            className={[
              `noMarginBottom`,
              `pl-4`,
              `pt-4`,
              `pb-2`,
              classes.aboutHeading,
            ].join(" ")}
          >
            Experience
          </h4>
          <label
            className={[
              `noMarginBottom`,
              `pr-4`,
              `pt-4`,
              `pb-2`,
              classes.aboutHeading,
            ].join(" ")}
          >
            <i className={[`fas`, ` fa-plus`, classes.addIcon].join(" ")}></i>
          </label>
        </div>
        <div className="p-4">
          {[...Array(3)].map((i) => {
            return (
              <div
                className={[
                  `d-flex`,
                  ` justify-content-between`,
                  ` mb-4`,
                  `align-items-center`,
                  classes.experienceIndividualMainDiv,
                ].join(" ")}
                key={i}
              >
                <div className="d-flex flex-column">
                  <h3
                    className={[
                      `noMarginBottom`,
                      classes.experienceIndividualHeading,
                    ].join(" ")}
                  >
                    Experience 1
                  </h3>
                  <p
                    className={[
                      `noMarginBottom`,
                      classes.experienceIndividualDetail,
                    ].join(" ")}
                  >
                    Experience 1 Lorem ipsum dolor sit amet, consetetur
                    <br /> sadipscing elitr, sed diam nonumy eirmod <br />
                    tempor invidunt ut labore et dolore
                  </p>
                </div>
                <div
                  className={[
                    `d-flex`,
                    classes.experienceIndividualActions,
                  ].join(" ")}
                >
                  <i
                    className={[
                      `fas`,
                      `fa-pencil-alt`,
                      `mr-2`,
                      classes.editIcon,
                    ].join(" ")}
                  ></i>
                  <i
                    className={[`fas`, `fa-trash`, classes.deleteIcon].join(
                      " "
                    )}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={[`mt-4`, classes.experienceHeadingDiv].join(" ")}>
        <div
          className={[
            `d-flex`,
            `justify-content-between`,
            `align-items-center`,
            classes.experienceDivTitleDiv,
          ].join(" ")}
        >
          <h4
            className={[
              `noMarginBottom`,
              `pl-4`,
              `pt-4`,
              `pb-2`,
              classes.aboutHeading,
            ].join(" ")}
          >
            Resume
          </h4>
        </div>
        <div className="p-4 d-flex justify-content-center">
          <label
            className={[
              `noMarginBottom`,
              `text-center`,
              classes.createResumeButton,
            ].join(" ")}
          >
            Create Resume
          </label>
        </div>
      </div>
      <div className={[`mt-4`, classes.experienceHeadingDiv].join(" ")}>
        <div
          className={[
            `d-flex`,
            `justify-content-between`,
            `align-items-center`,
            classes.experienceDivTitleDiv,
          ].join(" ")}
        >
          <h4
            className={[
              `noMarginBottom`,
              `pl-4`,
              `pt-4`,
              `pb-2`,
              classes.aboutHeading,
            ].join(" ")}
          >
            Hobbies & Interest
          </h4>
        </div>
        <div className="p-4 d-flex flex-column">
          <div className={classes.hobbiesTable}>
            <h4>Hobbies</h4>
            <table>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                  <td style={{ minWidth: "150px" }}>Hobbies</td>
                </tr>
                <tr>
                  <td>Hobbies</td>
                  <td>Hobbies</td>
                  <td>Hobbies</td>
                  <td>Hobbies</td>
                  <td>Hobbies</td>
                  <td>Hobbies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={[`mt-4`, classes.interestsTable].join(" ")}>
            <h4>Interests</h4>
            <table>
              <tbody>
                <tr>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                </tr>
                <tr>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                  <td style={{ minWidth: "150px" }}>Interest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
