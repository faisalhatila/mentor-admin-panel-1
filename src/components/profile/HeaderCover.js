import React from "react";
import classes from "./HeaderCover.module.css";
const HeaderCover = () => {
  const socialIcon = [
    "assets/img/profile/facebook.png",
    "assets/img/profile/insta.png",
    "assets/img/profile/linkedin.png",
    "assets/img/profile/whatsapp.png",
    "assets/img/profile/twitter.png",
  ];
  return (
    <div className={classes.headerCoverMainDiv}>
      <div className={classes.headerCoverImageDiv}>
        <div className="d-flex p-3 justify-content-end">
          <i
            class={[`fas`, `fa-camera`, classes.headerCoverCameraIcon].join(
              " "
            )}
          ></i>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div
          className={[`d-flex`, `flex-column`, classes.userInfoDiv].join(" ")}
        >
          <img
            alt="Avatar"
            src="assets/img/profile/avatar.jpg"
            className={classes.avatar}
          />
          <h2
            className={[`noMarginBottom`, `mt-2`, classes.profileTitle].join(
              " "
            )}
          >
            Chris Hemsworth
          </h2>
          <label className={[`noMarginBottom`, classes.profileEmail].join(" ")}>
            Email : chrishems@admin
          </label>
          <label className={[`noMarginBottom`, classes.profileEmail].join(" ")}>
            Location : Australia
          </label>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="d-flex justify-content-end">
            <label
              className={[
                `noMarginBottom`,
                `text-center`,
                classes.headerCoverAboutButton,
              ].join(" ")}
            >
              About
            </label>
            <select
              className={[
                `text-center`,
                `ml-3`,
                classes.headerCoverSelectOption,
              ].join(" ")}
            >
              <option selected disabled>
                More
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="d-flex flex-column align-items-end mt-4">
            <label
              className={[`noMarginBottom`, classes.earningKeyLabel].join(" ")}
            >
              Total Earnings
            </label>
            <label
              className={[`noMarginBottom`, classes.earningValue].join(" ")}
            >
              $5000.00
            </label>
          </div>
          <div className="d-flex flex-column align-items-end mt-4">
            <label
              className={[`noMarginBottom`, classes.memberSinceKeyLabel].join(
                " "
              )}
            >
              Member Since
            </label>
            <label
              className={[`noMarginBottom`, classes.memberSinceValue].join(" ")}
            >
              01 Jan 2020
            </label>
          </div>
          <div className="d-flex justify-content-end">
            {socialIcon.map((icon, i) => (
              <img
                alt="socialIcon"
                src={icon}
                key={i}
                className={[`ml-2`, classes.socialIcon].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCover;
