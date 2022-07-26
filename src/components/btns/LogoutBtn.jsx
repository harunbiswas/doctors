export default function LogoutBtn() {
  // do logout
  const logoutHandler = () => {
    localStorage.clear("login");
    location.reload();
  };
  return (
    <button
      onClick={logoutHandler}
      className="dropdown-item text-dark"
      href="lock-screen.html"
    >
      <span className="mb-0 d-inline-block me-1">
        <i className="uil uil-sign-out-alt align-middle h6"></i>
      </span>{" "}
      Logout
    </button>
  );
}
