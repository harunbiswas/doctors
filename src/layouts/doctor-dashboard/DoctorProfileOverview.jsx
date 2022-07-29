import { useState } from "react";
import DoctorCardOne from "../../components/doctor/DoctorCardOne";

export default function DoctorProfileOverview() {
  const [items, setItems] = useState([1, 1, 1, 1]);

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="pills-overview"
        role="tabpanel"
        aria-labelledby="overview-tab"
      >
        <h5 className="mb-1">Dr. Christopher Burrell</h5>
        <a href="#" className="text-primary">
          Gynecologist
        </a>
        , &nbsp;
        <a href="#" className="text-primary">
          Ph.D
        </a>
        <p className="text-muted mt-4">
          A gynecologist is a surgeon who specializes in the female reproductive
          system, which includes the cervix, fallopian tubes, ovaries, uterus,
          vagina and vulva. Menstrual problems, contraception, sexuality,
          menopause and infertility issues are diagnosed and treated by a
          gynecologist; most gynecologists also provide prenatal care, and some
          provide primary care.
        </p>
        <h6>Specialties: </h6>
        <ul className="list-unstyled mt-4">
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i> Women's health
            services
          </li>
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i> Pregnancy care
          </li>
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i> Surgical
            procedures
          </li>
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i> Specialty care
          </li>
          <li className="mt-1">
            <i className="uil uil-arrow-right text-primary"></i> Conclusion
          </li>
        </ul>
        <h6>My Team: </h6>
        <div className="row">
          {items?.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <DoctorCardOne />
            </div>
          ))}
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!--end teb pane--> */}
    </>
  );
}
