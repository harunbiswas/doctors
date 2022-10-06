import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Values from "../../Values";

export default function PriceTable() {
  const [tables, setTabels] = useState([
    {
      id: "1",
      name: "Plus",
      fee: "100",
      time: "month",
      feture: [
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
      ],
    },
    {
      id: "2",
      name: "premium",
      fee: "1000",
      time: "year",
      feture: [
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
        { title: "unlimited doctor" },
      ],
    },
  ]);
  const [btnText, setBtnText] = useState("subscriptions");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("login"))
  );
  const url = `${Values.BASE_URL}/subscription`;
  const subsCriptionHandler = async (e) => {
    if (loginData && loginData.value.loginData.role === "clinic") {
      try {
        if (btnText === "upgrade") {
          const result = await axios.put(url, e, Values.consfig);
        } else {
          const result = await axios.post(url, e, Values.consfig);
          setBtnText("upgrade");
        }
      } catch (e) {
        console.log(e.response);
      }
    } else {
      navigate("/clinicSingup", true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      axios
        .get(url, Values.consfig)
        .then((d) => {
          if (d.data && d.data.length > 0) {
            setBtnText("upgrade");
          }
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  }, []);
  return (
    <div className="pricing ">
      <div class="row">
        {tables?.map((table) => (
          <div key={table?.id} class="col-lg-6">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  {table?.name}
                </h5>
                <h6 class="card-price text-center">
                  ${table?.fee}
                  <span class="period">/{table?.time}</span>
                </h6>
                <hr />
                <ul class="fa-ul">
                  {table?.feture?.map((data, i) => (
                    <li key={i}>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      <strong>{data?.title}</strong>
                    </li>
                  ))}
                </ul>
                <div class="d-grid">
                  <button
                    onClick={(e) => subsCriptionHandler(table)}
                    class="btn btn-primary text-uppercase"
                  >
                    {btnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
