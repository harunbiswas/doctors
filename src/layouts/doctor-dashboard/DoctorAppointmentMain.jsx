import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import AppointmentDetailsCard from "../../components/card/AppointmentDetailsCard";
import Values from "../../Values";

export default function DoctorAppointmentMain() {
  const [items, setItems] = useState([]);
  const [isDetails, setIsDetails] = useState(false);
  const detailsClose = () => {
    setIsDetails(false);
  };
  const detailsOpen = () => {
    setIsDetails(true);
  };
  useEffect(() => {
    const url = `${Values.BASE_URL}/doctor/appointments`;
    axios(url, Values.consfig)
      .then((d) => {
        setItems(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-lg-6 col-md-4">
          <h5 className="mb-0">Appointments</h5>
        </div>
      </div>
      {/* <!--end row--> */}

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
                    #
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
                    style={{ minWidth: "150px" }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, i) => (
                  <tr key={i}>
                    <th className="p-3">{i}</th>
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
                      {moment(item.date).format("MMM Do YY")}
                    </td>

                    <td className="text-end p-3">
                      <a
                        href="#"
                        className="btn btn-icon btn-pills btn-soft-primary mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#viewappointment"
                        onClick={detailsOpen}
                      >
                        <i className="uil uil-eye"></i>
                      </a>
                      {isDetails && (
                        <AppointmentDetailsCard
                          data={item}
                          handler={detailsClose}
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

      {/* <!--end row--> */}
    </>
  );
}
