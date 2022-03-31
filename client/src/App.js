import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import FrontPageProduct from "./components/FrontPageProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bannerCar">
        <img src="./images/Q Imaging Mock Up-10.png" alt="Main Banner"></img>
        <div className="bannerCarInfo">
          <h2>Carousel Image Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet{" "}
          </p>
        </div>
      </div>
      <div className="bigLinks">
        <div className="bigLinksImgCont">
          <div className="imageLink">
            <img
              src="./images/Q Imaging Mock Up-11.png"
              alt="become a reseller"
            ></img>
            <h3>BECOME A RESELLER</h3>
          </div>
          <div className="imageLink">
            <img src="./images/Q Imaging Mock Up-12.png" alt="what's new"></img>
            <h3>WHAT'S NEW</h3>
          </div>
        </div>
      </div>
      <div className="individualLinks">
        <div>
          <FrontPageProduct />
          <FrontPageProduct />
          <FrontPageProduct />
          <FrontPageProduct />
        </div>
        <button className="featureBtn">View all Featured Products</button>
      </div>
      <img
        className="brandScroll"
        src="./images/Q Imaging Mock Up-13.png"
        alt="Our Brands"
      ></img>
      <div className="contactLinks">
        <table>
          <tr>
            <th>Contact Us</th>
            <th>Sitemap</th>
            <th>Support</th>
          </tr>
          <tr>
            <td>Unit 1-26 Radley Street Virginia, QLD 4014</td>
            <td>About Us</td>
            <td>30 Day Credit Application Form</td>
          </tr>
          <tr>
            <td>Ph: 1300 789 912</td>
            <td>Products</td>
            <td>Returns Form</td>
          </tr>
          <tr>
            <td>Fax: 07 3262 9068</td>
            <td>Contact Us</td>
            <td>FAQs</td>
          </tr>
          <tr>
            <td>Email: info@q-imaging.com.au</td>
          </tr>
        </table>
      </div>
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
