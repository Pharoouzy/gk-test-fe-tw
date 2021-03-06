import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // Polyline,
  // MarkerWithLabel,
} from "react-google-maps";
import mapStyles from "./mapStyles";
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
      defaultZoom={5}
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
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="">
        <h1>Parcel Request</h1>
        <div className="flex space-x-8">
          <div className="flex flex-col space-y-2 w-full">
            <input
              className="h-12 border border-k3gray px-3"
              type
              placeholder="Pickup Address"
            />
          </div>
        </div>
        <div className="flex space-x-8">
          <input
            className="h-12 border border-k3gray px-3"
            type
            placeholder="Dropoff Address"
          />
        </div>
      </div>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDy_0KGBQQWlCfn7JjOzXzk6eQfaF5IZS8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default App;
