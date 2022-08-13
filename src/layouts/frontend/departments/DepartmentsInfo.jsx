import { useEffect, useState } from "react";

export default function DepartmentsInfo({ data }) {
  const [services, setServices] = useState(data);
  useEffect(() => {
    setServices(data);
  }, [data]);
  return (
    <>
      <div className="row">
        {services?.map((service, i) => (
          <div key={i} className="col-xl-3 col-md-4 col-12 mt-5">
            <div className="card features feature-primary bg-transparent border-0">
              <div className="icon text-center rounded-md">
                <i className="ri-eye-fill h3 mb-0"></i>
              </div>
              <div className="card-body p-0 mt-3">
                <a href="departments.html" className="title text-dark h5">
                  {service.title}
                </a>
                <p className="text-muted mt-3">{service.discription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
