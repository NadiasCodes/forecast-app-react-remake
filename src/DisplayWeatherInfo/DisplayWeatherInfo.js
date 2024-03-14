import React from "react";
import DisplayDate from "../DisplayDate/DisplayDate";
import WeatherIcon from "../WeatherIcon.js/WeatherIcon";
import TemperatureFunction from "../TemperatureFunction/TemperatureFunction";

export default function DisplayWeatherInfo(props) {
  return (
    <div className="displayWeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon icon={props.data.icon} />

          <TemperatureFunction celsius={props.data.temperature}/>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
