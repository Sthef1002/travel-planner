import React, {useState, Fragment} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import './Map.css';

const MarkerWithInfo = ({venue, handleChange}) => {
  // const prefix = venue.categories[0].icon.prefix
  // const suffix = venue.categories[0].icon.suffix
  // const imageSize = '230x100'
  const [isShowing, setIsShowing] = useState(false)

  return(

      <Marker
          position={{lat: venue.location.lat, lng: venue.location.lng}}
          onClick={() => setIsShowing(true)}
          >
            {
              isShowing &&
                <InfoWindow
                  onCloseClick={()=>setIsShowing(false)}
                >
                  <Fragment>
                    <div id='name-map'>
                      {venue.name}
                    </div>
                    <div id='cat-map'>
                      {venue.categories[0].name}
                    </div>
                    <div id='name-address'>
                      {venue.location.formattedAddress}
                    </div>
                    <div id='img-map'>
                    <img
                      style={{display: 'block', margin: 'auto'}}
                      alt={`${venue.name} street view`}
                      src={`https://maps.googleapis.com/maps/api/streetview?size=150x150&location=${venue.location.lat},${venue.location.lng}&fov=90&heading=235&pitch=10&key=AIzaSyDicFQoRWREO_gX1sTklPjE8Kjhni7qmQU`} />
                      
                    </div>
                    <div>
                      <button
                        id='det-button'
                        onClick={() => { handleChange(venue.id) }}
                      >
                        Show details
                      </button>

                    </div>
                  </Fragment>
              </InfoWindow>
            }
      </Marker>
  )
}

function GMap(props) {
    return (
        <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: 25.761681, lng: -80.191788}}
        >
          {
            props.venues.map( venue => (
              <MarkerWithInfo
                venue={venue}
                key={venue.name}
                handleChange={props.handleChange}
              />
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
            handleChange={props.handleChange}
          />

        </div>
      );
    
}