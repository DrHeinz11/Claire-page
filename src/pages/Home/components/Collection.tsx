import { useEffect, useState } from 'react'
import { dataCarrousel } from '../../../constant/dataCarrousel'

type InitialState = { init: number, last: number }
type Props = {}

const Collection = (props: Props) => {
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
  return (
    <section className="collection__container main__container">
      <div className="collection__logo">
        <img src="accets/logo-claire-simple.svg" alt="" className="logo__claire" />
        <div className="collection__copy">
          <h2 className="collection__title heading__section">new collection in our brands</h2>
          <a href="" className="collection__more cta">see all</a>
        </div>
      </div>

      <div className="collection__img--container img__carrousel" >
        {dataSlice.map(element => <img className="img__item--carrousel" src={element.imgUrl} alt={element.imgAlt} key={element.imgAlt} />)}
      </div >
      <button className="img__carrousel--cta" onClick={() => handleSlices('prev')}>{`<`}</button>
      <button className="img__carrousel--cta" onClick={() => handleSlices('next')}>{`>`}</button>
    </section >
  )
}

export default Collection