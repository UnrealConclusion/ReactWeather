import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import NavBar from './navbar';
import Banner from './banner';
import { useEffect } from 'react';

import { today } from "./sampledata.js";

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
          <CurrentWeather/>
        </div>
        <div className="col-md-6 col-sm-12">
          <FutureForecast/>
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


function CurrentWeather() {
  return (
    <div className="weather card container-fluid d-flex flex-column justify-content-center">
      <div className="row">
        <div className="col-12">
          <h2 className="header">Current Forecast</h2>
        </div>
      </div>
      <div className="row weather-main-row">
        <div className='col-6' style={{color: "wheat"}}>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid" alt="..."></img>
        </div>
        <div className='col-6'>
          <h1 className='temperature-today'>75°</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{textAlign: 'center', color: 'wheat'}}>
          <h1 style={{border: "solid", borderColor: "#003566", borderRadius: "25px"}}>Rain</h1>
        </div>
      </div>
      <div className="row" style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
        <div className='col-6'>
          <h3>Low: 60</h3>
        </div>
        <div className='col-6'>
          <h3>High: 82</h3>
        </div>
      </div>
      <div className='row' style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
        <div className='col-12' style={{textAlign: 'center', color: 'wheat'}}>
          <h3>Feels Like 🤔 70°</h3>
        </div>
      </div>
      <div className='row' style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
        <div className='col-12' style={{textAlign: 'center', color: 'wheat'}}>
          <h3>Humidity 😓 60</h3>
        </div>
      </div>
      <div className='row' style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
        <div className='col-12' style={{textAlign: 'center', color: 'wheat'}}>
          <h3>Wind Speed 💨 60</h3>
        </div>
      </div>
      <div className='row' style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
        <div className='col-12' style={{textAlign: 'center', color: 'wheat'}}>
          <h3>Visibility 🫣 60</h3>
        </div>
      </div>
    </div>
  );
}

function FutureForecast() {
  return (
    <div className="forecast card container-fluid">
      <div className="row">
        <div className="col-12" style={{color: "wheat", textAlign: "center", marginTop: "1em"}}>
          <h2 className="header">Future Forecast</h2>
        </div>
      </div>
      <div className='row d-flex align-items-center' style={{color: "wheat", textAlign: "center", marginTop: "1em", border: "solid", borderColor: "#003566", borderRadius: "45px"}}>
          <div className='col-6' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>Sun 3:00 AM</h3> 
          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>70°</h3>

          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid" alt="..."></img>
          </div>
        </div>
        <div className='row d-flex align-items-center' style={{color: "wheat", textAlign: "center", marginTop: "1em", border: "solid", borderColor: "#003566", borderRadius: "45px"}}>
          <div className='col-6' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>Sun 3:00 AM</h3> 
          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>70°</h3>

          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid" alt="..."></img>
          </div>
        </div>
        <div className='row d-flex align-items-center' style={{color: "wheat", textAlign: "center", marginTop: "1em", border: "solid", borderColor: "#003566", borderRadius: "45px"}}>
          <div className='col-6' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>Sun 3:00 AM</h3> 
          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>70°</h3>

          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid" alt="..."></img>
          </div>
        </div>
        <div className='row d-flex align-items-center' style={{color: "wheat", textAlign: "center", marginTop: "1em", border: "solid", borderColor: "#003566", borderRadius: "45px"}}>
          <div className='col-6' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>Sun 3:00 AM</h3> 
          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <h3>70°</h3>

          </div>
          <div className='col-3' style={{textAlign: 'center', color: 'wheat'}}>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" className="img-fluid" alt="..."></img>
          </div>
        </div>
    </div>
  );
}

function FooterBar() {
  return (
    <div className="footerbar">
    </div>
  );
}