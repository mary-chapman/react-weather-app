import React, {Component} from 'react';
import {connect} from 'react-redux';

class CityDetail extends Component {
  renderWeather(city,index) {
    return (
        <div key={index} className="col-md-6 col-md-offset-3 city">
          <div>
            <h1>{city.name}</h1>
            <p>{city.weather[0].description}</p>
            <p>Temperature: {city.main.temp} &deg;</p>
            <p>Pressure: {city.main.pressure}</p>
            <p>Humidity: {city.main.humidity}</p>
          </div>
        </div>
    )
  }

  render() {

    return (
      <div>
        {this.props.weather.length < 1 ? console.log('none') :
        this.props.weather.map(this.renderWeather)}
        {/*console.log(this.props.weather[0].weather[0].description)}*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps)(CityDetail);
