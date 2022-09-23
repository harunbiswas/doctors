import { useContext, useEffect, useState } from "react";
import ClinicCard from "../../components/card/ClinicCard";
import DoctorCard from "../../components/doctor/DoctorCard";
import Context from "../../context/Context";
import SearchHero from "../../layouts/frontend/basic/SearchHero";

export default function Search() {
  const [items, setItems] = useState([]);
  const context = useContext(Context);
  const { searchData, activeBtn } = context;
  useEffect(() => {
    setItems(searchData);
  }, [searchData]);
  return (
    <div className="search">
      <SearchHero />
      <div className="search-main my-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="top d-flex justify-content-between align-items-center mb-4">
                <p className="text text-uppercase fs-2">
                  {items.length} results
                </p>
                <select className="px-4 py-2 rounded bg-white" name="" id="">
                  <option value="">Recommended</option>
                  <option value="">Recommended</option>
                  <option value="">Recommended</option>
                </select>
              </div>

              <div
                className="card px-3"
                style={{
                  height: "700px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <div className="row ">
                  {items?.map((item, i) => (
                    <div key={i} className="col-12 my-2 py-1">
                      {(activeBtn === "doctors" && (
                        <DoctorCard data={item} />
                      )) || <ClinicCard data={item} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5 overflow-hidden rounded-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14501.878533145651!2d30.594126639469366!3d24.676377696256033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1438e614f64568c5%3A0xb87ac16373a6efc9!2sBaris%2C%20Kharga%2C%20New%20Valley%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbd!4v1663186908022!5m2!1sen!2sbd"
                allowFullScreen=""
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
