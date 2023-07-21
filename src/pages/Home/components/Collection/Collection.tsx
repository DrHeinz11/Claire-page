import { FC, useState } from "react";
import ClaireSimple from "../../../../components/icons/ClaireSimple";
import { dataCarrousel } from "../../../../constant/dataCarrousel";
import { handleSlices } from "../../../../utils/handleSlices";
import Carousel from "../../../../components/Carrousel/CarrouselContianer";

const Collection: FC = () => {
  const [slice, setSlice] = useState<{ init: number; last: number }>({
    init: 0,
    last: 4,
  });

  const dataSlice = dataCarrousel.slice(slice.init, slice.last);

  return (
    <section className="collection__container ">
      <ClaireSimple />
      <div className="collection__copy">
        <h2 className="collection__title">new collection in our brands</h2>
        <button className="collection__more">see all</button>
      </div>
      <Carousel />
    </section>
  );
};

export default Collection;
