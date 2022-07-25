import { Link } from "react-router-dom";
import AddClinicFrom from "../../components/form/AddClinicForm";
import AdminDoctorListSideBar from "../../layouts/admin/AdminDoctorListSIdeBar";

export default function AdminAddClinic() {
  return (
    <>
      <div className="layout-specing">
        <div className="d-md-flex justify-content-between">
          <h5 className="mb-0">Add New Clinic</h5>

          <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
              <li className="breadcrumb-item">
                <Link to="/admin/clinic">Clinics</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Clinic
              </li>
            </ul>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-8 mt-4">
            <div className="card border-0 p-4 rounded shadow">
              <AddClinicFrom />
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-4 mt-4">
            <AdminDoctorListSideBar />
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </>
  );
}
