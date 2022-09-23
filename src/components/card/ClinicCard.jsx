import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ClinicCard({ data }) {
  const [starts, setStarts] = useState([1, 1, 1, 1, 1]);
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };
  return (
    <div className="card team border-0 rounded shadow overflow-hidden">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="team-person position-relative overflow-hidden">
            <img src={data?.image} className="img-fluid" alt="" />

            <ul className="list-unstyled team-like">
              <li>
                <a
                  onClick={favoriteHandler}
                  className="btn btn-icon btn-pills btn-soft-danger"
                >
                  <i data-feather="heart" className="icons">
                    {(isFavorite && <AiTwotoneHeart />) || <AiOutlineHeart />}
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <Link
              to={`/admin/clinic/${data?.userId}`}
              className="title text-dark h5 d-block mb-0"
            >
              {data?.firstName}
            </Link>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <ul className="list-unstyled mb-0">
                {starts?.map((start, i) => (
                  <li key={i} className="list-inline-item">
                    <i className="mdi mdi-star text-warning"></i>
                  </li>
                ))}
              </ul>
              <p className="text-muted mb-0">5 Star</p>
            </div>
            <ul className="list-unstyled mt-2 mb-0">
              <li className="d-flex">
                <i className="ri-map-pin-line text-primary align-middle"></i>
                <small className="text-muted ms-2">{data?.address}</small>
              </li>
              <li className="d-flex mt-2">
                <i className="ri-phone-line text-primary align-middle"></i>
                <small className="text-muted ms-2">{data?.phone}</small>
              </li>
              <li className="d-flex mt-2">
                <i className="ri-message-line text-primary align-middle"></i>
                <small className="text-muted ms-2">{data?.email}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
