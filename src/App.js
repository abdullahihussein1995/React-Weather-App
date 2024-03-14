import React, { useState } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import ErrorComponent from './ErrorComponent';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const apiKey = 'f2e25572dbfe484f502b7d6a6ab5f758'; // Replace with your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {weather && <WeatherDisplay weather={weather} />}
      {error && <ErrorComponent message={error} />}
    </div>
  );
}

export default App;
