import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default class Navbar extends Component {
  state = {
    mobileNav: false,
    currentPage: "/",
  };
  handleSearchIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.add("d-none");
    document.getElementById("mobileNavHeader2").classList.add("d-none");
    document.getElementById("searchBarContainer").classList.remove("d-none");
  };
  handleCloseIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.remove("d-none");
    document.getElementById("mobileNavHeader2").classList.remove("d-none");
    document.getElementById("searchBarContainer").classList.add("d-none");
  };
  handleClick = () => {
    if (!this.state.mobileNav) {
      this.setState({
        mobileNav: true,
      });
      document.body.classList.add("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.remove("d-none");
      document.getElementById("mobile-body-overlay").classList.add("d-block");
      document.getElementById("toggleButton").classList.remove("fa-bars");
      document.getElementById("toggleButton").classList.add("fa-times");
    } else {
      this.setState({
        mobileNav: false,
      });
      document.body.classList.remove("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.add("d-none");
      document
        .getElementById("mobile-body-overlay")
        .classList.remove("d-block");
      document.getElementById("toggleButton").classList.add("fa-bars");
      document.getElementById("toggleButton").classList.remove("fa-times");
    }
  };
  render() {
    return (
      <div className="container-fluid myContainer">
        <div
          id="navBarThirdRow"
          className="align-items-center navbarThirdRow row justify-content-between"
        >
          <div
            id="mobileNavHeader1"
            className="navbarThirdRowCol1 col-11 col-lg-2 pl-lg-0 pt-3"
          >
            {/* <h3 className="noMargin logoText">COLDCREW</h3> */}
            <img alt="Logo" src="assets/img/logo/logo.png" />
          </div>
          <div id="mobileNavHeader2" className="col-6 d-lg-none p-0">
            <div className="row justify-content-end pr-2 align-items-center">
              <button
                type="button"
                onClick={this.handleClick}
                id="mobile-nav-toggle"
                style={{ border: "none", background: "transparent" }}
              >
                <i
                  id="toggleButton"
                  className="fa fa-bars"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    transform: "translateY(2px)",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="navbarThirdRowCol2">
            <div
              id="mobile-body-overlay"
              className="d-none"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "997",
                top: 0,
                left: 0,
                position: "fixed",
                background: "rgba(0, 0, 0, 0.7)",
              }}
            />
            <div className="d-flex flex-column pt-3">
              <div className="pt-2 pb-0 pb-md-4">
                <nav id="nav-menu-container">
                  <ul class="nav-menu">
                    <li class="navbarItems">
                      <Link to="/">
                        <i class="fas fa-globe"></i>
                      </Link>
                    </li>
                    <li className="navbarItems">
                      <Link to="/">
                        <i class="far fa-envelope"></i>
                      </Link>
                    </li>
                    <li className="navbarItems">
                      <Link to="/">
                        <i class="fas fa-bell"></i>
                      </Link>
                    </li>
                    <li className="navbarItems">
                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <p
                            className={`noMarginBottom whiteFont ${classes.userTitle}`}
                          >
                            Allen Davis
                          </p>
                          <label
                            className={`noMarginBottom whiteFont ${classes.userTitleDesc}`}
                          >
                            Mentor
                          </label>
                        </div>
                        <img
                          alt="avatar"
                          src="assets/img/adminAvatar1.png"
                          className={`ml-3 mr-3 ${classes.userAvatar}`}
                        />
                        <i class="fas fa-sort-down whiteFont"></i>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>{" "}
            <nav id="mobile-nav">
              <ul className="" style={{ touchAction: "pan-y" }}>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Professionals</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                {/* <li>
                  <Link to="/cart">
                    My Cart
                    <i class="fas fa-shopping-bag pl-2 redFont" />
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
