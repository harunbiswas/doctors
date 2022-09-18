import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function UpdateDoctorProfileGenarale() {
  // data
  const [degree, setDegree] = useState("");
  const [fee, setFee] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [bio, setBio] = useState("");

  // handler
  const handlerDegree = (e) => {
    setDegree(e.target.value);
  };

  const handlerFee = (e) => {
    setFee(e.target.value);
  };

  const handlerFacebook = (e) => {
    setFacebook(e.target.value);
  };

  const handlerInstagram = (e) => {
    setInstagram(e.target.value);
  };

  const handlerLinkedin = (e) => {
    setLinkedin(e.target.value);
  };

  const handlerTwitter = (e) => {
    setTwitter(e.target.value);
  };

  const handlerBio = (e) => {
    setBio(e.target.value);
  };

  //   face data
  const id =
    useParams().id ||
    (localStorage.getItem("login") &&
      JSON.parse(localStorage.getItem("login")).value.loginData.id);

  useEffect(() => {
    const url = `${Values.BASE_URL}/clinic/doctor/${id}`;

    axios
      .get(url)
      .then((d) => {
        setDegree(d.data.degree);
        setFee(d.data.fee);
        setFacebook(d.data.facebook);
        setInstagram(d.data.instagram);
        setLinkedin(d.data.linkedin);
        setTwitter(d.data.twitter);
        setBio(d.data.bio);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      degree,
      fee,
      facebook,
      linkedin,
      twitter,
      instagram,
      bio,
    };
    const url = `${Values.BASE_URL}/clinic/doctor/${id || userId}`;
    axios
      .put(url, data, Values.consfig)
      .then((d) => {
        setMsg(d.data);
        location.reload();
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  // messate4
  const [msg, setMsg] = useState("");
  const msgHandler = () => {
    setMsg(null);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Degree</label>
            <input
              name="degree"
              id="degree"
              type="text"
              className={`form-control ${(false && "errors") || ""}`}
              placeholder="Degree :"
              value={degree}
              onChange={(e) => handlerDegree(e)}
            />
          </div>
        </div>
        {/* <!--end col--> */}

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Fee</label>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-white border border-end-0 text-dark"
                id="fb-id"
              >
                <strong data-feather="facebook" class="fea icon-sm">
                  $
                </strong>
              </span>
              <input
                name="Fee"
                id="Fee"
                type="text"
                className={`form-control ${(false && "errors") || ""}`}
                placeholder="Fee :"
                value={fee}
                onChange={(e) => handlerFee(e)}
              />
            </div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Facebook</label>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-white border border-end-0 text-dark"
                id="fb-id"
              >
                <i data-feather="facebook" class="fea icon-sm">
                  <FaFacebook />
                </i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="fb-id"
                value={facebook}
                onChange={(e) => handlerFacebook(e)}
              />
            </div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Instagram</label>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-white border border-end-0 text-dark"
                id="fb-id"
              >
                <i data-feather="facebook" class="fea icon-sm">
                  <FaInstagram />
                </i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="fb-id"
                value={instagram}
                onChange={(e) => handlerInstagram(e)}
              />
            </div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Linkedin</label>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-white border border-end-0 text-dark"
                id="linke-pro"
              >
                <i data-feather="linkedin" class="fea icon-sm">
                  <FaLinkedinIn />
                </i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="linke-pro"
                value={linkedin}
                onChange={(e) => handlerLinkedin(e)}
              />
            </div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Twitter</label>
            <div class="input-group flex-nowrap">
              <span
                class="input-group-text bg-white border border-end-0 text-dark"
                id="twitter-id"
              >
                <i data-feather="twitter" class="fea icon-sm">
                  <FaTwitter />
                </i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="twitter-id"
                value={twitter}
                onChange={(e) => handlerTwitter(e)}
              />
            </div>
          </div>
        </div>
        {/* <!--end col--> */}

        <div class="col-md-12">
          <div class="mb-3">
            <label class="form-label">Your Bio Here</label>
            <textarea
              name="comments"
              id="comments"
              rows="3"
              class="form-control"
              placeholder="Bio :"
              value={bio}
              onChange={(e) => handlerBio(e)}
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Update Profile
      </button>
      {msg && <OkMessage msg={msg} handler={msgHandler} />}
    </form>
  );
}
