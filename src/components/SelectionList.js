import React, { Component } from 'react';

class SelectionList extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
          <ul>
            {
              this.state.venues.map((venues, index) => {
                return (
                  <li key={index}></li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default SelectionList;