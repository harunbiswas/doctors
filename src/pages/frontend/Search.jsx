import { useContext, useEffect, useState } from "react";
import ClinicCardFrontend from "../../components/card/ClinicCardFrontend";
import DoctorCard from "../../components/doctor/DoctorCard";
import MultipleMap from "../../components/map/MultipleMap";
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
                  {(items &&
                    items.length > 0 &&
                    items?.map((item, i) => (
                      <div key={i} className="col-12 my-2 py-1">
                        {(activeBtn === "doctors" && (
                          <DoctorCard data={item} />
                        )) || <ClinicCardFrontend data={item} />}
                      </div>
                    ))) || (
                    <h2 className="text-danger text-center py-3">
                      No data found
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 overflow-hidden rounded-3">
              <MultipleMap info={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
