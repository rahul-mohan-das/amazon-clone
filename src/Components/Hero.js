import React, { useState } from "react";
import carouselLeftButton from "../images/carousel-left-button.svg";
import carouselRightButton from "../images/carousel-right-button.svg";
import heroOne from "../images/hero-one.jpg";
import heroTwo from "../images/hero-two.jpg";
import heroThree from "../images/hero-three.jpg";
import heroFour from "../images/hero-four.jpg";

const Hero = (props) => {
  const heroImages = {
    0: heroOne,
    1: heroTwo,
    2: heroThree,
    3: heroFour,
  };
  const [counter, setCounter] = useState(0);
  const heroLeftClick = () => {
    setCounter(counter === 0 ? counter : counter - 1);
  };
  const heroRightClick = () => {
    setCounter(
      counter === Object.keys(heroImages).length - 1 ? counter : counter + 1
    );
  };

  return (
    <div className="relative max-w-screen">
      <div className="z-10 absolute top-[15vw] w-[98vw]">{props.children}</div>
      <img src={heroImages[counter]} alt="header" className="w-full" />
      <div className="w-[screen] bg-gray-200 h-[1000px]"></div>
      <button
        onClick={heroLeftClick}
        className="z-10 absolute h-[15vw] focus:border focus:border-2 focus:border-cyan-600 focus:ring-2 focus:ring-white inset-y-0 left-0"
      >
        <img src={carouselLeftButton} className="w-[5vw]" alt="left" />
      </button>
      <button
        onClick={heroRightClick}
        className="z-10 absolute h-[15vw] focus:border focus:border-2 focus:border-cyan-600 focus:ring-2 focus:ring-white inset-y-0 right-0"
      >
        <img src={carouselRightButton} className="w-[5vw]" alt="right" />
      </button>
    </div>
  );
};

export default Hero;
