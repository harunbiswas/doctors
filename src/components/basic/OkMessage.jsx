export default function OkMessage({ msg, handler }) {
  return (
    <div
      className="modal show fade d-block"
      id="acceptappointment"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <i className="uil uil-check-circle h1 mb-0"></i>
              </div>
              <div className="mt-4">
                <h4>{msg}</h4>

                <div className="mt-4">
                  <button onClick={handler} className="btn btn-soft-success">
                    ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
