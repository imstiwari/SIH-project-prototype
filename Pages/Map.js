import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Navbar from '../Componets/NavBar'



const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 23.1815, lng: 79.9864 }}>
    <Marker position={{ lat: 23.1815, lng: 79.9864 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
  <Navbar/>,
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);