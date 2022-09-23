import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import pin from "../../assets/images/pin-image.png";
import Values from "../../Values";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={pin} alt="" width="30px" />
  </div>
);

export default function SingleMap({ info }) {
  const [data, setData] = useState({
    latitude: Number(info.latitude),
    longitude: Number(info.longitude),
  });

  const defaultProps = {
    center: {
      lat: data.latitude,
      lng: data.longitude,
    },
    zoom: 16,
    mapTypeId: "satellite",
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      {true && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: Values.API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          options={{
            mapTypeId: "satellite",
          }}
        >
          <AnyReactComponent
            lat={data.latitude}
            lng={data.longitude}
            text="Haru"
          />
        </GoogleMapReact>
      )}
    </div>
  );
}
