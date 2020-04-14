/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Details.css'

export default class Details extends Component {

    render() {
      let {venueDetails} = this.props
      let imgSrc = venueDetails.bestPhoto ? `${venueDetails.bestPhoto.prefix}560x200${venueDetails.bestPhoto.suffix}` : venueDetails.gImg
      return (

        <section id='modal'>
          <Link to="/location/:query" id='back'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <button
            id='add'
            onClick={() => {
              console.log('clicking')
              this.props.changeSelections(this.props.venueDetails)
            }}
          >
            Add to list +
          </button>
          <div id='venue-img'>
            {
              venueDetails.bestPhoto && (
                <img
                  src={venueDetails.bestPhoto.prefix+'560x200'+venueDetails.bestPhoto.suffix}
                  alt={`${venueDetails.name} Image`}
                  style={{maxWidth: '100%'}}
                />
              )
            }
          </div>
          <div id='venue-name'>
              {venueDetails.name}
          </div>
          <div id='venue-cat'>
              { venueDetails.categories && venueDetails.categories[0].name }
          </div>
          <div id='venue-des'>
              {venueDetails.description}
          </div>
          <div id='venue-ll'>
              <p id='sub'>
                Address
              </p>
              {venueDetails.location && venueDetails.location.formattedAddress}
          </div>
              <p id='sub'>
                Hours
              </p>
          <div id='venue-hours'>
            {
              venueDetails.hours &&
              venueDetails.hours.timeframes.map( (tf, i) => (
                <div key={i}>
                  <div>
                  {tf.days}
                  </div>
                  <div>
                    {
                      tf.open.map( time => (
                        time.renderedTime
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </section>

      )
    }
}