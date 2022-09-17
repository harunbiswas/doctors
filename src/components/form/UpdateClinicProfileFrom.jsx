import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function UpdateClinicProfileFrom() {
  const id =
    useParams().id ||
    (localStorage.getItem("login") &&
      JSON.parse(localStorage.getItem("login")).value.loginData.id);

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
      .get(`${Values.BASE_URL}/clinic/list/${id}`, Values.consfig)
      .then((d) => {
        setName(d.data.firstName);
        setEmail(d.data.email);
        setPhone(d.data.phone);
        setAddress(d.data.address);
        setLatitude(d.data.latitude);
        setLongitude(d.data.longitude);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  // form controler
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // handler
  const nameHandler = (e) => {
    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  };

  const emailHanler = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const PhoneHandler = (e) => {
    setPhone(e.target.value);
    setErrors({ ...errors, phone: null });
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
    setErrors({ ...errors, address: null });
  };

  const latitudeHandler = (e) => {
    setLatitude(e.target.value);
    setErrors({ ...errors, latitude: null });
  };
  const longitudeHandler = (e) => {
    setLongitude(e.target.value);
    setErrors({ ...errors, longitude: null });
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
      name,
      email,
      phone,
      address,
      latitude,
      longitude,
    };
    const url = `${Values.BASE_URL}/clinic/update/${id}`;

    axios
      .put(url, data, Values.consfig)
      .then((d) => {
        setMsg(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return (
    <form className="mt-4" onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className={`form-control ${
                (errors && errors.firstName && "errors") || ""
              }`}
              placeholder="Name :"
              value={name}
              onChange={(e) => nameHandler(e)}
            />
            {errors && errors.name && (
              <span className="text-danger">{errors.name.msg}</span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className={`form-control ${
                (errors && errors.email && "errors") || ""
              }`}
              placeholder="Email :"
              value={email}
              onChange={(e) => emailHanler(e)}
            />
            {errors && errors.email && (
              <span className="text-danger">{errors.email.msg}</span>
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

        {/* <!--end col--> */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              name="address"
              id="address"
              type="text"
              className={`form-control ${
                (errors && errors.address && "errors") || ""
              }`}
              placeholder="address"
              value={address}
              onChange={(e) => addressHandler(e)}
            />
            {errors && errors.address && (
              <span className="text-danger">
                {errors && errors.address.msg}
              </span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Latitue</label>
            <input
              name="Latitue"
              id="Latitue"
              type="text"
              className={`form-control ${
                (errors && errors.latitude && "errors") || ""
              }`}
              placeholder="Latitue"
              value={latitude}
              onChange={(e) => latitudeHandler(e)}
            />
            {errors && errors.latitude && (
              <span className="text-danger">
                {errors && errors.latitude.msg}
              </span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">logitude</label>
            <input
              name="logitude"
              id="logitude"
              type="text"
              className={`form-control ${
                (errors && errors.longitude && "errors") || ""
              }`}
              placeholder="logitude"
              value={longitude}
              onChange={(e) => longitudeHandler(e)}
            />
            {errors && errors.longitude && (
              <span className="text-danger">
                {errors && errors.longitude.msg}
              </span>
            )}
          </div>
        </div>
        {/* <!--end col--> */}
      </div>

      <button type="submit" className="btn btn-primary">
        Update Profile
      </button>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
    </form>
  );
}
