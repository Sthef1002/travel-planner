import React, { Component } from 'react'
import Form from './Form'
import Map from './Map'
import { Route } from 'react-router-dom';

export default class Results extends Component {

    state = {
        venues: []
    }

    componentDidMount() {
       let query = this.props.match.params.query
        const venuesEndpoint = 'https://api.foursquare.com/v2/venues/search?';
    
        const params = {
          client_id: "QFWFOQW13VWR2SYCHO3SLUWQDDDDRAC3ZA1RSH2BOY5LBVOG",
          client_secret: "OEBLZFQVFD1M3UTY4GCI4M42DWXC14COGEW0F3LGWJZ4ST2Z",
          limit: 20, //The max number of venues to load
          query: query, //The type of venues we want to query
          v: '20220403', //The version of the API.
          ll: '25.761681, -80.191788' //The latitude and longitude
        };
    
    
        fetch(venuesEndpoint + new URLSearchParams(params), {
            method: 'GET'
          })
            .then(response => response.json())
            .then(response => {
              console.log("Susccess: ", response)
              this.setState({venues: response.response.venues}); //Set the components state
            })
            .catch(error => console.log("There is an error: "+error))
      }

    render() {
        return (
            <div>
                <Route path='/location/:query' render={props => <Form {...props} venues={this.state.venues}/>} />
                <Route path='/location/:query' render={props => <Map {...props} venues={this.state.venues}/>} />
            </div>
        )
    }
}
