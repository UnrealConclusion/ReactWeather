import "./App.css"
import {Fragment, useState, useEffect} from "react";

/* Import Bootstrap CSS & Components*/
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Components */
import ErrorAlert from "./error_alert";
import NavBar from "./navbar";
import WeatherDetails from "./weather_details";
import WeatherForecasts from "./weather_forecasts";
import Footer from "./footer";

import {dummy} from "./dummy_data";
const apiKey = process.env.RAPID_API_KEY;


function App() {
  const [errorMSG, setErrorMSG] = useState(""); // error message to be displayed in alert
  const [showErrorMSG, setShowErrorMSG] = useState(false); // toggle error alert window
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState(null); // the current location 

  const [currentForecast, setCurrentForecast] = useState(dummy.currentForecast); // the current weather forecast at the current location 
  const [forecasts, setForecasts] = useState(dummy.forecasts); // list of weather forecast at the current location
  const [selectedForecast, setSelectedForecast] = useState(null); // the current forecast detials selected to be display

  const [zipcodeInput, setZipcodeInput] = useState("");

  /* Effects */

  /* Fetches Weather Every Time Location Changes */
  useEffect(function() {

    const currentForecastController = new AbortController();
    const futureForecastController = new AbortController();

    // calls api to fetch weather at current location 
    async function fetchWeather() {
      setIsLoading(true);

      // call for current weather
      const currentForecastUrl = `https://open-weather13.p.rapidapi.com/city/latlon/${location.latitude}/${location.longitude}`;
      const currentForecastOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }, 
        signal: currentForecastController.signal
      };

      // call for future forecasts
      const futureForecastUrl = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${location.latitude}/${location.longitude}`;
      const futureForecastOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
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
      setIsLoading(false);
    } catch (error) {
      setErrorMSG(error.message);
      setShowErrorMSG(true)
    }
  }

    if (location == null){
      // setLocation(dummy.location);
      setIsLoading(false);
    }
    else {
      fetchWeather();
    }

    return () => {
      currentForecastController.abort();
      futureForecastController.abort();
    };
  }, [location, isLoading]);

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
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'map-geocoding.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      if (result.status !== "OK") {
        throw new Error("Zipcode Not Found");
      }

      let loc = {
        latitude: result.results[0].geometry.location.lat, 
        longitude: result.results[0].geometry.location.lng,
        location: result.results[0].formatted_address
      }

      setLocation(loc);
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
            isLoading={isLoading}
        />
        <WeatherForecasts
          forecasts={forecasts}
          selectedForecast={selectedForecast}
          onSelectForecast={handleSelectForecast}
          isLoading={isLoading}
        />
      </div>
      <Footer
        location={location ? location?.location : dummy.location.location}
      />
    </Fragment>
  );
}

export default App;