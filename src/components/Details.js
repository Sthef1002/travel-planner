import React, { Component, Fragment } from 'react'
import './Details.css'

export default class Details extends Component {
    

    render() {
        
        const venue = { categories: [] }
        const {venueDetail} = this.props
        return (

            <Fragment id='modal'>
                <div id='venue-img'>
                   {/* {venueDetail.picture} */}
                </div>
                <div id='venue-name'>
                    {venueDetail.name}
                </div>
                <div id='venue-cat'>
                    {venueDetail.name}
                </div>
                <div id='venue-det'>
                    {/* Central Park is the 843-acre green heart of Manhattan and is maintained by the Central Park Conservancy. It was designed in the 19th century by Frederick Law Olmsted and Calvert Vaux as an urban escape for New Yorkers, and now receives over 40 million visits per year */}
                </div>
                <div>
                    {venueDetail.address}
                </div>
                <div>
                    {/* Hours */}

                </div>

            </Fragment>

        )
    }
}
