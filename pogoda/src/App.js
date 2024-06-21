import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/form';

const API_KEY = 'abd7286aaa760f096197fd8fa46fecc6'

class App extends React.Component {
  state = {
    weatherData: [],
    cities: ['London', 'Paris', 'Berlin', 'Rome', 'Madrid'],
    error: undefined,
    forecastData: [],
    currentWeather: {},
  };

  componentDidMount() {
    this.setState({ weatherData: [] });
    this.state.cities.forEach(async (city) => {
      await this.gettingWeather({ target: { elements: { city: { value: city } } }   });
    });

   
  }

  gettingWeather = async (e) => {
    const city = e.target.elements.city.value;

    if (city) {
      try {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();

        const temp = Math.round(data.main.temp - 273.15);

        const weather = data.weather[0].description;

        this.setState({
          weatherData: [...this.state.weatherData, {
            temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            weather,
          }],
          error: undefined,
          currentWeather: {
            temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            weather,
          },
        });
      } catch (error) {
        this.setState({
          error: "Ошибка при получении данных о погоде",
        });
      }
    } else {
      this.setState({
        weatherData: [],
        error: undefined,
      });
    }
  };

  weekendweather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      try {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        const forecastData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 7);

        this.setState({
          forecastData: forecastData.map(item => ({
            temp: item.main.temp,
            city: data.city.name,
            country: data.city.country,
            pressure: item.main.pressure,
            weather: item.weather[0].description,
          })),
          error: undefined,
        });
      } catch (error) {
        this.setState({
          error: "Ошибка при получении данных о погоде",
        });
      }
    } else {
      this.setState({
        forecastData: [],
        error: undefined,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          weatherMethod={this.weekendweather}
          weatherData={this.state.weatherData}
        />
        <Main forecastData={this.state.forecastData} currentWeather={this.state.currentWeather} />
      </div>
    );
  }
}

export default App;