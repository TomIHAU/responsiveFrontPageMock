import React, { useState } from "react";

export default function FrontPageProduct() {
  return (
    <div className="product">
      <div className="innerProduct">
        <div>
          <div className="imgPlaceholder"></div>
          <div className="productInfo">
            <h3>Q IMAGING PRODUCT ITEM - 1KG 123456789</h3>
            <p>
              <strong>Product Code: </strong>123456789
            </p>
            <p>Q IMAGING PRODUCT ITEM - 1KG 123456789</p>
            <p>In Stock (15+)</p>
          </div>
        </div>
        <button>REGISTER OR LOGIN {`>`}</button>
      </div>
    </div>
  );
}
