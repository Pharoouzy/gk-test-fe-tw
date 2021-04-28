import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // Polyline,
  // MarkerWithLabel,
} from "react-google-maps";
import mapStyles from "../../mapStyles";
import "./App.css";

function Map() {
  
  const [latValue, setLatValue] = useState(0);
  const [lngValue, setLngValue] = useState(0);
  // const [coordinate, setCoordinate] = useState('');

  const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    setLatValue(latitude);
    setLngValue(longitude);
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(successfulLookup);
  }, []);

  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: latValue, lng: lngValue }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{ lat: latValue, lng: lngValue }}
        // icon={{
        //   url: '/logo192.png',
        //   scaledSize: new window.google.maps.Size(25, 25)
        // }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDy_0KGBQQWlCfn7JjOzXzk6eQfaF5IZS8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
    />
  );
}