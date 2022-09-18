import axios from "axios";
import { useEffect, useState } from "react";
import Values from "../../../Values";

export default function DepartmentsInfo({ data }) {
  const [services, setServices] = useState(data);
  useEffect(() => {
    setServices(data);
  }, [data]);

  const deleteHandler = async (e) => {
    const url = `${Values.BASE_URL}/clinic/department/${e}`;
    try {
      const data = await axios.delete(url, Values.consfig);
      console.log(data);
      location.reload();
    } catch (e) {
      console.log(e.response);
    }
  };
  return (
    <>
      <div className="row">
        {services?.map((service, i) => (
          <div key={i} className="col-xl-3 col-md-4 col-12 mt-5">
            <div className="card features feature-primary bg-transparent text-center p-5 position-relative">
              <div className="w-100 d-flex justify-content-center">
                <div className="icon text-center rounded-md ">
                  <i className="ri-eye-fill h3 mb-0"></i>
                </div>
              </div>

              <div className="card-body p-0 mt-3">
                <h3 className="title text-dark h5">{service.title}</h3>
                <p className="text-muted mt-3">{service.discription}</p>
              </div>
              <button
                className="btn btn-denger btn-outline-danger position-absolute"
                style={{
                  top: "5px",
                  right: "5px",
                }}
                onClick={(e) => deleteHandler(service.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
