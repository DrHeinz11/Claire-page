import React, { FC } from "react";

type Cta = {
  text: string;
  route: string;
};

const Cta: FC<Cta> = ({ text, route }) => {
  return (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
      className="navbar__button cta"
    >
      {text}
    </a>
  );
};

export default Cta;
