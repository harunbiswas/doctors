import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function DoctorCardTwo({ data }) {
  return (
    <>
      <div className="card team border-0 rounded shadow overflow-hidden d">
        <div className="team-img position-relative">
          <img src={data?.image} className="img-fluid" alt="" />
          <ul className="list-unstyled team-social mb-0">
            <li>
              <a
                href={`https://facebook.com/${data.facebook}`}
                target="blanck"
                className="btn btn-icon btn-pills btn-soft-primary"
              >
                <i data-feather="facebook" className="icons">
                  <FiFacebook />
                </i>
              </a>
            </li>
            <li className="mt-2">
              <a
                href={`https://linkedin.com${data.linkedin}`}
                target="blanck"
                className="btn btn-icon btn-pills btn-soft-primary"
              >
                <i data-feather="linkedin" className="icons">
                  <FiLinkedin />
                </i>
              </a>
            </li>
            {data?.github && (
              <li className="mt-2">
                <a
                  href={"https://github.com/" + data?.github}
                  target="blanck"
                  className="btn btn-icon btn-pills btn-soft-primary"
                >
                  <i data-feather="github" className="icons">
                    <TbBrandGithub />
                  </i>
                </a>
              </li>
            )}
            <li className="mt-2">
              <a
                href={"https://twitter.com/" + data?.twitter}
                target="blanck"
                className="btn btn-icon btn-pills btn-soft-primary"
              >
                <i data-feather="twitter" className="icons">
                  <FiTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body content text-center">
          <Link
            to={`/doctor/${data && data.userId}`}
            className="title text-dark h5 d-block mb-0"
          >
            {data && data.firstName + " " + data.lastName}
          </Link>
          <small className="text-muted speciality">{data && data.title}</small>
        </div>
      </div>
    </>
  );
}
