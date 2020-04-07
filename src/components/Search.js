import React, { Component } from 'react';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/location/${event.target.venueType.value}`)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="venueType" onChange={this.handleChange} value={this.state.value} placeholder="search for location" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}