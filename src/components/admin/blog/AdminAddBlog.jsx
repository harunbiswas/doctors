import axios from "axios";
import { useRef, useState } from "react";

export default function AdminAddBlog({ data }) {
  const [files, setFiles] = useState(null);
  const fileRef = useRef();

  // handler
  const imageHandler = (e) => {
    setFiles(fileRef.current.files[0]);
  };

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiaGRhc2RkbkBnbWFpbC5jc29tcyIsImZpcnN0TmFtZSI6IkhhcnVuIEJpc3dhcyIsImxhc3ROYW1lIjoiUnViZWwiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVBdCI6IjIwMjItMDctMDFUMTg6MDA6MDAuMDAwWiIsInVwZGF0ZUF0IjoiMjAyMi0wNy0wMVQxODowMDowMC4wMDBaIiwiaWF0IjoxNjU2Nzg5MDQ2LCJleHAiOjE2NTc2NTMwNDZ9.t20HQezYwi1RGUbEbTEblIDDXvwB3TTrgXQEy5Izkv8",
    },
  };

  const subminHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", files);
    formData.append("title", "Hgarunldjf asdfjl asdlkfjlkasjdf asdlkfjlkasw");
    formData.append(
      "description",
      "Harunasdfadsssssssssssssssssssssssssssssssssssdfasdlkjflkajsdfjhoiqawerjldifrj lkasjdlkfjlaksjdlfkjlaksdjflkjalksdjflkjawslkdjflkaw efoiajewr fj cpoiw4ejikrflpkjawelorkrfj poiewjre"
    );
    formData.append("tags", "Harun");

    axios
      .put("http://localhost:5000/admin/blog/2", formData, config)
      .then((d) => {
        console.log(d);
      })
      .catch((e) => {
        console.log(Object.fromEntries(formData));
      });
  };
  return (
    <>
      {/* <!-- Start Modal --> */}
      <div
        class={`modal fade ${(data.isAddBlog && "show d-block") || ""} `}
        id="newblogadd"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-bottom p-3">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Blog
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={data.isBloghideHandler}
              ></button>
            </div>

            <div class="modal-body p-3 pt-4">
              <div class="row">
                <div class="col-md-4">
                  <div class="d-grid">
                    <p class="text-muted">
                      Upload your blog image here, Please click "Upload Image"
                      Button.
                    </p>
                    <div class="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>
                    <input
                      type="file"
                      id="input-file"
                      name="input-file"
                      accept="image/*"
                      onChange={(e) => imageHandler(e)}
                      hidden
                      ref={fileRef}
                    />
                    <label
                      class="btn-upload btn btn-primary mt-4"
                      for="input-file"
                    >
                      Upload Image
                    </label>
                  </div>
                </div>
                {/* <!--end col--> */}

                <div class="col-md-8 mt-4 mt-sm-0">
                  <div class="ms-md-4">
                    <form onSubmit={(e) => subminHandler(e)}>
                      <div class="row">
                        <div class="col-12">
                          <div class="mb-3">
                            <label class="form-label">
                              Blog Title <span class="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control"
                              placeholder="Title :"
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label"> Date : </label>
                            <input
                              name="date"
                              type="text"
                              class="form-control"
                              id="date"
                              value="09 January 2021"
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label"> Time to read : </label>
                            <input
                              name="time"
                              type="text"
                              class="form-control"
                              id="time"
                              value="5 min read"
                            />
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Tag</label>
                            <select class="form-control">
                              <option value="EY">Eye Care</option>
                              <option value="GY">Gynecologist</option>
                              <option value="PS">Psychotherapist</option>
                              <option value="OR">Orthopedic</option>
                              <option value="DE">Dentist</option>
                              <option value="GA">Gastrologist</option>
                              <option value="UR">Urologist</option>
                              <option value="NE">Neurologist</option>
                            </select>
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label">
                              Description <span class="text-danger">*</span>
                            </label>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              class="form-control"
                              placeholder="Blog description :"
                            ></textarea>
                          </div>
                        </div>
                        {/* <!--end col--> */}

                        <div class="col-lg-12 text-end">
                          <button type="submit" class="btn btn-primary">
                            Add Blog
                          </button>
                        </div>
                        {/* <!--end col--> */}
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!--end col--> */}
              </div>
              {/* <!--end row--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End modal --> */}
    </>
  );
}
