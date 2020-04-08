import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import './Map.css'


function drawMarkers(venues) {
  return(
    venues.map ( venue => (

        <Marker 
            position={{
            lat: venue.location.lat, lng: venue.location.lng}}
            >
              {/* <InfoWindow>
                  <h1>{venue.name}</h1>
              </InfoWindow> */}
            </Marker>
      ))
  )
}

function GMap(props) {
    console.log(props) 
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 25.761681, lng: -80.191788}}
        >
          { drawMarkers(props.venues) }        
        </GoogleMap>
    ); 
}

const MapWrapped = withScriptjs(withGoogleMap(GMap));

export default function Map(props) {
    return (
        <div id='gmap'>
          <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            venues={props.venues}
          />
        </div>
      );
    }