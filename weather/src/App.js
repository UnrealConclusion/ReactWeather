import "./App.css"
import {Fragment, useState, useEffect } from "react";

/* Import Bootstrap CSS & Components*/
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Components */
import ErrorAlert from "./error_alert";
import NavBar from "./navbar";
import WeatherDetails from "./weather_details";
import WeatherForecasts from "./weather_forecasts";

import {today, futureForecast} from "./sampledata";

function App() {
  const [errorMSG, setErrorMSG] = useState(""); // error message to be displayed in alert
  const [showErrorMSG, setShowErrorMSG] = useState(false); // toggle error alert window

  const [location, setLocation] = useState(null); // the current location 

  const [currentForecast, setCurrentForecast] = useState(today); // the current weather forecast at the current location 
  const [forecasts, setForecasts] = useState(futureForecast.list); // list of weather forecast at the current location
  const [selectedForecast, setSelectedForecast] = useState(null); // the current forecast detials selected to be display

  const [zipcodeInput, setZipcodeInput] = useState("");

  /* Effects */

  /* Fetches Weather Every Time Location Changes */
  useEffect(function() {
    const currentForecastController = new AbortController();
    const futureForecastController = new AbortController();

    // calls api to fetch weather at current location 
    async function fetchWeather() {

      // call for current weather
      const currentForecastUrl = `https://open-weather13.p.rapidapi.com/city/latlon/${location.lat}/${location.lng}`;
      const currentForecastOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '103402c4e2msh16dc01544c21618p1b55a8jsn3d07279865ce',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }, 
        signal: currentForecastController.signal
      };

      // call for future forecasts
      const futureForecastUrl = 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028';
      const futureForecastOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '103402c4e2msh16dc01544c21618p1b55a8jsn3d07279865ce',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        },
        signal: futureForecastController.signal
      };

    try {
      const currentForecastResponse = await fetch(currentForecastUrl, currentForecastOptions);
      if (!currentForecastResponse.ok){
        throw new Error("Unable to Fetch Weather");
      }
      const currentForecastResult = await currentForecastResponse.json();

      const futureForecastResponse = await fetch(futureForecastUrl, futureForecastOptions);
      if (!futureForecastResponse.ok){
        throw new Error("Unable to Fetch Forecast");
      }
      const futureForecastResult = await futureForecastResponse.json();

      setCurrentForecast(currentForecastResult);
      setForecasts(futureForecastResult.list);
      setErrorMSG("");
      setShowErrorMSG(false)
    } catch (error) {
      setErrorMSG(error.message);
      setShowErrorMSG(false)
    }
  }

    if (location){
      fetchWeather();
    }
    return () => {
      currentForecastController.abort();
      futureForecastController.abort();
    };
  }, [location]);

  /* API Calls */

  /**
   * Call API to fetch geolocation
   * @param {*} zipcode zipcode of geolocation
   */
  async function fetchLocation(zipcode) {
    const url = `https://map-geocoding.p.rapidapi.com/json?address=${zipcode}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '103402c4e2msh16dc01544c21618p1b55a8jsn3d07279865ce',
        'x-rapidapi-host': 'map-geocoding.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      if (result.status !== "OK") {
        // console.log(result);
        throw new Error("Zipcode Not Found");
      }

      setLocation(result.results[0].geometry.location);
      setErrorMSG("");
      setShowErrorMSG(false);
    } catch (error) {
      setErrorMSG(error.message);
      setShowErrorMSG(true);
    }
  }

  /* Handlers */

  /**
   * onChange handler for zipcode input field
   * @param {*} event arguments from event handler
   */
  function handleZipcodeInput(event) {
    event.preventDefault();
    setZipcodeInput(event.target.value);
  }

  /**
   * onClick handler for locate button
   * If input is NaN, display an error
   * Otherwise call locatation API
   * @param {*} event arguments from event handler
   */
  function handleLocate(event) {
    event.preventDefault();

    if (zipcodeInput){
      if (isNaN(zipcodeInput)) {
        setErrorMSG("Invalid Zipcode");
        setShowErrorMSG(true);
      }
      else {
        fetchLocation(zipcodeInput);
      }
      setZipcodeInput(""); 
    }
  }

  /**
   * select / unselect weather forecast from the list of forecasts 
   * @param {*} i the index of the selected forecast
   */
  function handleSelectForecast(i) {
    setSelectedForecast((current) => current === i ? null : i);
  }

  let currentDetails = null;  // weather to be displayed in weather details 
  if (selectedForecast){
    currentDetails = forecasts[selectedForecast];
  }
  else {
    currentDetails = currentForecast;
  }

  return (
    <Fragment>
      <NavBar
        zipcodeInput={zipcodeInput}
        onZipcodeInput={handleZipcodeInput}
        onLocate={handleLocate}
      />
      <ErrorAlert 
        message={errorMSG}
        show={showErrorMSG}
        setShow={setShowErrorMSG}
      />
      <div className="container">
        <WeatherDetails
            date={new Date(currentDetails.dt * 1000)}
            weather={currentDetails.weather[0].main}
            description={currentDetails.weather[0].description}
            iconID={currentDetails.weather[0].icon}
            temperature={Math.round(currentDetails.main.temp)}
            low={Math.round(currentDetails.main.temp_min)}
            high={Math.round(currentDetails.main.temp_max)}
            feelsLike={Math.round(currentDetails.main.feels_like)}
            humidity={currentDetails.main.humidity}
            windSpeed={currentDetails.wind.speed}
            visibility={currentDetails.visibility}
        />
        <WeatherForecasts
          forecasts={forecasts}
          selectedForecast={selectedForecast}
          onSelectForecast={handleSelectForecast}
        />
      </div>
    </Fragment>
  );
}

export default App;