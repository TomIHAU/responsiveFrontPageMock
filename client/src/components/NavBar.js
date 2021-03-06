import React, { useState } from "react";

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);

  useState(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="navBar">
      <img
        src="./images/Q Imaging Mock Up-09.png"
        alt="QImaging Australia"
      ></img>
      <div className="navBarRight">
        <div className="linksAndSearch">
          <ul className="navLinks">
            <li>Login/Register</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
          <div className="search">
            <input
              type="text"
              placeholder="Insert SKU, Name or Printer Model"
            ></input>
          </div>
        </div>
        <div className="NavSearchBox">
          <h2>Find Ink {`&`} Toner</h2>
          <select>
            <option>Choose Brand</option>
            <option>Lorem Ipsum</option>
            <option>Lorem Ipsum</option>
            <option>Lorem Ipsum</option>
          </select>
          <input type="text" placeholder="Product Search"></input>
        </div>
      </div>
    </div>
  );
}
