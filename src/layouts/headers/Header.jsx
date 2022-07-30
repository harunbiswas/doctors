import { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import logo from "../../assets/images/logo-light.png";

export default function Header() {
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
        <div className="container">
          {/* <!-- Logo container--> */}
          <div>
            <a className="logo" href="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="24" alt="" />
                <img src={logo} className="l-light" height="24" alt="" />
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
            <li className="list-inline-item mb-0">
              <a
                href="javascript:void(0)"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <div className="btn btn-icon btn-pills btn-primary">
                  <i data-feather="settings" className="fea icon-sm">
                    <AiOutlineSetting />
                  </i>
                </div>
              </a>
            </li>

            <li className="list-inline-item mb-0 ms-1">
              <a
                href="javascript:void(0)"
                className="btn btn-icon btn-pills btn-primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <i className="uil uil-search"></i>
              </a>
            </li>
          </ul>
          {/* <!-- Start Dropdown --> */}

          <div id="navigation" className={(isToggle && "d-block") || ""}>
            {/* <!-- Navigation Menu-->    */}
            <ul className="navigation-menu nav-left nav-light">
              <li className="has-submenu parent-menu-item">
                <Link to="/" className="sub-menu-item">
                  Home
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a onClick={(e) => submenuHandler(e)} href="/doctors">
                  Doctors <span className="menu-arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="doctor-dashboard " className="sub-menu-item">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-appointment " className="sub-menu-item">
                      Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="patient-list " className="sub-menu-item">
                      Patients
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-schedule " className="sub-menu-item">
                      Schedule Timing
                    </Link>
                  </li>
                  <li>
                    <Link to="invoices " className="sub-menu-item">
                      Invoices
                    </Link>
                  </li>
                  <li>
                    <Link to="patient-review " className="sub-menu-item">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-messages " className="sub-menu-item">
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-profile " className="sub-menu-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="doctor-profile-setting "
                      className="sub-menu-item"
                    >
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="doctor-chat " className="sub-menu-item">
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link to="login " className="sub-menu-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="signup " className="sub-menu-item">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="forgot-password " className="sub-menu-item">
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                  Patients <span className="menu-arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/patient-dashboard" className="sub-menu-item">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient-profile" className="sub-menu-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking-appointment" className="sub-menu-item">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient-invoice" className="sub-menu-item">
                      Invoice
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                  Pages<span className="menu-arrow"></span>
                </a>
                <ul className="submenu">
                  <li>
                    <Link to="/about" className="sub-menu-item">
                      {" "}
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/departments" className="sub-menu-item">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="sub-menu-item">
                      FAQs
                    </Link>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a
                      onClick={(e) => submenuHandler(e)}
                      href="javascript:void(0)"
                      className="menu-item"
                    >
                      {" "}
                      Blogs <span className="submenu-arrow"></span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <Link to="/blogs" className="sub-menu-item">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-detail/1" className="sub-menu-item">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/terms" className="sub-menu-item">
                      Terms & Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="sub-menu-item">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/error" className="sub-menu-item">
                      404 !
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="sub-menu-item">
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/dashboard" className="sub-menu-item">
                  Admin
                </Link>
              </li>
            </ul>
            {/* <!--end navigation menu--> */}
          </div>
          {/* <!--end navigation--> */}
        </div>
        {/* <!--end container--> */}
      </header>
      {/* <!--end header--> */}
      {/* <!-- Navbar End --> */}
    </>
  );
}
