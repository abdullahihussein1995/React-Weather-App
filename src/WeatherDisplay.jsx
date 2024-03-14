// In WeatherDisplay.js

import React from 'react';

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main} ({weather.weather[0].description})</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      {/* Add more weather details as desired */}
    </div>
  );
}

export default WeatherDisplay;
