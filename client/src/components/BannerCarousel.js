import React, { useState } from "react";

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

export default function BannerCarousel() {
  const [shownSlide, setShownSlide] = useState(0);

  return (
    <div className="bannerCar">
      <div className="carSlide">
        {" "}
        <img src="./images/Q Imaging Mock Up-10.png" alt="Main Banner"></img>
      </div>
      <div className="carSlide">
        {" "}
        <img src="./images/Q Imaging Mock Up-10.png" alt="Main Banner"></img>
      </div>
      <div className="carSlide">
        {" "}
        <img src="./images/Q Imaging Mock Up-11.png" alt="Main Banner"></img>
      </div>
      <div className="carSlide">
        {" "}
        <img src="./images/Q Imaging Mock Up-11.png" alt="Main Banner"></img>
      </div>
      <div className="bannerCarInfo">
        <h2>Carousel Image Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet{" "}
        </p>
        <div className="dotBox">
          <span class="dot" onClick={currentSlide(1)}></span>
          <span class="dot" onClick={currentSlide(2)}></span>
          <span class="dot" onClick={currentSlide(3)}></span>
          <span class="dot" onClick={currentSlide(4)}></span>
        </div>
      </div>
    </div>
  );
}
