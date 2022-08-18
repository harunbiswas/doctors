import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Pagination from "../../components/basic/Pagination";
import AppointmentDetailsCard from "../../components/card/AppointmentDetailsCard";
import Values from "../../Values";

export default function AdminAppointmentMain() {
  const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [isDetails, setIsDetails] = useState(false);
  const isDetailsHandlerClose = () => {
    setIsDetails(false);
  };
  const isDetailsHandlerOpen = () => {
    setIsDetails(true);
  };

  useEffect(() => {
    const url = `${Values.BASE_URL}/admin/appointments`;
    axios
      .get(url)
      .then((d) => {
        setItems(d.data.reverse());
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="table-responsive bg-white shadow rounded">
            <table className="table mb-0 table-center">
              <thead>
                <tr>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "50px" }}
                  >
                    ID
                  </th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "180px" }}
                  >
                    Name
                  </th>
                  <th className="border-bottom p-3">Age</th>
                  <th className="border-bottom p-3">Department</th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "150px" }}
                  >
                    Date
                  </th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "220px" }}
                  >
                    Doctor
                  </th>
                  <th className="border-bottom p-3">Fees</th>
                  <th
                    className="border-bottom p-3"
                    style={{ minWidth: "150px" }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, i) => (
                  <tr key={i}>
                    <th className="p-3">{item.id}</th>
                    <td className="p-3">
                      <a href="#" className="text-dark">
                        <div className="d-flex align-items-center">
                          <span className="ms-2">{item.name}</span>
                        </div>
                      </a>
                    </td>
                    <td className="p-3">{item.age}</td>
                    <td className="p-3">{item.title}</td>
                    <td className="p-3">
                      {moment(item.data).format("MMM Do YY")}
                    </td>
                    <td className="p-3">
                      <a href="#" className="text-dark">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.doctorImg}
                            className="avatar avatar-md-sm rounded-circle border shadow"
                            alt=""
                          />
                          <span className="ms-2">
                            Dr. {item.firstName + " " + item.lastName}
                          </span>
                        </div>
                      </a>
                    </td>
                    <td className="p-3">${item.fee || "00"}/Patient</td>
                    <td className="text-end p-3">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#viewappointment"
                        onClick={isDetailsHandlerOpen}
                      >
                        <i className="uil uil-eye"></i>
                      </a>
                      {isDetails && (
                        <AppointmentDetailsCard
                          data={item}
                          handler={isDetailsHandlerClose}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!--end row--> */}

      <div className="row text-center">
        <div className="col-12 mt-4">
          <div className="d-md-flex align-items-center text-center justify-content-between">
            {items.length > 10 && <Pagination data={{ data }} />}
          </div>
        </div>
      </div>
      {/* <!--end row--> */}
    </>
  );
}
