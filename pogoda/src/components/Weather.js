import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.city && (
          <>
            <p>{this.props.city}, {this.props.country}</p>
            <p>Температура: {this.props.temp}°С </p>
            <p>Давление: {this.props.pressure}</p>
            <p>Погода: {this.props.weather}</p>
          </>
        )}
        <p>{this.props.error}</p>
      </>
    );
  }
}

export default Weather;