import React, { useState } from "react";

export default function TemperatureFunction(props) {
  const [showUnit, setShowUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setShowUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setShowUnit("celsius");
  }

  if (showUnit === "celsius") {
    return (
      <span className="TemperatureFunction">
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span className="unit">
          °C |{""}{" "}
          <a href="/" onClick={changeToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span className="TemperatureFunction">
        <span className="temperature">{Math.round(fahrenheit)}</span>

        <span className="unit">
          <a href="/" onClick={changeToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
