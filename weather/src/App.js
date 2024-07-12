import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

function App() {
  return (
    <div className="container-fluid" style={{margin: "0"}}>
      <div className="row">
        <Banner/>
      </div>
      <div className="row">
        <NavBar/>
      </div>
      <div className="row">
        <div className="col-6 px-0">
          <CurrentWeather/>
        </div>
        <div className="col-6 px-0">
          <FutureForcast/>
        </div>
      </div>

      <div className="row">
        <FooterBar/>
      </div>
    </div>
  );
}

export default App;

function Banner() {
  return (
    <div className="banner">
      
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      
    </div>
  );
}

function CurrentWeather() {
  return (
    <div className="weather">
      
    </div>
  );
}

function FutureForcast() {
  return (
    <div className="forcast">
      
    </div>
  );
}

function FooterBar() {
  return (
    <div className="footerbar">
      
    </div>
  );
}