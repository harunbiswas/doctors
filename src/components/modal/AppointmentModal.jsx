import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useParams } from "react-router-dom";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function AppointmentModal({ data, handler }) {
  const date = new Date();
  const loginData =
    JSON.parse(localStorage.getItem("login"))?.value.loginData || "";
  const [userData, setUserData] = useState({});

  const [errors, setErrors] = useState();
  const isValidDateHandler = (e) => {
    if (
      e._d.toLocaleDateString("locale", { weekday: "long" }) ===
        timeTable.day &&
      e._d.getTime() > new Date().getTime()
    ) {
      return (e._isValid = true);
    }
  };
  const { id } = useParams();
  const [timeTable, setTimeTable] = useState({});

  useEffect(() => {
    const url = `${Values.BASE_URL}/doctor/time/${id}`;
    axios
      .get(url)
      .then((d) => {
        setTimeTable(d.data[0]);
      })
      .catch((e) => {
        console.log(e.response);
      });

    // subscription
    if (loginData) {
      const url1 = `${Values.BASE_URL}/subscription`;
      axios
        .get(url1, Values.consfig)
        .then((d) => {
          setSubscription(d.data[0]);
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
    // useData
    if (loginData) {
      const url2 = `${Values.BASE_URL}/patient/list/${loginData.id}`;
      axios
        .get(url2)
        .then((d) => {
          setUserData(d.data);
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  }, []);
  const [subscription, setSubscription] = useState();
  // appointment handler
  const [appoData, setAppoData] = useState({
    doctorId: data.id,
    clinicId: "",
    departmentId: "",
    date: "",
    name: "",
    email: "",
    phone: "",
    comments: "",
    payment: "",
  });
  // user get data handler
  useEffect(() => {
    if (loginData || subscription) {
      setAppoData({
        ...appoData,
        name: loginData.firstName + " " + loginData.lastName,
        email: loginData.email,
        clinicId: data.clinicId,
        doctorId: data.id,
        departmentId: data.departmentId,
        phone: userData.phone,
        age: userData.age,
      });
    }
  }, [subscription, data, userData]);

  // user data handler

  const datehadnler = (e) => {
    setAppoData({
      ...appoData,
      date: moment(e._d).format("YYYY-MM-DD"),
    });
    setErrors({
      ...errors,
      date: null,
    });
  };
  const appoDatahandler = (e) => {
    setAppoData({
      ...appoData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(appoData);
    try {
      const url = `${Values.BASE_URL}/appointment`;
      const result = await axios.post(url, appoData);
      setMsg(result.data);
    } catch (e) {
      setErrors(e.response.data);
    }
  };

  const [msg, setMsg] = useState(null);
  const msgHandler = () => {
    handler();
    setMsg(null);
  };

  return (
    <div
      className="modal show fade d-block"
      id="acceptappointment"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content position-relative pt-4">
          <button
            className="position-absolute btn btn-outline-danger "
            style={{
              top: "10px",
              right: "10px",
              fontSize: "22px",
              cursor: "pointer",
            }}
            onClick={handler}
          >
            X
          </button>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div className="row p-4">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Date<span className="text-danger">*</span>
                  </label>
                  <Datetime
                    open={true}
                    locale="en"
                    input={false}
                    onChange={(e) => datehadnler(e)}
                    isValidDate={(e) => isValidDateHandler(e)}
                    timeFormat={false}
                    className={`form-control ${
                      (errors && errors.date && "errors") || ""
                    }`}
                  />
                  {errors && errors.date && (
                    <span className="error-msg text-danger">
                      {errors.date.msg}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">
                    Comments <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    value={appoData.message}
                    onChange={(e) => appoDatahandler(e)}
                    rows="4"
                    className="form-control"
                    placeholder="Your Message :"
                  ></textarea>
                </div>
              </div>
              {/* <!--end col--> */}

              <>
                {" "}
                <h4>payment?</h4>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <input
                      onChange={(e) => appoDatahandler(e)}
                      name="payment"
                      value="cash"
                      type="radio"
                      id="paymentCash"
                    />
                    <label htmlFor="paymentCash " className="form-label">
                      <strong className="px-2">Cash Payment</strong>
                    </label>
                    {errors && errors.payment && (
                      <span className="error-msg text-danger">
                        {errors.payment.msg}
                      </span>
                    )}
                  </div>
                </div>
              </>

              <button className="btn btn-primary text-uppercase" type="submit">
                appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
