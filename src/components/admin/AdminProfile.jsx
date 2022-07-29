import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../btns/LogoutBtn";

export default function AdminProfile() {
  const [img, setImg] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  // handler
  const toggleHandler = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  };

  return (
    <li className="list-inline-item mb-0 ms-1">
      <div className="dropdown dropdown-primary">
        <button
          type="button"
          className={`btn btn-pills btn-soft-primary dropdown-toggle p-0 ${
            (isToggle && "show") || ""
          }`}
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={toggleHandler}
        >
          <img
            src={
              img || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            className="avatar avatar-ex-small rounded-circle"
            alt=""
          />
        </button>
        <div
          className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${
            (isToggle && "d-block") || ""
          }`}
          style={{
            minWidth: "200px",
            position: "absolute",
            inset: "0px auto auto 0px",
            margin: "0px",
            transform: "translate(-162px, 40px)",
          }}
        >
          <a
            className="dropdown-item d-flex align-items-center text-dark"
            href="profile.html"
          >
            <img
              src={
                img || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              className="avatar avatar-md-sm rounded-circle border shadow"
              alt=""
            />
            <div className="flex-1 ms-2">
              <span className="d-block mb-1">Calvin Carlo</span>
              <small className="text-muted">Orthopedic</small>
            </div>
          </a>
          <Link to="/" className="dropdown-item text-dark">
            <span className="mb-0 d-inline-block me-1">
              <i className="uil uil-dashboard align-middle h6"></i>
            </span>{" "}
            Dashboard
          </Link>
          <Link to="/" className="dropdown-item text-dark">
            <span className="mb-0 d-inline-block me-1">
              <i className="uil uil-setting align-middle h6"></i>
            </span>{" "}
            Profile Settings
          </Link>
          <div className="dropdown-divider border-top"></div>
          <LogoutBtn />
        </div>
      </div>
    </li>
  );
}
