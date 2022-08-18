import { useState } from "react";
import ClinicAppointmentMain from "../../layouts/clinics/ClinicAppointmentMain";
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

  const role =
    JSON.parse(localStorage.getItem("login")).value.loginData.role || null;

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
                      <div className="mb-0 position-relative"></div>
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

          <ClinicAppointmentMain />
        </div>
      </div>
      {isAppointment && <AddAppointment handler={addAppointmentHideHandler} />}
    </div>
  );
}
