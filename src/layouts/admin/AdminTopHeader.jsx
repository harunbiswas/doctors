import TopHeaderBtns from "../../components/admin/TopHeaderBtns";

export default function AdminTopHeader({ handler }) {
  return (
    <>
      <div className="top-header">
        <div className="header-bar d-flex justify-content-between border-bottom">
          <div className="d-flex align-items-center">
            <a href="#" className="logo-icon">
              <img
                src="../assets/images/logo-icon.png"
                height="30"
                className="small"
                alt=""
              />
              <span className="big">
                <img
                  src="../assets/images/logo-dark.png"
                  height="24"
                  className="logo-light-mode"
                  alt=""
                />
                <img
                  src="../assets/images/logo-light.png"
                  height="24"
                  className="logo-dark-mode"
                  alt=""
                />
              </span>
            </a>
            <a
              onClick={handler}
              id="close-sidebar"
              className="btn btn-icon btn-pills btn-soft-primary ms-2"
              href="#"
            >
              <i className="uil uil-bars"></i>
            </a>
            <div className="search-bar p-0 d-none d-md-block ms-2">
              <div id="search" className="menu-search mb-0">
                <form
                  role="search"
                  method="get"
                  id="searchform"
                  className="searchform"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control border rounded-pill"
                      name="s"
                      id="s"
                      placeholder="Search Keywords..."
                    />
                    <input type="submit" id="searchsubmit" value="Search" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* top header btns  */}
          <TopHeaderBtns />
        </div>
      </div>
    </>
  );
}
