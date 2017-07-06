import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  //initialise the state
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // define change handler
  onInputChange(event) {
    // console.log(event.target.value);
    // value will not update at this ^ point as it is set to show the term
    // and the term is not yet set
    // lets set it ...
    this.setState({ term: event.target.value }); // this has mystery context here so errors if we don't include bind
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
    // needs to call an action creator
    this.props.fetchWeather(this.state.term);
    // clear the search input
    // make component re-render
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// hook up action creator fetchWeather to SearchBar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);