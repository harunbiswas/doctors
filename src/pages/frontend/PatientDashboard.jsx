import { Outlet } from "react-router-dom";
import PatientDashboardSideBar from "../../layouts/frontend/patient/PatientDashboardSidebar";
import HeaderOne from "../../layouts/headers/HeaderOne";

export default function PatientDashboard() {
  return (
    <>
      <HeaderOne />
      {/* <!-- Start Hero --> */}
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <PatientDashboardSideBar />
            </div>
            {/* <!--end col--> */}

            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <h5 className="mb-0">Dashboard</h5>

              <Outlet />
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- EndHero --> */}
    </>
  );
}
