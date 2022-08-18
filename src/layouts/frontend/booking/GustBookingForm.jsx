import axios from "axios";
import React, { useEffect, useState } from "react";
import OkMessage from "../../../components/basic/OkMessage";
import Values from "../../../Values";

export default function GustBookingForm() {
  // data handler
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [clinicId, setClinicId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setErrors({ ...errors, name: null });
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setErrors({ ...errors, email: null });
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setErrors({ ...errors, phone: null });
    setPhone(e.target.value);
  };
  const ageHandler = (e) => {
    setErrors({ ...errors, age: null });
    setAge(e.target.value);
  };
  const clinicIdHandler = (e) => {
    setErrors({ ...errors, clinicId: null });
    setClinicId(e.target.value);
  };
  const departmentHandler = (e) => {
    setErrors({ ...errors, departmentId: null });
    setDepartmentId(e.target.value);
  };
  const doctorHandler = (e) => {
    setErrors({ ...errors, doctorId: null });
    setDoctorId(e.target.value);
  };
  const dateHandler = (e) => {
    setErrors({ ...errors, date: null });
    setDate(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

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

    if (clinicId) {
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
          console.log(e.response);
        });
    }

    // doctors handler
    if (clinicId && departmentId) {
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
    }
  }, [clinicId, departmentId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const url = `${Values.BASE_URL}/appointment`;
    const data = {
      clinicId,
      departmentId,
      doctorId,
      date,
      comments: message,
      age,
      email,
      name,
      phone,
    };
    axios
      .post(url, data)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
        console.log(e.response.data);
      });
  };

  // errorr handle
  const [errors, setErrors] = useState({});

  // ok message
  const [msg, setMsg] = useState(null);
  const msgHandler = () => {
    location.reload();
    setMsg(null);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
      <div className="tab-content p-4" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-clinic"
          role="tabpanel"
          aria-labelledby="clinic-booking"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Patient Name <span className="text-danger">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-control ${
                    (errors && errors.name && "errors") || ""
                  }`}
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => nameHandler(e)}
                />
                {errors && errors.name && (
                  <span className="error-msg text-danger">
                    {errors.name.msg}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-control ${
                    (errors && errors.email && "errors") || ""
                  }`}
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => emailHandler(e)}
                />
                {errors && errors.email && (
                  <span className="error-msg text-danger">
                    {errors.email.msg}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  id="phone"
                  type="phone"
                  className={`form-control ${
                    (errors && errors.phone && "errors") || ""
                  }`}
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => phoneHandler(e)}
                />
                {errors && errors.phone && (
                  <span className="error-msg text-danger">
                    {errors.phone.msg}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age <span className="text-danger">*</span>
                </label>
                <input
                  id="age"
                  type="text"
                  className={`form-control ${
                    (errors && errors.age && "errors") || ""
                  }`}
                  placeholder="age"
                  name="age"
                  value={age}
                  onChange={(e) => ageHandler(e)}
                />
                {errors && errors.age && (
                  <span className="error-msg text-danger">
                    {errors.age.msg}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Clinic</label>
                <select
                  onChange={(e) => clinicIdHandler(e)}
                  className={`form-control department-name select2input ${
                    (errors && errors.clinicId && "errors") || ""
                  }`}
                >
                  <option value="">-- select a clinic --</option>
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
                  className={`form-control department-name select2input ${
                    (errors && errors.departmentId && "errors") || ""
                  }`}
                >
                  <option value="">-- select a department --</option>

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
                <select
                  onChange={(e) => doctorHandler(e)}
                  className={`form-control department-name select2input ${
                    (errors && errors.doctorId && "errors") || ""
                  }`}
                >
                  <option value="">-- Select doctor --</option>
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
                  className={`flatpickr flatpickr-input form-control ${
                    (errors && errors.date && "errors") || ""
                  }`}
                  id="checkin-date"
                  value={date}
                  onChange={(e) => dateHandler(e)}
                />
              </div>
            </div>
            {/* <!--end col--> */}

            {/* <!--end col--> */}

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Comments <span className="text-meuted">(optional)</span>
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  rows="4"
                  className="form-control"
                  placeholder="Your Message :"
                  value={message}
                  onChange={(e) => messageHandler(e)}
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
