import axios from "axios";
import { useRef, useState } from "react";
import Values from "../../Values";

export default function AddClinicFrom() {
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
  };

  // form controler
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // handler
  const nameHandler = (e) => {
    setName(e.target.value);
    setErrors({ name: "" });
  };

  const PhoneHandler = (e) => {
    setPhone(e.target.value);
    setErrors({ phone: null });
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrors({ email: null });
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrors({ password: null });
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
    setErrors({ address: null });
  };

  const latitudeHandler = (e) => {
    setLatitude(e.target.value);
    setErrors({ latitude: null });
  };

  const longitudeHandler = (e) => {
    setLongitude(e.target.value);
    setErrors({ longitude: null });
  };

  //   errors hanldler
  const [errors, setErrors] = useState({});

  // submit handler
  const formData = new FormData();
  const submitHandler = (e) => {
    e.preventDefault();
    const url = `${Values.BASE_URL}/clinic/signup`;
    formData.append("files", file);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    // post data
    console.log(url);
    axios
      .post(url, formData)
      .then((d) => {
        console.log(d);
      })
      .catch((e) => {
        setErrors(e.response.data);
        console.log(e.response.data);
      });
  };
  console.log(errors);

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
          <button onClick={uploadImg} className="btn btn-primary">
            Upload
          </button>
          <button onClick={removeImg} className="btn btn-soft-primary ms-2">
            Remove
          </button>
        </div>
        <div className="">
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
            <label className="form-label">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              className={`form-control ${(errors.name && "errors") || ""}`}
              placeholder=" Name :"
              value={name}
              onChange={(e) => nameHandler(e)}
            />
            {errors.name && (
              <span className="text-danger">{errors.name.msg}</span>
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
              className={`form-control ${(errors.phone && "errors") || ""}`}
              placeholder="Phone no. :"
              value={phone}
              onChange={(e) => PhoneHandler(e)}
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone.msg}</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              id="email"
              type="email"
              className={`form-control ${(errors.email && "errors") || ""}`}
              placeholder="Your email :"
              value={email}
              onChange={(e) => emailHandler(e)}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.msg}</span>
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
              className={`form-control ${(errors.password && "errors") || ""}`}
              placeholder="Password :"
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              name="address"
              id="address"
              type="text"
              className={`form-control ${(errors.address && "errors") || ""}`}
              placeholder="Address :"
              value={address}
              onChange={(e) => addressHandler(e)}
            />
            {errors.address && (
              <span className="text-danger">{errors.address.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              name="Latitude"
              id="Latitude"
              type="text"
              className={`form-control ${(errors.latitude && "errors") || ""}`}
              placeholder="Latitude :"
              value={latitude}
              onChange={(e) => latitudeHandler(e)}
            />
            {errors.latitude && (
              <span className="text-danger">{errors.latitude.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">longitude</label>
            <input
              name="longitude"
              id="longitude"
              type="text"
              className={`form-control ${(errors.longitude && "errors") || ""}`}
              placeholder="longitude :"
              value={longitude}
              onChange={(e) => longitudeHandler(e)}
            />
            {errors.longitude && (
              <span className="text-danger">{errors.longitude.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}
      </div>
      {/* <!--end row--> */}

      <button type="submit" className="btn btn-primary">
        Add Clinic
      </button>
    </form>
  );
}
