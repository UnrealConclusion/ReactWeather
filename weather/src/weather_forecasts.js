import { useState } from 'react';
import {Card, Spinner} from 'react-bootstrap';

/**
 * Component used to display a list of weather forecasts
 */
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function WeatherForecasts({forecasts, selectedForecast, onSelectForecast, isLoading}) {
    const [startIndex, setStartIndex ] = useState(0); // index of the first forecast to be displayed 

    if (isLoading) {
      return (
        <Card className='weather-details-card' style={{minWidth: "500px", minHeight: "600px", display: "flex", flexGrow: "1", justifyContent: "center", alignItems: "center"}}  bg="dark" data-bs-theme="dark">
          <Spinner/>
        </Card>
      );
    }


    // retrieve the 4 dates to be displayed at the moment 
    const dates = []
    for (let i=startIndex; i<startIndex+4; i++){
      dates.push(new Date(forecasts[i].dt * 1000));
    }

    // move the index back by 4 
    function handlePrevious() {
      if (startIndex > 0) {
        setStartIndex((current) => current - 4);
      }
    }

    // move the index up by 4
    function handleNext() {
      if (startIndex + 4 < forecasts.length){
        setStartIndex((current) => current + 4);
      }
    }

    return (
        <Card className='weather-forecasts-card' style={{minWidth: "500px", minHeight: "500px"}}  bg="dark" data-bs-theme="dark">
          <Card.Header>
            <div className='header-row'>
              <h2>🔮 Future Forecast 🔮</h2>
            </div>
          </Card.Header>
        <Card.Body>
          <div className='forecasts-container'>
            {
              dates.map((date, i) => 
                <div className={selectedForecast === i ? "forecast-row forecast-row-selected" : "forecast-row"} 
                key={i} 
                onClick={() => onSelectForecast(i)}>
                  <h3>
                    {weekdays[date.getDay()]} 
                    <br/>
                    {months[date.getMonth()]} {date.getDate()} 
                    <br/> 
                    {date.getHours() % 12 || 12}:{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} {date.getHours() >= 12 ? 'PM' : 'AM'}
                  </h3>
                  <h1>{Math.round(forecasts[startIndex + i].main.temp)}°</h1>
                  <img src={`https://openweathermap.org/img/wn/${forecasts[startIndex + i].weather[0].icon}@2x.png`} className="img-fluid" alt="..."></img>
                </div>
              )
            }
          </div>
        </Card.Body>
        <div className="button-row">
            <div className="forecast-button" onClick={handlePrevious}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </div>
            <div className="forecast-button" onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </div>
          </div>
      </Card>
    );
  }