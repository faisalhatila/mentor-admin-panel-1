import React, { Component } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.loginMainContainer}>
      <div className="d-flex">
        <div
          className={[
            `d-flex`,
            `justify-content-end`,
            classes.loginLeftContainer,
          ].join(" ")}
        >
          <h1 className="whiteFont mt-3 mr-3">Login</h1>
        </div>
        <div
          className={`d-flex align-items-center ${classes.loginRightContainer}`}
          style={{
            backgroundImage: "url(assets/img/loginBackGroundDummy.jpg)",
          }}
        >
          <div className={`col-12 col-md-5 ${classes.loginFormMainDiv}`}>
            <h3
              className="noMarginBottom blackFont pt-5 text-center"
              style={{ fontSize: "20px" }}
            >
              Log in to your account
            </h3>
            <p
              className="noMarginBottom blackFont text-center"
              style={{ fontSize: "12px", color: "#888" }}
            >
              Access to our dashboard
            </p>
            <form className={`pr-3 pl-3 ${classes.loginForm}`}>
              <div className="d-flex flex-column mt-3">
                <label className="noMarginBottom blackFont">Email</label>
                <input
                  type="text"
                  className={classes.loginFormInput}
                  placeholder="email"
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <label className="noMarginBottom blackFont">Password</label>
                <input
                  type="text"
                  className={classes.loginFormInput}
                  placeholder="password"
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className={classes.loginSubmitButton}>
                  Login
                </button>
              </div>
              <div
                className="d-flex justify-content-center blackFont"
                style={{ fontSize: "13px" }}
              >
                <label className="noMarginBottom mt-3">Forgot Password?</label>
              </div>
              <div
                className="d-flex justify-content-center blackFont"
                style={{ fontSize: "13px" }}
              >
                <label className="noMarginBottom mt-3">Login with</label>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <i
                  class={`fab fa-facebook-f mr-3 ${classes.loginFacebookButton}`}
                ></i>
                <i class={`fab fa-google ${classes.loginGoogleButton}`}></i>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <label className="blackFont" style={{ fontSize: "13px" }}>
                  Don't you have account?
                  <span className={classes.loginFormRegisterButton}>
                    Register
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
