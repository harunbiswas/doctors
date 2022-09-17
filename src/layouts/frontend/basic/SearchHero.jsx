import bgImg from "../../../assets/images/bg/about.jpg";
import SearchForm from "../../../components/form/SearchForm";

export default function SearchHero() {
  return (
    <>
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url('${bgImg}') center center` }}
      >
        <div className="bg-overlay bg-overlay-dark"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <SearchForm />
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
