
import React from "react";
import WeatherForecast from "./WeatherForecast";

class Main extends React.Component {
    render() {
        return(
      <main className="main">
        <WeatherForecast forecastData={this.props.forecastData} currentWeather={this.props.currentWeather} />
      </main>
        );
    }
}

export default Main;
