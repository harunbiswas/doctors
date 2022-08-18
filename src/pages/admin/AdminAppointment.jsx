import AdminAppointmentMain from "../../layouts/admin/AdminAppointmentMain";

export default function AdminAppointment() {
  return (
    <>
      <div className="pt-5 mt-5 m-2">
        <div className="row">
          <div className="col-xl-9 col-lg-6 col-md-4">
            <h5 className="mb-0">Appointment</h5>
            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
              <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href={`/admin-dashboard`}>DashBoard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Appointment
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <AdminAppointmentMain />
      </div>
    </>
  );
}
