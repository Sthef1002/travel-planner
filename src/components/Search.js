import React, { Component } from 'react';
import './Search.css';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/location/${event.target.venueCity.value}`)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="venueCity" onChange={this.handleChange} value={this.state.value} placeholder="City name..." />
        <input id='button' type="submit" value="GO!" />
      </form>
    );
  }
}
