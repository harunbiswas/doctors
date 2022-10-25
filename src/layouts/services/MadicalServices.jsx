import CLinicItems from "../clinics/ClinicsItems";

export default function MadicalServices() {
  return (
    <>
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title mb-4 pb-2 text-center">
              <span className="badge badge-pill badge-soft-primary mb-3">
                Clinics
              </span>
              <h4 className="title mb-4">Our Valuable Clinics</h4>
              <p className="text-muted mx-auto para-desc mb-0">
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>

        <CLinicItems />
      </div>
      {/* <!--end container--> */}
    </>
  );
}
