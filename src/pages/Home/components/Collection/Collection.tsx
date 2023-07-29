import { FC } from "react";
import ClaireSimple from "../../../../components/icons/ClaireSimple";
import Carousel from "../../../../components/Carrousel/CarrouselContianer";

const Collection: FC = () => {
  return (
    <section className="collection__container ">
      <ClaireSimple />
      <div className="collection__copy">
        <h2 className="collection__title">new collection in our brands</h2>
        <button className="collection__more">see all</button>
      </div>
      <div style={{ position: "relative" }}>
        <Carousel />
      </div>
    </section>
  );
};

export default Collection;
