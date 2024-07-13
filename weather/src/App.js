import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import NavBar from './navbar';
import Banner from './banner';

function App() {
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
        <div className="col-6">
          <CurrentWeather/>
        </div>
        <div className="col-6">
          <FutureForcast/>
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
    <div className="weather card">
      
    </div>
  );
}

function FutureForcast() {
  return (
    <div className="forcast card">
      
    </div>
  );
}

function FooterBar() {
  return (
    <div className="footerbar">
    </div>
  );
}