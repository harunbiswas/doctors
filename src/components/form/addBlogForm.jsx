import axios from "axios";
import { useRef, useState } from "react";
import Values from "../../Values";
import OkMessage from "../basic/OkMessage";

export default function AddBlogForm({ handler }) {
  const [file, setFile] = useState(null);
  const fileRef = useRef();
  const [preview, setPreview] = useState(null);
  const [okMessage, setOkMessage] = useState(null);

  const okMessageHandler = () => {
    setOkMessage(null);
  };

  // handler
  const imageHandler = (e) => {
    setFile(fileRef.current.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setErrors({ ...errors, image: null });
  };

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      token: JSON.parse(localStorage.getItem("login")).value.token,
    },
  };

  // blog handler
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // input change handler
  const titleHandler = (e) => {
    setTitle(e.target.value);
    setErrors({ ...errors, title: null });
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    setErrors({ ...errors, description: null });
  };

  // submit handler
  const subminHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", title);
    formData.append("description", description);

    const url = `${Values.BASE_URL}/admin/blog`;

    axios
      .post(url, formData, config)
      .then((d) => {
        setOkMessage(d.data);
        console.log(d.data);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
      });
  };

  // errors handler
  const [errors, setErrors] = useState({});
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="d-grid">
          {!preview && (
            <p className="text-muted">
              Upload your blog image here, Please click "Upload Image" Button.
            </p>
          )}
          <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1">
            {preview && <img height="260px" src={preview} alt="" />}
          </div>
          <input
            type="file"
            id="input-file"
            name="input-file"
            accept="image/*"
            onChange={(e) => imageHandler(e)}
            hidden
            ref={fileRef}
          />
          {errors && errors.image && (
            <span className="text-danger">{errors.image.msg}</span>
          )}
          <label className="btn-upload btn btn-primary mt-4" for="input-file">
            Upload Image
          </label>
        </div>
      </div>
      {/* <!--end col--> */}

      <div className="col-md-8 mt-4 mt-sm-0">
        <div className="ms-md-4">
          <form onSubmit={(e) => subminHandler(e)}>
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">
                    Blog Title <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className={`form-control ${
                      (errors && errors.title && "errors") || ""
                    }`}
                    placeholder="Title :"
                    onChange={(e) => titleHandler(e)}
                  />
                  {errors && errors.title && (
                    <span className="text-danger">{errors.title.msg}</span>
                  )}
                </div>
              </div>
              {/* <!--end col--> */}

              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    rows="4"
                    className={`form-control ${
                      (errors && errors.description && "errors") || ""
                    }`}
                    placeholder="Blog description :"
                    onChange={(e) => descriptionHandler(e)}
                  ></textarea>
                  {errors && errors.description && (
                    <span className="text-danger">
                      {errors.description.msg}
                    </span>
                  )}
                </div>
              </div>
              {/* <!--end col--> */}

              <div className="col-lg-12 text-end">
                <button type="submit" className="btn btn-primary">
                  Add Blog
                </button>
              </div>
              {/* <!--end col--> */}
            </div>
          </form>
        </div>
      </div>
      {okMessage && <OkMessage msg={okMessage} handler={okMessageHandler} />}
    </div>
  );
}
