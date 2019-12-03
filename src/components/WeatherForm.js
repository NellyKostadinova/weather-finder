import React from 'react';
import './WeatherForm.css';

function WeatherForm(props) {
  let cityInput = React.createRef();
  let countryInput = React.createRef();

  let getInputWeather = (e) => {
    e.preventDefault();
    let city = cityInput.current.value;
    let country = countryInput.current.value;
    let queryString = '';

    if (country) {
      fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
        .then((response) => props.handleErrors(response))
        .then((response) => response.json())
        .then((response) => (queryString = `q=${city},${response[0].alpha2Code}`))
        .then(() => props.fetchWeather(queryString))
        .catch((error) => props.changeErrorMessage());
    } else {
      props.fetchWeather(`q=${city}`);
    }

    cityInput.current.value = '';
    countryInput.current.value = '';
  };

  let getCurrentPositionWeather = () => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        props.fetchWeather(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      },
      function(positionError) {
        console.log(positionError);
      }
    );
  };

  return (
    <div className="weatherForm">
      <form onSubmit={getInputWeather}>
        <input ref={cityInput} placeholder="City" />
        <input ref={countryInput} placeholder="Country" />
        <button type="submit">Show weather</button>
      </form>
      <div className="error-message">{props.errorMessage}</div>
      <button id="positionBtn" onClick={getCurrentPositionWeather}>
        Use my position
      </button>
    </div>
  );
}

export default WeatherForm;
