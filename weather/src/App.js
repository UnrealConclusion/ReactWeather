import { Fragment } from "react";
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <Banner/>
        <nav><NavBar className="navbar"/></nav>
      </header>
      <main className="main">
        <CurrentWeather/>
        <FutureForcast/>
      </main>
      <footer><FooterBar/></footer>
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