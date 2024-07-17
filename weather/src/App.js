import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Banner from './banner';
import NavBar from './navbar';
import CurrentWeather from './current_weather.js';
import FutureForecast from './future_forecast.js';
import { Fragment, useEffect, useState } from 'react';
import { today, futureForecast } from "./sampledata.js";

function App() {
  const [selectedForecast, setSelectedForecast ] = useState(null); // index of selected forecast 
  const [currentWeather, setCurrentWeather] = useState(today); // the current weather 
  const [forecast, setForecast] = useState(futureForecast.list);
  const displayWeather = selectedForecast === null ? currentWeather : forecast[selectedForecast]; // what is on display
  
  const [currentLocation, setCurrentLocation] = useState(null); // the current location 
  const [zipcodeInput, setZipcodeInput] = useState(""); // value of zipcode input box
  const [error, setError] = useState(""); // error message

  // calls API to fetch location 
  async function fetchLocation(zipcode) {
    const url = `https://map-geocoding.p.rapidapi.com/json?address=${zipcode}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'f6485a8ccfmsh8606d56b883def3p10f180jsnc47afe8872e5',
        'x-rapidapi-host': 'map-geocoding.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      if (response.status !== "OK"){
        throw new Error("Invalid Zipcode");
      }

      const result = await response.json();
      // console.log(result); 

      setCurrentLocation(result.results[0].geometry.location);
      setError("");
    } catch (error) {
      setError(error);
    }
  }

  // fetches weather each time the current location change 
  useEffect(function() {
    const controller = new AbortController();

    // calls api to fetch weather at current location 
    async function fetchWeather() {
      const url = `https://open-weather13.p.rapidapi.com/city/latlon/${currentLocation.lat}/${currentLocation.lng}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f6485a8ccfmsh8606d56b883def3p10f180jsnc47afe8872e5',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }, 
        signal: controller.signal
      };
      
      try {
        const response = await fetch(url, options);

        if (response.ok !== true){
          throw new Error("Unable to Fetch Weather");
        }

        const result = await response.json();
        
        setCurrentWeather(result);
      } catch (error) {
        setError(error);
      }
    }
    
    if (currentLocation){
      fetchWeather();
    }
    return () => {
      controller.abort();
    };
  }, [currentLocation]);

  // fetches forecast each time the current location change 
  useEffect(function() {
    const controller = new AbortController();

    // calls api to fetch forecast at current location 
    async function fetchForecast() {
      const url = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${currentLocation.lat}/${currentLocation.lng}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f6485a8ccfmsh8606d56b883def3p10f180jsnc47afe8872e5',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          signal: controller.signal
        }
      };
      
      try {
        const response = await fetch(url, options);

        if (response.ok !== true){
          throw new Error("Unable to Fetch Forecast");
        }

        const result = await response.json();
        console.log(result);
        //setForecast(result);
      } catch (error) {
        setError(error);
      }
    }
    
    if (currentLocation){
      fetchForecast();
    }
    return () => {
      controller.abort();
    };
  }, [currentLocation]);

  // handle location button click 
  function handleLocate(event) {
    event.preventDefault();
    if (isNaN(zipcodeInput)){
      setError("Zipcode is NaN");
    }
    else {
      fetchLocation(zipcodeInput);
    }
  }

  // unselect the forecast if clicked again, otherwise select the new forecast
  function handleSelectForecast(i) {
    setSelectedForecast((current) => current === i ? null : i);
  }

  return (
    <Fragment>
      <div className={error ? "alert alert-primary error-alert show-error" : "alert alert-primary error-alert"}>
        {error}
        <button className="btn btn-sm btn-outline-info close-error-button" onClick={() => setError("")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
        </button>
      </div>
      <div className="container-fluid background">
        <div className="row">
          <div className="col-12 px-0">
            <Banner/>
          </div>
        </div>
        <div className="row">
          <NavBar 
            onLocate={handleLocate}
            setZipcodeInput={setZipcodeInput}
            setError={setError}
          />
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
              forecast={forecast}
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
    </Fragment>
  );
}

export default App;

function FooterBar() {
  return (
    <div className="footerbar">
    </div>
  );
}