import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import AdminProfile from "./AdminProfile";

export default function TopHeaderBtns() {
  const [img, setImg] = useState(null);
  return (
    <ul className="list-unstyled mb-0">
      <li className="list-inline-item mb-0">
        <div className="dropdown dropdown-primary">
          <button
            type="button"
            className="btn btn-pills btn-soft-primary dropdown-toggle p-0"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={img}
              className="avatar avatar-ex-small rounded-circle p-2"
              alt=""
            />
          </button>
          <div
            className="dropdown-menu dd-menu drop-ups dropdown-menu-end bg-white shadow border-0 mt-3 p-2"
            data-simplebar
            style={{ height: "175px" }}
          >
            <a href="javascript:void(0)" className="d-flex align-items-center">
              <img
                src={img}
                className="avatar avatar-client rounded-circle shadow"
                alt=""
              />
              <div className="flex-1 text-left ms-2 overflow-hidden">
                <small className="text-dark mb-0">Chinese</small>
              </div>
            </a>

            <a
              href="javascript:void(0)"
              className="d-flex align-items-center mt-2"
            >
              <img
                src={img}
                className="avatar avatar-client rounded-circle shadow"
                alt=""
              />
              <div className="flex-1 text-left ms-2 overflow-hidden">
                <small className="text-dark mb-0">European</small>
              </div>
            </a>

            <a
              href="javascript:void(0)"
              className="d-flex align-items-center mt-2"
            >
              <img
                src={img}
                className="avatar avatar-client rounded-circle shadow"
                alt=""
              />
              <div className="flex-1 text-left ms-2 overflow-hidden">
                <small className="text-dark mb-0">Indian</small>
              </div>
            </a>

            <a
              href="javascript:void(0)"
              className="d-flex align-items-center mt-2"
            >
              <img
                src={img}
                className="avatar avatar-client rounded-circle shadow"
                alt=""
              />
              <div className="flex-1 text-left ms-2 overflow-hidden">
                <small className="text-dark mb-0">Japanese</small>
              </div>
            </a>

            <a
              href="javascript:void(0)"
              className="d-flex align-items-center mt-2"
            >
              <img
                src={img}
                className="avatar avatar-client rounded-circle shadow"
                alt=""
              />
              <div className="flex-1 text-left ms-2 overflow-hidden">
                <small className="text-dark mb-0">Russian</small>
              </div>
            </a>
          </div>
        </div>
      </li>

      <li className="list-inline-item mb-0 ms-1">
        <a
          href="javascript:void(0)"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <div className="btn btn-icon btn-pills btn-soft-primary">
            <AiOutlineSetting />
            <i data-feather="settings" className="fea icon-sm"></i>
          </div>
        </a>
      </li>

      <li className="list-inline-item mb-0 ms-1">
        <div className="dropdown dropdown-primary">
          <button
            type="button"
            className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="mail" className="fea icon-sm">
              <MdOutlineEmail />
            </i>
          </button>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            4 <span className="visually-hidden">unread mail</span>
          </span>

          <div
            className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 px-2 py-2"
            data-simplebar
            style={{ height: "320px", width: "300px" }}
          >
            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/02.jpg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>Janalia</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    1 hour ago
                  </small>
                </small>
              </div>
            </a>

            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2 border-top"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/Codepen.svg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>codepen</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    4 hour ago
                  </small>
                </small>
              </div>
            </a>

            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2 border-top"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/03.jpg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>Cristina</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    5 hour ago
                  </small>
                </small>
              </div>
            </a>

            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2 border-top"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/dribbble.svg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>Dribbble</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    24 hour ago
                  </small>
                </small>
              </div>
            </a>

            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2 border-top"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/06.jpg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>Donald Aghori</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    1 day ago
                  </small>
                </small>
              </div>
            </a>

            <a
              href="#"
              className="d-flex align-items-center justify-content-between py-2 border-top"
            >
              <div className="d-inline-flex position-relative overflow-hidden">
                <img
                  src="../assets/images/client/07.jpg"
                  className="avatar avatar-md-sm rounded-circle shadow"
                  alt=""
                />
                <small className="text-dark mb-0 d-block text-truncat ms-3">
                  You received a new email from <b>Calvin</b>{" "}
                  <small className="text-muted fw-normal d-inline-block">
                    2 day ago
                  </small>
                </small>
              </div>
            </a>
          </div>
        </div>
      </li>
      <AdminProfile />
    </ul>
  );
}
