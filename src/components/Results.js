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
          client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
          client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
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