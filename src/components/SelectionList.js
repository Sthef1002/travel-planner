import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import './SelectionList.css'
import './PlaceholderAside.css'


class SelectionList extends Component {
  // componentDidMount(){
  //   window.caches.selectedVenues = this.props.selectedVenues.length > 0 ? this.props.selectedVenues : window.caches.selectedVenues
  // }

  render() {
    return (
      <Row>
        <Col md={1} style={{paddingRight: '0px'}}>
          <div id='dates-placeholder'>
          </div>
        </Col>
          <div id='name-bar'>
            <h6 id='font'>
              Miami
            </h6>
            <div id='placeholder'>
              Let's start adding places!
            </div>
          </div>
        <Col md={11}>
          {
            !!this.props.selectedVenues.length ? (
              <ul style={{ padding: '0', marginTop: '0', width: '380px',}}>
                {
                  // window.caches.selectedVenues.map((venue, index) => {
                  this.props.selectedVenues.map((venue, index) => {
                    return (
                      <div key={index}>
                        <Card id='container-info'>
                          <Card.Img
                            id='image-select'
                            variant="top"
                            style={{ borderRadius: '5px'}}
                            src={`https://maps.googleapis.com/maps/api/streetview?size=100x100&location=${venue.location.lat},${venue.location.lng}&fov=90&heading=235&pitch=10&key=AIzaSyDicFQoRWREO_gX1sTklPjE8Kjhni7qmQU`}
                          />
                          <Card.Body id='content-select'>
                            <Card.Title id='title-select'>
                              {venue.name}
                            </Card.Title>
                            <Card.Text id='description-select'>
                              {venue.description}
                            </Card.Text>
                            <Link
                              id='link-details'
                              to={`/location/${this.props.match.params.query}/modal?venueId=${this.props.venueId}`}
                              onClick={() => {
                                console.log("triggering")
                                this.props.setPreloadedVenueDetails(venue)
                              }}>
                              Show details
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>
                    )
                  })
                }
              </ul>
            ) : (
              <div className="the other bg"></div>
            )
          }


        </Col>
      </Row>
    );
  }
}

export default SelectionList;

