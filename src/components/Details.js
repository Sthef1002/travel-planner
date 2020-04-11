import React, { Component, Fragment } from 'react'
import './Details.css'

export default class Details extends Component {
    

    render() {
        const venue = { categories: [] }
        return (

            <Fragment id='modal'>
                <div id='venue-img'>
                    <img
                    // src={prefix+imageSize+suffix} alt='Venue foto'
                    src='https://picsum.photos/230/100' alt='Venue foto'
                    />
                </div>
                <div id='venue-name'>
                    {/* {venue.name} */}
                    Restaurant name
                </div>
                <div id='venue-cat'>
                    {/* {venue.categories[0].name} */}
                    Seafood
                </div>
                <div id='venue-det'>
                    Central Park is the 843-acre green heart of Manhattan and is maintained by the Central Park Conservancy. It was designed in the 19th century by Frederick Law Olmsted and Calvert Vaux as an urban escape for New Yorkers, and now receives over 40 million visits per year
                </div>
                <div>
                    Address
                    {/* {venue.location.formattedAddress} */}
                </div>
                <div>
                    Hours

                </div>

            </Fragment>

        )
    }
}
