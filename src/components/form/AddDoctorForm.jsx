import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function AddDoctorFrom() {
  // departments
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/departments`;
    const config = {
      headers: {
        token: JSON.parse(localStorage.getItem("login")).value.token,
      },
    };
    axios
      .get(url, config)
      .then((d) => {
        setDepartments(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const [imgUrl, setImgUrl] = useState(null);
  const [file, setFile] = useState({});
  const imgRef = useRef();
  //upload image
  const uploadImg = () => {
    imgRef.current.click();
  };
  // remove image
  const removeImg = () => {
    setFile(null);
    setImgUrl(null);
  };
  const imgHandler = (e) => {
    setFile(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setErrors({ ...errors, image: null });
  };

  // form controler
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: null });
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: null });
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
  const formData = new FormData();
  const submitHandler = (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/clinic/doctor`;
    formData.append("files", file);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("departmentID", departmentId);

    // post data
    axios
      .post(url, formData, Values.consfig)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return (
    <form className="mt-4" onSubmit={(e) => submitHandler(e)}>
      <div className="row align-items-center">
        {(imgUrl && (
          <div className="col-lg-2 col-md-4">
            <img
              src={imgUrl}
              className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
              alt=""
            />
          </div>
        )) ||
          ""}

        <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
          <h5 className="">Upload your picture</h5>
          <p className="text-muted mb-0">
            For best results, use an image at least 600px by 600px in either
            .jpg or .png format
          </p>
        </div>
        {/* <!--end col--> */}

        <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
          <button
            onClick={uploadImg}
            type="button"
            className={`btn btn-primary ${
              (errors && errors.image && "btn-danger") || ""
            }`}
          >
            Upload
          </button>
          <button
            onClick={removeImg}
            type="button"
            className="btn btn-soft-primary ms-2"
          >
            Remove
          </button>
        </div>
        <div className="text-left">
          {errors && errors.image && (
            <span className="text-danger d-block">{errors.image.msg}</span>
          )}
          <input
            ref={imgRef}
            onChange={imgHandler}
            type="file"
            className="invisible"
            accept="image/jpg, image/png"
          />
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

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
            <label className="form-label">Your Email</label>
            <input
              name="email"
              id="email"
              type="email"
              className={`form-control ${
                (errors && errors.email && "errors") || ""
              }`}
              placeholder="Your email :"
              value={email}
              onChange={(e) => emailHandler(e)}
            />
            {errors && errors.email && (
              <span className="text-danger">{errors && errors.email.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              className={`form-control ${
                (errors && errors.password && "errors") || ""
              }`}
              placeholder="Password :"
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
            {errors && errors.password && (
              <span className="text-danger">
                {errors && errors.password.msg}
              </span>
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
              <option value="male">Male</option>
              <option value="female">Female</option>
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
              <option value={null}>-- select department --</option>
              {departments.length > 0 &&
                departments.map((data, i) => (
                  <option key={i} value={data.id}>
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
        Add Doctor
      </button>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
    </form>
  );
}
