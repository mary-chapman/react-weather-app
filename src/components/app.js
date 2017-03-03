import React, { Component } from 'react';
import SearchBar from './search-bar';
import CityDetail from './city-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityDetail />
      </div>
    );
  }
}
