import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="BannerCar">
        <img src="./images/Q Imaging Mock Up-10.png" alt="Main Banner"></img>
      </div>
      <div className="bigLinks">
        <div>
          <img
            src="./images/Q Imaging Mock Up-11.png"
            alt="become a reseller"
          ></img>
          <img src="./images/Q Imaging Mock Up-12.png" alt="what's new"></img>
        </div>
      </div>
      <div className="individualLinks">
        <div></div>
      </div>
      <img src="./images/Q Imaging Mock Up-13.png" alt="Our Brands"></img>
      <div className="contactLinks"></div>
      <footer>
        <div>
          <h4>Q-IMAGING AUSTRALIA</h4>
          <p>Powered by TOTECS</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
          <p>Freight and Returns</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
