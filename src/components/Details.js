import React, { Component, Fragment } from 'react'

export default class Details extends Component {

    
    render() {
        return (
           
            <Fragment>
                <div id=''>
                    {venue.name}
                </div>
                <div id=''>
                    {venue.categories[0].name}
                </div>
                <div id='img-map'>
                    <img 
                    // src={prefix+imageSize+suffix} alt='Venue foto'
                    src='https://picsum.photos/230/100' alt='Venue foto'
                    />
                </div>
                
                </Fragment> 
    
        )
    }
}
