 import Schedule from "../../components/dashboard/Schedule";
import HeaderOne from "../headers/HeaderOne";
import DoctorDashboardSideBar from "./DoctorDashboardSideBar";
 
 export default function DoctorSchedule() {
    return(
        <>
        <HeaderOne />
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                        <DoctorDashboardSideBar />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                        <Schedule />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
 }