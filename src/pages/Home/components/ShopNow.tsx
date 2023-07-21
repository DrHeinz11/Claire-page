import { FC } from "react";
import { ClaireLogo } from "../../../components";

type Props = {};

const ShopNow: FC<Props> = (props) => {
  return (
    <section className="shopnow__container">
      <ClaireLogo />
      <div className="shopnow__copy--container">
        <h2 className="shopnow__copy--title">shop now, pay later</h2>
        <p className="shopnow__copy--paragraph">
          At Claire Marie, we understand that flexibility and convenience are
          essential when it comes to shopping for your favorite fashion pieces.
          That's why we are thrilled to introduce our "Shop Now, Pay Later"
          option, designed to make your shopping experience even more enjoyable.
        </p>
      </div>
      <button className="shopnow__button cta">find out more</button>
    </section>
  );
};

export default ShopNow;
