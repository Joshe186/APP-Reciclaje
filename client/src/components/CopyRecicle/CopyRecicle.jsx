import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker, Autocomplete } from "@react-google-maps/api";

const MapComponent = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const apiKey = "AIzaSyBFXi9VAlbvBsr1z0UxDO73R5kZSh6IQw0"; // Reemplaza con tu API Key de Google Maps

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const locations = [
    { name: "Empresa 1", location: { lat: 37.7749, lng: -122.4194 } },
    { name: "Empresa 2", location: { lat: 37.7622, lng: -122.4342 } },
    { name: "Empresa 3", location: { lat: 37.7913, lng: -122.4037 } },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const autocompleteRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        () => {
          alert("No se pudo obtener la ubicación.");
        }
      );
    } else {
      alert("El navegador no soporta geolocalización.");
    }
  };

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setCurrentLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      } else {
        alert("No se encontraron detalles sobre el lugar.");
      }
    } else {
      alert("Error al cargar la autocompletar de Google Places.");
    }
  };

  useEffect(() => {
    handleGeolocation();
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>

      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={selectedLocation ? selectedLocation.location : currentLocation}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.location}
            title={location.name}
          />
        ))}
      </GoogleMap>
      <div>
        <Autocomplete
          onLoad={(autocompleteInstance) => {
            setAutocomplete(autocompleteInstance);
          }}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Buscar ubicación..."
            style={{ width: "300px", height: "40px" }}
          />
        </Autocomplete>
        <button onClick={handleGeolocation}>Mi Ubicación</button>
      </div>
    </LoadScript>
  );
};

export default MapComponent;
