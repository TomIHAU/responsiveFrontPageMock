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
    </div>
  );
}
