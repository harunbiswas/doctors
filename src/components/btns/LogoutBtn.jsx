import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const navigate = useNavigate();
  // do logout
  const logoutHandler = () => {
    localStorage.clear("login");
    navigate("/");
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
