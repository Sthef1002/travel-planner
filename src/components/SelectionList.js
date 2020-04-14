import React, { Component } from 'react';
import PlaceholderAside from './PlaceholderAside'

class SelectionList extends Component {
  // componentDidMount(){
  //   window.caches.selectedVenues = this.props.selectedVenues.length > 0 ? this.props.selectedVenues : window.caches.selectedVenues
  // }

  render() {
    return (
      <div>
            {
              // (window.caches.selectedVenues && window.caches.selectedVenues.length > 0) ? (
              (this.props.selectedVenues.length > 0) ? (
                <ul>
                  {
                    // window.caches.selectedVenues.map((venue, index) => {
                    this.props.selectedVenues.map((venue, index) => {
                      return (
                        <li key={index}>
                          {venue.name}
                        </li>
                      )
                    })
                  }
                </ul>
              )
              : <PlaceholderAside />
            }
      </div>
    );
  }
}

export default SelectionList;