import logo from "./logo.svg";
import "./App.css";
import HomeImg from "./assets/joshua-hoehne.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <navbar className="navbar">
          <h2 className="home-title">Lingua Et Cetera</h2>
          <div>
            <span className="navbar-link">About</span>
            <span className="navbar-link">Services</span>
            <span className="navbar-link">Stories</span>
            <span className="navbar-link">About</span>
          </div>
        </navbar>
        <img src={HomeImg} className="home-img fade-in" />

        <div className="home-container">
          <div>
            <h4 className="home-subtitle">About this website</h4>
            <p>
              Text about this website Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <h4 className="home-subtitle">About myself</h4>
            <p>
              Text about this myself Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <footer>© 2021 Lingua Et Cetera. All Rights Reserved</footer>
      </div>
    </div>
  );
}

export default App;
