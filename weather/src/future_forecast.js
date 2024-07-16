import { useState } from "react";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function FutureForecast({forecast, selectedForecast, onSelectForecast}) {
    const [startIndex, setStartIndex ] = useState(0); // index of the first forecast to be displayed 

    // retrieve the 4 dates to be displayed at the moment 
    const dates = []
    for (let i=startIndex; i<startIndex+4; i++){
      dates.push(new Date(forecast[i].dt * 1000));
    }

    // move the index back by 4 
    function handlePrevious() {
      if (startIndex > 0) {
        setStartIndex((current) => current - 4);
      }
    }

    // move the index up by 4
    function handleNext() {
      if (startIndex + 4 < forecast.length){
        setStartIndex((current) => current + 4);
      }
    }
  
    return (
      <div className="card forecast-card">
        <h1 className="header">🔮 Future Forecast 🔮</h1>
      

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
              <h2>{Math.round(forecast[startIndex + i].main.temp)}°</h2>
              <img src={`https://openweathermap.org/img/wn/${forecast[startIndex + i].weather[0].icon}@2x.png`} className="img-fluid" alt="..."></img>
            </div>
          )
        }

        <div className="forecast-button-row">
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
      </div>
  );
}
