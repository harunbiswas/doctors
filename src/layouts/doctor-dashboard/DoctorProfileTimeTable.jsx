export default function DoctorProfileTimeTable() {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-timetable"
        role="tabpanel"
        aria-labelledby="timetable-tab"
      >
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card border-0 p-3 rounded shadow">
              <ul className="list-unstyled mb-0">
                <li className="d-flex justify-content-between">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Monday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 20.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Tuesday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 20.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Wednesday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 20.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Thursday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 20.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Friday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 20.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Saturday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 18.00
                  </p>
                </li>
                <li className="d-flex justify-content-between mt-2">
                  <p className="text-muted mb-0">
                    <i className="ri-time-fill text-primary align-middle h5 mb-0"></i>{" "}
                    Sunday
                  </p>
                  <p className="text-primary mb-0">
                    <span className="text-dark">Time:</span> 8.00 - 14.00
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card border-0 text-center features feature-primary">
              <div className="icon text-center mx-auto rounded-md">
                <span className="mb-0">
                  <i className="uil uil-phone h3"></i>
                </span>
              </div>

              <div className="card-body p-0 mt-4">
                <h5 className="title fw-bold">Phone</h5>
                <p className="text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance
                </p>
                <a href="tel:+152534-468-854" className="link">
                  +152 534-468-854
                </a>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card border-0 text-center features feature-primary">
              <div className="icon text-center mx-auto rounded-md">
                <span className="mb-0">
                  <i className="uil uil-envelope h3"></i>
                </span>
              </div>

              <div className="card-body p-0 mt-4">
                <h5 className="title fw-bold">Email</h5>
                <p className="text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance
                </p>
                <a href="mailto:contact@example.com" className="link">
                  contact@example.com
                </a>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end teb pane--> */}
    </>
  );
}
