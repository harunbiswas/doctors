import { Route, Routes } from "react-router-dom";
import DoctorSchedule from "../layouts/doctor-dashboard/DoctorSchedule";
import DoctorAppointment from "../pages/doctor/DoctorAppointment";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
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
import PrivacyPolicy from "../pages/frontend/PrivacyPolicy";
import Terms from "../pages/frontend/Terms";

export default function Roots(){

    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
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
            <Route exact path="doctor-dashboard" element={<DoctorDashboard />} />
            <Route exact path="doctor-appointment" element={<DoctorAppointment />} />
            <Route exact path="doctor-schedule" element={<DoctorSchedule />} />


            <Route path="*" element={<Error />} />
        </Routes>
    )
}