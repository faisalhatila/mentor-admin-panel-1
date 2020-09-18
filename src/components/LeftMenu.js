import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LeftMenu.module.css";

const LeftMenu = (props) => {
  const handleActiveNav = (nav) => {
    setActiveNav(nav);
    console.log(activeNav);
    console.log("##################################");
    console.log(nav);
    console.log("##################################");
  };
  const [activeNav, setActiveNav] = useState(0);
  const menuItem = [
    {
      id: 0,
      title: "Dashboard",
      image: "assets/img/leftMenu/icons/dashboard.svg",
      imageHvr: "assets/img/leftMenu/icons/dashboardHvr.svg",
      link: "/",
    },
    // {
    //   id: 0,
    //   title: "Profile",
    //   image: "assets/img/leftMenu/icons/mentees.svg",
    //   imageHvr: "assets/img/leftMenu/icons/menteesHvr.svg",
    //   link: "/profile",
    // },
    {
      id: 1,
      title: "Mentor",
      image: "assets/img/leftMenu/icons/mentor.svg",
      imageHvr: "assets/img/leftMenu/icons/mentorHvr.svg",
      link: "/mentor-list",
    },
    {
      id: 2,
      title: "Mentee",
      image: "assets/img/leftMenu/icons/mentee.svg",
      imageHvr: "assets/img/leftMenu/icons/menteeHvr.svg",
      link: "/mentees-list",
    },
    {
      id: 3,
      title: "Booking List",
      image: "assets/img/leftMenu/icons/booking.svg",
      imageHvr: "assets/img/leftMenu/icons/bookingHvr.svg",
      link: "/booking-list",
    },
    {
      id: 4,
      title: "Categories",
      image: "assets/img/leftMenu/icons/categories.svg",
      imageHvr: "assets/img/leftMenu/icons/categoriesHvr.svg",
      link: "/categories",
    },
    {
      id: 5,
      title: "Transactions",
      image: "assets/img/leftMenu/icons/transactions.svg",
      imageHvr: "assets/img/leftMenu/icons/transactionsHvr.svg",
      link: "/transactions",
    },
    {
      id: 6,
      title: "Settings",
      image: "assets/img/leftMenu/icons/settings.svg",
      imageHvr: "assets/img/leftMenu/icons/settingsHvr.svg",
      link: "/settings",
    },
    {
      id: 7,
      title: "Report",
      image: "assets/img/leftMenu/icons/report.svg",
      imageHvr: "assets/img/leftMenu/icons/reportHvr.svg",
      link: "/report",
    },
  ];
  return (
    <div className={[`mt-5`, `col`, classes.leftMenuMainDiv].join(" ")}>
      <div className={`pt-5`}>
        {menuItem.map((item, i) => {
          return (
            <Link
              onClick={() => handleActiveNav(item.id)}
              onMouseEnter={() => handleActiveNav(item.id)}
              style={{ color: "#7B7A66" }}
              to={item.link}
              key={i}
            >
              <div
                className={[`d-flex`, `mt-4`, classes.navLinksDiv].join(" ")}
                onClick={() => handleActiveNav(item.id)}
              >
                <span
                  className={
                    item.id === activeNav
                      ? classes.leftSpanFullWidth
                      : classes.leftSpan
                  }
                ></span>
                <div style={{ zIndex: 100 }}>
                  <img
                    alt={item.title}
                    src={item.id === activeNav ? item.imageHvr : item.image}
                    className=" ml-5"
                    style={{ maxWidth: "15px" }}
                  />
                  <label
                    className={`ml-4 noMarginBottom ${
                      item.id === activeNav ? `whiteFont` : null
                    }`}
                  >
                    {/* <Link style={{ color: "#7B7A66" }} to={item.link}> */}
                    {item.title}
                    {/* </Link> */}
                  </label>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMenu;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import classes from "./LeftMenu.module.css";

// export default class LeftMenu extends Component {
//   state = {
//     activeNav: "Dashboard",
//     menuItem: [
//       {
//         id: 0,
//         title: "Dashboard",
//         image: "assets/img/leftMenu/icons/dashboard.svg",
//         imageHvr: "assets/img/leftMenu/icons/dashboardHvr.svg",
//         link: "/",
//       },
//       // {
//       //   id: 0,
//       //   title: "Profile",
//       //   image: "assets/img/leftMenu/icons/mentees.svg",
//       //   imageHvr: "assets/img/leftMenu/icons/menteesHvr.svg",
//       //   link: "/profile",
//       // },
//       {
//         id: 1,
//         title: "Mentor",
//         image: "assets/img/leftMenu/icons/mentor.svg",
//         imageHvr: "assets/img/leftMenu/icons/mentorHvr.svg",
//         link: "/mentor-list",
//       },
//       {
//         id: 2,
//         title: "Mentee",
//         image: "assets/img/leftMenu/icons/mentee.svg",
//         imageHvr: "assets/img/leftMenu/icons/menteeHvr.svg",
//         link: "/mentees-list",
//       },
//       {
//         id: 3,
//         title: "Booking List",
//         image: "assets/img/leftMenu/icons/booking.svg",
//         imageHvr: "assets/img/leftMenu/icons/bookingHvr.svg",
//         link: "/booking-list",
//       },
//       {
//         id: 4,
//         title: "Categories",
//         image: "assets/img/leftMenu/icons/categories.svg",
//         imageHvr: "assets/img/leftMenu/icons/categoriesHvr.svg",
//         link: "/categories",
//       },
//       {
//         id: 5,
//         title: "Transactions",
//         image: "assets/img/leftMenu/icons/transactions.svg",
//         imageHvr: "assets/img/leftMenu/icons/transactionsHvr.svg",
//         link: "/transactions",
//       },
//       {
//         id: 6,
//         title: "Settings",
//         image: "assets/img/leftMenu/icons/settings.svg",
//         imageHvr: "assets/img/leftMenu/icons/settingsHvr.svg",
//         link: "/settings",
//       },
//       {
//         id: 7,
//         title: "Report",
//         image: "assets/img/leftMenu/icons/report.svg",
//         imageHvr: "assets/img/leftMenu/icons/reportHvr.svg",
//         link: "/report",
//       },
//     ],
//   };
//   render() {
//     const handleActiveNav = (nav) => {
//       this.setState({
//         activeNav: nav,
//       });
//       // this.setState((prevState) => {
//       //   return {
//       //     activeNav: nav,
//       //   };
//       // });

//       console.log(this.state.activeNav);
//       console.log("##################################");
//       console.log(nav);
//       console.log("##################################");
//     };
//     const { menuItem, activeNav } = this.state;
//     return (
//       <div className={[`mt-5`, `col`, classes.leftMenuMainDiv].join(" ")}>
//         <div className={`pt-5`}>
//           {menuItem.map((item, i) => {
//             return (
//               <Link
//                 onClick={() => handleActiveNav(item.title)}
//                 style={{ color: "#7B7A66" }}
//                 to={item.link}
//                 key={i}
//               >
//                 <div
//                   className={[`d-flex`, `mt-4`, classes.navLinksDiv].join(" ")}
//                   onClick={() => handleActiveNav(item.title)}
//                 >
//                   <span
//                     className={
//                       item.title === activeNav
//                         ? classes.leftSpanFullWidth
//                         : classes.leftSpan
//                     }
//                   ></span>
//                   <div style={{ zIndex: 100 }}>
//                     <img
//                       alt={item.title}
//                       src={
//                         item.title === activeNav ? item.imageHvr : item.image
//                       }
//                       className=" ml-5"
//                       style={{ maxWidth: "15px" }}
//                     />
//                     <label className={`ml-4 noMarginBottom`}>
//                       {/* <Link style={{ color: "#7B7A66" }} to={item.link}> */}
//                       {item.title}
//                       {/* </Link> */}
//                     </label>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
