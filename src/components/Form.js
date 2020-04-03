import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {


    constructor() {
    
        super();
    
        this.state = {
          venues: []
        };
      }
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
        v: '20200403', //The version of the API.
        ll: '40.74224,-73.99386' //The latitude and longitude 
        };


    fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json()).then(response => {
        this.setState({venues: response.response.groups[0].items}); //Set the components state
      });


  render() {
    return (
      <div></div>
    );
  }
}

export default Form;
