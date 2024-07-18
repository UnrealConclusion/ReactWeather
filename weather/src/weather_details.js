import {Card, Spinner} from 'react-bootstrap';

/**
 * Component used to display weather details
 */
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * Component used to display the details of a forecast
 */
export default function WeatherDetails({date, weather, description, iconID, temperature, low, high, feelsLike, humidity, windSpeed, visibility, isLoading}) {
  if (isLoading) {
    return (
      <Card className='weather-details-card' style={{minWidth: "500px", minHeight: "600px", display: "flex", flexGrow: "1", justifyContent: "center", alignItems: "center"}}  bg="dark" data-bs-theme="dark">
        <Spinner/>
      </Card>
    );
  }
  
  return (
    <Card className='weather-details-card' style={{minWidth: "500px"}}  bg="dark" data-bs-theme="dark">
      <Card.Header className='header-row'>
        <h3>{weekdays[date.getDay()]} {months[date.getMonth()]} {date.getDate()}</h3>
        <h2>Current Forecast ~ {weather}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Title>
            <div className="main-row">
                <img src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} className="img-fluid" alt="..."></img>
                <h1 className='temperature-today'>{temperature}°</h1>
            </div>
        </Card.Title>
        <div className="details-row">
            <h3>{description}</h3>
            <div className="high-and-low">
                <h3>👇 Low: {low}°</h3>
                <h3>☝️ High: {high}°</h3>
            </div>
            <h3>Feels Like 🤔 {feelsLike}°</h3>
            <h3>Humidity 😓 {humidity}</h3>
            <h3>Wind Speed 💨 {windSpeed}</h3>
            <h3>Visibility 🫣 {visibility}</h3>
        </div>
      </Card.Body>
    </Card>
  );
}