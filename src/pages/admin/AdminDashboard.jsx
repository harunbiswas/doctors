import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../../layouts/admin/AdminSideBar";
import AdminTopHeader from "../../layouts/admin/AdminTopHeader";
import FooterOne from "../../layouts/footers/FooterOne";

 export default function AdminDashboard() {
    const[sideToggle, setSideToggle] = useState(true)
    const sideToggleHandler = () => {
        if(sideToggle) {
            setSideToggle(false);
        }else {
            setSideToggle(true)
        }
    }
    return(
        <div className="admin-dashboard">
            <div className={`page-wrapper doctris-theme ${sideToggle && "toggled" || ""} `}>
            <AdminSideBar toggled />

            {/* <!-- Start Page Content --> */}
            <main className="page-content bg-light">
                <AdminTopHeader handler={sideToggleHandler} />
                <Outlet />
                <FooterOne />
                {/* <!-- End --> */}
            </main>
            {/* <!--End page-content" --> */}
        </div>
        </div>
    )
 }