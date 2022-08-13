import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import logo from "../../assets/images/logo-light.png";
import AdminProfile from "../../components/admin/AdminProfile";

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
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="24" alt="" />
                <img src={logo} className="l-light" height="24" alt="" />
              </span>
              <img src={logo} height="24" className="logo-dark-mode" alt="" />
            </Link>
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
          {(localStorage.getItem("login") && <AdminProfile />) || (
            <ul className="dropdowns list-inline mb-0 d-flex gap-2">
              <li className="mt-3 ">
                <Link to="/login" className="btn btn-primary">
                  LOGIN
                </Link>
              </li>
              <li className="mt-3 ">
                <Link to="/singup" className="btn btn-primary">
                  SINGUP
                </Link>
              </li>
            </ul>
          )}

          <div id="navigation" className={(isToggle && "d-block") || ""}>
            {/* <!-- Navigation Menu-->    */}
            <ul className="navigation-menu nav-left nav-light">
              <li className="has-submenu parent-menu-item">
                <Link to="/" className="sub-menu-item">
                  Home
                </Link>
              </li>{" "}
              <li className="has-submenu parent-menu-item">
                <Link to="/about" className="sub-menu-item">
                  About US
                </Link>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link to="/blogs" className="sub-menu-item">
                  Blogs
                </Link>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link to="/contact" className="sub-menu-item">
                  Contact
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
