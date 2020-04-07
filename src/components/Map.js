import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import './Map.css'

function GMap() {
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 25.761681, lng: -80.191788}}
        >
        <Marker 
        position={{
            lat: 25.761681, lng: -80.191788
        }}/>
        </GoogleMap>
    ); 
}

const MapWrapped = withScriptjs(withGoogleMap(GMap));

export default function Map() {
    return (
        <div id='gmap'>
          <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    }