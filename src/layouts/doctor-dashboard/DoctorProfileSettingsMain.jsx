import axios from "axios";
import { useState } from "react";
import OkMessage from "../../components/basic/OkMessage";
import UpdateDoctorProfileFrom from "../../components/form/UpdateDoctorProfileForm";
import UpdateDoctorProfileGenarale from "../../components/form/UpdateDoctorProfileGenarale";
import Values from "../../Values";

export default function AdminDoctorProfileSettings() {
  const id =
    localStorage.getItem("login") &&
    JSON.parse(localStorage.getItem("login")).value.loginData.id;

  const [msg, setMsg] = useState("");
  const msgHandler = () => {
    setMsg(null);
  };
  const deleteDoctor = () => {
    const url = `${Values.BASE_URL}/clinic/doctor/${id}`;
    axios
      .delete(url, Values.consfig)
      .then((d) => {
        setMsg(d.data);
        location.replace("/dashboard");
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        {msg && <OkMessage msg={msg} handler={msgHandler} />}
        <h5 className="mb-1">Settings</h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="rounded shadow mt-4">
              <div className="p-4 border-bottom">
                <h6 className="mb-0">Personal Information :</h6>
              </div>

              <div className="p-4">
                <UpdateDoctorProfileFrom />
              </div>
            </div>

            {localStorage.getItem("login") &&
              JSON.parse(localStorage.getItem("login")).value.loginData.role ===
                "doctor" && (
                <div className="rounded shadow mt-4">
                  <div className="p-4 border-bottom">
                    <h6 className="mb-0">Account Notifications :</h6>
                  </div>

                  <div className="p-4">
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Old password :</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Old password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">New password :</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Re-type New password :
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Re-type New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary">
                            Save password
                          </button>
                        </div>
                        {/* <!--end col--> */}
                      </div>
                      {/* <!--end row--> */}
                    </form>
                  </div>
                </div>
              )}
          </div>
          {/* <!--end col--> */}

          <div className="col-lg-6">
            <div className="rounded shadow mt-4">
              <div className="p-4 border-bottom">
                <h6 className="mb-0">General Notifications :</h6>
              </div>

              <div className="p-4">
                <UpdateDoctorProfileGenarale />
              </div>
            </div>

            <div className="rounded shadow mt-4">
              <div className="p-4 border-bottom">
                <h6 className="mb-0">General Notifications :</h6>
              </div>

              <div className="p-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0 text-danger">Delete Account :</h5>
                </div>

                <div className="p-4">
                  <h6 className="mb-0 fw-normal">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div className="mt-4">
                    <button onClick={deleteDoctor} className="btn btn-danger">
                      Delete Account
                    </button>
                  </div>
                  {/* <!--end col--> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end teb pane--> */}
    </>
  );
}
