import React, {useState, Fragment} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import './Map.css'
import'./CardMap.css'


const MarketWithInfo = ({venue}) => {
  const [isVisible, setIsVisible] = useState(false);
  return(

      <Marker 
          position={{lat: venue.location.lat, lng: venue.location.lng}}
          onClick={ () => setIsVisible(!isVisible)}
          >
            <InfoWindow 
              visible={isVisible} 
              hidden={!isVisible}
              onClick={ () => setIsVisible(!isVisible)}>
                <Fragment>
                  <div id='name-map'>
                  {venue.name}
                  </div>
                  <div id='cat-map'>
                  {venue.categories[0].name}
                  </div>
                  <div id='img-map'>
                  {/* {venue.categories[0].icon.prefix+suffix}   */}
                  </div>
                </Fragment>
                
                
            </InfoWindow> 
      </Marker>
  )
}

function GMap(props) {
    console.log(props) 
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 25.761681, lng: -80.191788}}
        >
          { 
            props.venues.map( venue => (
              <MarketWithInfo 
              venue={venue} key={venue.name}/>
            ))
          }        
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