import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function SingUpFrom() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloadGroup, setBloadGroup] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState(false);

  // handlser
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: null });
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: null });
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: null });
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: null });
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    setErrors({ ...errors, phone: null });
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
    setErrors({ ...errors, gender: null });
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
    setErrors({ ...errors, height: null });
  };
  const weightHandler = (e) => {
    setWeight(e.target.value);
    setErrors({ ...errors, weight: null });
  };
  const bloadGroupHandler = (e) => {
    setBloadGroup(e.target.value);
    setErrors({ ...errors, bloadGroup: null });
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
    setErrors({ ...errors, address: null });
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
    setErrors({ ...errors, age: null });
  };
  const conditionHandler = (e) => {
    setCondition(e.target.checked);
  };

  // submit handler
  const formData = new FormData();
  const navigate = useNavigate();
  const sebmitHandler = (e) => {
    e.preventDefault();
    formData.append("files", file);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("bloadGroup", bloadGroup);
    formData.append("address", address);
    formData.append("age", age);

    const url = `${Values.BASE_URL}/patient/singup`;

    axios
      .post(url, formData)
      .then((d) => {
        navigate("/login");
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  // image handlser
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

  // handle errors
  const [errors, setErrors] = useState({});
  // message handler
  const [msg, setMsg] = useState(null);
  const msgHandler = () => {
    setMsg(null);
    location.reload();
  };
  return (
    <form onSubmit={(e) => sebmitHandler(e)} className="login-form mt-4">
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
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
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              First name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.firstName && "errors") || ""
              }`}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => firstNameHandler(e)}
            />
            {errors && errors.firstName && (
              <span className="text-danger">{errors.firstName.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Last name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.lastName && "errors") || ""
              }`}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => lastNameHandler(e)}
            />
            {errors && errors.lastName && (
              <span className="text-danger">{errors.lastName.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Your Email <span className="text-danger">*</span>
            </label>
            <input
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
              <span className="text-danger">{errors.email.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className={`form-control ${
                (errors && errors.password && "errors") || ""
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
            {errors && errors.password && (
              <span className="text-danger">{errors.password.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.phone && "errors") || ""
              }`}
              placeholder="Phone"
              value={phone}
              onChange={(e) => phoneHandler(e)}
            />
            {errors && errors.phone && (
              <span className="text-danger">{errors.phone.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Age <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.age && "errors") || ""
              }`}
              placeholder="age"
              value={age}
              onChange={(e) => ageHandler(e)}
            />
            {errors && errors.age && (
              <span className="text-danger">{errors.age.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Gender <span className="text-danger">*</span>
            </label>
            <select
              onChange={(e) => genderHandler(e)}
              className="form-control doctor-name select2input"
              name=""
              id=""
            >
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
            {errors && errors.gender && (
              <span className="text-danger">{errors.gender.msg}</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Height <span className="text-muted">(cm)</span>{" "}
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.height && "errors") || ""
              }`}
              placeholder="heaight"
              value={height}
              onChange={(e) => heightHandler(e)}
            />
            {errors && errors.height && (
              <span className="text-danger">{errors.height.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Weigth <span className="text-muted">(kg)</span>{" "}
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.weight && "errors") || ""
              }`}
              placeholder="Weight"
              value={weight}
              onChange={(e) => weightHandler(e)}
            />
            {errors && errors.weight && (
              <span className="text-danger">{errors.weight.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Bload Group <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.bloadGroup && "errors") || ""
              }`}
              placeholder="O (-)"
              value={bloadGroup}
              onChange={(e) => bloadGroupHandler(e)}
            />
            {errors && errors.bloadGroup && (
              <span className="text-danger">{errors.bloadGroup.msg}</span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                (errors && errors.address && "errors") || ""
              }`}
              placeholder="Address"
              value={address}
              onChange={(e) => addressHandler(e)}
            />
            {errors && errors.address && (
              <span className="text-danger">{errors.address.msg}</span>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input align-middle"
                type="checkbox"
                onChange={(e) => conditionHandler(e)}
                id="accept-tnc-check"
              />
              <label className="form-check-label" htmlFor="accept-tnc-check">
                I Accept{" "}
                <Link to="/terms" className="text-primary">
                  Terms And Condition
                </Link>
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-grid">
            <button className="btn btn-primary" disabled={!condition}>
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
