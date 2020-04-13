/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component, Fragment } from 'react'
import './Details.css'

export default class Details extends Component {

    render() {
      let {venueDetails} = this.props
        return (

            <section id='modal'>
                {/* <button
                  onClick={() => this.props.changeSelections(this.props.venueDetails)}
                >
                  Add to list
                </button> */}
                <div id='venue-img'>
                  {
                    venueDetails.bestPhoto && (
                      <img
                        src={venueDetails.bestPhoto.prefix+'300x300'+venueDetails.bestPhoto.suffix}
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
                <div id='venue-url'>
                  <a href={venueDetails.url}>Website</a>
                </div>
                <div>
                    {venueDetails.description}
                </div>
                <div>
                    {venueDetails.location && venueDetails.location.formattedAddress}
                </div>
                <div>
                  {
                    venueDetails.hours &&
                    venueDetails.hours.timeframes.map( tf => (
                      <Fragment>
                        <div>
                          Days: {tf.days}
                        </div>
                        <div>
                          Hours:
                          {
                            tf.open.map( time => (
                              time.renderedTime
                            ))
                          }
                        </div>
                      </Fragment>
                    ))
                  }
                </div>
            </section>

        )
    }
}
