import GoogleMapReact from "google-map-react";
import React from "react";
import pin from "../../assets/images/pin-image.png";
import Values from "../../Values";

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={pin} alt="" width="30px" />
  </div>
);

export default function MultipleMap({ info }) {
  const defaultProps = {
    center: {
      lat: Number(info[0]?.latitude) || 22.34234234,
      lng: Number(info[0]?.longitude) || 90.23423423,
    },
    zoom: 16,
    mapTypeId: "satellite",
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "800px", width: "100%" }}>
      {info.length > 0 && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: Values.API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          options={{
            mapTypeId: "satellite",
          }}
        >
          {info?.map((d, i) => (
            <AnyReactComponent
              key={i}
              lat={Number(d.latitude)}
              lng={Number(d.longitude)}
            />
          ))}
        </GoogleMapReact>
      )}
    </div>
  );
}
