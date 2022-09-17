import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import OkMessage from "../../components/basic/OkMessage";
import UpdateClinicProfileFrom from "../../components/form/UpdateClinicProfileFrom";
import Values from "../../Values";

export default function AdminClinicSettins() {
  const { id } = useParams();
  const [msg, setMsg] = useState("");
  const msgHandler = () => {
    setMsg(null);
  };
  const deleteDoctor = () => {
    const url = `${Values.BASE_URL}/clinic/delete/${id}`;
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
        class="tab-pane fade show active"
        id="pills-settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        {msg && <OkMessage msg={msg} handler={msgHandler} />}
        <h5 class="mb-1">Settings</h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="rounded shadow mt-4">
              <div class="p-4 border-bottom">
                <h6 class="mb-0">Personal Information :</h6>
              </div>

              <div className="p-4">
                <UpdateClinicProfileFrom />
              </div>
            </div>

            {localStorage.getItem("login") &&
              JSON.parse(localStorage.getItem("login")).value.loginData.role ===
                "doctor" && (
                <div class="rounded shadow mt-4">
                  <div class="p-4 border-bottom">
                    <h6 class="mb-0">Account Notifications :</h6>
                  </div>

                  <div class="p-4">
                    <form>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">Old password :</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Old password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">New password :</label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">
                              Re-type New password :
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Re-type New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12 mt-2 mb-0">
                          <button class="btn btn-primary">Save password</button>
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

          <div class="col-lg-6">
            <div class="rounded shadow mt-4">
              <div class="p-4 border-bottom">
                <h6 class="mb-0">General Notifications :</h6>
              </div>

              <div class="p-4">
                <div class="p-4 border-bottom">
                  <h5 class="mb-0 text-danger">Delete Account :</h5>
                </div>

                <div class="p-4">
                  <h6 class="mb-0 fw-normal">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div class="mt-4">
                    <button onClick={deleteDoctor} class="btn btn-danger">
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
