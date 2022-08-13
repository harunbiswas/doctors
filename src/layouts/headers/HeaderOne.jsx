import { useEffect, useState } from "react";
import logoDark from "../../assets/images/logo-dark.png";
import logo from "../../assets/images/logo-light.png";
import AdminProfile from "../../components/admin/AdminProfile";

export default function HeaderOne() {
  const [isActive, setIsActive] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  };

  const submenuHandler = (e) => {
    if (!e.target.nextSibling) {
      e.target.parentNode.nextSibling.classList.toggle("open");
    } else {
      e.target.nextSibling.classList.toggle("open");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  });

  return (
    <>
      {/* <!-- Navbar STart --> */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${(isActive && "nav-sticky") || ""}`}
      >
        <div className="container-fluid">
          {/* <!-- Logo container--> */}
          <div>
            <a className="logo" href="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="24" alt="" />
                <img src={logoDark} className="l-light" height="24" alt="" />
              </span>
              <img src={logo} height="24" className="logo-dark-mode" alt="" />
            </a>
          </div>
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* <!-- Mobile menu toggle--> */}
              <a
                className={`navbar-toggle ${(isToggle && "open") || ""}`}
                id="isToggle"
                onClick={toggleHandler}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* <!-- End mobile menu toggle--> */}
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          {/* <!-- Start Dropdown --> */}
          <ul className="dropdowns list-inline mb-0">
            <AdminProfile />
          </ul>
          {/* <!-- Start Dropdown --> */}

          <div id="navigation" className={(isToggle && "d-block") || ""}>
            {/* <!-- Navigation Menu-->    */}
            <ul className="navigation-menu nav-left">
              <li className="has-submenu parent-menu-item">
                <a href="/" className="sub-menu-item">
                  Home
                </a>
              </li>
              <li className="has-submenu parent-menu-item">
                <a
                  href="/patient-dashboard/patient-profile"
                  className="sub-menu-item"
                >
                  Profile
                </a>
              </li>{" "}
              <li className="has-submenu parent-menu-item">
                <a
                  href="/patient-dashboard/patient-invoice"
                  className="sub-menu-item"
                >
                  Invoice
                </a>
              </li>{" "}
              <li className="has-submenu parent-menu-item">
                <a
                  href="/patient-dashboard/booking-appointment"
                  className="sub-menu-item"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
            {/* <!--end navigation menu--> */}
          </div>
          {/* <!--end navigation--> */}
        </div>
        {/* <!--end container--> */}
      </header>
    </>
  );
}
