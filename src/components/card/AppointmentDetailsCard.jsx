import moment from "moment";

export default function AppointmentDetailsCard({ data, handler }) {
  return (
    <div
      className="modal fade show d-block"
      id="viewappointment"
      tabindex="-1"
      aria-labelledby="exampleModalLabel1"
      aria-hidden="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content bg-light">
          <div className="modal-header border-bottom p-3">
            <h5 className="modal-title" id="exampleModalLabel1">
              Appointment Detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handler}
            ></button>
          </div>
          <div className="modal-body p-3 pt-4">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 ms-3">{data.name}</h5>
            </div>
            <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
              <li>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex">
                    <h6>Age:</h6>
                    <p className="text-muted ms-2">{data.age} year old</p>
                  </li>

                  <li className="d-flex">
                    <h6>Doctor:</h6>
                    <p className="text-muted ms-2">
                      {data.firstName + " " + data.lastName}
                    </p>
                  </li>

                  <li className="d-flex">
                    <h6 className="mb-0">Department:</h6>
                    <p className="text-muted ms-2 mb-0">{data.title}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex">
                    <h6>Date:</h6>
                    <p className="text-muted ms-2">
                      {moment(data.date).format("MMM Do YY")}
                    </p>
                  </li>

                  <li className="d-flex">
                    <h6>Phone:</h6>
                    <p className="text-muted ms-2">{data.phone}</p>
                  </li>

                  <li className="d-flex">
                    <h6 className="mb-0">Email:</h6>
                    <p className="text-muted ms-2 mb-0">{data.email}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
