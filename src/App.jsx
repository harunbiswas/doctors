import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";
import Context from "./context/Context";
import Roots from "./roots/Roots";

function App() {
  // search control
  const [department, setDepartment] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [btns, setBtns] = useState(["clinics", "doctors"]);
  const [activeBtn, setActiveBtn] = useState("clinics");
  const btnHandler = (e) => {
    setActiveBtn(e);
    setSearchData([]);
  };

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [address, setAddress] = useState("");
  const handleChange = (e) => {
    setAddress(e);
    setErrors({ ...errors, latitude: null, longitude: null });
  };

  const handleSelect = (e) => {
    setAddress(e);
    setErrors({ ...errors, latitude: null, longitude: null });
  };

  const departmentHandler = (e) => {
    setDepartment(e.target.value);
    setErrors({ ...errors, department: null });
  };

  const clinicNameHandler = (e) => {
    setClinicName(e.target.value);
    setErrors({ ...errors, name: null });
  };

  const [searchData, setSearchData] = useState([]);
  const searchHandler = (e) => {};

  const [errors, setErrors] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{
            errors,
            setErrors,
            searchData,
            setSearchData,
            searchHandler,
            department,
            departmentHandler,
            clinicName,
            btns,
            activeBtn,
            setBtns,
            setActiveBtn,
            btnHandler,
            location,
            setLocation,
            address,
            setAddress,
            handleChange,
            handleSelect,
            clinicNameHandler,
          }}
        >
          <Roots />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
