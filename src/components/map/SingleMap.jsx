import GoogleMapReact from "google-map-react";
import React from "react";
import pin from "../../assets/images/pin-image.png";
import Values from "../../Values";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={pin} alt="" width="30px" />
  </div>
);

export default function SingleMap({ info }) {
  const defaultProps = {
    center: {
      lat: Number(info.latitude),
      lng: Number(info.longitude),
    },
    zoom: 17,
    mapTypeId: "satellite",
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      {info && info.latitude > 0 && (
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
            lat={Number(info.latitude)}
            lng={Number(info.longitude)}
            text="Haru"
          />
        </GoogleMapReact>
      )}
    </div>
  );
}
