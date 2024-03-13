import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import styled from "@emotion/styled";

export default function WeatherIcon(props) {
  const iconMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night": "lightning-rainy",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
  };
  return <WeatherSvg state={iconMapping[props.icon]} />;
}
