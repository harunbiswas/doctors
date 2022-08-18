import GustBookingForm from "../../layouts/frontend/booking/GustBookingForm";

export default function AddAppointment({ handler }) {
  return (
    <div className="add-appointemt">
      <div
        className="modal fade show d-block"
        id="appointmentform"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom p-3">
              <h5 className="modal-title" id="exampleModalLabel">
                Book an Appointment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handler && handler}
              ></button>
            </div>
            <div className="modal-body p-3 pt-4">
              <GustBookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
