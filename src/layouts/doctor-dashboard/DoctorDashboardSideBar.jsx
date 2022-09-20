import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/doctors/profile-bg.jpg";
import Values from "../../Values";

export default function DoctorDashboardSideBar() {
  const [data, setData] = useState({});
  let [id, setId] = useState("");
  useEffect(() => {
    const url = `${Values.BASE_URL}/doctor/info`;
    axios
      .get(url, Values.consfig)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    // set id
    setId(JSON.parse(localStorage.getItem("login"))?.value.loginData.id);
  }, []);
  console.log(data);
  return (
    <>
      <div className="rounded shadow overflow-hidden sticky-bar">
        <div className="card border-0">
          <img src={img} className="img-fluid" alt="" />
        </div>

        <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
          <img
            src={data?.image}
            className="rounded-circle shadow-md avatar avatar-md-md"
            alt=""
          />
          <h5 className="mt-3 mb-1">
            Dr. {data.firstName + " " + data.lastName}
          </h5>
          <p className="text-muted mb-0">{data.title}</p>
        </div>

        <ul className="list-unstyled sidebar-nav mb-0">
          <li className="navbar-item">
            <Link to="/doctor-dashboard" className="navbar-link">
              <i className="ri-airplay-line align-middle navbar-icon"></i>{" "}
              Dashboard
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="/doctor-dashboard/doctor-appointment"
              className="navbar-link"
            >
              <i className="ri-calendar-check-line align-middle navbar-icon"></i>{" "}
              Appointment
            </a>
          </li>
          <li className="navbar-item">
            <Link
              to="/doctor-dashboard/doctor-schedule"
              className="navbar-link"
            >
              <i className="ri-timer-line align-middle navbar-icon"></i>{" "}
              Schedule Timing
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor-dashboard/invoices" className="navbar-link">
              <i className="ri-pages-line align-middle navbar-icon"></i>{" "}
              Invoices
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/doctor-dashboard/doctor-messages"
              className="navbar-link"
            >
              <i className="ri-mail-unread-line align-middle navbar-icon"></i>{" "}
              Messages
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to={`/doctor-dashboard/doctor-profile/${id}`}
              className="navbar-link"
            >
              <i className="ri-user-line align-middle navbar-icon"></i> Profile
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="/doctor-dashboard/doctor-profile-setting"
              className="navbar-link"
            >
              <i className="ri-user-settings-line align-middle navbar-icon"></i>{" "}
              Profile Settings
            </a>
          </li>
          <li className="navbar-item">
            <Link to="/doctor-dashboard/patient-list" className="navbar-link">
              <i className="ri-empathize-line align-middle navbar-icon"></i>{" "}
              Patients
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor-dashboard/patient-review" className="navbar-link">
              <i className="ri-chat-1-line align-middle navbar-icon"></i>{" "}
              Patients Review
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/doctor-dashboard/doctor-chat" className="navbar-link">
              <i className="ri-chat-voice-line align-middle navbar-icon"></i>{" "}
              Chat
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/ldoctor-dashboard/ogin" className="navbar-link">
              <i className="ri-login-circle-line align-middle navbar-icon"></i>{" "}
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/doctor-dashboard/forgot-password"
              className="navbar-link"
            >
              <i className="ri-device-recover-line align-middle navbar-icon"></i>{" "}
              Forgot Password
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
