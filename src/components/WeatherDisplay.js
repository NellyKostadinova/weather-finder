import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      <div className="one-column">
        <h3 className="city">{props.city}</h3>
        <h2 className="weather-description">{props.weather}</h2>
        <div className="weather-icon">
          <img src={props.icon} alt={props.weather} />
        </div>
      </div>
      <div className="two-column">
        <div className="two-column__left">
          <div className="current-temp">
            <p>{props.currentTemp}</p>
          </div>
          <div className="min-temp">{props.minTemp}</div>
          <div className="max-temp">{props.maxTemp}</div>
        </div>
        <div className="two-column__right">
          <h5>Details:</h5>
          <p>Humidity: {props.humidity}</p>
          <p>Pressure: {props.pressure}</p>
          <p>Sunrise: {props.sunrise}</p>
          <p>Sunset: {props.sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
