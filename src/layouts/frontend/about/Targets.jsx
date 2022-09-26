import { useState } from "react";

export default function Targets() {
  const [targets, setTargets] = useState([1, 1, 1]);

  return (
    <>
      {/* <!-- Start --> */}
      <section className="section py-5 bg-light">
        <div className="container">
          <div className="row">
            {targets?.map((data, i) => (
              <div key={i} className="col-md-4">
                <div className="d-flex">
                  <i className="uil uil-briefcase h1 mb-0 text-primary"></i>
                  <div className="ms-3 ms-lg-4">
                    <h5>Our Mission</h5>
                    <p className="text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum'
                      originated in the 16th century.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- End --> */}
    </>
  );
}
