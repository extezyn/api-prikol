import React from "react";
import Info from "./info";
import Form from "./form";
import Weather from "./Weather";

class Header extends React.Component {
  render() {
    const cities = this.props.weatherData.slice(0, 5);

    return (
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="header-info">
              <Info />
            </div>
            <div className="header-search">
              <Form weatherMethod={this.props.weatherMethod} />
            </div>
          </div>
          <div className="header-right">
            {cities.map((weather, index) => (
              <div key={index} className="weather-box">
                <Weather
                  temp={weather.temp}
                  city={weather.city}
                  country={weather.country}
                  pressure={weather.pressure}
                  weather={weather.weather}
                />
              </div>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;