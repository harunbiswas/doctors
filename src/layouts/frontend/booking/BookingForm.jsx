import axios from "axios";
import React, { useEffect, useState } from "react";
import Values from "../../../Values";

export default function BookingForm() {
  // data handler
  const [clinicId, setClinicId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  const clinicIdHandler = (e) => {
    setClinicId(e.target.value);
  };
  const departmentHandler = (e) => {
    setDepartmentId(e.target.value);
  };

  // console.log(clinicId);

  // get data
  const [clinics, setClinics] = useState([]);
  const [deparments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // clinic handler
    const clinicURL = `${Values.BASE_URL}/clinic`;
    axios
      .get(clinicURL)
      .then((d) => {
        setClinics(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    // deparment handler
    const departmentURL = `${Values.BASE_URL}/departments`;
    axios
      .get(departmentURL, {
        headers: {
          clinicId,
        },
      })
      .then((d) => {
        setDepartments(d.data);
      })
      .catch((e) => {
        console.error(e.response);
      });

    // doctors handler
    const doctorURL = `${Values.BASE_URL}/doctors`;
    axios
      .get(doctorURL, {
        headers: {
          clinicId,
          departmentId,
        },
      })
      .then((d) => {
        setDoctors(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [clinicId, departmentId]);

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
                <select
                  onChange={(e) => clinicIdHandler(e)}
                  className="form-control department-name select2input"
                >
                  <option value={null}>-- select a clinic --</option>
                  {clinics &&
                    clinics.length > 0 &&
                    clinics.map((clinic) => (
                      <option key={clinic.id} value={clinic.id}>
                        {clinic.firstName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* <!--end col--> */}

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  onChange={(e) => departmentHandler(e)}
                  className="form-control department-name select2input"
                >
                  <option value={null}>-- select a department --</option>

                  {deparments &&
                    deparments.length > 0 &&
                    deparments.map((deparment) => (
                      <option key={deparment.id} value={deparment.id}>
                        {deparment.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* <!--end col--> */}

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Doctor</label>
                <select className="form-control doctor-name select2input">
                  <option value={null}>-- Select doctor --</option>
                  {doctors &&
                    doctors.length > 0 &&
                    doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.firstName + " " + doctor.lastName}
                      </option>
                    ))}
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
