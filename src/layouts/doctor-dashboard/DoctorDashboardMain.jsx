import AppointmentList from "../../components/dashboard/AppointmentList";
import PatientReview from "../../components/dashboard/PatientReview";
import DoctorDashboardItems from "./DoctorDashboardItems";

export default function DoctorDashboardMain() {
  return (
    <>
      <h5 className="mb-0">Dashboard</h5>
      <div className="row">
        <div className="col-xl-3 col-lg-6 mt-4">
          <div className="card shadow border-0 p-4">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="align-items-center mb-0">
                Appointment{" "}
                <span className="badge badge-pill badge-soft-primary ms-1">
                  +15%
                </span>
              </h6>
              <p className="mb-0 text-muted">220+ Week</p>
            </div>
            <div id="chart-1"></div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-3 col-lg-6 mt-4">
          <div className="card shadow border-0 p-4">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="align-items-center mb-0">
                Patients{" "}
                <span className="badge badge-pill badge-soft-success ms-1">
                  +20%
                </span>
              </h6>
              <p className="mb-0 text-muted">220+ Week</p>
            </div>
            <div id="chart-2"></div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-3 col-lg-6 mt-4">
          <div className="card shadow border-0 p-4">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="align-items-center mb-0">
                Urgent{" "}
                <span className="badge badge-pill badge-soft-warning ms-1">
                  +5%
                </span>
              </h6>
              <p className="mb-0 text-muted">220+ Week</p>
            </div>
            <div id="chart-3"></div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-3 col-lg-6 mt-4">
          <div className="card shadow border-0 p-4">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="align-items-center mb-0">
                Canceled{" "}
                <span className="badge badge-pill badge-soft-danger ms-1">
                  -5%
                </span>
              </h6>
              <p className="mb-0 text-muted">220+ Week</p>
            </div>
            <div id="chart-4"></div>
          </div>
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

      <div className="row">
        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <AppointmentList />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-4 col-lg-6 mt-4">
          <div className="card border-0 shadow rounded">
            <AppointmentList />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-4 col-lg-12 mt-4">
          <PatientReview />
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

      <DoctorDashboardItems />
    </>
  );
}
