import React, { Component } from 'react';
<<<<<<< HEAD
// import axios from 'axios';
=======
>>>>>>> ec779714855e7f958fdf9b2b297b73946412e77b

class Form extends Component {

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

export default Form;