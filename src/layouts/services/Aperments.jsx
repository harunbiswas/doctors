import BookingForm from "../frontend/booking/BookingForm";
import GustBookingForm from "../frontend/booking/GustBookingForm";

export default function Aperments() {
  return (
    <>
      <div className="container mt-100 mt-60">
        <div className="row align-items-lg-end">
          <div className="col-md-6">
            <div className="me-xl-3">
              <div className="section-title mb-4 pb-2">
                <i className="uil uil-notes text-primary h2"></i>
                <h4 className="title mb-4">Book Your Appointment</h4>
                <p className="text-muted para-desc mb-0">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>

              <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden">
                <i className="uil uil-stethoscope-alt icons h2 mb-0 text-primary"></i>
                <div className="ms-3">
                  <h5 className="titles">Success Of Treatment</h5>
                  <p className="text-muted para mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
                <div className="big-icon">
                  <i className="uil uil-stethoscope-alt"></i>
                </div>
              </div>

              <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                <i className="uil uil-microscope icons h2 mb-0 text-primary"></i>
                <div className="ms-3">
                  <h5 className="titles">Modern Technology</h5>
                  <p className="text-muted para mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
                <div className="big-icon">
                  <i className="uil uil-microscope"></i>
                </div>
              </div>

              <div className="features feature-bg-primary d-flex bg-white p-4 rounded-md shadow position-relative overflow-hidden mt-4">
                <i className="uil uil-user-md icons h2 mb-0 text-primary"></i>
                <div className="ms-3">
                  <h5 className="titles">Certified Doctors</h5>
                  <p className="text-muted para mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
                <div className="big-icon">
                  <i className="uil uil-user-md"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 rounded shadow p-4 ms-xl-3">
              {(localStorage.getItem("login") &&
                JSON.parse(localStorage.getItem("login")).value.loginData
                  .role === "patient" && <BookingForm />) || (
                <GustBookingForm />
              )}
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end container--> */}
    </>
  );
}
