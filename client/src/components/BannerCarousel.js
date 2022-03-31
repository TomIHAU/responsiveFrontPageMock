import React, { useState } from "react";

export default function BannerCarousel() {
  const [shownSlide, setShownSlide] = useState(0);

  function handleSet(arg) {
    setShownSlide(arg);
  }

  const bannerImgArr = [
    "./images/Q Imaging Mock Up-10.png",
    "./images/Q Imaging Mock Up-10.png",
    "./images/Q Imaging Mock Up-11.png",
    "./images/Q Imaging Mock Up-10.png",
  ];
  return (
    <div className="bannerCar">
      {bannerImgArr.map((ele, i) => {
        return (
          <div
            className="carSlide"
            style={
              i === shownSlide ? { display: "block" } : { display: "none" }
            }
          >
            <img src={ele} key={i} alt="Main Banner"></img>
          </div>
        );
      })}

      <div className="bannerCarInfo">
        <h2>Carousel Image Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet{" "}
        </p>
        <div className="dotBox">
          {bannerImgArr.map((ele, i) => {
            return (
              <span
                className="dot"
                key={i}
                onClick={(e) => {
                  handleSet(i);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
