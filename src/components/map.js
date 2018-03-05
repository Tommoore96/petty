import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import { DirectionsRenderer } from "react-google-maps";

export default class Map extends React.Component {
  render() {
    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `555px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.385, lng: 2.173 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 41.385, lng: 2.173 }} />}
    </GoogleMap>
  )
    return (
      <MyMapComponent />
    )
  }
}
