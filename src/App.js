import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  let [displayProps, setDisplayProps] = useState([{}]);
  let [errorMessage, setErrorMessage] = useState('');

  let fetchWeather = (queryString) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?${queryString}&appid=3c102a502b2f3a1e4de7ea4ee566ec9b`
    )
      .then((response) => handleErrors(response))
      .then((response) => response.json())
      .then((response) => createDisplayProps(response))
      .catch((error) => displayErrorMessage());
  };

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  let displayErrorMessage = () => {
    setErrorMessage('Please enter a correct location.');
  };

  let createDisplayProps = (data) => {
    console.log(data);
    setDisplayProps([
      ...displayProps,
      {
        city: data.name,
        weather: data.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        currentTemp: `${Math.round(data.main.temp - 273.15)}°`,
        maxTemp: `${Math.round(data.main.temp_max - 273.15)}°`,
        minTemp: `${Math.round(data.main.temp_min - 273.15)}°`,
        humidity: `${data.main.humidity}%`,
        pressure: `${data.main.pressure}hPa`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
      }
    ]);
    setErrorMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Finder</h1>
        <WeatherForm
          fetchWeather={fetchWeather}
          handleErrors={handleErrors}
          changeErrorMessage={displayErrorMessage}
          errorMessage={errorMessage}
        />
      </header>
      <main>
        {displayProps.map((props) =>
          props.weather ? <WeatherDisplay key={displayProps.indexOf(props)} {...props} /> : null
        )}
      </main>
    </div>
  );
}

export default App;
