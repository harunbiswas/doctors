export default function Video({ src, hideHandler, show }) {
  return (
    <div
      class={`video modal fade  ${(show && "show d-block") || ""}`}
      id="watchvideomodal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content video-modal rounded ">
          <div onClick={hideHandler} className="close">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <video class="w-100" controls autoplay muted loop>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            {/* <!--Browser does not support <video> tag --> */}
          </video>
        </div>
      </div>
    </div>
  );
}
