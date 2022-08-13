import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/basic/Pagination";
import Values from "../../Values";
import AddAppointment from "./AddAppointment";

export default function Appointments() {
  // add appointment
  const [isAppointment, setIsAppointment] = useState(false);
  const addAppointmentshowHandler = () => {
    setIsAppointment(true);
  };
  const addAppointmentHideHandler = () => {
    setIsAppointment(false);
  };
  const [items, setItems] = useState([]);
  const role =
    JSON.parse(localStorage.getItem("login")).value.loginData.role || null;

  useEffect(() => {
    const url = ` ${Values.BASE_URL}/appointment/list`;
    axios
      .get(url, Values.consfig)
      .then((d) => {
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  return (
    <div className="appointments">
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-lg-6 col-md-4">
              <h5 className="mb-0">Appointment</h5>
              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href={`/${role && role}-dashboard`}>DashBoard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Appointment
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!--end col--> */}

            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
              <div className="justify-content-md-end">
                <form>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5">
                      <div className="mb-0 position-relative">
                        <select className="form-control time-during select2input">
                          <option value="EY">Today</option>
                          <option value="GY">Tomorrow</option>
                          <option value="PS">Yesterday</option>
                        </select>
                      </div>
                    </div>
                    {/* <!--end col--> */}

                    <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                      <div className="d-grid">
                        <a
                          onClick={addAppointmentshowHandler}
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#appointmentform"
                        >
                          Appointment
                        </a>
                      </div>
                    </div>
                    {/* <!--end col--> */}
                  </div>
                  {/* <!--end row--> */}
                </form>
                {/* <!--end form--> */}
              </div>
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}

          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "50px" }}
                      >
                        #
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "180px" }}
                      >
                        Name
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "150px" }}
                      >
                        Email
                      </th>
                      <th className="border-bottom p-3">Age</th>
                      <th className="border-bottom p-3">Gender</th>
                      <th className="border-bottom p-3">Department</th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "150px" }}
                      >
                        Date
                      </th>
                      <th className="border-bottom p-3">Time</th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "220px" }}
                      >
                        Doctor
                      </th>
                      <th className="border-bottom p-3">Fees</th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "150px" }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items &&
                      items.map((item, i) => (
                        <tr key={i}>
                          <th className="p-3">1</th>
                          <td className="p-3">
                            <a href="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src="../assets/images/client/01.jpg"
                                  className="avatar avatar-md-sm rounded-circle shadow"
                                  alt=""
                                />
                                <span className="ms-2">Howard Tanner</span>
                              </div>
                            </a>
                          </td>
                          <td className="p-3">howard@contact.com</td>
                          <td className="p-3">25</td>
                          <td className="p-3">Male</td>
                          <td className="p-3">Cardiology</td>
                          <td className="p-3">20th Dec 2020</td>
                          <td className="p-3">11:00AM</td>
                          <td className="p-3">
                            <a href="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src="../assets/images/doctors/01.jpg"
                                  className="avatar avatar-md-sm rounded-circle border shadow"
                                  alt=""
                                />
                                <span className="ms-2">Dr. Calvin Carlo</span>
                              </div>
                            </a>
                          </td>
                          <td className="p-3">$50/Patient</td>
                          <td className="text-end p-3">
                            <a
                              href="#"
                              className="btn btn-icon btn-pills btn-soft-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#viewappointment"
                            >
                              <i className="uil uil-eye"></i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-pills btn-soft-success"
                              data-bs-toggle="modal"
                              data-bs-target="#acceptappointment"
                            >
                              <i className="uil uil-check-circle"></i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-icon btn-pills btn-soft-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#cancelappointment"
                            >
                              <i className="uil uil-times-circle"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!--end row--> */}

          <div className="row text-center">
            {/* <!-- PAGINATION START --> */}
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
                <span className="text-muted me-3">
                  Showing 1 - 10 out of 50
                </span>
                {items.length > 10 && <Pagination />}
              </div>
            </div>
            {/* <!--end col--> */}
            {/* <!-- PAGINATION END --> */}
          </div>
          {/* <!--end row--> */}
        </div>
      </div>
      {isAppointment && <AddAppointment handler={addAppointmentHideHandler} />}
    </div>
  );
}
