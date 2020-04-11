import React, { Component } from 'react';
import './Search.css'

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/location/${this.state.query}`)
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id='inputButton'>
        <input id="venueCity" onChange={this.handleChange} value={this.state.query} placeholder="Search for location" />
        <input id='button' type="submit" value="GO!" />
        </div>

      </form>
    );
  }
}