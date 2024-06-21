import React from "react";
import Weather from "./Weather";
import rainImage from "../materials/rain.jpg"
import shattered from "../materials/schaterred.jpg"
import sunny from "../materials/1624351037_126093.jpeg"
import without_sky from "../materials/Безоблачное_небо.jpg"

const WeatherForecast = ({ forecastData, currentWeather }) => {
  const getWeatherBackground = () => {
    if (currentWeather.city === 'Moscow' && currentWeather.weather.includes('rain')) {
      return 'url(' + rainImage + ')';
    } else if (currentWeather.city === 'Moscow' && currentWeather.weather.includes('sunny')) {
      return 'url('+ sunny + ')';
    } else if (currentWeather.city === 'Moscow' && currentWeather.weather.includes('scattered clouds')) {
      return 'url(' + shattered + ')';
    } else if (currentWeather.city === 'Moscow' && currentWeather.weather.includes('clear sky')) {
      return 'url(' + without_sky + ')';
    }

    return 'url(default.png)';
  };

  return (
    <div className="weather-forecast">
      {currentWeather.city === 'Moscow' && (
        <div key={0} className="current-weatherMSC" style={{ backgroundImage: getWeatherBackground() }}>
          <h2>Текущая погода в Москве</h2>
          <Weather {...currentWeather} />
        </div>
      )}
      {forecastData && Array.isArray(forecastData) && forecastData.slice(0, 7).map((item, index) => (
        <div key={index+1} className="weather-forecast-box">
          <h3>День {index + 1}</h3>
          <Weather {...item} />
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;