import {withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps";
import React from 'react';

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -23.9054, lng: 29.48957 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -23.9054, lng:29.48957 }} />}
  </GoogleMap>))

export default Map;
