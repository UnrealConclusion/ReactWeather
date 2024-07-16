import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

import Banner from './banner';
import NavBar from './navbar';
import CurrentWeather from './current_weather.js';
import FutureForecast from './future_forecast.js';

import { useEffect, useState } from 'react';

import { forecast, today } from "./sampledata.js";

function App() {
  const [selectedForecast, setSelectedForecast ] = useState(null); // index of selected forecast 
  const [currentWeather, setCurrentWeather] = useState(today); // the current weather 

  const displayWeather = selectedForecast === null ? currentWeather : forecast.list[selectedForecast]; // what is on display

  // unselect the forecast if clicked again, otherwise select the new forecast
  function handleSelectForecast(i) {
    setSelectedForecast((current) => current === i ? null : i);
  }

  return (
    <div className="container-fluid background" style={{margin: "0"}}>
      <div className="row">
        <div className="col-12 px-0">
          <Banner/>
        </div>
      </div>
      <div className="row">
        <NavBar/>
      </div>
      <div className="row card-row">
        <div className="col-md-6 col-sm-12">
          <CurrentWeather 
            date={new Date(displayWeather.dt * 1000)}
            weather={displayWeather.weather[0].main}
            description={displayWeather.weather[0].description}
            iconID={displayWeather.weather[0].icon}
            temperature={Math.round(displayWeather.main.temp)}
            low={Math.round(displayWeather.main.temp_min)}
            high={Math.round(displayWeather.main.temp_max)}
            feelsLike={Math.round(displayWeather.main.feels_like)}
            humidity={displayWeather.main.humidity}
            windSpeed={displayWeather.wind.speed}
            visibility={displayWeather.visibility}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <FutureForecast 
            forecast={forecast.list}
            selectedForecast={selectedForecast}
            onSelectForecast={handleSelectForecast}
          />
        </div>
      </div>
      <div className="row">
        <FooterBar/>
      </div>
      <div className="row">
        <Banner/>
      </div>
    </div>
  );
}

export default App;

function FooterBar() {
  return (
    <div className="footerbar">
    </div>
  );
}