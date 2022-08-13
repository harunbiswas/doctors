import React, { useState } from "react";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form>
      <div className="tab-content p-4" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-clinic"
          role="tabpanel"
          aria-labelledby="clinic-booking"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Clinic</label>
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

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Department</label>
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

            <div className="col-md-6">
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

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label"> Date : </label>
                <input
                  name="date"
                  type="date"
                  className="flatpickr flatpickr-input form-control"
                  id="checkin-date"
                />
              </div>
            </div>
            {/* <!--end col--> */}

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
        </div>
      </div>
    </form>
  );
}
