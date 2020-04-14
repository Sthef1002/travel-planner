/* eslint-disable default-case */
import React, { Component } from 'react'
import SelectionList from './SelectionList'
import Map from './Map'
import Details from './Details'
import './Results.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
const KEYS = {
  // client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
  // client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
  // client_id: "K2DOBAFKPW4UDFBWIGJM2EM2VFQNUIM3BU1ATQOCJ4WOGRDW",
  // client_secret: "RB01AD1GD3RTE45S0SNLYQCASMMVN3SJHYBEHBZQM5IXGIZL",
  client_id: 'GD1U0GHJVRDG1HNUQMPZVIA0GFPV2TSATLU5BEXQDBT4T2LM',
  client_secret: 'PZXI0GPI45F00XFPDLHHSUN0EMFYZF4OWLW2FZA53IL2OWKR',
}

export default class Results extends Component {

    state = {
        venues: [],
        selectedVenues: [],
        venueDetails: {},
    }

    handleChange = ({venueId, gImg}) => {
      console.log("getting venue details");

      const params = {
          ...KEYS,
          v: '20220403',
      }
      fetch(`https://api.foursquare.com/v2/venues/${venueId}?` + new URLSearchParams(params))
        .then(res => res.json())
        .then(data => {
          // alert(data.response.venue.name)
          this.setState({venueDetails: {...data.response.venue, gImg}})
        })
        .catch(error => alert(error))
      this.props.history.push(`/location/${this.props.match.params.query}/modal`)
    }

    changeSelections = (value, type='add') => {
      switch (type) {
        case 'add':
          console.log("Adding")
          this.setState({ selectedVenues: [value, ...this.state.selectedVenues] })
          break
      }
    }

    componentDidMount() {
       let query = this.props.match.params.query
        const venuesEndpoint = 'https://api.foursquare.com/v2/venues/search?';

        const params = {
          ...KEYS,
          radius: 2500, //the max search area
          limit: 50, //The max number of venues to load
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
            <Container fluid id='division'>
                <Row>
                  <Col md={4}>
                    <Switch>
                      <Route
                        path='/location/:query/modal'
                        render={ props => (
                          <Details
                            {...props}
                            venueDetails={this.state.venueDetails}
                            changeSelections={this.changeSelections}
                          />
                        )}
                      />
                      <Route
                        path='/location/:query'
                        render={ props => (
                          <SelectionList
                            {...props}
                            selectedVenues={this.state.selectedVenues}
                          />
                        )}
                      />
                    </Switch>
                  </Col>
                  <Col md={8} style={{paddingRight: "0px"}}>
                    <Route
                      path='/location/:query'
                      render={ props => (
                        <Map
                          {...props}
                          venues={this.state.venues}
                          handleChange={this.handleChange}
                        />
                      )}
                    />
                  </Col>
                </Row>
            </Container>
        )
    }
}