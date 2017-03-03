import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
    this.searchCity = this.searchCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  searchCity(event) {
    this.setState({term: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          value={this.state.term}
          placeholder="enter a city for the weather"
          className="form-control"
          onChange={this.searchCity}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">SEARCH</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
