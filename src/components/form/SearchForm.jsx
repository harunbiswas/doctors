import axios from "axios";
import { useContext, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import Values from "../../Values";

export default function SearchForm() {
  const context = useContext(Context);

  const {
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
    setSearchData,
    errors,
    setErrors,
  } = context;
  useEffect(() => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLocation({ latitude: latLng.lat, longitude: latLng.lng });
      })
      .catch((error) => {
        setLocation({ latitude: null, longitude: null });
      });
  }, [address]);

  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    let url;
    url = `${Values.BASE_URL}/search/${activeBtn}`;
    const data = {
      latitude: location.latitude,
      longitude: location.longitude,
      department,
      name: clinicName,
    };

    axios
      .post(url, data)
      .then((d) => {
        setSearchData(d.data);
        navigate("/search");
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };

  return (
    <div className="mt-4 pt-2">
      <form
        className="rounded text-start shadow p-4 bg-white-50"
        onSubmit={(e) => searchHandler(e)}
      >
        <div className="row align-items-start">
          <div className="col-md">
            <div
              className="input-group bg-white border rounded position-relative "
              style={{ opacity: 0.7, zIndex: "99" }}
            >
              <span className="input-group-text bg-white border-0">
                <i className="ri-map-pin-line text-primary h5 fw-normal mb-0"></i>
              </span>
              <PlacesAutocomplete
                value={address}
                onChange={(e) => handleChange(e)}
                onSelect={(e) => handleSelect(e)}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Location",
                        className: ` form-control border-0`,
                        name: "location",
                      })}
                    />
                    <div
                      className="autocomplete-dropdown-container position-absolute"
                      style={{
                        left: "0",
                        width: "100%",
                        borderRadius: "0 0 4px 4px",
                        overflow: "hidden",
                      }}
                    >
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion, i) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? {
                              backgroundColor: "#fafafa",
                              cursor: "pointer",
                              padding: " 5px 20px",
                            }
                          : {
                              backgroundColor: "#fff",
                              padding: "5px 20px",
                              cursor: "pointer",
                            };
                        return (
                          <div
                            key={i}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            {errors && (errors.latitude || errors.longitude) && (
              <span className="error-msg text-danger">
                {errors.latitude.msg || errors.longitude.msg}
              </span>
            )}
          </div>
          {/* <!--end col--> */}

          <div className="col-md mt-4 mt-sm-0">
            <div
              className="input-group bg-white border rounded"
              style={{ opacity: 0.7 }}
            >
              {(activeBtn === "clinics" && (
                <>
                  <span className="input-group-text bg-white border-0">
                    <i className="text-primary  fa-solid fa-house-medical-flag"></i>
                  </span>
                  <input
                    onChange={(e) => clinicNameHandler(e)}
                    value={clinicName}
                    name="name"
                    id="name"
                    type="text"
                    className="form-control border-0"
                    placeholder="Clinic Name:"
                  />
                </>
              )) || (
                <>
                  <div className="d-flex">
                    <span className="input-group-text bg-white border-0">
                      <i className="ri-user-2-line text-primary h5 fw-normal mb-0"></i>
                    </span>
                    <input
                      onChange={(e) => departmentHandler(e)}
                      value={department}
                      name="name"
                      id="name"
                      type="text"
                      className="form-control border-0"
                      placeholder="Department"
                    />
                  </div>
                </>
              )}
            </div>
            {errors && activeBtn === "clinics" && errors.name && (
              <span className="error-msg text-danger">{errors?.name?.msg}</span>
            )}

            {errors && activeBtn === "doctors" && errors.department && (
              <span className="error-msg text-danger">
                {errors?.department?.msg}
              </span>
            )}
          </div>
          {/* <!--end col--> */}

          <div className="col-md-auto mt-4 mt-sm-0">
            <div className="d-grid d-md-block">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>

          {/* <!--end col--> */}
        </div>
        <div className="col-md-12 mt-4">
          {btns?.map((btn) => (
            <div className="mx-2 d-inline">
              <button
                type="submit"
                onClick={(e) => btnHandler(btn)}
                className={`btn text-uppercase ${
                  (activeBtn === btn && "btn-primary") || "btn-dark"
                }`}
              >
                {btn}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
