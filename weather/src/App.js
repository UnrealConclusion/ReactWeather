import "./App.css"

/* Import Bootstrap CSS & Components*/
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Components */
import NavBar from "./navbar";
import WeatherDetails from "./weather_details";
import WeatherForecasts from "./weather_forecasts";
import { Fragment, useState } from "react";

import {today, futureForecast} from "./sampledata";

function App() {

  const [currentForecast, setCurrentForecast] = useState(today); // the current weather forecast at the current location 
  const [forecasts, setForcasts] = useState(futureForecast.list); // list of weather forecast at the current location
  const [selectedForecast, setSelectedForecast] = useState(null); // the current forecast detials selected to be display

  let currentDetails = null;  // weather to be displayed in weather details 
  if (selectedForecast){
    currentDetails = forecasts[selectedForecast];
  }
  else {
    currentDetails = currentForecast;
  }
  if (currentDetails === null){
    return <div>

    </div>
  }

  console.log(currentDetails)

  /**
   * select / unselect weather forecast from the list of forecasts 
   * @param {*} i the index of the selected forecast
   */
  function handleSelectForecast(i) {
    setSelectedForecast((current) => current === i ? null : i);
  }

  return (
    <Fragment>
      <NavBar/>
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
