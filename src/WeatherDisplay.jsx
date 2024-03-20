// In WeatherDisplay.js

import React from 'react';

function WeatherDisplay({ weather }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={iconUrl} alt="Weather icon" />
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main} ({weather.weather[0].description})</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}
export default WeatherDisplay;
