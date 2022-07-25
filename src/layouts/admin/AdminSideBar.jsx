import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

export default function AdminSideBar() {
  const submenuHandler = (e) => {
    e.target.parentElement.classList.toggle("active");
    if (e.target.nextSibling) {
      e.target.nextSibling.classList.toggle("d-block");
    }
  };

  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        <div
          className="sidebar-content"
          data-simplebar
          style={{ height: "calc(100% - 60px)", overflowX: "hidden" }}
        >
          <div className="sidebar-brand">
            <a href="/admin">
              <img
                src={logoDark}
                height="24"
                className="logo-light-mode"
                alt=""
              />
              <img
                src={logoLight}
                height="24"
                className="logo-dark-mode"
                alt=""
              />
            </a>
          </div>

          <ul className="sidebar-menu pt-3">
            <li>
              <a href="/admin">
                <i className="uil uil-dashboard me-2 d-inline-block"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/appointment">
                <i className="uil uil-stethoscope me-2 d-inline-block"></i>
                Appointment
              </a>
            </li>

            <li className="sidebar-dropdown">
              <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                <i className="uil uil-user me-2 d-inline-block"></i>Clinics
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="/admin/clinic">Clinics</a>
                  </li>
                  <li>
                    <a href="/admin/add-clinic">Add Clinic</a>
                  </li>
                  <li>
                    <a href="/admin/clinic-profile">Profile</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="sidebar-dropdown">
              <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                <i className="uil uil-wheelchair me-2 d-inline-block"></i>
                Patients
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="/admin/patients">All Patients</a>
                  </li>
                  <li>
                    <a href="/admin/add-patient">Add Patients</a>
                  </li>
                  <li>
                    <a href="/admin/patient-profile">Profile</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="sidebar-dropdown">
              <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                <i className="uil uil-apps me-2 d-inline-block"></i>Apps
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="/admin/chat">Chat</a>
                  </li>
                  <li>
                    <a href="/admin/email">Email</a>
                  </li>
                  <li>
                    <a href="/admin/calendar">Calendar</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="sidebar-dropdown">
              <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                <i className="uil uil-flip-h me-2 d-inline-block"></i>Blogs
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="/admin/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/admin/blog-detail">Blog Detail</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="sidebar-dropdown">
              <a onClick={(e) => submenuHandler(e)} href="javascript:void(0)">
                <i className="uil uil-file me-2 d-inline-block"></i>Pages
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="/admin/faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="/admin/review">Reviews</a>
                  </li>
                  <li>
                    <a href="/admin/invoice-list">Invoice List</a>
                  </li>
                  <li>
                    <a href="/admin/invoice">Invoice</a>
                  </li>
                  <li>
                    <a href="/admin/terms">Terms & Policy</a>
                  </li>
                  <li>
                    <a href="/admin/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/admin/error">404 !</a>
                  </li>
                  <li>
                    <a href="/admin/blank-page">Blank Page</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* <!-- sidebar-menu  --> */}
        </div>
        {/* <!-- sidebar-content  --> */}
        <ul className="sidebar-footer list-unstyled mb-0">
          <li className="list-inline-item mb-0 ms-1">
            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
              <i className="uil uil-comment icons"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- sidebar-wrapper  --> */}
    </>
  );
}
