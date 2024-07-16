const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CurrentWeather({date, weather, description, iconID, temperature, low, high, feelsLike, humidity, windSpeed, visibility}) {
    return (
      <div className="card weather-card">
        <div className="weather-card-header">
          <h3>{weekdays[date.getDay()]} {months[date.getMonth()]} {date.getDate()}</h3>
          <h2>Current Forecast ~ {weather}</h2>
        </div>
        <div className="weather-card-main">
          <img src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} className="img-fluid" alt="..."></img>
          <h1 className='temperature-today'>{temperature}°</h1>
        </div>
        <h2 className="description-box">{description}</h2>
        <div className="high-and-low">
          <h3>👇 Low: {low}°</h3>
          <h3>☝️ High: {high}°</h3>
        </div>
        <h3>Feels Like 🤔 {feelsLike}°</h3>
        <h3>Humidity 😓 {humidity}</h3>
        <h3>Wind Speed 💨 {windSpeed}</h3>
        <h3>Visibility 🫣 {visibility}</h3>
      </div>
    );
}