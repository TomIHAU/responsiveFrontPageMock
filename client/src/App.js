import "./App.css";
import NavBar from "./components/NavBar";
import FrontPageProduct from "./components/FrontPageProduct";
import BannerCarousel from "./components/BannerCarousel";
import ContactLinks from "./components/ContactLinks";
import Footer from "./components/Footer";

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
      <ContactLinks />
      <Footer />
    </div>
  );
}

export default App;
