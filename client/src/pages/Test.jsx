
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, OverlayView } from "@react-google-maps/api";

const MapComponent = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const apiKey = "AIzaSyBFXi9VAlbvBsr1z0UxDO73R5kZSh6IQw0";


  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const locations = [
    { name: "Empresa 1", location: { lat: 37.7749, lng: -122.4194 } },
    { name: "Empresa 2", location: { lat: 37.7622, lng: -122.4342 } },
    { name: "Empresa 3", location: { lat: 37.7913, lng: -122.4037 } },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = () => {
    const location = locations.find(
      (loc) => loc.name.toLowerCase() === searchValue.toLowerCase()
    );
    if (location) {
      setSelectedLocation(location);
    } else {
      setSelectedLocation(null);
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div>
        <input
          type="text"
          placeholder="Buscar empresa..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={selectedLocation ? selectedLocation.location : defaultCenter}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.location}
            title={location.name}
          />
        ))}
        {selectedLocation && (
          <OverlayView
            position={selectedLocation.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div style={{ background: "white", padding: "5px", borderRadius: "5px" }}>
              <img src="URL_DEL_LOGO" alt="Logo" style={{ width: "50px", height: "50px" }} />
            </div>
          </OverlayView>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
