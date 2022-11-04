import { useRef, useState, useEffect } from 'react'
import ClaireSimple from '../../../../components/icons/ClaireSimple'
import { dataCarrousel } from '../../../../constant/dataCarrousel'

type InitialState = { init: number, last: number }
type Props = {}

const Collection = (props: Props) => {
  const carrouselReference = useRef()
  const [slice, setSlice] = useState<InitialState>({ init: 0, last: 4 })
  const dataSlice = dataCarrousel.slice(slice.init, slice.last)
  const handleSlices = (action: string) => {
    action === 'prev' && setSlice((prev) => {
      if (prev.init <= 0 || prev.last <= 4) {
        console.log({ init: dataCarrousel.length - 4, last: dataCarrousel.length })
        return { init: dataCarrousel.length - 4, last: dataCarrousel.length }
      }
      console.log({ init: prev.init - 4, last: prev.last - 4 })
      return { init: prev.init - 4, last: prev.last - 4 }
    })

    action === 'next' && setSlice((prev) => {
      if (prev.last >= dataCarrousel.length) {
        return { init: 0, last: 4 }
      }
      return { init: prev.init + 4, last: prev.last + 4 }
    })
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleSlices('next')
  //   }, 6000)
  //   return () => clearInterval(interval)
  // }, [])
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
          <button className="img__carrousel--cta" onClick={() => handleSlices('prev')}>{`<`}</button>
          <button className="img__carrousel--cta" onClick={() => handleSlices('next')}>{`>`}</button>
        </div>
      </div>
    </section >
  )
}

export default Collection