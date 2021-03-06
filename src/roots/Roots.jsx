import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboardMain from "../layouts/admin/AdminDashboardMain";
import DoctorDashboardMain from "../layouts/doctor-dashboard/DoctorDashboardMain";
import AdminAddClinic from "../pages/admin/AdminAddClinic";
import AdminAddPatient from "../pages/admin/AdminAddPatient";
import AdminAppointment from "../pages/admin/AdminAppointment";
import AdminBlogDetail from "../pages/admin/AdminBlogDetail";
import AdminBlogs from "../pages/admin/AdminBlogs";
import AdminClinicProfile from "../pages/admin/AdminClinicProfile";
import AdminClinics from "../pages/admin/AdminClinincs";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDoctors from "../pages/admin/AdminDoctors";
import AdminPatients from "../pages/admin/AdminPatients";
import ClinicDashboard from "../pages/clinic/ClinicDashboar";
import ClinicDashboardMain from "../pages/clinic/ClinicDashboardMain";
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
import Login from "../pages/Login";
import Singup from "../pages/Singup";

export default function Roots() {
  const [role, setRole] = useState(
    localStorage.getItem("login") &&
      JSON.parse(localStorage.getItem("login")).value.loginData.role
  );
  useEffect(() => {
    if (localStorage.getItem("login")) {
      setRole(JSON.parse(localStorage.getItem("login")).value.loginData.role);
    }
  }, []);
  console.log(role);
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          (role && (role === "admin" || role === "editor") && (
            <Navigate to="/admin" />
          )) ||
          (role === "clinic" && <Navigate to="/clinic-dashboard" />) || (
            <Navigate to="/login" />
          )
        }
      />
      <Route exact path="/" element={<Home />}>
        <Route exact path="about" element={<About />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route path="blog-detail/:id" element={<BlogDetails />} />
        <Route
          exact
          path="booking-appointment"
          element={<BookingAppointment />}
        />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="departments" element={<Departments />} />
        <Route exact path="faqs" element={<Faqs />} />
        <Route exact path="privacy" element={<PrivacyPolicy />} />
        <Route exact path="terms" element={<Terms />} />
        <Route exact path="doctors" element={<Doctors />} />
      </Route>
      <Route exact path="doctor-dashboard" element={<DoctorDashboard />}>
        <Route index element={<DoctorDashboardMain />} />
        <Route
          exact
          path="doctor-appointment"
          element={<DoctorAppointment />}
        />
        <Route exact path="doctor-schedule" element={<DoctorSchedule />} />
        <Route exact path="invoices" element={<Invoices />} />
        <Route exact path="doctor-profile" element={<DoctorProfile />} />
        <Route
          exact
          path="doctor-profile-setting"
          element={<DoctorProfileSettings />}
        />
        <Route exact path="patient-list" element={<DoctorPatients />} />
        <Route exact path="patient-review" element={<DoctorPatientReviews />} />
        <Route exact path="patient-dashboard" element={<PatientDashboard />} />
        <Route exact path="patient-invoice" element={<PatientInvoce />} />
      </Route>
      {/* dashboard  */}
      <Route exact path="/admin" element={<AdminDashboard />}>
        <Route
          index
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminDashboardMain />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="appointment"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminAppointment />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="clinic"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminClinics />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="add-clinic"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminAddClinic />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="clinic/:id"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminClinicProfile />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="patients"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminPatients />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="add-patient"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminAddPatient />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="blogs"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminBlogs />
            )) || <Navigate to="/login" />
          }
        />
        <Route
          path="blog-detail/:id"
          element={
            (role && (role === "admin" || role === "editor") && (
              <AdminBlogDetail />
            )) || <Navigate to="/login" />
          }
        />
      </Route>

      {/* clinic dashboard  */}
      <Route exact path="/clinic-dashboard" element={<ClinicDashboard />}>
        <Route
          index
          element={
            (role && role === "clinic" && <ClinicDashboardMain />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctors"
          element={
            (role && role === "clinic" && <AdminDoctors />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="add-doctor"
          element={
            (role && role === "clinic" && <AdminDoctors />) || (
              <Navigate to="/login" />
            )
          }
        />
      </Route>

      <Route
        path="login"
        element={
          (!localStorage.getItem("login") && <Login />) || (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route path="singup" element={<Singup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
