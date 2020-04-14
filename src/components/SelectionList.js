import React, { Component } from 'react';

class SelectionList extends Component {
  componentDidMount(){
    window.caches.selectedVenues = this.props.selectedVenues.length > 0 ? this.props.selectedVenues : window.caches.selectedVenues
  }

  render() {
    return (
      <div>
          <ul>
            {
              window.caches.selectedVenues &&
              window.caches.selectedVenues.map((venue, index) => {
                return (
                  <li key={index}>
                    {venue.name}
                  </li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default SelectionList;