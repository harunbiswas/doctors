import { Outlet } from "react-router-dom";
import DoctorDashboardSideBar from "../../layouts/doctor-dashboard/DoctorDashboardSideBar";
import HeaderOne from "../../layouts/headers/HeaderOne";

export default function DoctorDashboard() {
  return (
    <>
      <HeaderOne />
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <DoctorDashboardSideBar />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
