import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DisplayWeatherInfo from "../DisplayWeatherInfo/DisplayWeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [cityValue, setCityValue] = useState(props.defaultcity);

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
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = process.env.REACT_APP_FORECAST_API_KEY;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCityValue(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-box">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center m-2 form-box">
            <input
              type="search"
              placeholder="Search for a city..."
              className="input-search"
              onChange={handleChange}
            />

            <input type="submit" value="Search" className="input-button" />
          </div>
          <DisplayWeatherInfo data={weatherData} />
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
