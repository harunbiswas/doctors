import { Route, Routes } from "react-router-dom";
import AdminDashboardMain from "../layouts/admin/AdminDashboardMain";
import DoctorDashboardMain from "../layouts/doctor-dashboard/DoctorDashboardMain";
import AdminAddDoctor from "../pages/admin/AdminAddDoctor";
import AdminAddPatient from "../pages/admin/AdminAddPatient";
import AdminAppointment from "../pages/admin/AdminAppointment";
import AdminBlogDetail from "../pages/admin/AdminBlogDetail";
import AdminBlogs from "../pages/admin/AdminBlogs";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDoctroProfile from "../pages/admin/AdminDoctorProfile";
import AdminDoctors from "../pages/admin/AdminDoctors";
import AdminPatients from "../pages/admin/AdminPatients";
import DoctorAppointment from "../pages/doctor/DoctorAppointment";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import DoctorPatientReviews from "../pages/doctor/DoctorPatientReviews";
import DoctorPatients from "../pages/doctor/DoctorPatients";
import DoctorProfile from "../pages/doctor/DoctorProfile";
import DoctorProfileSettings from "../pages/doctor/DoctorProfileSettings";
import DoctorSchedule from "../pages/doctor/DoctorSchedule";
import Invoices from "../pages/doctor/Invoices";
import About from "../pages/frontend/About";
import BlogDetails from "../pages/frontend/BlogDetails";
import Blogs from "../pages/frontend/Blogs";
import BookingAppointment from "../pages/frontend/BookingAppointment";
import Contact from "../pages/frontend/Contact";
import Departments from "../pages/frontend/Departments";
import Doctors from "../pages/frontend/Doctors";
import Error from "../pages/frontend/Error";
import Faqs from "../pages/frontend/Faqs";
import Home from "../pages/frontend/Home";
import PatientDashboard from "../pages/frontend/PatientDashboard";
import PatientInvoce from "../pages/frontend/PatientInvoice";
import PrivacyPolicy from "../pages/frontend/PrivacyPolicy";
import Terms from "../pages/frontend/Terms";

export default function Roots(){

    return(
        <Routes>
            <Route exact path="/" element={<Home />}>
                <Route exact path="about" element={<About />} />
                <Route exact path="blogs" element={<Blogs />} />
                <Route path="blog-detail/:id" element={<BlogDetails />} />
                <Route exact path="booking-appointment" element={<BookingAppointment />} />
                <Route exact path="contact" element={<Contact />} />
                <Route exact path="departments" element={<Departments />} />
                <Route exact path="faqs" element={<Faqs />} />
                <Route exact path="privacy" element={<PrivacyPolicy />} />
                <Route exact path="terms" element={<Terms />} />
                <Route exact path="doctors" element={<Doctors />} />
            </Route>
            <Route exact path="doctor-dashboard" element={<DoctorDashboard />}>
                <Route index element={<DoctorDashboardMain />} />
                <Route exact path="doctor-appointment" element={<DoctorAppointment />} />
                <Route exact path="doctor-schedule" element={<DoctorSchedule />} />
                <Route exact path="invoices" element={<Invoices />} />
                <Route exact path="doctor-profile" element={<DoctorProfile />} />
                <Route exact path="doctor-profile-setting" element={<DoctorProfileSettings />} />
                <Route exact path="patient-list" element={<DoctorPatients />} />
                <Route exact path="patient-review" element={<DoctorPatientReviews />} />
                <Route exact path="patient-dashboard" element={<PatientDashboard />} />
                <Route exact path="patient-invoice" element={<PatientInvoce />} />
            </Route>
            {/* // admin dashboard  */}
            <Route exact path="admin" element={<AdminDashboard />}>
                <Route index element={<AdminDashboardMain />}  />
                <Route path="appointment" element={<AdminAppointment />} />
                <Route path="doctors" element={<AdminDoctors />} />
                <Route path="add-doctor" element={<AdminAddDoctor />} />
                <Route path="dr-profile" element={<AdminDoctroProfile />} />
                <Route path="patients" element={<AdminPatients />} />
                <Route path="add-patient" element={<AdminAddPatient />} />
                <Route path="blogs" element={<AdminBlogs />} />
                <Route path="blog-detail" element={<AdminBlogDetail />} />
            </Route>

            <Route path="*" element={<Error />} />
        </Routes>
    )
}