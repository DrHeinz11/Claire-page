import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="header__container">
      <div className="hero__copy">
        <h3 className="hero__info section__title--subtitle">collection 2022</h3>
        <h1 className="hero__title section__title">new product arrived</h1>
        <p className="hero__paragraph paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
          fugiat?
        </p>
        <button className="hero__button cta">check now</button>
      </div>
      <div className="hero__img">
        <span className="button__carrousel"></span>
        <span className="button__carrousel"></span>
        <span className="button__carrousel"></span>
      </div>
    </div>
  );
};

export default Hero;
