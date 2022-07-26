import { Link } from "react-router-dom";
import CLinicItems from "../../layouts/clinics/ClinicsItems";

export default function AdminClinics() {
  return (
    <div className="layout-specing">
      <div className="row">
        <div className="col-xl-9 col-md-6">
          <h5 className="mb-0">Clincs</h5>

          <nav aria-label="breadcrumb" className="d-inline-block mt-2">
            <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="index.html">Doctris</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Clinic
              </li>
            </ul>
          </nav>
        </div>
        {/* <!--end col--> */}

        <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
          <Link to="/admin/add-clinic" className="btn btn-primary">
            Add New Doctor
          </Link>
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

      <CLinicItems />
    </div>
  );
}
