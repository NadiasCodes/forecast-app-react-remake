import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = process.env.REACT_APP_FORECAST_API_KEY;
  let city = "Paris";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
        <h1 className="city">Berlin</h1>
        <ul>
          <li>Monday 13:37</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="mostly-cloudy"
              className="icon"
            />
            <span className="temperature">7</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 73%</li>
              <li>Wind: 18 km/h</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
