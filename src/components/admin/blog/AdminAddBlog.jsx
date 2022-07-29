import { useRef, useState } from "react";
import AddBlogForm from "../../form/addBlogForm";

export default function AdminAddBlog({ data }) {
  const [files, setFiles] = useState(null);
  const fileRef = useRef();

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
              <AddBlogForm const handler={data.isBloghideHandler} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End modal --> */}
    </>
  );
}
