import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

import Banner from './banner';
import NavBar from './navbar';
import CurrentWeather from './current_weather.js';
import FutureForecast from './future_forecast.js';

import { useEffect } from 'react';

import { forecast, today } from "./sampledata.js";

function App() {

  /*
  useEffect(
    function() {
      async function fetchData(){
        const url = 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'c13944f5femsh96e7020dbc2d32ap116312jsn0ed83e2b5093',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
          }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
      }
      fetchData();
    }
  , []);
*/
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
            date={new Date(today.dt * 1000)}
            weather={today.weather[0].main}
            description={today.weather[0].description}
            iconID={today.weather[0].icon}
            temperature={Math.round(today.main.temp)}
            low={Math.round(today.main.temp_min)}
            high={Math.round(today.main.temp_max)}
            feelsLike={Math.round(today.main.feels_like)}
            humidity={today.main.humidity}
            windSpeed={today.wind.speed}
            visibility={today.visibility}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <FutureForecast forecast={forecast.list}/>
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