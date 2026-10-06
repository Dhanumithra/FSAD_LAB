import { useState } from 'react';
import axios from 'axios';
import { Search, CloudRain, Sun, Cloud, Wind, Droplets } from 'lucide-react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      // 1. Get coordinates from city name using Open-Meteo Geocoding API
      const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
      
      if (!geoRes.data.results || geoRes.data.results.length === 0) {
        throw new Error('City not found! Please try another one. ✨');
      }

      const location = geoRes.data.results[0];
      const { latitude, longitude, name, country } = location;

      // 2. Get weather data using coordinates
      const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      
      setWeather({
        name: name,
        country: country,
        temp: weatherRes.data.current_weather.temperature,
        windspeed: weatherRes.data.current_weather.windspeed,
        code: weatherRes.data.current_weather.weathercode
      });

    } catch (err) {
      setError(err.message || 'Oops! Something went wrong fetching the weather. 🌧️');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (code) => {
    // WMO Weather interpretation codes
    if (code === 0) return <Sun size={80} color="#F59E0B" className="drop-shadow" />;
    if (code > 0 && code <= 3) return <Cloud size={80} color="#93C5FD" className="drop-shadow" />;
    if (code >= 51 && code <= 67) return <Droplets size={80} color="#7DD3FC" className="drop-shadow" />;
    if (code >= 71 && code <= 77) return <CloudRain size={80} color="#BAE6FD" className="drop-shadow" />;
    if (code >= 80 && code <= 99) return <CloudRain size={80} color="#38BDF8" className="drop-shadow" />;
    return <Sun size={80} color="#F59E0B" className="drop-shadow" />;
  };

  const getWeatherDesc = (code) => {
    if (code === 0) return "Clear Sky";
    if (code === 1) return "Mainly Clear";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if (code >= 51 && code <= 67) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowy";
    if (code >= 80 && code <= 99) return "Stormy";
    return "Beautiful Day";
  };

  return (
    <div className="app-container">
      <div className="glass-panel">
        <h1 className="title">☁️ Sora Weather ☁️</h1>
        <p className="subtitle">How is the sky looking today?</p>
        
        <form onSubmit={fetchWeather} className="search-box">
          <input 
            type="text" 
            placeholder="Enter city name... (e.g. Tokyo)" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn" disabled={loading}>
            <Search size={20} />
          </button>
        </form>

        {loading && <div className="loading">Fetching the wind... 🍃</div>}
        {error && <div className="error">{error}</div>}

        {weather && (
          <div className="weather-card animate-pop-in">
            <h2 className="city-name">{weather.name}, {weather.country}</h2>
            <div className="weather-icon-container">
              {getWeatherIcon(weather.code)}
            </div>
            <div className="temp-display">
              {weather.temp}°C
            </div>
            <div className="weather-desc">
              {getWeatherDesc(weather.code)}
            </div>
            
            <div className="weather-details">
              <div className="detail-item">
                <Wind size={24} color="#6EE7B7" />
                <span>{weather.windspeed} km/h</span>
                <small>Wind</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
