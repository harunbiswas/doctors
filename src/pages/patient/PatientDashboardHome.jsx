import PatientAppointments from "../../layouts/frontend/patient/PatientAppointments";
import PatientPayments from "../../layouts/frontend/patient/PatientPayments";

export default function PatientDashboardHome() {
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-12">
        <div className="row">
          <div className="col-12 mt-4 pt-2">
            <div className="card border-0 rounded shadow">
              <div className="d-flex justify-content-between px-4 pt-4">
                <h6 className="align-items-center mb-0">
                  Water{" "}
                  <span className="badge badge-pill badge-soft-primary ms-1">
                    93%
                  </span>
                </h6>
                <i className="ri-contrast-drop-line text-primary h5"></i>
              </div>
              <div id="rchart-1"></div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-12 mt-4 pt-2">
            <div className="card border-0 rounded shadow p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Hemoglobin{" "}
                  <span className="badge badge-pill badge-soft-success ms-1">
                    19.5 g/dL
                  </span>
                </h6>
                <i className="ri-test-tube-line text-success h5"></i>
              </div>
              <div id="rchart-2"></div>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end col--> */}

      <div className="col-xl-3 col-lg-6 col-12">
        <div className="row">
          <div className="col-12 mt-4 pt-2">
            <div className="card border-0 rounded shadow p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Heartbeat{" "}
                  <span className="badge badge-pill badge-soft-danger ms-1">
                    80 bpm
                  </span>
                </h6>
                <i className="ri-heart-3-fill text-danger h5"></i>
              </div>
              <div id="rchart-3"></div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-12 mt-4 pt-2">
            <div className="card border-0 rounded shadow">
              <div className="d-flex justify-content-between px-4 pt-4">
                <h6 className="align-items-center mb-0">
                  Sugar levels{" "}
                  <span className="badge badge-pill badge-soft-warning ms-1">
                    90 mg/dL
                  </span>
                </h6>
                <i className="ri-dashboard-3-line text-warning h5"></i>
              </div>
              <div id="rchart-4"></div>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end col--> */}

      <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
        <PatientAppointments />
      </div>
      {/* <!--end col--> */}

      <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
        <PatientPayments />
      </div>
      {/* <!--end col--> */}

      <div className="col-xl-4 col-lg-6 mt-4 pt-2">{/* progress Bar  */}</div>
      {/* <!--end col--> */}
    </div>
  );
}
