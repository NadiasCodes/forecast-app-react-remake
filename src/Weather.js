import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelslike: response.data.temperature.feels_like,
      temperature: response.data.temperature.current,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-box">
        <form>
          <div className="d-flex justify-content-center m-2 form-box">
            <input
              type="search"
              placeholder="Search for a city..."
              className="input-search"
            />

            <input type="submit" value="Search" className="input-button" />
          </div>
          <h1 className="city">{weatherData.city}</h1>
          <ul>
            <li>Monday 13:37</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="icon"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels Like: {Math.round(weatherData.feelslike)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = process.env.REACT_APP_FORECAST_API_KEY;
    let city = "Paris";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
