import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function HomeBtn() {
  return (
    <div className="back-to-home rounded d-none d-sm-block">
      <Link to="/" className="btn btn-icon btn-primary">
        <i data-feather="home" className="icons">
          <BiHomeAlt />
        </i>
      </Link>
    </div>
  );
}
