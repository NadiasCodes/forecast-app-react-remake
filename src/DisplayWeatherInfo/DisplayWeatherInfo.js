import React from "react";
import DisplayDate from "../DisplayDate/DisplayDate";

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
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
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
