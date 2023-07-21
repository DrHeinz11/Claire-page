import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="hero__container">
      <div className="hero__copy">
        <h3 className="hero__info section__title--subtitle">collection 2022</h3>
        <h2 className="hero__title section__title">new product arrived</h2>
        <h1 className="hero__paragraph paragraph">
          Welcome to the Collection 2022 - Your Ultimate Style Destination!
          Discover the latest fashion trends and elevate your wardrobe with
          Claire Marie's stunning new arrivals. Our team has carefully curated a
          selection of exquisite pieces that will capture your imagination and
          add a touch of elegance to your style
        </h1>
        <p className="hero__paragraph paragraph">
          Discover the latest fashion trends and elevate your wardrobe with
          Claire Marie's stunning new arrivals. Our team has carefully curated a
          selection of exquisite pieces that will capture your imagination and
          add a touch of elegance to your style.
        </p>
        <button className="hero__button cta">check now</button>
      </div>
      <div className="hero__img">
        <span className="button__carrousel"></span>
        <span className="button__carrousel"></span>
        <span className="button__carrousel"></span>
      </div>
    </header>
  );
};

export default Hero;
