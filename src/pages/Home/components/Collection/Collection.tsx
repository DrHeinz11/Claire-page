import { FC, useState } from 'react'
import ClaireSimple from '../../../../components/icons/ClaireSimple'
import { dataCarrousel } from '../../../../constant/dataCarrousel'
import { handleSlices } from '../../../../utils/handleSlices'

const Collection: FC = () => {
  const [slice, setSlice] = useState<{ init: number, last: number }>({ init: 0, last: 4 })

  const dataSlice = dataCarrousel.slice(slice.init, slice.last)

  return (
    <section className="collection__container ">
      <ClaireSimple />
      <div className="collection__copy">
        <h2 className="collection__title">new collection in our brands</h2>
        <button className="collection__more">see all</button>
      </div>

      <div className="collection__slider--layout">

        <div className="collection__slider--container">
          {dataCarrousel.map((element, index) => <img key={element.imgAlt} className="collection__slider--img" alt={element.imgAlt} src={element.imgUrl} />)}
        </div>

      </div>

      <div className="collection__images--wrapper">
        <div className="collection__carrousel--container" >
          {dataSlice.map((element) => <img className={`img__item--carrousel ${element.imgAlt === 'Fromis9-collection-22' || element.imgAlt === 'Fromis9-collection-23' ? 'img__item--position' : ''} `} src={element.imgUrl} alt={element.imgAlt} key={element.imgAlt} />)}
        </div >
        <div className="collection__button--slider">
          <button className="img__carrousel--cta" onClick={() => handleSlices({ action: 'prev', setter: setSlice, data: dataCarrousel })}>{`<`}</button>
          <button className="img__carrousel--cta" onClick={() => handleSlices({ action: 'next', setter: setSlice, data: dataCarrousel })}>{`>`}</button>
        </div>
      </div>
    </section >
  )
}

export default Collection