import { Link } from "react-router-dom";

export default function ItemShowButton() {
  return (
    <>
      <div className="row text-center">
        <div className="col-12">
          <ul className="pagination justify-content-center mb-0 list-unstyled">
            <li className="page-item">
              <Link className="page-link" to="" aria-label="Previous">
                Prev
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="" aria-label="Next">
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
