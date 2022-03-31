import "./App.css";
import NavBar from "./components/NavBar";
import FrontPageProduct from "./components/FrontPageProduct";
import BannerCarousel from "./components/BannerCarousel";

function App() {
  const products = [
    {
      name: "Q IMAGING PRODUCT ITEM",
      weight: "1KG",
      code: 123456789,
      stock: 15,
    },
    {
      name: "Q IMAGING PRODUCT ITEM",
      weight: "3KG",
      code: 123455589,
      stock: 16,
    },
    {
      name: "Q IMAGING  ITEM",
      weight: "2KG",
      code: 987654231,
      stock: 15,
    },
    {
      name: "Q IMAGING PRODUCT ITEM",
      weight: "1KG",
      code: 123456789,
      stock: 15,
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <BannerCarousel />

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
      <button className="featBtn">FEATURED PRODUCTS</button>
      <div className="individualLinks">
        <div>
          {products.map((product) => {
            return <FrontPageProduct product={product} />;
          })}
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
