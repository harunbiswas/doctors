import { useState } from "react";
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
import AdminDoctroProfile from "../pages/admin/AdminDoctorProfile";
import AdminDoctors from "../pages/admin/AdminDoctors";
import AdminPatients from "../pages/admin/AdminPatients";
import AdminSingup from "../pages/admin/AdminSingup";
import Appointments from "../pages/admin/Appointments";
import AddDepartment from "../pages/clinic/AddDepartment";
import ClinicAddDoctor from "../pages/clinic/ClinicAddDoctor";
import ClinicDashboard from "../pages/clinic/ClinicDashboar";
import ClinicDashboardMain from "../pages/clinic/ClinicDashboardMain";
import ClinicDepartmentsMain from "../pages/clinic/ClinicDeparmentsMain";
import ClinicSingup from "../pages/clinic/ClinicSingup";
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
import FrontendLayout from "../pages/frontend/FrontendLayout";
import Home from "../pages/frontend/Home";
import PatientDashboard from "../pages/frontend/PatientDashboard";
import PatientInvoce from "../pages/frontend/PatientInvoice";
import PrivacyPolicy from "../pages/frontend/PrivacyPolicy";
import Search from "../pages/frontend/Search";
import Terms from "../pages/frontend/Terms";
import Login from "../pages/Login";
import PatientAppointment from "../pages/patient/PatientAppointment";
import PatientDashboardHome from "../pages/patient/PatientDashboardHome";
import Singup from "../pages/Singup";

export default function Roots() {
  const [role, setRole] = useState(
    (localStorage.getItem("login") &&
      JSON.parse(localStorage.getItem("login")).value.loginData.role) ||
      ""
  );

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          (role && (role === "admin" || role === "editor") && (
            <Navigate to="/admin" />
          )) ||
          (role === "clinic" && <Navigate to="/clinic-dashboard" />) ||
          (role === "doctor" && <Navigate to="/doctor-dashboard" />) ||
          (role === "patient" && <Navigate to="/patient-dashboard" />) || (
            <Navigate to="/login" />
          )
        }
      />

      {/* home page  */}
      <Route path="/" element={<FrontendLayout />}>
        <Route index element={<Home />} />
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
        <Route exact path="search" element={<Search />} />
      </Route>

      {/* doctor dashboard  */}
      <Route exact path="doctor-dashboard" element={<DoctorDashboard />}>
        <Route
          index
          element={
            (role && role === "doctor" && <DoctorDashboardMain />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctor-appointment"
          element={
            (role && role === "doctor" && <DoctorAppointment />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctor-schedule"
          element={
            (role && role === "doctor" && <DoctorSchedule />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="invoices"
          element={
            (role && role === "doctor" && <Invoices />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctor-profile/:id"
          element={
            (role && role === "doctor" && <DoctorProfile />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctor-profile-setting"
          element={
            (role && role === "doctor" && <DoctorProfileSettings />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="patient-list"
          element={
            (role && role === "doctor" && <DoctorPatients />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="patient-review"
          element={
            (role && role === "doctor" && <DoctorPatientReviews />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="patient-dashboard"
          element={
            (role && role === "doctor" && <PatientDashboard />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="patient-invoice"
          element={
            (role && role === "doctor" && <PatientInvoce />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="profile/:id"
          element={
            (role && role === "doctor" && <AdminDoctroProfile />) || (
              <Navigate to="/login" />
            )
          }
        />
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
          path="departments"
          element={
            (role && role === "clinic" && <ClinicDepartmentsMain />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="add-department"
          element={
            (role && role === "clinic" && <AddDepartment />) || (
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
            (role && role === "clinic" && <ClinicAddDoctor />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="doctor/:id"
          element={
            (role && role === "clinic" && <AdminDoctroProfile />) || (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="appointment"
          element={
            (role && role === "clinic" && <Appointments />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="profile/:id"
          element={
            (role && role === "clinic" && <AdminClinicProfile />) || (
              <Navigate to="/login" />
            )
          }
        />
      </Route>

      {/* // patient dashboard  */}
      <Route exact path="/patient-dashboard" element={<PatientDashboard />}>
        <Route
          index
          element={
            (role && role === "patient" && <PatientDashboardHome />) || (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="booking-appointment"
          element={
            (role && role === "patient" && <PatientAppointment />) || (
              <Navigate to="/login" />
            )
          }
        />
      </Route>

      <Route
        path="login"
        element={(!role && <Login />) || <Navigate to="/dashboard" />}
      />
      <Route path="singup" element={<Singup />} />
      <Route path="adminSingup" element={<AdminSingup />} />
      <Route path="clinicSingup" element={<ClinicSingup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
