import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

export default function AdminSideBar({ data }) {
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
            {data &&
              data.map((item, i) => (
                <li
                  key={i}
                  className={(item.subMenu && "sidebar-dropdown") || ""}
                >
                  <Link
                    onClick={item.subMenu && ((e) => submenuHandler(e))}
                    to={(item.link && item.link) || ""}
                  >
                    <i className={`uil me-2 d-inline-block ${item.icon}`}></i>
                    {item.title}
                  </Link>
                  {item.subMenu && (
                    <div className="sidebar-submenu">
                      <ul>
                        {item.subMenu.map((menu, i) => (
                          <li key={i}>
                            <Link to={menu.link}>{menu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
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
