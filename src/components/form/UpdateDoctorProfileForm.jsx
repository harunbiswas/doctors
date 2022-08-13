import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function UpdateDoctorProfileFrom() {
  // departments
  const [departments, setDepartments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/departments`;

    // fach department data
    axios
      .get(url, Values.consfig)
      .then((d) => {
        setDepartments(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

    // fach data
    axios
      .get(`${Values.BASE_URL}/clinic/doctor/${id}`, Values.consfig)
      .then((d) => {
        setFirstName(d.data.firstName);
        setLastName(d.data.lastName);
        setPhone(d.data.phone);
        setGender(d.data.gender);
        setDepartmentId(d.data.departmentId);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  // form controler
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [departmentId, setDepartmentId] = useState("");

  // handler
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: "" });
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: "" });
  };

  const PhoneHandler = (e) => {
    setPhone(e.target.value);
    setErrors({ ...errors, phone: null });
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
    setErrors({ ...errors, gender: null });
  };

  const departmentHandler = (e) => {
    setDepartmentId(e.target.value);
    setErrors({ ...errors, departmentId: null });
  };

  //   errors hanldler
  const [errors, setErrors] = useState({});
  // success
  const [msg, setMsg] = useState(null);

  const msgHandler = () => {
    setMsg(null);
    location.reload();
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phone,
      gender,
      departmentId,
    };
    const url = `${Values.BASE_URL}/clinic/doctor/${id}`;

    axios
      .put(url, data, Values.consfig)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <form className="mt-4" onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              className={`form-control ${
                (errors && errors.firstName && "errors") || ""
              }`}
              placeholder="First Name :"
              value={firstName}
              onChange={(e) => firstNameHandler(e)}
            />
            {errors && errors.firstName && (
              <span className="text-danger">{errors.firstName.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Last Name </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              className={`form-control ${
                (errors && errors.lastName && "errors") || ""
              }`}
              placeholder="Last Name :"
              value={lastName}
              onChange={(e) => lastNameHandler(e)}
            />
            {errors && errors.lastName && (
              <span className="text-danger">{errors.lastName.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Phone no.</label>
            <input
              name="number"
              id="number"
              type="text"
              className={`form-control ${
                (errors && errors.phone && "errors") || ""
              }`}
              placeholder="Phone no. :"
              value={phone}
              onChange={(e) => PhoneHandler(e)}
            />
            {errors && errors.phone && (
              <span className="text-danger">{errors && errors.phone.msg}</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Gender </label>
            <select
              name="gender"
              id="gender"
              className={`form-control ${
                (errors && errors.address && "errors") || ""
              }`}
              value={gender}
              onChange={(e) => genderHandler(e)}
            >
              <option selected={gender === "male"} value="male">
                Male
              </option>
              <option selected={gender === "female"} value="female">
                Female
              </option>
            </select>
            {errors && errors.address && (
              <span className="text-danger">{errors.address.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Departments </label>
            <select
              name="departments"
              id="departments"
              className={`form-control ${
                (errors && errors.departmentID && "errors") || ""
              }`}
              value={departmentId}
              onChange={(e) => departmentHandler(e)}
            >
              <option value={null}>Department</option>
              {departments.length > 0 &&
                departments.map((data, i) => (
                  <option
                    key={i}
                    value={data.id}
                    selected={departmentId === data.id}
                  >
                    {data.title}
                  </option>
                ))}
            </select>
            {errors && errors.departmentID && (
              <span className="text-danger">{errors.departmentID.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

      <button type="submit" className="btn btn-primary">
        Update Profile
      </button>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
    </form>
  );
}
