import React from "react";

export default function FrontPageProduct({ product }) {
  return (
    <div className="product">
      <div className="innerProduct">
        <div>
          <div className="imgPlaceholder"></div>
          <div className="productInfo">
            <h3>
              <strong>
                {product.name} - {product.weight} {product.code}
              </strong>
            </h3>
            <p>
              <strong>Product Code: </strong>
              {product.code}
            </p>
            <p>
              {product.name} - {product.weight} {product.code}
            </p>
            <p>
              <span className="dot" style={{ backgroundColor: "green" }}></span>
              In Stock (15+)
            </p>
          </div>
        </div>
        <button>REGISTER OR LOGIN {`>`}</button>
      </div>
    </div>
  );
}
