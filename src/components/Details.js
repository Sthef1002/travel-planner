import React, { Component, Fragment } from 'react'
import './Details.css'

export default class Details extends Component {


    render() {

        const venue = { categories: {} }
        const {venueDetails} = this.props
        return (

            <section id='modal'>
                {/* <button
                  onClick={() => this.props.changeSelections(this.props.venueDetails)}
                >
                  Add to list
                </button> */}
                <div id='venue-img'>
                    {/* <img src={venueDetails.bestPhoto.prefix+'300x300'+venueDetails.bestPhoto.suffix} alt="Venue Image" /> */}
                </div>
                <div id='venue-name'>
                    {venueDetails.name}
                </div>
                <div id='venue-cat'>
                    {/* {venueDetails.categories[0].name} */}
                </div>
                <div id='venue-url'>
                {/* <a href={venueDetails.url}>Website</a> */}
                </div>
                <div id='venue-add'>
                    {/* {venueDetails.location.formattedAddress} */}
                </div>
                <div id='venue-det'>
                    {/* Central Park is the 843-acre green heart of Manhattan and is maintained by the Central Park Conservancy. It was designed in the 19th century by Frederick Law Olmsted and Calvert Vaux as an urban escape for New Yorkers, and now receives over 40 million visits per year */}
                </div>
            </section>

        )
    }
}
