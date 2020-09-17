import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomeContainer from "../containers/Home";
import PageNotFound from "../containers/404";
import Route from "./route";
import PvtRoute from "./privateRoute";
import LoginContainer from "../containers/Login";
import Profile from "../containers/Profile";
import MenteesList from "../containers/MenteesList";
import Services from "../containers/Services";
import Report from "../containers/Report";
import ActivityLog from "../containers/ActivityLog";
import Settings from "../containers/Settings";
import AddActivity from "../containers/AddActivity";
import MentorList from "../containers/MentorList";
import BookingList from "../containers/BookingList";
import Categories from "../containers/Categories";
import Transactions from "../containers/Transactions";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/mentor-list" component={MentorList} />
      <Route exact path="/mentees-list" component={MenteesList} />
      <Route exact path="/booking-list" component={BookingList} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/activity-log" component={ActivityLog} />
      <Route exact path="/add-activity-log" component={AddActivity} />
      <Route exact path="/settings" component={Settings} />
      <PvtRoute exact path="/login" component={LoginContainer} />
      <PvtRoute exact path="/login/:id" component={LoginContainer} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
