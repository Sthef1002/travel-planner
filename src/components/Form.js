import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {
      this.getVenues();
  }

  getVenues() {

    let setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/search';

    const params = {
      client_id: "QFWFOQW13VWR2SYCHO3SLUWQDDDDRAC3ZA1RSH2BOY5LBVOG",
      client_secret: "OEBLZFQVFD1M3UTY4GCI4M42DWXC14COGEW0F3LGWJZ4ST2Z",
      limit: 20, //The max number of venues to load
      query: 'query', //The type of venues we want to query
      v: '20220403', //The version of the API.
      ll: '25.761681, -80.191788' //The latitude and longitude
    };


    fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          this.setState({venues: response.response.venues}); //Set the components state
      });
  }


  render() {
    return (
      <div>
          <ul>
            {
              this.state.venues.map((venues, index) => {
                return (
                  <li key={}></li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default Form;