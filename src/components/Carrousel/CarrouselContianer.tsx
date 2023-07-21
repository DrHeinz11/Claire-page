import React from "react";

interface Player {
  title: string;
  desc: string;
  image: string;
}

interface SlideItem {
  styles: React.CSSProperties;
  player: Player | undefined;
}

const slideWidth = 30;


const _items: Partial<SlideItem>[] = [
  {
    player: {
      title: "Twice-jeongyeon-collection-1",
      desc: "Portada de Marie Claire con Jeongyeon de Twice.",
      image: "https://0.soompi.io/wp-content/uploads/2019/10/22192731/TWICE-Jeongyeon-6.jpg",
    },
  },
  {
    player: {
      title: "Jisoo-collection-2",
      desc: "Portada de Marie Claire con Jisoo de BLACKPINK.",
      image: "https://kpopping.com/documents/a5/2/800/BLACKPINK-Jisoo-for-Marie-Claire-Korea-September-2022-Issue-documents-2(2).jpeg?v=5ecbb",
    },
  },
  {
    player: {
      title: "Jisoo-collection-3",
      desc: "Portada de Marie Claire con Jisoo de BLACKPINK.",
      image: "https://kpopping.com/documents/ba/1/800/BLACKPINK-Jisoo-for-Marie-Claire-Korea-September-2022-Issue-documents-3.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Twice-jeongyeon-collection-4",
      desc: "Portada de Marie Claire con Jeongyeon de Twice.",
      image: "https://6.viki.io/image/377bab90423146c6863a2286eb89a6d9.jpeg?s=900x600&e=t",
    },
  },
  {
    player: {
      title: "Jisoo-collection-5",
      desc: "Portada de Marie Claire con Jisoo de BLACKPINK.",
      image: "https://kpopping.com/documents/a5/1/800/BLACKPINK-Jisoo-for-Marie-Claire-Korea-September-2022-Issue-documents-1.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Twice-jeongyeon-collection-6",
      desc: "Portada de Marie Claire con Jeongyeon de Twice.",
      image: "https://kpopping.com/documents/ab/1/800/mck_5daeb18548891.jpeg?v=9270a",
    },
  },
  {
    player: {
      title: "UI-collection-7",
      desc: "Portada de Marie Claire con IU.",
      image: "https://kpopping.com/documents/1c/1/800/IU-for-Marie-Claire-Korea-Magazine-March-2022-Issue-x-Gucci-documents-3.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "UI-collection-8",
      desc: "Portada de Marie Claire con IU.",
      image: "https://kpopping.com/documents/f1/5/800/IU-for-Marie-Claire-Korea-Magazine-March-2022-Issue-x-Gucci-documents-4.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "UI-collection-9",
      desc: "Portada de Marie Claire con IU.",
      image: "https://kpopping.com/documents/48/1/800/IU-for-Marie-Claire-Korea-Magazine-March-2022-Issue-x-Gucci-documents-10.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Suzy-collection-10",
      desc: "Portada de Marie Claire con Bae Suzy.",
      image: "https://kpopping.com/documents/6f/1/800/Bae-Suzy-for-Marie-Claire-Korea-Magazine-March-2021-x-Lancome-documents-2.jpeg?v=6c309",
    },
  },
  {
    player: {
      title: "Suzy-collection-11",
      desc: "Portada de Marie Claire con Bae Suzy.",
      image: "https://kpopping.com/documents/84/4/800/Bae-Suzy-for-Marie-Claire-Korea-Magazine-March-2021-x-Lancome-documents-3.jpeg?v=6c309",
    },
  },
  {
    player: {
      title: "Suzy-collection-12",
      desc: "Portada de Marie Claire con Bae Suzy.",
      image: "https://kpopping.com/documents/51/0/800/Bae-Suzy-for-Marie-Claire-Korea-Magazine-March-2021-x-Lancome-documents-1(1).jpeg?v=6c309",
    },
  },
  {
    player: {
      title: "Joy-collection-14",
      desc: "Portada de Marie Claire con Joy.",
      image: "https://kpopping.com/documents/fc/2/800/mck_5f6479df82f52.jpeg?v=ca140",
    },
  },
  {
    player: {
      title: "Joy-collection-15",
      desc: "Portada de Marie Claire con Joy.",
      image: "https://kpopping.com/documents/e6/0/800/mck_5f6479ce964d8.jpeg?v=ca140",
    },
  },
  {
    player: {
      title: "Leseeo-collection-16",
      desc: "Portada de Marie Claire con IVE Leeseo.",
      image: "https://kpopping.com/documents/f2/1/800/IVE-Leeseo-for-MARIE-CLAIRE-Korea-September-Issue-2022-documents-1.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Leeseo-collection-17",
      desc: "Portada de Marie Claire con IVE Leeseo.",
      image: "https://kpopping.com/documents/5b/1/800/IVE-Leeseo-for-MARIE-CLAIRE-Korea-September-Issue-2022-documents-1(1).jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Leeseo-collection-18",
      desc: "Portada de Marie Claire con IVE Leeseo.",
      image: "https://kpopping.com/documents/10/3/800/IVE-Leeseo-for-MARIE-CLAIRE-Korea-September-Issue-2022-documents-2(1).jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Fromis9-collection-19",
      desc: "Portada de Marie Claire con Fromis9.",
      image: "https://kpopping.com/documents/8a/4/800/fromis-9-for-Marie-Claire-Korea-Magazine-April-2022-Issue-documents-3.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Fromis9-collection-20",
      desc: "Portada de Marie Claire con Fromis9.",
      image: "https://kpopping.com/documents/6d/2/800/fromis-9-for-Marie-Claire-Korea-Magazine-April-2022-Issue-documents-4.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Fromis9-collection-21",
      desc: "Portada de Marie Claire con Fromis9.",
      image: "https://kpopping.com/documents/58/3/800/fromis-9-for-Marie-Claire-Korea-Magazine-April-2022-Issue-documents-2(1).jpeg?v=daf87",
    },
  },
  {
    player: {
      title: "Fromis9-collection-22",
      desc: "Portada de Marie Claire con Fromis9.",
      image: "https://kpopping.com/documents/9d/1/800/fromis-9-for-Marie-Claire-Korea-Magazine-April-2022-Issue-documents-5.jpeg?v=2ab59",
    },
  },
  {
    player: {
      title: "Fromis9-collection-23",
      desc: "Portada de Marie Claire con Fromis9.",
      image: "https://kpopping.com/documents/43/5/800/fromis-9-for-Marie-Claire-Korea-Magazine-April-2022-Issue-documents-3(1).jpeg?v=2ab59",
    },
  },
];


// const _items: Partial<SlideItem>[] = [
//   {
//     player: {
//       title: "Efren Reyes",
//       desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
//       image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
//     },
//   },
//   {
//     player: {
//       title: "Ronnie O'Sullivan",
//       desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
//       image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
//     },
//   },
//   {
//     player: {
//       title: "Shane Van Boening",
//       desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
//       image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg",
//     },
//   },
//   {
//     player: {
//       title: "Mike Sigel",
//       desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
//       image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
//     },
//   },
//   {
//     player: {
//       title: "Willie Mosconi",
//       desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
//       image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg",
//     },
//   },
// ];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position: number, idx: number): SlideItem => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles,  };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles,  };
      break;
  }

  return item;
};

interface CarouselSlideItemProps {
  pos: number;
  idx: number;
  activeIdx: number;
}
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

const keys = Array.from(Array(_items.length).keys());

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
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
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
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
