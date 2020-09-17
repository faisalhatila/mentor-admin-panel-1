import React from "react";
import Invoices from "../components/dashboard/Invoices";
import TopCard from "../components/dashboard/TopCard";
import UpComingWebinars from "../components/dashboard/UpComingWebinars";
import LeftMenu from "../components/LeftMenu";
import HeaderCover from "../components/profile/HeaderCover";
import ProfileBody from "../components/profile/ProfileBody";

const Profile = (props) => {
  return (
    <div className="profile-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5">
          <div className="mt-4">
            <HeaderCover />
          </div>
          <div className="mt-4">
            <ProfileBody />
          </div>
          {/* <h3 className="noMarginBottom">Welcome Mentor</h3>
          <h3 className="noMarginBottom">Dashboard</h3>
          <div className="row justify-content-between mt-4">
            {[...Array(3)].map((i) => {
              return <TopCard />;
            })}
          </div> */}
          {/* <div className="mt-4">
            <UpComingWebinars />
          </div> */}
          {/* <div className="mt-4">
            <Invoices />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
