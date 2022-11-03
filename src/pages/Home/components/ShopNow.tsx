import { FC } from 'react'
import { ClaireLogo } from '../../../components'

type Props = {}

const ShopNow: FC<Props> = (props) => {
  return (
    <section className="shopnow__container">
      <ClaireLogo />
      <div className="shopnow__copy--container">
        <h2 className="shopnow__copy--title">shop now, pay later</h2>
        <p className="shopnow__copy--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint pariatur est
          illo,
          quasi molestias nemo? Ex, molestias aliquid.</p>
      </div>
      <button className="shopnow__button cta">find out more</button>
    </section>
  )
}

export default ShopNow