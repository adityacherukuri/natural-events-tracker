import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import MarkerInfo from "./MarkerInfo";

const Map = ({ data, center, zoom }) => {
  const [markerInfo, setMarkerInfo] = useState(null);

  const markers = data.map((d) => {
    if (d.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={d.geometries[0].coordinates[1]}
          lng={d.geometries[0].coordinates[0]}
          onClick={() => setMarkerInfo({ id: d.id, title: d.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBLXECM_P8IqD9yC9oFT7f-pysj1P5rLZE",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {markerInfo && <MarkerInfo info={markerInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8753,
  },
  zoom: 6,
};

export default Map;
