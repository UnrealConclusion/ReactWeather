import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

/**
 * Component used to display weather details
 */

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function WeatherDetails({date, weather, description, iconID, temperature, low, high, feelsLike, humidity, windSpeed, visibility}) {
  return (
    <Card className='weather-details-card' style={{minWidth: "500px"}}>
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
        <Card.Text>
            <div className="details-row">
                <div className="high-and-low">
                    <h3>👇 Low: {low}°</h3>
                    <h3>☝️ High: {high}°</h3>
                </div>
                <h3>Feels Like 🤔 {feelsLike}°</h3>
                <h3>Humidity 😓 {humidity}</h3>
                <h3>Wind Speed 💨 {windSpeed}</h3>
                <h3>Visibility 🫣 {visibility}</h3>
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}