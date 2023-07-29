import React from "react";
import { CarouselSlideItemProps, SlideItem } from "../../types/type";
import itemsCarrousel from "../../constant/itemsCarrousel";

const slideWidth = 30;
const length = itemsCarrousel.length;
itemsCarrousel.push(...itemsCarrousel);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position: number, idx: number): SlideItem => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: itemsCarrousel[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles };
      break;
  }

  return item;
};

const CarouselSlideItem: React.FC<CarouselSlideItemProps> = ({
  pos,
  idx,
  activeIdx,
}) => {
  const item = createItem(pos, idx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item?.player?.image} alt={item?.player?.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item?.player?.title}</h4>
        <p>{item?.player?.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(itemsCarrousel.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx: number) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <>
      <div className="carousel__btn--container">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
      </div>
      <div className="carousel__wrap">
        {" "}
        <div className="carousel__inner">
          <div className="carousel__container">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="carousel__btn--controler">
          <div className="carousel__dots">
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
};
export default Carousel;
