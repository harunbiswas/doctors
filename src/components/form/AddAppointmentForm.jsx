import { useState } from "react";

export default function AddAppointmentForm() {
  // logindata
  const loginData = JSON.parse(localStorage.getItem("login")).value.loginData;
  // input handler
  const [clinicId, setClinicId] = useState("");
  const [name, setName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

  return (
    <form>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <label className="form-label">
              Patient Name <span className="text-danger">*</span>
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="form-control"
              placeholder="Patient Name :"
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label">Departments</label>
            <select className="form-control department-name select2input">
              <option value="EY">Eye Care</option>
              <option value="GY">Gynecologist</option>
              <option value="PS">Psychotherapist</option>
              <option value="OR">Orthopedic</option>
              <option value="DE">Dentist</option>
              <option value="GA">Gastrologist</option>
              <option value="UR">Urologist</option>
              <option value="NE">Neurologist</option>
            </select>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label">Doctor</label>
            <select className="form-control doctor-name select2input">
              <option value="CA">Dr. Calvin Carlo</option>
              <option value="CR">Dr. Cristino Murphy</option>
              <option value="AL">Dr. Alia Reddy</option>
              <option value="TO">Dr. Toni Kovar</option>
              <option value="JE">Dr. Jessica McFarlane</option>
              <option value="EL">Dr. Elsie Sherman</option>
              <option value="BE">Dr. Bertha Magers</option>
              <option value="LO">Dr. Louis Batey</option>
            </select>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
              placeholder="Your email :"
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Your Phone <span className="text-danger">*</span>
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              className="form-control"
              placeholder="Your Phone :"
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label"> Date : </label>
            <input
              name="date"
              type="text"
              className="flatpickr flatpickr-input form-control"
              id="checkin-date"
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label" for="input-time">
              Time :{" "}
            </label>
            <input
              name="time"
              type="text"
              className="form-control timepicker"
              id="input-time"
              placeholder="03:30 PM"
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-12">
          <div className="mb-3">
            <label className="form-label">
              Comments <span className="text-danger">*</span>
            </label>
            <textarea
              name="comments"
              id="comments"
              rows="4"
              className="form-control"
              placeholder="Your Message :"
            ></textarea>
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-12">
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Book An Appointment
            </button>
          </div>
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}
    </form>
  );
}
